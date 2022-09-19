import React from "react";
import { NavLink } from "react-router-dom";

const QuizCard = (props) => {
  const styles = {
    cardStyle: `px-3 py-5 rounded-2xl text-white flex justify-between w-56 
    ${
      props.noqs !== 0
        ? "bg-melon hover:bg-bright_pink duration-300"
        : "bg-txtgrey"
    } `,
  };
  return (
    <div className="font-inter px-5">
      {props.noqs !== 0 ? (
        <NavLink to={`/${props.quizid}`}>
          <div className={styles.cardStyle}>
            <div className="font-semibold">{props.qname}</div>
            <div className="text-sm">{props.noqs}q</div>
          </div>
        </NavLink>
      ) : (
        <div className={styles.cardStyle}>
          <div className="font-semibold">{props.qname}</div>
          <div className="text-sm">{props.noqs}q</div>
        </div>
      )}
    </div>
  );
};

export default QuizCard;
