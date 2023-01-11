const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const transformSlice = createSlice({
    name: 'business',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        settransform(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { settransform, setStatus } = transformSlice.actions;
export default transformSlice.reducer;

 export function fetchTransform() {
     return async function fetchtransformThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/transform-coms');
             const data = await res.json();
             dispatch(settransform(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }