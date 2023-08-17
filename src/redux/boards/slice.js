import { createSlice } from "@reduxjs/toolkit";
import { createNewBoard, getAllBoards, getBoard, delateBoard, updateBoard } from "./operations";

const initialState = {
    boards: [],
    board: null,
    loading: false,
}

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers: {
        [createNewBoard.pending](state, action){
            state.loading = true;
        },
        [createNewBoard.fulfilled](state, action){
            state.loading = false;
            state.boards.push(action.payload)
        },
        [createNewBoard.rejected](state, action){},
        [getAllBoards.pending](state, action){
            state.loading = true;
        },
        [getAllBoards.fulfilled](state, action){
            state.loading = false;
            state.boards = action.payload;
        },
        [getAllBoards.rejected](state, action){},
        [getBoard.pending](state, action){
            state.loading = true
        },
        [getBoard.fulfilled](state, action){
            state.loading = false;
            state.board = action.payload;
        },
        [getBoard.rejected](state, action){},
        [delateBoard.pending](state, action){
            state.loading = true;
        },
        [delateBoard.fulfilled](state, action){
            state.loading = false;
         state.boards = state.boards?.filter(item => item !== null && item._id !==action.payload.data._id)
        },
        [updateBoard.pending](state, action) {
            state.loading = true;
        },
        [updateBoard.fulfilled](state, action){
            console.log(action.payload);
            state.loading = false;
        },
        [updateBoard.pending](state, action){
            state.loading = true;
        },
        [updateBoard.fulfilled](state, action){
            state.loading = false;
           const findIndex = state.boards.findIndex(item => item._id === action.payload.data._id)
          state.boards[findIndex] = action.payload.data;
        }
    }
})

export const boardReducer = boardSlice.reducer;