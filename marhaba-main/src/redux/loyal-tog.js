const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const loyaltogSlice = createSlice({
    name: 'loyaltog',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        setloyaltog(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setloyaltog, setStatus } = loyaltogSlice.actions;
export default loyaltogSlice.reducer;

 export function fetchloyal1() {
     return async function fetchloyaltogThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/loyal-accs');
             const data = await res.json();
             dispatch(setloyaltog(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }