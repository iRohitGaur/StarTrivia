import { useEffect, useState } from "react";
import { Watch as Loader } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getQuiz } from "reducers/categorySlice";
import "./quiz.css";
import { Rules } from "./Rules";

export const Quiz = () => {
  const initialAns = { ans: "", status: false };
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(initialAns);
  const [showModal, setShowModal] = useState(true);
  const { quizId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, quiz } = useSelector((state) => state.categories);

  useEffect(() => {
    if (quizId) {
      dispatch(getQuiz(quizId));
    }
  }, []);

  return (
    <div className="quiz_page_wrapper">
      {quiz && (
        <div className="landing_wrapper flex_row flex_gap2">
          <div className="title_wrapper flex_column flex_align_center flex_gap2">
            <div className="back_title_wrapper flex_row flex_align_center flex_justify_center">
              <div className="quiz_cta flex_row flex_align_center flex_gap2">
                <button
                  onClick={() => navigate("/")}
                  className="sui_btn btn_v1 flex_row flex_align_center flex_gap1"
                >
                  Quit
                </button>
              </div>
              <h2 className="app_title">{quiz.categoryName}</h2>
              {answered.status && (
                <div className="quiz_cta_right flex_row flex_align_center flex_gap2">
                  <button
                    onClick={() => {
                      if (question + 1 === quiz.mcqs.length) {
                        navigate("/score", { state: { quiz, score } });
                      } else {
                        setQuestion((q) => q + 1);
                      }
                      setAnswered(initialAns);
                    }}
                    className="sui_btn btn_v2 flex_row flex_align_center flex_gap1"
                  >
                    {question + 1 === quiz.mcqs.length ? "Finish" : "Next"}
                  </button>
                </div>
              )}
            </div>

            <div className="question_score flex_row flex_align_center flex_gap1">
              <span className="flex_row flex_align_center flex_gap1">
                <h4>Question:</h4>
                <h5>
                  {question + 1}/{quiz.mcqs.length}
                </h5>
              </span>
              <span className="flex_row flex_align_center flex_gap1">
                <h4>Score:</h4>
                <h5>{score}</h5>
              </span>
            </div>

            <div className="quiz_question_wrapper">
              <h4 className="quiz_question">{quiz.mcqs[question].question}</h4>
              <div className="question_options_wrapper flex_column flex_align_center flex_gap1">
                {quiz.mcqs[question].options.map((opt) => (
                  <span
                    key={opt}
                    className={`h4 font_weight_700 question_option ${
                      answered.status &&
                      (quiz.mcqs[question].answer === opt
                        ? "right_ans"
                        : answered.ans === opt && "wrong_ans")
                    }`}
                    onClick={() => {
                      if (!answered.status) {
                        setAnswered({ ans: opt, status: true });
                        if (quiz.mcqs[question].answer === opt) {
                          setScore((s) => s + 1);
                        }
                      }
                    }}
                  >
                    {opt}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      {loading && (
        <div className="stg_loader">
          <Loader
            height="150"
            width="150"
            color="#1a8d1a"
            ariaLabel="loading"
          />
        </div>
      )}
      {showModal && <Rules setShowModal={setShowModal} />}
    </div>
  );
};
