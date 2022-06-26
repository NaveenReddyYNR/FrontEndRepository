import React, { useEffect, useState } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState();

  const fetchMeals = async () => {
    try {
      const response = await fetch(
        "https://custumhooks2-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong!");
      }
      const data = await response.json();
      let loadedMeals = [];
      for (let key in data) {
        loadedMeals.push({
          id: key,
          name: data[key].name,
          price: data[key].price,
          description: data[key].description,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchMeals();
  }, []);
  if (error) {
    return <section className={classes.MealsError}>{error}</section>;
  }
  if (isLoading) {
    return <section className={classes.MealsLoading}>Loading...</section>;
  }

  const mealsList = meals.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
