import { answerState } from "../atoms/answerState";
import {
  option1State,
  option2State,
  option3State,
  option4State,
} from "../atoms/optionStates";
import { useRecoilState } from "recoil";
const AnsCard = (props) => {
  const [ans1, setAns1] = useRecoilState(option1State);
  const [ans2, setAns2] = useRecoilState(option2State);
  const [ans3, setAns3] = useRecoilState(option3State);
  const [ans4, setAns4] = useRecoilState(option4State);
  const [answer, setAnswer] = useRecoilState(answerState);
  const handleClick = (ans) => {
    if (ans === 0) {
      setAns1(true);
      setAns2(false);
      setAns3(false);
      setAns4(false);
      setAnswer(0);
    } else if (ans === 1) {
      setAns1(false);
      setAns2(true);
      setAns3(false);
      setAns4(false);
      setAnswer(1);
    } else if (ans === 2) {
      setAns1(false);
      setAns2(false);
      setAns3(true);
      setAns4(false);
      setAnswer(2);
    } else if (ans === 3) {
      setAns1(false);
      setAns2(false);
      setAns3(false);
      setAns4(true);
      setAnswer(3);
    }
  };
  const styles = {
    ans1Style: `rounded-md py-3 text-white font-raleway text-lg font-semibold  flex px-10 justify-center hover:bg-bright_pink duration-300 ${
      ans1 ? "bg-bright_pink" : "bg-melon"
    }`,
    ans2Style: `rounded-md py-3 text-white font-raleway text-lg font-semibold  flex px-10 justify-center hover:bg-bright_pink duration-300 ${
      ans2 ? "bg-bright_pink" : "bg-melon"
    }`,
    ans3Style: `rounded-md py-3 text-white font-raleway text-lg font-semibold  flex px-10 justify-center hover:bg-bright_pink duration-300 ${
      ans3 ? "bg-bright_pink" : "bg-melon"
    }`,
    ans4Style: `rounded-md py-3 text-white font-raleway text-lg font-semibold  flex px-10 justify-center hover:bg-bright_pink duration-300 ${
      ans4 ? "bg-bright_pink" : "bg-melon"
    }`,
  };
  return (
    <div className="flex-col">
      <div className="flex justify-center mb-10 ">
        <div className={styles.ans1Style} onClick={() => handleClick(0)}>
          <div>{props.answers[0].answer_text}</div>
        </div>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className={styles.ans2Style} onClick={() => handleClick(1)}>
          <div>{props.answers[1].answer_text}</div>
        </div>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className={styles.ans3Style} onClick={() => handleClick(2)}>
          <div>{props.answers[2].answer_text}</div>
        </div>
      </div>
      <div className="flex justify-center mb-10 ">
        <div className={styles.ans4Style} onClick={() => handleClick(3)}>
          <div>{props.answers[3].answer_text}</div>
        </div>
      </div>
    </div>
  );
};

export default AnsCard;
