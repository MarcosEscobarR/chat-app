// slices/chatsSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Chat {
  id: string;
  name: string;
}

interface ChatsState {
  chats: Chat[];
}

const initialState: ChatsState = {
  chats: [],
};

const chatsSlice = createSlice({
  name: "chats",
  initialState,
  reducers: {
    addChat: (state, action: PayloadAction<Chat>) => {
      state.chats.push(action.payload);
    },
    removeChat: (state, action: PayloadAction<string>) => {
      state.chats = state.chats.filter((chat) => chat.id !== action.payload);
    },
  },
});

export const { addChat, removeChat } = chatsSlice.actions;
export default chatsSlice.reducer;
