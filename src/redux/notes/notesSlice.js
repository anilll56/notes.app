import { createSlice } from "@reduxjs/toolkit";


export const notesSlice=createSlice({
    name:'notes',
    initialState:{
        items:[
            {
                id:'1',
                title:'learning redux',
                note:'Lorem ipsum dolor sit amet '
            },
            {
                id:'2',
                title:'NotesApp with redux',
                note:'Lorem ipsum dolor sit amet'
            }

        ],
        activeColor:'white'
    },
    reducers:{
        addNewNote:(state,action)=>{
            state.items.push(action.payload)
        },
        changeColor:(state,action)=>{
            state.activeColor=action.payload
        }
    }


});

export const {addNewNote , changeColor} = notesSlice.actions;


export default notesSlice.reducer;