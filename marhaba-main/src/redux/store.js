import { configureStore } from '@reduxjs/toolkit';
import businessReducer from './bussiness';
import businesstogReducer from './bussiness-tog';
import loyalReducer from './loyal';
import loyaltogReducer from './loyal-tog';
import ourTeamReducer from './ourTeam';
import ourTeamtogReducer from './ourTeam-tog';
import transformReducer from './transform';
import transformtogReducer from './transform-tog';



const store = configureStore({
    reducer: {
        Business: businessReducer,
        Businesstog: businesstogReducer,
        loyal: loyalReducer,
        loyaltog: loyaltogReducer,
        ourTeam: ourTeamReducer,
        ourTeamtog: ourTeamtogReducer,
        transform: transformReducer,
        transformtog: transformtogReducer
    },
});

export default store;