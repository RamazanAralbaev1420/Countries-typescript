import { configureStore } from '@reduxjs/toolkit';
import countryReducer from './countries/countrySlice';
import { TypedUseSelectorHook } from 'react-redux';
export const store = configureStore({
  reducer: {
    countries: countryReducer,
  },
});

// Выведение типов `RootState` и `AppDispatch` из хранилища
// export type RootState = ReturnType<typeof store.getState>
// Выведенные типы: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// export type RootState = ReturnType<typeof rootReducer>
export type RootState = ReturnType<typeof store.getState>
