import { configureStore } from "@reduxjs/toolkit";

import calculatorQuestionsReducer from '../features/calculatorQuestionsSlice';

export default configureStore({
    reducer: {
        calculatorQuestions: calculatorQuestionsReducer,
    }
});