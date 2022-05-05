import "./Expenses.css";
import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import React, { useState } from "react";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
  const [filteredYear, setfilteredYear] = useState("2020");
  const filterChangeHandler = (selectedYear) => {
    setfilteredYear(selectedYear);
  };
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          selected={filteredYear}
          onYearChange={filterChangeHandler}
        />
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
        ;
      </Card>
    </div>
  );
};
export default Expenses;
