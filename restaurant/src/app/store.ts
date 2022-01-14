import { configureStore } from "@reduxjs/toolkit";
import reservationsReducer from "../features/reservationSlice";

export const store = configureStore({
  reducer: {
    // 리듀서 내부에 모든 다른 슬라이스를 가짐.
    reservations: reservationsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
