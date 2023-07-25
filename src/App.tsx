import './index.scss';
import { useEffect, useState } from 'react';

export function App() {
  const [date, setDate] = useState<Date>(new Date());
  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 100);

    return () => clearInterval(intervalId);
  }, []);

  const getSecondDeg = (): number => {
    const seconds = date.getSeconds();
    return (seconds / 60) * 360 + (date.getMilliseconds() / 1000) * 6;
  };

  const getMinuteDeg = (): number => {
    const minutes = date.getMinutes();
    return (minutes / 60) * 360 + (date.getSeconds() / 60) * 6;
  };

  const getHourDeg = (): number => {
    const hours = date.getHours();
    return (hours / 12) * 360 + (date.getMinutes() / 60) * 30;
  };

  return (
    <>
      <h1>Analog Clock</h1>
      <h1>{`${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`}</h1>
      <div className="circle">
        <div
          className="secondHand"
          style={{
            transform: `rotate(calc( 270deg + ${getSecondDeg()}deg))`,
          }}
        ></div>
        <div
          className="minuteHand"
          style={{
            transform: `rotate(calc( -90deg + ${getMinuteDeg()}deg))`,
          }}
        ></div>
        <div
          className="hourHand"
          style={{
            transform: `rotate(calc( -90deg + ${getHourDeg()}deg))`,
          }}
        ></div>
      </div>
    </>
  );
}
