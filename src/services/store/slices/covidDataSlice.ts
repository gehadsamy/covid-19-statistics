import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import { fetchData } from '../../api/crudApiOperation';

interface CovidDataState {
    data: Record<string, any>;
    historicalData: Array<Record<string, any>>;
    states: Array<Record<string, any>>;
    status: 'idle' | 'loading' | 'succeeded' | 'failed';
    error: string | null;
}

const initialState: CovidDataState = {
    data: {},
    historicalData: [],
    states: [],
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
        fetchDataSuccess: (state, action: PayloadAction<any>) => {
            state.status = 'succeeded';
            state.data = action.payload.data;
            state.historicalData = action.payload.historicalData;
        },
        fetchDataFailure: (state, action: PayloadAction<string>) => {
            state.status = 'failed';
            state.error = action.payload;
        },
        fetchStatesSuccess: (state, action: PayloadAction<any>) => {
            state.states = action.payload;
        },
    },
});

export const { fetchDataStart, fetchDataSuccess, fetchDataFailure, fetchStatesSuccess } = covidDataSlice.actions;

export const fetchCovidData = (current: string, historical: string): AppThunk => async (dispatch) => {
    try {
        dispatch(fetchDataStart());
        const data = await fetchData(current)
        const finalData = current.startsWith("us") ? data[0] : data
        const historicalData = await fetchData(historical)
        dispatch(fetchDataSuccess({data: finalData, historicalData}));
    } catch (err: any) {
        dispatch(fetchDataFailure(err.toString()));
    }
};

export const fetchAllStatesData = (): AppThunk => async (dispatch) => {
    try {
        const data = await fetchData('states/current.json')
        dispatch(fetchStatesSuccess(data));
    } catch (err: any) {
        dispatch(fetchDataFailure(err.toString()));
    }
};

export default covidDataSlice.reducer;
