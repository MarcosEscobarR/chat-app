// redux/store.ts
import { configureStore } from "@reduxjs/toolkit";
import chatsReducer from "../slices/chatsSlice";

const store = configureStore({
  reducer: {
    chats: chatsReducer,
    // Puedes agregar más reducers aquí si es necesario
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
