import { useEffect, useMemo, useState } from "react";
import { LuFileAudio } from "react-icons/lu";
import { format, toDate, secondsToMilliseconds } from "date-fns";
import { useMediaContext } from "./mediaContext";
import { twMerge } from "tailwind-merge";
import { ROUNDED } from "@theme/utils";
import { Box, Button, Progress } from "..";
import { VscDebugPause, VscPlay } from "react-icons/vsc";

export const AudioView = () => {
  const { src, size, ...props } = useMediaContext();
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
    <div
      style={{ ...size }}
      className={twMerge(
        "w-full min-h-[10rem] flex flex-col items-center justify-around bg-background-secondary aspect-square overflow-hidden",
        props.round ? ROUNDED[props.round] : ROUNDED.none
      )}>
      <Box shrink>
        <LuFileAudio size={30} className="text-background-contrast" />
      </Box>
      <Box direction="column" full paddingX="md" shrink>
        <Progress size="md" percentage={time}></Progress>

        <Box flat shrink>
          <span className="text-background-contrast w-10 mx-3">
            {format(toDate(secondsToMilliseconds(time || 0)), "mm:ss")}
          </span>
          <Button
            size="2xs"
            variant="text"
            stopPropagation
            preventDefault
            color="primary"
            onClick={playAudio}
            round="full">
            {!played ? <VscPlay size={20} /> : <VscDebugPause size={20} />}
          </Button>
          <span className="text-background-contrast w-10 mx-3">
            {format(toDate(secondsToMilliseconds(duration || 0)), "mm:ss")}
          </span>
        </Box>
      </Box>
    </div>
  );
};
