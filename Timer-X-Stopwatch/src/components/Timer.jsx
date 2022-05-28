import {
  Button,
  Heading,
  Input,
  Text,
  Toast,
  useToast,
} from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";

const Timer = () => {
  const Ref = useRef(null);
  const [timer, setTimer] = useState("00:00:00");

  const getTimeRemaining = (e) => {
    const total = Date.parse(e) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / 1000 / 60 / 60) % 24);

    return { total, seconds, minutes, hours };
  };

  const startTimer = (e) => {
    let { total, hours, minutes, seconds } = getTimeRemaining(e);
    // console.log(total);
    if (total >= 0) {
      setTimer(
        (hours > 9 ? hours : "0" + hours) +
          ":" +
          (minutes > 9 ? minutes : "0" + minutes) +
          ":" +
          (seconds > 9 ? seconds : "0" + seconds)
      );
    }
  };

  const clearTimer = (e) => {
    setTimer("00:00:00");
    if (Ref.current) {
      clearInterval(Ref.current);
    }

    const id = setInterval(() => {
      startTimer(e);
    }, 1000);
    Ref.current = id;
  };

  const getDeadTime = () => {
    let deadline = new Date();
    deadline.setSeconds(deadline.getSeconds() + Number(val));
    // console.log(deadline);
    return deadline;
  };

  useEffect(() => {
    clearTimer(getDeadTime);
  }, []);

  const onClickReset = () => {
    clearTimer(getDeadTime());
    handleBtn(!btn);
  };
  const toast = useToast();

  const [btn, handleBtn] = useState(false);

  const [val, setValue] = React.useState("");
  const handleChange = (event) => setValue(event.target.value);
  console.log(val);

  return (
    <div>
      <Heading size="2xl">Timer</Heading>
      <br />
      <Heading as="h5" size="xl">Your Entered Time In Seconds : {val} </Heading>
      <Input
        value={val}
        onChange={handleChange}
        color="teal"
        placeholder="Enter time in seconds"
        _placeholder={{ color: "teal" }}
        textAlign="center"
        fontSize="xl"
      />
      <br />
      <br />
      <Heading>{timer}</Heading>
      <br />
      <Button colorScheme="red" onClick={onClickReset}>
        {btn ? "Reset" : "Start"}
      </Button>
      <br />
      <br />
      <Button
        onClick={() =>
          toast({
            title: "Timer Developed By",
            description: "Prajwal Jaiswal WEB-17 Masai School",
            status: "success",
            duration: 9000,
            isClosable: true,
          })
        }
      >
        Show Credits
      </Button>
    </div>
  );
};

export default Timer;
