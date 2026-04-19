import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
    step: string
    catagory: string
    clicksLeft: number

}

const initialState: CounterState = {
    step: 'home',
    catagory: '',
    clicksLeft: 3
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setStep: (state, action: PayloadAction<string>) => {
            state.step = action.payload
        },
        setCatagory: (state, action: PayloadAction<string>) => {
            state.catagory = action.payload
        },
        setClicksLeft: (state, action: PayloadAction<number>) => {
            state.clicksLeft = action.payload

        }

    },
})

export const { setStep, setCatagory, setClicksLeft } = counterSlice.actions

export default counterSlice.reducer