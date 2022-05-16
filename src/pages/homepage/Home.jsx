import { useEffect } from "react";
import { Watch as Loader } from "react-loader-spinner";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getCategories } from "reducers/categorySlice";
import "./home.css";

export const Home = () => {
  const { loading, categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div className="homepage_wrapper">
        <div className="landing_wrapper flex_row flex_gap2">
          <div className="title_wrapper flex_column flex_align_center flex_gap2">
            <h1 className="app_title">StarTrivia</h1>
            <h5 className="app_caption">
              Test your knowledge in the world of birds; fly high with your name
              on top of the scoreboard. Select any category to see the relevant
              quiz.
            </h5>
            <div className="quiz_categories flex_row flex_align_center flex_wrap flex_justify_around flex_gap2">
              {categories.map((cat) => (
                <div
                  key={cat._id}
                  className="category_wrapper flex_column flex_align_center flex_gap1"
                  onClick={() => navigate(`/category/${cat._id}`)}
                >
                  <i className={`fas ${cat.icon}`}></i>
                  <h5>{cat.categoryName}</h5>
                  <button className="sui_btn category-btn">Browse</button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
    </>
  );
};
