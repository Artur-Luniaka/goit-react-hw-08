import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.goit.global";

const setAuthHeader = (token) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};
const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export const register = createAsyncThunk(
  "auth/register",
  async ({ name, email, password }, thunkApi) => {
    try {
      const response = await axios.post("/users/signup", {
        name,
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      toast.error("Invalid data, try again 😑", {
        position: "bottom-center",
        duration: 3000,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async ({ email, password }, thunkApi) => {
    try {
      toast.success("Successfully logged ✅", {
        position: "bottom-center",
        duration: 3000,
        style: {
          backgroundColor: "#f8f8f8",
          color: "#2ecc71",
        },
      });
      const response = await axios.post("/users/login", {
        email,
        password,
      });
      setAuthHeader(response.data.token);
      return response.data;
    } catch (e) {
      toast.error("Invalid data, try again 😑", {
        position: "bottom-center",
        duration: 3000,
        style: {
          backgroundColor: "red",
          color: "white",
        },
      });
      return thunkApi.rejectWithValue(e.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkApi) => {
  try {
    toast.success("Successfully logged out ✅", {
      position: "bottom-center",
      duration: 3000,
      style: {
        backgroundColor: "#f8f8f8",
        color: "#2ecc71",
      },
    });
    await axios.post("/users/logout");
    clearAuthHeader();
  } catch (e) {
    return thunkApi.rejectWithValue(e.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.auth.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue("Unable to fetch user");
    }
    try {
      setAuthHeader(persistedToken);
      const response = await axios("/users/current");
      return response.data;
    } catch (e) {
      return thunkApi.rejectWithValue(e.message);
    }
  }
);
