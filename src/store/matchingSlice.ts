import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface User {
  username: string,
  firstName: string,
  age: number,
  imageUrl: string,
}

export interface matchingState {
  matches: Array<User>;
  isLoggedIn: boolean;
  questions: Array<string>;
  userAnswers: Array<string>;
}

const initialState: matchingState = {
  matches: [{username: 'lsjsbd', firstName: 'linoy', age: 28, imageUrl: 'logo.svg'},
            {username: 'lknfkf', firstName: 'Tehila', age: 34, imageUrl: 'logo.svg'},
            {username: 'sldnf', firstName: 'Maya', age: 26, imageUrl: 'logo.svg'}],
  isLoggedIn : false,
  questions: ['Age', 'Height', 'Gender'],
  userAnswers: [],
};

export const matchingSlice = createSlice({
  name: "matching",
  initialState,
  reducers: {

    setUserAnswer: (state, action: PayloadAction<any>) => {
    //   const question = state.items.find((item) => item.id === '' + action.payload.questionId);
    //   if (question) {
    //     state.userSelections[action.payload.questionId] = action.payload.optionIndex;
    //   }
    },

  },
});

// Action creators are generated for each case reducer function
export const {
  setUserAnswer,

} = matchingSlice.actions;

export default matchingSlice.reducer;

