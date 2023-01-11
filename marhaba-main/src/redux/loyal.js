const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const loyalSlice = createSlice({
    name: 'loyal',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        setloyal(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setloyal, setStatus } = loyalSlice.actions;
export default loyalSlice.reducer;

 export function fetchloyal() {
     return async function fetchloyalThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/loyal-coms');
             const data = await res.json();
             dispatch(setloyal(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }