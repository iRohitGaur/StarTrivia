import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  categories: [],
  quizes: [],
  quiz: null,
};

export const getCategories = createAsyncThunk(
  "category/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/categories");
      return response.data.categories;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const getQuizesInCategory = createAsyncThunk(
  "category/quiz/get",
  async (categoryId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/categories/${categoryId}`);
      return response?.data?.quizes?.models;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const getQuiz = createAsyncThunk(
  "quiz/get",
  async (quizId, { rejectWithValue }) => {
    try {
      const response = await axios.get(`/api/quizzes/${quizId}`);
      return response?.data?.quiz;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(getCategories.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(getCategories.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getQuizesInCategory.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuizesInCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.quizes = action.payload;
      })
      .addCase(getQuizesInCategory.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(getQuiz.pending, (state) => {
        state.loading = true;
      })
      .addCase(getQuiz.fulfilled, (state, action) => {
        state.loading = false;
        state.quiz = action.payload;
      })
      .addCase(getQuiz.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});

export default categorySlice.reducer;
