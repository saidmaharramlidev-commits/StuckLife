import { createSlice } from '@reduxjs/toolkit'

export interface CounterState {

}

const initialState: CounterState = {
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {

    },
})

export const { } = counterSlice.actions

export default counterSlice.reducer