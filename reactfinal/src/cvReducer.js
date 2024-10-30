import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import useAPI from "./hooks/useAPI";

export const getUser = createAsyncThunk("cv/getUser", async (user) => {
  const response = await useAPI("users", user);
  return response;
});

export const removeUser = createAsyncThunk("cv/removeUser", async (user_id) => {
  const response = await useAPI("users", user_id, "DELETE");
  return response;
});

export const createUser = createAsyncThunk("cv/createUser", async (data) => {
  const response = await useAPI("users", "", "POST", data);
  return response;
});

export const setUser = createAsyncThunk(
  "cv/setUser",
  async (data, user = "") => {
    const response = await useAPI("users/" + data.id, user, "PATCH", data);
    return response;
  }
);

export const getIndustry = createAsyncThunk("cv/getIndustry", async () => {
  const response = await useAPI("industry");
  return response;
});

export const getEducation = createAsyncThunk("cv/getEducation", async () => {
  const response = await useAPI("education");
  return response;
});

export const getLanguages = createAsyncThunk("cv/getLanguages", async () => {
  const response = await useAPI("languages");
  return response;
});

export const getExperience = createAsyncThunk("cv/getExperience", async () => {
  const response = await useAPI("experience");
  return response;
});

// slice

export const cvSlice = createSlice({
  name: "cv",
  initialState: {
    data: {
      user: {},
      education: [],
      industry: [],
      languages: [],
      getExperience: [],
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUser.fulfilled, (state, action) => {
      state.data.user = action.payload;
    });

    builder.addCase(removeUser.fulfilled, (state, action) => {
      state.data.user = action.payload;
    });

    builder.addCase(createUser.fulfilled, (state, action) => {
      state.data.user = action.payload;
    });

    builder.addCase(setUser.fulfilled, (state, action) => {
      state.data.user = action.payload;
    });

    builder.addCase(getIndustry.fulfilled, (state, action) => {
      state.data.industry = action.payload;
    });

    builder.addCase(getEducation.fulfilled, (state, action) => {
      state.data.education = action.payload;
    });

    builder.addCase(getLanguages.fulfilled, (state, action) => {
      state.data.languages = action.payload;
    });

    builder.addCase(getExperience.fulfilled, (state, action) => {
      state.data.experience = action.payload;
    });
  },
});

export const cvActions = cvSlice.action;
export const selectData = (state) => state.cv.data;
export default cvSlice.reducer;
