import React, { useState, useEffect } from "react";
import CatRows from "../components/CategoryRows";
export const QuizPage = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const catUrl = "http://localhost:8000/api/categories";

    const fetchData = async () => {
      try {
        const response = await fetch(catUrl);
        const json = await response.json();
        setData(json);
        setLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    // console.log(data); //why is this empty?
  }, []);

  return loading ? (
    <div className="text-7xl pt-16 ">
      <div>loading...</div>
    </div>
  ) : (
    <div className="pt-16 ">
      <div className="text-7xl font-raleway text-bright_pink font-bold tracking-wide flex justify-center my-16 ">
        quizzes.
      </div>
      {data.map((cat) => (
        <CatRows catData={cat} key={cat.name}/>
      ))}
      {/* <CatRows catData={data[0].name.toLowerCase()} /> */}
    </div>
  );
};
