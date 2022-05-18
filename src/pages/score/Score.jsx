import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./score.css";

export const Score = () => {
  const navigate = useNavigate();
  const { state } = useLocation();

  useEffect(() => {
    if (!state) {
      navigate("/");
    }
  }, []);

  return (
    <div className="score_page_wrapper">
      {state && (
        <div className="landing_wrapper flex_row flex_gap2">
          <div className="title_wrapper flex_column flex_align_center flex_gap2">
            <h2 className="app_title">
              <i className="fas fa-rocket"></i> Final Score: {state.score}/10
            </h2>
            <div className="qna_wrapper">
              {state.quiz.mcqs.map((pair) => (
                <div key={pair._id} className="sp_qna">
                  <div className="sp_question">
                    Q: <span>{pair.question}</span>
                  </div>
                  <div className="sp_answer">
                    A: <span>{pair.answer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
