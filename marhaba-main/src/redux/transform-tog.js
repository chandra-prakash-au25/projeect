const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const transformtogSlice = createSlice({
    name: 'business',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        settransformtog(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { settransformtog, setStatus } = transformtogSlice.actions;
export default transformtogSlice.reducer;

 export function fetchTransform1() {
     return async function fetchtransformtogThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/transform-accs');
             const data = await res.json();
             dispatch(settransformtog(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }