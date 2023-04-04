import React, { useState } from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  const [fold, setFold] = useState(true);
  // console.log(item);
  const { idMeal, strMeal, strMealThumb, strInstructions, strCategory } = item;
  return (
    <div className="shadow-xl w-11/12 mx-auto md:w-full bg-white  rounded-lg">
      <div>
        <img className="rounded-t-md" src={strMealThumb} alt="" />
      </div>
      <div className="p-5">
        <h2 className="text-2xl font-bold">Name : {strMeal}</h2>
        <>
          {fold ? (
            <>
              <p className="my-7">
                {strInstructions.slice(0, 100)}...
                <button
                  className="font-bold text-blue-500"
                  onClick={() => setFold(!fold)}
                >
                  Read More..
                </button>
              </p>
            </>
          ) : (
            <>
              <p className="my-7">
                {strInstructions}.
                <button
                  className="font-bold text-blue-500"
                  onClick={() => setFold(!fold)}
                >
                  Read Less.
                </button>
              </p>
            </>
          )}
        </>
        <Link to={`/item/${idMeal}`}>
          <button className=" bg-blue-600 p-2 text-white rounded-md">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Item;
