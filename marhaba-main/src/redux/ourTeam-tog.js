const { createSlice, createAsyncThunk } = require('@reduxjs/toolkit');

export const STATUSES = Object.freeze({
    IDLE: 'idle',
    ERROR: 'error',
    LOADING: 'loading',
});

const ourTeamtogSlice = createSlice({
    name: 'ourTeamtog',
    initialState: {
        data: {},
        status: STATUSES.IDLE,
    },
    reducers: {
        setourTeamtog(state, action) {
            state.data = action.payload;
        },
        setStatus(state, action) {
            state.status = action.payload;
        },
    }
});

export const { setourTeamtog, setStatus } = ourTeamtogSlice.actions;
export default ourTeamtogSlice.reducer;

 export function fetchTeam1() {
     return async function fetchourTeamtogThunk(dispatch, getState) {
         dispatch(setStatus(STATUSES.LOADING));
         try {
             const res = await fetch('http://localhost:1337/api/team-accs');
             const data = await res.json();
             dispatch(setourTeamtog(data));
             dispatch(setStatus(STATUSES.IDLE));
         } catch (err) {
             console.log(err);
             dispatch(setStatus(STATUSES.ERROR));
         }
     };
 }