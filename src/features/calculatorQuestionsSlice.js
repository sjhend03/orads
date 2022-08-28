import { createSlice, current } from "@reduxjs/toolkit";

const initialState = {
    Q1: null, 
    Q2: null, 
    Q3: null, 
    Q3a: null,
    Q4: null,
    Q4a: null,
    Q4aa: null,
    Q4ab: null,
    Q4b: null,
    Q4ba: null,
    Q4baa: null,
}

const calculatorQuestionsSlice = createSlice({
    name: 'calculatorQuestions',
    initialState,
    reducers: {
        setQuestion: (state, action) => {
            state[action.payload.index] = action.payload.value;
            console.log(current(state))
        },
        resetQuestions: (state) => {
            state = {...initialState};
            console.log(state)
        }
    }
});

export const { setQuestion, resetQuestions } = calculatorQuestionsSlice.actions;
export const selectCalculatorQuestions = state => state.calculatorQuestions;
export default calculatorQuestionsSlice.reducer;