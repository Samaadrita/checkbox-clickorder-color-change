import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const [clickOrder, setClickOrder] = useState([]);
  const [setIntervalTimerValue, setIntervalTimer] = useState([]);

  const clearGreen = () => {
    const de = setInterval(() => {
      if (clickOrder?.length > 1) {
        clickOrder?.splice(0, 1);
        setClickOrder([...clickOrder]);
      } else {
        setClickOrder();
      }
    }, 1000);
    setIntervalTimer(de);
  };

  useEffect(() => {
    if (clickOrder?.length === 7) {
      clearGreen();
    }
    if (!clickOrder) {
      clearInterval(setIntervalTimerValue);
      setIntervalTimer();
      setClickOrder([]);
    }
  }, [clickOrder]);

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15vw',
        }}
      >
        {[...Array(3)]?.map((it, index) => (
          <div
            key={it}
            style={{
              height: '12vw',
              width: '12vw',
              color: 'black',
              backgroundColor: `${
                clickOrder?.findIndex(
                  (item) => item?.row === 1 && item?.box === index + 1
                ) > -1
                  ? 'green'
                  : 'yellow'
              }`,
              cursor: 'pointer',
            }}
            onClick={() => {
              const itemAlreadyExists = clickOrder?.find(
                (obj) => obj.box === index + 1 && obj.row === 1
              );
              if (!itemAlreadyExists) {
                let obj = {};
                obj['row'] = 1;
                obj['box'] = index + 1;
                setClickOrder((prev) => {
                  return prev ? [...prev, obj] : [obj];
                });
              }
            }}
          ></div>
        ))}
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15vw',
        }}
      >
        {[...Array(1)]?.map((it, index) => (
          <div
            key={it}
            style={{
              height: '12vw',
              width: '12vw',
              color: 'black',
              backgroundColor: `${
                clickOrder?.findIndex(
                  (item) => item?.row === 2 && item?.box === index + 1
                ) > -1
                  ? 'green'
                  : 'yellow'
              }`,
              cursor: 'pointer',
            }}
            onClick={() => {
              const itemAlreadyExists = clickOrder?.find(
                (obj) => obj.box === index + 1 && obj.row === 2
              );
              if (!itemAlreadyExists) {
                let obj = {};
                obj['row'] = 2;
                obj['box'] = index + 1;
                setClickOrder((prev) => {
                  return prev ? [...prev, obj] : [obj];
                });
              }
            }}
          ></div>
        ))}
      </div>
      <br />
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '15vw',
        }}
      >
        {[...Array(3)]?.map((it, index) => (
          <div
            key={it}
            style={{
              height: '12vw',
              width: '12vw',
              color: 'black',
              backgroundColor: `${
                clickOrder?.findIndex(
                  (item) => item?.row === 3 && item?.box === index + 1
                ) > -1
                  ? 'green'
                  : 'yellow'
              }`,
              cursor: 'pointer',
            }}
            onClick={() => {
              const itemAlreadyExists = clickOrder?.find(
                (obj) => obj.box === index + 1 && obj.row === 3
              );
              if (!itemAlreadyExists) {
                let obj = {};
                obj['row'] = 3;
                obj['box'] = index + 1;
                setClickOrder((prev) => {
                  return prev ? [...prev, obj] : [obj];
                });
              }
            }}
          ></div>
        ))}
      </div>
    </div>
  );
}
