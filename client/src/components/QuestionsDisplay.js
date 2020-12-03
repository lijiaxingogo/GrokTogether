import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionsDisplay = () => {
  const [questions, setQuestions] = useState([
    {
      name: "jiajia",
      category: "animal",
      description: "NAH",
    },
  ]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:5000/user/questions");
      console.log(result);
      setQuestions(result.data);
    };

    fetchData();
  }, []);
  // useEffect(() => {
  //   fetch("http://localhost:5000/questions")
  //     .then((res) => res.json())
  //     .then((json) => {
  //       console.log(json);
  //       setQuestions(json);
  //     });
  // }, []);
  const listComponents = [];
  const Collections = ({ name, category, description }) => {
    return (
      <div className="card">
        <ul className="list-group">
          <li className="list-group-item">Name: {name}</li>
          <li className="list-group-item">Category: {category}</li>
          <li className="list-group-item">Description: {description}</li>
          <textarea></textarea>
          <button className="btn btn-success">Offer Help</button>
        </ul>
        <br />
        <br />
      </div>
    );
  };

  for (let i = 0; i < questions.length; i++) {
    listComponents.push(
      <Collections
        key={`q${i}`}
        name={questions[i].name}
        category={questions[i].category}
        description={questions[i].description}
      />
    );
  }

  return (
    <div>
      <h3>Questions Display</h3>
      {listComponents}
    </div>
  );
};
export default QuestionsDisplay;
