import { useEffect } from "react";
import { Watch as Loader } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getQuizesInCategory } from "reducers/categorySlice";
import "./category.css";

export const Category = () => {
  const { categoryId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, categories, quizes } = useSelector(
    (state) => state.categories
  );
  const category = categories.filter((c) => c._id === categoryId)[0];

  useEffect(() => {
    if (categoryId) {
      dispatch(getQuizesInCategory(categoryId));
      if (categories.length === 0) {
        dispatch(getCategories());
      }
    }
  }, []);

  return (
    <div className="category_page_wrapper">
      {categories.length !== 0 && quizes.length !== 0 && (
        <div className="landing_wrapper flex_column flex_gap2">
          <div className="title_wrapper flex_column flex_align_center flex_gap2">
            <div className="back_title_wrapper flex_row flex_align_center flex_justify_center">
              <div className="category_cta flex_row flex_align_center flex_gap2">
                <button
                  className="sui_btn btn_v1 flex_row flex_align_center flex_gap1"
                  onClick={() => navigate("/")}
                >
                  <i className="fas fa-chevron-left"></i>
                  Go Back
                </button>
              </div>
              <h2 className="app_title">{category.categoryName}</h2>
            </div>
            <h5 className="app_caption">{category.caption}</h5>
            <div className="quiz_categories flex_row flex_align_center flex_justify_around flex_gap2">
              {quizes.map((q) => (
                <div
                  key={q._id}
                  onClick={() => navigate(`/quiz/${q._id}`)}
                  className="category_wrapper flex_column flex_align_center flex_gap1"
                >
                  <h5>{q.title}</h5>
                  <button className="sui_btn play-btn">Play</button>
                </div>
              ))}
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
    </div>
  );
};
