import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {QuizPage} from "./pages/QuizPage";
import QuestionPage from "./pages/QuestionPage";
function App() {
  return ( 
    <div className="App">
      <Navbar />
      <Router>
        <Routes>
          <Route path="/" element={<QuizPage />} />
          <Route path="/quiz" element={<QuestionPage />} />
          <Route path="/:quizid" element={<QuestionPage />}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
