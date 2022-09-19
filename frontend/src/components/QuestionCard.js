import React from "react";
import AnsCard from "../components/AnsCard";
const QuestionCard = (props) => {
  
  return (
    <div className="pt-16 flex flex-col items-center">
      <div className="text-7xl font-raleway text-bright_pink font-bold tracking-wide mt-16">
        question.
      </div>
      <div className="text-3xl font-raleway text-amethyst italic font-semibold flex justify-center mb-16 mt-12">
        {props.question.title}
      </div>
      <AnsCard answers={props.question.answers} quesid={props.question.id}/>
      
    </div>
  );
};

export default QuestionCard;
