import { useNavigate } from "react-router-dom";

export const Rules = ({ setShowModal }) => {
  const navigate = useNavigate();

  return (
    <div className="modal_landing_wrapper">
      <div className="landing_wrapper flex_row flex_gap2">
        <div className="title_wrapper flex_column flex_align_center flex_gap2">
          <h2 className="app_title">
            <i className="fas fa-dice-d6"></i> Game Rules
          </h2>
          <ul>
            <li>You cannot skip a question</li>
            <li>For 1 question, you will get 4 options</li>
            <li>Right answer will fetch you 1 point</li>
            <li>Points will not be deducted for wrong answer</li>
            <li>You can save your score by doing login/signup</li>
          </ul>
          <div className="rules_cta flex_row flex_align_center flex_gap2">
            <button
              className="sui_btn btn_v1 flex_row flex_align_center flex_gap1"
              onClick={() => navigate("/")}
            >
              <i className="fas fa-chevron-left"></i>
              Go Back
            </button>
            <button
              className="play_btn sui_btn flex_row flex_align_center flex_gap1"
              onClick={() => setShowModal(false)}
            >
              Let's Play
              <i className="fas fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
