// import { createSlice } from "@reduxjs/toolkit";
// import { onAuthStateChanged } from "firebase/auth";
// import { useEffect, useState } from "react";
// import { auth } from "../firebase";

// const initialState = {
//   userStatus: null,
// };

// export const UserState = createSlice({
//   name: "wishlist",
//   initialState,
//   reducers: {
//     UserAuth: (state) => {
//       useEffect(() => {
//         onAuthStateChanged(auth, (user) => {
//           if (user) {
//             state(user);
//           } else {
//             state;
//           }
//         });
//       }, []);
//     },
//   },
// });

// export const { UserAuth } = UserState.actions;

// export default UserState.reducer;
