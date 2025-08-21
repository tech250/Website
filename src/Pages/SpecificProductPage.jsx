import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const SpecificProductPage = () => {
  const { name } = useParams();
  useEffect(() => {
    console.log(name);
  }, [name]);
  return <div>{name}</div>;
};

export default SpecificProductPage;
