import React from 'react'
import './middleContent.css';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { changeColor } from '../redux/notes/notesSlice';

function MiddleContent() {
  const items=useSelector(state=>state.notes.items);
  const activeColor=useSelector(state=>state.notes.activeColor)
  const dispatch=useDispatch();
    return (
    <div className='bigConteiner'>
      <div className='contentNavbar'>
        <input className='shearchcss' placeholder="Search.."></input>
      </div>
      <div className='middleFooter'>
        <div className='notescss'>
          <div>deneme1</div>
          <hr></hr>
          <div>Lorem import * as alias from 'module'</div>
        </div>
        {
          items.map((item)=>(
            <div className='notescss'key={item.id}>
              <div>{item.title}</div>
              <hr></hr>
              <div>{item.note}</div>
            </div>
          ))
        }
      </div>
      
    </div>
  )
}

export default MiddleContent
