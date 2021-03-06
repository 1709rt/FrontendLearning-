import React from 'react';
import './style.css';
import addIcon from './img/addIcon.png';
import { TaskInfoBlockExecutorType, TaskInfoBlockUsersType } from './types';

interface TaskInfoBlockProps {
  title?: string;
  executor?: TaskInfoBlockExecutorType;
  date?: string;
  department?: string;
  users?: TaskInfoBlockUsersType[];
}

function TaskInfoBlock({
  title,
  executor,
  date,
  department,
  users,
}: TaskInfoBlockProps) {
  return (
    <div className='task__info-block'>
      <div className='task__info-block-title'>{title}</div>
      <div className='task__info-block-content'>
        {executor && (
          <a className='executor'>
            <img
              src={executor.avatar}
              alt={executor.name}
              className='task__info-block_icon'
            />
            <span className='executor__initials'>{executor.name}</span>
          </a>
        )}
        {date && <div className='date'>{date}</div>}
        {department && <span className='department'>{department}</span>}
        {users && (
          <span>
            {users.map((item) => {
              return (
                <img
                  className='task__info-block_icon'
                  key={`${item.name}_${item.avatar}`}
                  src={item.avatar}
                  alt={item.name}
                />
              );
            })}
            <img src={addIcon} className='task__info-block_icon' />
          </span>
        )}
      </div>
    </div>
  );
}

export { TaskInfoBlock };
