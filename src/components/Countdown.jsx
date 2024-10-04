import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const initialMinutes = 10;
  const initialSeconds = 0;

  const [timeLeft, setTimeLeft] = useState({
    minutes: initialMinutes,
    seconds: initialSeconds,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const { minutes, seconds } = timeLeft;

      if (seconds > 0) {
        setTimeLeft({ minutes, seconds: seconds - 1 });
      } else if (minutes > 0) {
        setTimeLeft({ minutes: minutes - 1, seconds: 59 });
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  return (
    <div>
      {timeLeft.minutes === 0 && timeLeft.seconds === 0 ? (
        <span>Time's up!</span>
      ) : (
        <span>
          {String(timeLeft.minutes).padStart(2, '0')}:
          {String(timeLeft.seconds).padStart(2, '0')}
        </span>
      )}
    </div>
  );
};

export default Countdown;
