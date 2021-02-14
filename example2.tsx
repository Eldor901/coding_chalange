import {FC, useEffect, useState} from "react";

const Component: FC = () => {
    const [secondsElapsed, setSecondsElapsed] = useState(0);

    useEffect(() => {
       const interval =  setInterval(() => {
            setSecondsElapsed(secondsElapsed + 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [secondsElapsed, setSecondsElapsed]);

    return (
        <span>
      Seconds elapsed: {secondsElapsed}
    </span>
    );
};

/*

A function  that is bound to an interval executes until it is stopped.Not existing of clearing interval leads to
unexpected behaviour because when component unmounts interval is not cleared which leads changing state unexpectedly
after every time when component unmounts interval should be cleared.
*/