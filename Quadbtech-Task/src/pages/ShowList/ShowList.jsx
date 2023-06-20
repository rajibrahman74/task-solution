import React from "react";
import Cards from "./Cards";


const ShowList = () => {
  return (
    <section className="my-20 max-w-7xl mx-auto ">
      <h2 className="text-center font-semibold text-4xl mb-16">
        Show all list
      </h2>
    <Cards/>
    </section>
  );
};

export default ShowList;