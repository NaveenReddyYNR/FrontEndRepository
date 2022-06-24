import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";
import Button from "../UI/Button/Button";

const Home = () => {
  return (
    <Card className={classes.login}>
      <form>
        <div className={classes.control}>
          <label>FullName</label>
          <input
            type="text"
            id="fullName"
            autoComplete="off"
            // value="value"
            // onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.control}>
          <label>lastName</label>
          <input
            type="text"
            id="LastName"
            autoComplete="off"
            // value="value"
            // onChange={emailChangeHandler}
            // onBlur={validateEmailHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Continue
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Home;
