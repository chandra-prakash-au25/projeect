const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const ourTeamSlice = createSlice({
    name: ' ourTeam',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        setourTeam(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setourTeam, setStatus } =  ourTeamSlice.actions;
export default  ourTeamSlice.reducer;

 export function fetchTeam() {
     return async function fetchourTeamThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/tean-coms');
             const data = await res.json();
             dispatch(setourTeam(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }