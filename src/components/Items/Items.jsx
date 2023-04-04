import React from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import Item from "../Item/Item";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";

const Items = () => {
  const navigation = useNavigation();
  if (navigation.state === "loading") {
    return <LoaderSpinner></LoaderSpinner>;
  }
  const items = useLoaderData();
  return (
    <div className="my-container ">
      <div className="text-center">
        <input
          type="text"
          name=""
          id=""
          className="w-full md:w-96 p-2 mt-3 rounded-md"
          placeholder="Search..."
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 my-5 mx-2">
        {items.meals.map((item) => (
          <Item key={item.idMeal} item={item}></Item>
        ))}
      </div>
    </div>
  );
};

export default Items;
<h2>Items</h2>;
