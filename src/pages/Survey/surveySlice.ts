/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SurveyState {
  name?: string | null;
  email?: string | null;
  age: number;
  gender: string;
  favoriteBook: string;
  favoriteColors: string[] | string;
  step: number;
}

export interface Identity {
  name: string | null;
  email: string | null;
}

export interface Details {
  age: number;
  gender: string;
}

export interface Favorites {
  favoriteBook: string;
  favoriteColors: string[] | string;
}

const initialState: SurveyState = {
  name: '',
  email: '',
  age: 0,
  gender: '',
  favoriteBook: '',
  favoriteColors: [],
  step: 1,
};

export const surveySlice = createSlice({
  name: 'survey',
  initialState,
  reducers: {
    addIdentity: (state, action: PayloadAction<Identity>) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
    },
    addDetails: (state, action: PayloadAction<Details>) => {
      state.age = action.payload.age;
      state.gender = action.payload.gender;
    },
    addFavorites: (state, action: PayloadAction<Favorites>) => {
      state.favoriteBook = action.payload.favoriteBook;
      state.favoriteColors = action.payload.favoriteColors;
    },
    increaseStep: (state) => {
      state.step += 1;
    },
    decreaseStep: (state) => {
      state.step -= 1;
    },
  },
});

export const {
  addIdentity,
  addDetails,
  addFavorites,
  increaseStep,
  decreaseStep,
} = surveySlice.actions;

export default surveySlice.reducer;