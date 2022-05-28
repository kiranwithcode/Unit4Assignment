import React, { useState } from "react";
import DisplayStopwatch from "./DisplayStopwatch";
import ButtonStopwatch from "./ButtonStopwatch";
import "../App.css";
import { Heading } from "@chakra-ui/react";

const Stopwatch = () => {
  const [time, setTime] = useState({ ms: 0, s: 0, m: 0, h: 0 });
  const [interv, setInterv] = useState();
  const [status, setStatus] = useState(0);

  const start = () => {
    run();
    setStatus(1);
    setInterv(setInterval(run, 10));
  };

  var updatedMs = time.ms, updatedS = time.s, updatedM = time.m, updatedH = time.h;

  const run = () => {
    if(updatedM === 60) {
      updatedH++;
      updatedM = 0;
    }

    if(updatedS === 60) {
      updatedM++;
      updatedS = 0;
    }

    if(updatedMs === 100) {
      updatedS++;
      updatedMs = 0;
    }
    updatedMs++;
    return setTime({ms: updatedMs, s: updatedS, m: updatedM, h: updatedH });
  }

  const stop = () => {
    clearInterval(interv);
    setStatus(2);
  }

  const reset = () => {
    clearInterval(interv);
    setStatus(0);
    setTime({ms:0, s:0, m:0, h:0});
  }

  const resume = () => start();

  return (
    <div>
      <Heading>Stopwatch</Heading>
      <br />
      <DisplayStopwatch time={time} />
      <br />
      <ButtonStopwatch status={status} resume={resume} reset={reset} stop={stop} start={start} />
    </div>
  );
};

export default Stopwatch;
