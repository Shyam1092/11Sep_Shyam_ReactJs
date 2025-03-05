import React from "react";

const FruitList = () => {
  const fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

  return (
    <div className="p-4 max-w-sm mx-auto bg-white shadow-lg rounded-lg">
      <h2 className="text-xl font-bold mb-2">Fruit List</h2>
      <ul className="list-disc pl-5">
        {fruits.map((fruit, index) => (
          <li key={index} className="text-gray-700">
            {fruit}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FruitList;
