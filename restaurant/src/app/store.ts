import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
  reducer: {
    // 리듀서 내부에 모든 다른 슬라이스를 가짐.
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
