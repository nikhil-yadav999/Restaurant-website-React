import { useEffect, useState } from "react";

import classes from "./AvailableMeals.module.css";
import Card from "../../Components/UI/Card";

import MealItem from "./MealItem/MealItem";

const AvailableMeals = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(null);

  // useEffect for fetching menu item from Firebase:
  useEffect(() => {
    setIsLoading(true);

    // async function for fetching data:
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://react-app-17495-default-rtdb.firebaseio.com/meals.json"
        );

        const data = await response.json();

        const loadedData = [];

        for (let key in data) {
          loadedData.push({
            id: key,
            name: data[key].name,
            price: data[key].price,
            description: data[key].description,
          });
        }

        setItems(loadedData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setHttpError((error.message = "Http failed...Something went wrong..."));
      }
    };

    fetchData();
  }, []);

  // if the page is loading from backend:
  if (isLoading) {
    return (
      <section className={classes.pageIsLoading}>
        <p>Loading....</p>
      </section>
    );
  }

  // if the page finish loading and http fails:
  if (httpError) {
    return (
      <section className={classes.hasError}>
        <p>{httpError}</p>
      </section>
    );
  }

  const mealsList = items.map((item) => {
    return (
      <MealItem
        id={item.id}
        key={item.id}
        name={item.name}
        description={item.description}
        price={item.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
