const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const businessSlice = createSlice({
    name: 'business',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        setbusiness(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setbusiness, setStatus } = businessSlice.actions;
export default businessSlice.reducer;

 export function fetchProducts() {
     return async function fetchbusinessThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));

         try {
             const res = await fetch('http://localhost:1337/api/bussines-coms');
             const data = await res.json();
             
             dispatch(setbusiness(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }