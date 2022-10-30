import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const basket = createSlice({
  name: "basket",
  initialState,
  reducers: {
    additems(state, action) {
      state.items.push(action.payload);
    },
    removeitems: (state, action) => {
      state.items.splice(state.items.findIndex((data) => {
            console.log(action.payload.Product_id)
          return data.Product_id == action.payload.Product_id;
        }),1
      );
    },
  },
});

export const { additems, removeitems } = basket.actions;
export default basket.reducer;
