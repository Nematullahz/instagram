import React from 'react';
import "./Suggestions.css";
import { Avatar } from '@mui/material';

function Suggestions() {
  return (
    <div className='suggesstions'>
      <div className='suggesstion__tittle'>Sugesstion for you</div>
      <div className='suggesstion__usernames'>
          
        <div className='suggesstion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>AS</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Ashraf</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggesstion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>AN</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Ankit</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggesstion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>AR</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Arfat</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

        <div className='suggesstion__username'>
          <div className='username__left'>
            <span className='avatar'>
              <Avatar>NE</Avatar>
            </span>
            <div className='username__info'>
              <span className='username'>Nematullah</span>
              <span className='relation'>New to Instagram</span>
            </div>
          </div>
          <button className='follow__button'>Follow</button>
        </div>

      </div>
    </div>
  )
}

export default Suggestions
