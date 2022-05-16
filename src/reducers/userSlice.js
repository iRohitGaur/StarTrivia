import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

const initialState = {
  loading: false,
  user: null,
  token: null,
};

export const loginUser = createAsyncThunk(
  "user/login",
  async ({ guest, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/login", {
        email: guest ? "guest@rohit.xyz" : email,
        password: guest ? "guest@123" : password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

export const signupUser = createAsyncThunk(
  "user/signup",
  async ({ name, email, password }, { rejectWithValue }) => {
    try {
      const response = await axios.post("/api/auth/signup", {
        name,
        email,
        password,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const extractedToken = localStorage.getItem("startrivia-user-token");

export const verifyUser = createAsyncThunk(
  "user/verify",
  async (token, { rejectWithValue }) => {
    try {
      const response = await axios.post(
        "/api/auth/verify",
        {},
        {
          headers: {
            authorization: token,
          },
        }
      );
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data.errors[0]);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout(state) {
      localStorage.removeItem("startrivia-user-token");
      state.user = null;
      state.token = null;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        const { foundUser: user, encodedToken: token } = action.payload;
        localStorage.setItem("startrivia-user-token", token);
        state.user = user;
        state.token = token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(signupUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(signupUser.fulfilled, (state, action) => {
        state.loading = false;
        const { createdUser: user, encodedToken: token } = action.payload;
        localStorage.setItem("startrivia-user-token", token);
        state.user = user;
        state.token = token;
      })
      .addCase(signupUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      })
      .addCase(verifyUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(verifyUser.fulfilled, (state, action) => {
        state.loading = false;
        const { foundUser: user, encodedToken: token } = action.payload;
        state.user = user;
        state.token = token;
      })
      .addCase(verifyUser.rejected, (state, action) => {
        state.loading = false;
        toast.error(action.payload);
      });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
