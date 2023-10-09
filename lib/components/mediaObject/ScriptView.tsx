import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { ViewProps } from "./FileViewer";

class MyConsole {
  constructor() {
    this.log = this.log.bind(this);
    this.addExecution = this.addExecution.bind(this);
  }
  public logMessage = (message: string) => {};
  private executions = 0;
  log(...args: any[]) {
    const message = args
      .map((arg) => {
        if (typeof arg === "object") {
          return JSON.stringify(arg);
        } else {
          return arg;
        }
      })
      .join(" ");
    this.logMessage(`[${this.executions}] ` + message);
  }
  addExecution() {
    this.executions += 1;
  }
}

export const ScriptView = ({ src }: ViewProps) => {
  const iframRef = useRef<HTMLIFrameElement>(null);
  const [script, setScript] = useState<string>("");
  const [logs, setLogs] = useState<string[]>([]);
  const iwindow = useRef<Window & typeof globalThis>();
  const myConsole = useRef(new MyConsole());

  useEffect(() => {
    const configScript = async () => {
      const response = await axios.get(src);
      setScript(response.data);
      if (!iframRef.current) return;
      iwindow.current = iframRef.current.contentWindow as Window & typeof globalThis;
      myConsole.current.logMessage = (msg: string) => setLogs((logs) => [msg, ...logs]);
      iwindow["console"] = Object.assign(iwindow.current.console, myConsole.current);
    };
    configScript();
  }, [src]);

  const runScript = () => {
    (iwindow.current?.console as unknown as MyConsole).addExecution();
    iwindow.current?.eval(script);
  };

  return (
    <div className="relative w-96 flex flex-col items-center justify-around bg-gray-100 rounded-t-xl aspect-square">
      <div className="w-full h-full p-2 relative flex flex-col-reverse items-end overflow-y-scroll">
        {logs.map((log, i) => (
          <span key={i} className="w-full block px-2">
            {log}
          </span>
        ))}
      </div>
      <button
        onClick={runScript}
        className="absolute bottom-2 right-2 px-2 py-1 text-white bg-wiski-brown-500"
      >
        Run
      </button>
      <iframe
        ref={iframRef}
        title="src"
        sandbox="allow-scripts allow-same-origin"
        className="hidden"
      ></iframe>
    </div>
  );
};
