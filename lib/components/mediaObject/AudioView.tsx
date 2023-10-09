import { useEffect, useMemo, useState } from "react";
import { ViewProps } from "./FileViewer";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { MdPlayCircle, MdPauseCircle } from "react-icons/md";
import { Slider } from "./Slider";
import { format, toDate, secondsToMilliseconds } from "date-fns";

export const AudioView = ({ src }: ViewProps) => {
  const audio = useMemo(() => new Audio(src), [src]);
  const [played, setPlayed] = useState(false);
  const [duration, setDuration] = useState(audio.duration === Infinity ? 0 : audio.duration);
  const [time, setTime] = useState(audio.currentTime === Infinity ? 0 : audio.currentTime);

  useEffect(() => {
    function onDurationChange(e: Event) {
      setDuration(audio.duration === Infinity ? 0 : audio.duration);
    }
    function onTimeUpdate(e: Event) {
      setTime(audio.currentTime === Infinity ? 0 : audio.currentTime);
    }
    audio.addEventListener("durationchange", onDurationChange);
    audio.addEventListener("timeupdate", onTimeUpdate);
    return () => {
      audio.pause();
      audio.removeEventListener("durationchange", onDurationChange);
      audio.removeEventListener("timeupdate", onTimeUpdate);
    };
  }, [audio]);

  const playAudio = () => {
    if (audio.paused) {
      audio.play();
      setPlayed(true);
    } else {
      audio.pause();
      setPlayed(false);
    }
  };
  return (
    <div className="w-full h-60 flex flex-col items-center justify-around bg-gray-800 aspect-square">
      <div className="w-full h-3/4 p-14">
        <BsFillMusicPlayerFill className=" fill-white w-full h-full" />
      </div>
      <div className="w-full p-2">
        <Slider
          value={time}
          max={duration}
          onChange={(value) => {
            if (!isFinite(value)) return;
            audio.currentTime = value;
          }}></Slider>
      </div>
      <div className="py-2 pb-6 flex items-center">
        <span className="text-white w-10 mx-3">
          {format(toDate(secondsToMilliseconds(time || 0)), "mm:ss")}
        </span>
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            playAudio();
          }}
          className="w-10 h-10 rounded-full hover:scale-105 transition-all duration-150 ">
          {!played ? (
            <MdPlayCircle className="inline fill-white hover:fill-white text-4xl" />
          ) : (
            <MdPauseCircle className="inline fill-white hover:fill-white text-4xl" />
          )}
        </button>
        <span className="text-white w-10 mx-3">
          {format(toDate(secondsToMilliseconds(duration || 0)), "mm:ss")}
        </span>
      </div>
    </div>
  );
};
