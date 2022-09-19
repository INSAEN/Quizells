import React,{useRef} from "react";
import QuizCard from "./QuizCard";
import useDraggableScroll from 'use-draggable-scroll';

const CatRows = (props) => {
  const ref = useRef(null);
  const {onMouseDown} = useDraggableScroll(ref);
  return (
    <div className="px-5 mb-5">
      <div className="flex flex-col">
        <div className=" text-ltgrey text-3xl font-raleway mb-5">
          {props.catData.name}
        </div>
        <div
          className="flex justify-between overflow-auto scrollbar-hide"
          onMouseDown={onMouseDown} ref={ref}
        >
          {props.catData.quizzes.map((quiz) => (
            <QuizCard qname={quiz.title} noqs={quiz.question.length} quizid={quiz.quizid}/>
          ))}
        </div>
      </div>
    </div>
  );
};
export default CatRows;
