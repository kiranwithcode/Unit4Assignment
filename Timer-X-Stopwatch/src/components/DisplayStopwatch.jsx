import { Button, Heading, Toast, useToast } from "@chakra-ui/react";
import React from "react";

const DisplayStopwatch = (props) => {
  console.log(props);
  const h = () => {
    if (props.time.h === 0) {
      return "";
    } else {
      return (
        <span>{props.time.h >= 10 ? props.time.h : "0" + props.time.h}</span>
      );
    }
  };
  
  return (
    <div>
      <Heading>
        {h()}&nbsp;&nbsp;
        <span>
          {props.time.m >= 10 ? props.time.m : "0" + props.time.m} &nbsp;:
        </span>
        &nbsp;&nbsp;
        <span>
          {props.time.s >= 10 ? props.time.s : "0" + props.time.s} &nbsp;:{" "}
        </span>
        &nbsp;&nbsp;
        <span>{props.time.ms >= 10 ? props.time.ms : "0" + props.time.ms}</span>
      </Heading>
      
    </div>
  );
};

export default DisplayStopwatch;
