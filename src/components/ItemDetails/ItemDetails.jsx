import React from "react";
import { useLoaderData, useNavigate, useNavigation } from "react-router-dom";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const ItemDetails = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner></LoaderSpinner>;
  }
  const navigate = useNavigate();
  const itemData = useLoaderData();
  //   console.log(itemData);
  const { idMeal, strMeal, strMealThumb, strInstructions, strCategory } =
    itemData.meals[0];

  return (
    <div className="my-container">
      <div className="flex justify-around gap-10 p-10">
        <div className="w-1/2">
          <img className="rounded-t-md" src={strMealThumb} alt="" />
        </div>
        <div className="w-1/2">
          <h2 className="text-2xl font-bold">Name : {strMeal}</h2>
          <p className="my-4">Category : {strCategory}</p>
          <p>{strInstructions}</p>
        </div>
      </div>
      <div className="text-center font-bold text-2xl ">
        <button
          className="mb-5 text-blue-800"
          type="button"
          onClick={() => {
            navigate(-1);
          }}
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default ItemDetails;
