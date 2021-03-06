import React from 'react';
import './style.css';
import circle from './img/circle.png';
import { TaskHeaderType } from './types';

function TaskHeader({ name, creator, data }: TaskHeaderType) {
  return (
    <div className='task__header'>
      <div>
        <div className='task__header-name'>{name}</div>
        <div className='task__header-creator'>
          Added by {creator} {data}
        </div>
      </div>
      <div className='task__header-selector'>
        <input
          type='checkbox'
          id='tick'
          className='task__header-selector-hidden'
        />
        <label htmlFor='tick' className='task__header-selector-tick'></label>
        <span className='task__header-selector-tick-more'>
          <img src={circle} alt='circle' />
        </span>
      </div>
    </div>
  );
}

export { TaskHeader };
