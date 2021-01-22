import React, {useState, useEffect} from "react";

export const Hello = () => {
  const [launchedSeconds, setLaunchedSeconds] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setLaunchedSeconds(n => n + 1)
    }, 1000)
  }, [])

  return <div>Hello(change me), {launchedSeconds}</div>
}
