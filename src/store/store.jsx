import { configureStore } from "@reduxjs/toolkit";
import { LikedSlice } from "./LikedSlice";

export const store = configureStore({
	reducer: LikedSlice.reducer
})