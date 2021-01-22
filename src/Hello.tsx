import React, {useState, useEffect} from "react";

export const Hello = () => {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setSeconds(n => n + 1)
    }, 1000)
  }, [])

  return <div>Hello(change me), {seconds}</div>
}
