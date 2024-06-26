import React, { useState, useEffect } from 'react';
import { differenceInMilliseconds, intervalToDuration } from 'date-fns';
import { Button } from "styles/components/ui/button"

export const Countdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('targetDate') || new Date().toISOString();
    } else {
      return new Date().toISOString();
    }
  });

  const resetTimer = () => {
    const newTargetDate = new Date();
    newTargetDate.setDate(newTargetDate.getDate() + 2); 
    setTargetDate(newTargetDate.toISOString());
    if (typeof window !== 'undefined') {
      localStorage.setItem('targetDate', newTargetDate.toISOString());
    }
  };

  useEffect(() => {
    resetTimer();
  }, []);

  const calculateTimeLeft = () => {
    const difference = differenceInMilliseconds(new Date(targetDate), new Date());
    const { days, hours, minutes, seconds } = intervalToDuration({ start: 0, end: difference });

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      
      {Object.keys(timeLeft).length === 0 ? (
        <span>Time out!</span>
      ) : (
        <div>
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{days}天{' '}</span>
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{hours}时{' '}</span>
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{minutes}分{' '}</span>
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{seconds}秒</span><br />
          <Button onClick={resetTimer}>Reset </Button>
        </div>
      )}
    </div>
  );
};

export const Scountdown = () => {
  const [targetDate, setTargetDate] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('targetDate') || new Date().toISOString();
    } else {
      return new Date().toISOString();
    }
  });

  const resetTimer = () => {
    const newTargetDate = new Date();
    newTargetDate.setDate(newTargetDate.getDate() + 2); 
    setTargetDate(newTargetDate.toISOString());
    if (typeof window !== 'undefined') {
      localStorage.setItem('targetDate', newTargetDate.toISOString());
    }
  };

  useEffect(() => {
    resetTimer();
  }, []);

  const calculateTimeLeft = () => {
    const difference = differenceInMilliseconds(new Date(targetDate), new Date());
    const { days, hours, minutes, seconds } = intervalToDuration({ start: 0, end: difference });

    return {
      days,
      hours,
      minutes,
      seconds
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const { days, hours, minutes, seconds } = timeLeft;

  return (
    <div>
      
      {Object.keys(timeLeft).length === 0 ? (
        <span>Time out!</span>
      ) : (
        <div>
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{hours < 10 ? `0${hours}` : hours}</span>:
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{minutes < 10 ? `0${minutes}` : minutes}</span>:
          <span style={{ fontSize: '27px', fontWeight: 'bold' }}>{seconds < 10 ? `0${seconds}` : seconds}</span><br />
          <Button onClick={resetTimer}>Reset </Button>
        </div>
      )}
    </div>
  );
};

export default { Countdown, Scountdown };
