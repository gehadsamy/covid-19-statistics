import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import covidData from './slices/covidDataSlice';

const store = configureStore({
  reducer: {
    covidData,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type AppDispatch = typeof store.dispatch;

export default store;
