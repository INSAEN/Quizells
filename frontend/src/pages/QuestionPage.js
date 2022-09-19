import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { answerState } from "../atoms/answerState";
import { scoreState } from "../atoms/scoreState";
import QuestionCard from "../components/QuestionCard";
import { NavLink } from "react-router-dom";
import {
  option1State,
  option2State,
  option3State,
  option4State,
} from "../atoms/optionStates";
const QuestionPage = () => {
  const [data, setData] = useState([]);
  const { quizid } = useParams();
  const [loading, setLoading] = useState(true);
  const [curr, setCurr] = useState(0);
  const [answer, setAnswer] = useRecoilState(answerState);
  var [score, setScore] = useRecoilState(scoreState);
  const [showModal, setShowModal] = useState(false);
  const [ans1, setAns1] = useRecoilState(option1State);
  const [ans2, setAns2] = useRecoilState(option2State);
  const [ans3, setAns3] = useRecoilState(option3State);
  const [ans4, setAns4] = useRecoilState(option4State);
  useEffect(() => {
    const quesUrl = `http://localhost:8000/api/${quizid}/questions`;
    const fetchData = async () => {
      try {
        const response = await fetch(quesUrl);
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
  const qlen = data.length;
  const styles = {
    // prevStyle: `text-4xl font-raleway ${
    //   curr > 0 ? "text-bright_pink" : "text-txtgrey"
    // } font-bold tracking-wide cursor-pointer`,
    nextStyle: `text-4xl font-raleway text-bright_pink font-bold tracking-wide cursor-pointer ${
      answer != null ? "text-bright_pink" : "text-txtgrey"
    }`,
  };
  return loading ? (
    <div className="text-7xl pt-16 ">
      <div>loading...</div>
    </div>
  ) : (
    <div className="flex flex-col justify-center items-center pt-16">
      {showModal ? (
        <div className="pt-16 flex flex-col items-center absolute bg-celadon rounded-xl p-32 shadow-xl">
          <div className="text-7xl font-raleway text-bright_pink font-bold tracking-wide mt-16">
            Completed.
          </div>
          <div className="text-3xl font-raleway text-white italic font-semibold flex justify-center mb-16 mt-12">
            You scored {((score / qlen) * 100).toFixed(2)}%
          </div>
          <NavLink to="/">
            <div
              className="rounded-xl w-52 h-20 bg-bright_pink text-white flex justify-center items-center text-3xl font-raleway font-bold hover:bg-amethyst duration-300"
              onClick={() => setScore(0)}
            >
              Return
            </div>
          </NavLink>
        </div>
      ) : null}
      <QuestionCard question={data[curr]} />
      <div className="flex">
        {/* <div
          className={styles.prevStyle}
          onClick={() => {
            curr > 0 ? setCurr(curr - 1) : setCurr(curr);
          }}
        >
          prev
        </div> */}
        <div
          className={styles.nextStyle}
          onClick={() => {
            if (answer !== null) {
              data[curr].answers[answer].is_right === true
                ? setScore((score = score + 1))
                : setScore(score);
              console.log(score);
              if (curr < qlen - 1) {
                setCurr(curr + 1);
              } else {
                setShowModal(true);
              }
              setAnswer(null);
              setAns1(false);
              setAns2(false);
              setAns3(false);
              setAns4(false);
            }
          }}
        >
          {curr < qlen - 1 ? "next" : "submit"}
        </div>
      </div>
    </div>
  );
};

export default QuestionPage;
