import React from "react";
import classes from "./Counter.module.css";
import { useSelector, useDispatch, connect } from "react-redux";
import { counterActions } from "../store/counter";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const show = useSelector((state) => state.counter.showCounter);

  const incHandler = () => {
    dispatch(counterActions.increment());
  };
  const incBy5Handler = () => {
    dispatch(counterActions.increase(5));
  };
  const decHandler = () => {
    dispatch(counterActions.decremant());
  };
  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {show && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={incHandler}>+</button>
        <button onClick={incBy5Handler}>+5</button>
        <button onClick={decHandler}>-</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

// class Counter extends React.Component {
//   incHandler() {
//     this.props.inc();
//   }
//   decHandler() {
//     this.props.dec();
//   }
//   toggleCounterHandler() {}

//   render() {
//     return (
//       <main className={classes.counter}>
//         <h1>Redux Counter</h1>
//         <div className={classes.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incHandler.bind(this)}>+</button>
//           <button onClick={this.decHandler.bind(this)}>-</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };
// const mapDispatchToProps = (dispatch) => {
//   return {
//     inc: () => dispatch({ type: "INC" }),
//     dec: () => dispatch({ type: "DEC" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
