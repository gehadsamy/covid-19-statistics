import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllStatesData, getSpecificStateData } from '../../api/axiosInstance';
import { AppThunk } from '../store';

interface CovidDataState {
    data: any; // Replace 'any' with the shape of your data
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CovidDataState = {
    data: [],
    status: 'idle',
    error: null,
};

export const covidDataSlice = createSlice({
    name: 'covidData',
    initialState,
    reducers: {
        fetchDataStart: (state) => {
            state.status = 'loading';
        },
        fetchDataSuccess: (state, action: PayloadAction<any>) => { // Replace 'any' with the shape of your data
            state.status = 'succeeded';
            state.data = action.payload;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure } = covidDataSlice.actions;

export const fetchAllStatesData = (): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchDataStart());
        const data = await getAllStatesData();
        dispatch(fetchDataSuccess(data));
    } catch (err) {
        dispatch(fetchDataFailure(err.toString()));
    }
};

export const fetchSpecificStateData = (stateCode: string): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchDataStart());
        const data = await getSpecificStateData(stateCode);
        dispatch(fetchDataSuccess(data));
    } catch (err) {
        dispatch(fetchDataFailure(err.toString()));
    }
};

export default covidDataSlice.reducer;
