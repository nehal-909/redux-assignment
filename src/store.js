import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

 export const Dekhtehe = configureStore({
    reducer:{"kuchbhi":reducer}
})