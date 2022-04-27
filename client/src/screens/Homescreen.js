import React from "react";

import Pizza from "../components/Pizza";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPizzas } from "../actions/pizzaActions";
import getAllPizzasReducer from "../reducers/pizzaReducers";

export default function Homescreen() {
  const dispatch = useDispatch();
  const pizzasstate = useSelector((state) => state.getAllPizzasReducer);
  const { pizzas, err, loading } = pizzasstate;
  console.log(pizzas)
  useEffect(() => {
    dispatch(getAllPizzas());

  }, []);
  //const arr = [];

  return (
    <div>
      <div className="row">
        {loading ? (
          <h1>Loading</h1>
        ) : err ? (
          <h1>Something went wrong</h1>
        ) : (
          pizzas.map((pizza) => {
            return (
              <>
                <div className="col-md-4">
                  <div>
                    <Pizza pizza={pizza} />
                  </div>
                </div>
              </>
            );
          })
        )}
      </div>
    </div>
  );
}