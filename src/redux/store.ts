/* eslint-disable import/no-extraneous-dependencies */
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import surveyReducer from '../pages/Survey/surveySlice';

const persistConfig = {
  key: 'survey',
  storage,
};

const surveyPersistedReducer = persistReducer(persistConfig, surveyReducer);

export const store = configureStore({
  reducer: {
    survey: surveyPersistedReducer,
  },
});

export const persistor = persistStore(store);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
