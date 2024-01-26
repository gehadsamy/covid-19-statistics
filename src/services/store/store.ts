import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidDataReducer from './slices/covidDataSlice';

const store = configureStore({
  reducer: {
    covidData: covidDataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

// This is where you define AppThunk
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export default store;
