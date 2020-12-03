import React from "react";
import QuestionForm from "./QuestionForm";
import QuestionsDisplay from "./QuestionsDisplay";
const Questions = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexFlow: "column",
      }}
    >
      <QuestionForm />
      <br />
      <QuestionsDisplay />
    </div>
  );
};
export default Questions;
