import React from 'react'
import  './leftContent.css'
import { useSelector  } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { addNewNote } from '../redux/notes/notesSlice';
import { changeColor} from '../redux/notes/notesSlice';

function LeftContent() {
    const [title ,setTitle]=useState("");
    const activeColor=useSelector(state=>state.notes.activeColor);
    const [note,setNote]=useState("");
    const dispatch=useDispatch();
    const handleSumbit=(e)=>{
        e.preventDefault();
        if(title !=="" && note !==""){
            dispatch(addNewNote({id:nanoid() , title , note}));
            setNote("");
            setTitle("");
        }        
    }
    console.log(activeColor);

  return (
    <div className='bigAlice'>
        <div className='xx'>
            <div className='left1'>
                <div><h5>Title</h5></div>
                <input className='input1style'  value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                <div><h5>Note</h5></div>
                <textarea className='textareacss' value={note} onChange={(e)=>setNote(e.target.value)}></textarea>
            </div>
            <div>
                <div>
                    <h5>Color</h5>
                    <div className='colorsDiv'>
                        <button className='colorButtons1' onClick={()=>{dispatch(changeColor("dark"))}}></button>
                        <button className='colorButtons2' onClick={()=>{dispatch(changeColor("blue"))}}></button>
                        <button className='colorButtons3' onClick={()=>{dispatch(changeColor("green"))}}></button>
                        <button className='colorButtons4' onClick={()=>{dispatch(changeColor("yellow"))}}></button>
                    </div>
                </div>
            </div>
            <div className='ss'>
                <button className='button1' onClick={handleSumbit}>Add Note</button>
            </div>

        </div>

    </div>
  )
}

export default LeftContent;
