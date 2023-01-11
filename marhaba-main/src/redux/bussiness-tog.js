const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const businesstogSlice = createSlice({
    name: 'businesstog',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        setbusinesstog(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setbusinesstog, setStatus } = businesstogSlice.actions;
export default businesstogSlice.reducer;

 export function fetchProducts1() {
     return async function fetchbusinesstogThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/buss-accs');
             const data = await res.json();
             dispatch(setbusinesstog(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }