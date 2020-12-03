import React, { useState, useEffect } from "react";
import axios from "axios";

const QuestionForm = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const getName = (e) => {
    setName(e.target.value);
  };
  const getCategory = (e) => {
    setCategory(e.target.value);
  };
  const getDescription = (e) => {
    setDescription(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const questionForm = {
      name: name,
      category: category,
      description: description,
    };
    axios.post("http://localhost:5000/user/questions", questionForm);
    window.location = "/questions";
  };
  return (
    <div>
      <h3>Have a question?</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={getName} />
        </div>
        <div className="form-group">
          <label>Category:</label>
          <input type="text" value={category} onChange={getCategory} />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={getDescription} />
        </div>
        <div className="mx-auto text-center">
          <input type="submit" value="Post" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};
export default QuestionForm;
