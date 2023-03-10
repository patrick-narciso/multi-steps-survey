/* eslint-disable no-param-reassign */
/* eslint-disable import/no-extraneous-dependencies */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface SurveyState {
  name?: string;
  email?: string;
  age: string;
  gender: string;
  favoriteBook: string;
  favoriteColors: (string | number)[] | undefined;
  step: number;
  isSubmitted: boolean;
}

export interface Identity {
  name: string | undefined;
  email: string | undefined;
}

export interface Details {
  age: string;
  gender: string;
}

export interface Favorites {
  favoriteBook: string;
  favoriteColors: (string | number)[] | undefined;
}

const initialState: SurveyState = {
  name: '',
  email: '',
  age: '',
  gender: 'male',
  favoriteBook: '',
  favoriteColors: undefined,
  step: 1,
  isSubmitted: false,
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
    submitData: (state) => {
      state.isSubmitted = true;
    },
  },
});

export const {
  addIdentity,
  addDetails,
  addFavorites,
  increaseStep,
  decreaseStep,
  submitData,
} = surveySlice.actions;

export default surveySlice.reducer;
