import React, { useState } from "react";
import { Button } from "@mui/material";

import {
  useAppSelector,
  useAppDispatch,
} from "../../store/hooks";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  incrementIfOdd,
  selectCount,
} from "../../store/storeSlices/counterSlice/counterSlice";
import styles from "./Counter.module.css";

export function Counter() {
  const count = useAppSelector(selectCount);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] =
    useState("2");

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
        <Button
          variant='contained'
          color='secondary'
          // className={styles.Button}
          aria-label='Decrement value'
          onClick={() => dispatch(decrement())}
        >
          -
        </Button>
        <span className={styles.value}>{count}</span>
        <Button
          variant='contained'
          color='secondary'
          // className={styles.Button}
          aria-label='Increment value'
          onClick={() => dispatch(increment())}
        >
          +
        </Button>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label='Set increment amount'
          value={incrementAmount}
          onChange={(e) =>
            setIncrementAmount(e.target.value)
          }
        />
        <Button
          // color='success'
          variant='contained'
          onClick={() =>
            dispatch(incrementByAmount(incrementValue))
          }
        >
          Add Amount
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            dispatch(incrementAsync(incrementValue))
          }
        >
          Add Async
        </Button>
        <Button
          variant='contained'
          onClick={() =>
            dispatch(incrementIfOdd(incrementValue))
          }
        >
          Add If Odd
        </Button>
      </div>
    </div>
  );
}
