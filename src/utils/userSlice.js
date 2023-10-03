import { createSlice } from "@reduxjs/toolkit";

// it will have name , initialState ,
const userSlice = createSlice({
    name: "user",
    initialState : null,
    reducers:{
        addUser : (state,action) => { return action.payload ; },
        removeUser : (state,action) => { return null;}
    }
})

export const {addUser,removeUser} = userSlice.actions;
export default userSlice.reducer; 