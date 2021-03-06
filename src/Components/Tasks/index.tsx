import React, { useState } from 'react';
import './style.css';
import { TasksList, TasksListType } from '../TasksList';
import userOne from '../TasksList/img/userOne.png';
import userTwo from '../TasksList/img/userTwo.png';
import userTh from '../TasksList/img/userTh.png';
import userFo from '../TasksList/img/userFo.png';
import userFr from '../TasksList/img/userFr.png';
import { Task, TaskProps } from '../Task';
import { TaskType } from '../Task/types';
import user from '../TaskInfoBlock/img/user.png';
import userO from '../TaskInfoBlock/img/userO.png';
import userY from '../TaskInfoBlock/img/userY.png';
import userS from '../TaskInfoBlock/img/userS.png';
import headerIcon from '../TaskFiles/img/header.png';
import pdfIcon from '../TaskFiles/img/pdfIcon.png';
import userT from '../TaskDiscussion/img/userT.png';
import userU from '../TaskDiscussion/img/userU.png';
import userYY from '../TaskDiscussion//img/userY.png';
import { CommentType } from '../Comment/types';

const backlog: TasksListType[] = [
  {
    name: 'Backlog',
    items: [
      {
        title: 'E-mail after registration so that I can confirm my address',
        createdAt: 'today at 13:00 pm',
        assigner: 'Penelope F.',
        asignTo: {
          avatar: user,
          name: 'ivan ivanov',
        },
        dueOn: 'Tue, Apr 18',
        department: 'Developement',
        followers: [{ avatar: userO, name: 'userO' }],
        discussions: [],
      },
      {
        title: 'Find top 5 customer requests',
        createdAt: 'yesterday at 12:41pm',
        assigner: 'Kristin A.',
        asignTo: {
          avatar: userOne,
          name: 'Linzell Bowman',
        },
        dueOn: 'Tue, Dec 25',
        department: 'Marketing',
        followers: [
          { avatar: userO, name: 'userO' },
          { avatar: userY, name: 'userY' },
          { avatar: userS, name: 'userS' },
        ],
        description:
          'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
        files: [
          {
            preview: pdfIcon,
            name: 'Redesign Brief 2019.pdf',
            size: 159,
          },
          {
            preview: headerIcon,
            name: 'Header.png',
            size: 129,
          },
        ],
        discussions: [
          {
            name: 'Helena Brauer',
            position: 'Designer',
            photo: userU,
            date: 'Yesterday at 12:37pm',
            text:
              'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
          },
          {
            name: 'Prescott MacCaffery',
            position: 'Developer',
            photo: userT,
            date: 'Yesterday at 12:37pm',
            text:
              '@Helena Software quality assurance activity in which one or several humans check a program mainly ',
          },
        ],
      },
      {
        title: 'Two-factor authentication to make my private data more secure',
        createdAt: 'yesterday at 12:00pm',
        assigner: 'Kristin A.',
        asignTo: {
          avatar: userTwo,
          name: 'Louis Freeman',
        },
        dueOn: 'Tue, Apr 18',
        department: 'Design',
        followers: [
          { avatar: userO, name: 'userO' },
          { avatar: userY, name: 'userY' },
        ],
        discussions: [],
      },
    ],
  },
];

const toDo: TasksListType[] = [
  {
    name: 'To Do',
    items: [
      {
        title: 'An option to search in current projects or in all projects',
        createdAt: 'today at 14:00 pm',
        assigner: 'Penelope F.',
        asignTo: {
          avatar: userTh,
          name: 'Abramson Abramson',
        },
        dueOn: 'Tue, Apr 18',
        department: 'Design',
        discussions: [],
      },
      {
        title: 'Account for teams and personal in bottom style',
        createdAt: 'yesterday at 15:41pm',
        assigner: 'Kristin A.',
        asignTo: {
          avatar: userFo,
          name: 'Hoggarth Bowman',
        },
        dueOn: 'Tue, Dec 25',
        department: 'Marketing',
        followers: [{ avatar: userO, name: 'userO' }],
        discussions: [],
      },
      {
        title:
          'Listing on Product Hunt so that we can reach as many potential users',
        createdAt: 'yesterday at 16:00pm',
        assigner: 'Kristin A.',
        asignTo: {
          avatar: userFr,
          name: 'Louis Kendal',
        },
        dueOn: 'Tue, Apr 18',
        department: 'Design',
        followers: [
          { avatar: userO, name: 'userO' },
          { avatar: userY, name: 'userY' },
        ],
        discussions: [],
      },
    ],
  },
];

const INITIAL_TASK_DATA: TaskType = {
  title: 'Find top 5 customer requests',
  createdAt: 'yesterday at 12:41pm',
  assigner: 'Kristin A.',
  asignTo: { avatar: userOne, name: 'Linzell Bowman' },
  dueOn: 'Tue, Dec 25',
  department: 'Marketing',
  followers: [
    { avatar: userO, name: 'userO' },
    { avatar: userY, name: 'userY' },
    { avatar: userS, name: 'userS' },
  ],
  description:
    'Task Descriptions are used during project planning, project execution and project control. During project planning the task descriptions are used for scope planning and creating estimates. During project execution the task description is used by those doing the activities to ensure they are doing the work correctly.',
  files: [
    {
      preview: pdfIcon,
      name: 'Redesign Brief 2019.pdf',
      size: 159,
    },
    {
      preview: headerIcon,
      name: 'Header.png',
      size: 129,
    },
  ],
  discussions: [
    {
      name: 'Helena Brauer',
      position: 'Designer',
      photo: userU,
      date: 'Yesterday at 12:37pm',
      text:
        'During a project build, it is necessary to evaluate the product design and development against project requirements and outcomes',
    },
    {
      name: 'Prescott MacCaffery',
      position: 'Developer',
      photo: userT,
      date: 'Yesterday at 12:37pm',
      text:
        '@Helena Software quality assurance activity in which one or several humans check a program mainly ',
    },
  ],
};

function Tasks() {
  const [task, setTask] = useState<TaskType>(INITIAL_TASK_DATA);

  const handleTaskCardClick = (task: TaskType) => {
    setTask(task);
  };

  const handleTaskCommentChanged = (task: TaskType) => {
    setTask(task);
  };

  return (
    <div className='tasks'>
      <div className='tasks__scrollBar'>
        <div className='tasks__group'>
          <TasksList content={backlog} onTaskClick={handleTaskCardClick} />
          <TasksList content={toDo} onTaskClick={handleTaskCardClick} />
        </div>
      </div>
      <Task task={task} onTaskChanged={handleTaskCommentChanged} />
    </div>
  );
}

export default Tasks;
