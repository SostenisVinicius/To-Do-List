import React, { useState } from 'react';
import moment from 'moment';
import { TaskData, TaskStatus, useTaskContext } from '@/context/TaskContext';
import { CreateTask } from './CreateTask';
import Link from 'next/link';

interface TaskProps {
  task: TaskData;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  const { editTask, removeTask, tasks } = useTaskContext();
  const [editing, setEditing] = useState(false);

  const formattedDate = moment(task.data).format('DD/MM/YYYY');

  const handleImportanteChange = () => {
    const updatedTask: TaskData = {
      id: task.id,
      title: task.title,
      status: task.status,
      descricao: task.descricao,
      importante: !task.importante,
      data: task.data
    };
    console.log(updatedTask);
    editTask(task.id, updatedTask);
  }

  const handleStatusChange = (newStatus: TaskStatus) => {
    const updatedTask: TaskData = {
      id: task.id,
      title: task.title,
      status: newStatus,
      descricao: task.descricao,
      importante: task.importante,
      data: task.data
    };
    editTask(task.id, updatedTask);
  }

  const handleDeleteClick = () => {
    removeTask(task.id);
  };

  return (
    <div className="bg-white m-4 mx-auto min-w-full px-4 pt-4 pb-8 rounded-md overflow-hidden sm:px-6 sm:pt-8 sm:pb-12 lg:max-w-7xl lg:px-8">
      {editing && <CreateTask setOpen={setEditing} task={task} />}
      <div className="flex flex-row items-start justify-between">
        <Link href={`/task/${task.id}`}>
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">{task.title}</h2>
        </Link>

        <div className="flex items-center">
          <button type="button" title={task.importante ? 'Importante' : 'Não importante'} onClick={handleImportanteChange} className='mx-1'>
            {task.importante ?
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
              </svg>
              :
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
              </svg>
            }
          </button>
          <button type='button' title='Deletar' onClick={handleDeleteClick} className='mx-1'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#111827" className="w-5 h-5 hover:fill-black">
              <path fillRule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clipRule="evenodd" />
            </svg>
          </button>
          <button type='button' title='Editar' onClick={() => setEditing(!editing)} className='mx-1 hover:'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#111827" className="w-5 h-5 hover:fill-black">
              <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
            </svg>
          </button>
        </div>
      </div>

      <div className='flex flex-col items-start justify-start'>
        <Link href={`/task/${task.id}`}>
          <h3 className="mt-2 w-full text-sm h-16 font-medium text-gray-900">{task.descricao}</h3>
        </Link>
      </div>

      <div className="flex flex-row items-center justify-between mt-6">
        {task.status === TaskStatus.Pending ? (
          <button type='button' title='Pendente' onClick={() => handleStatusChange(TaskStatus.InProgress)} className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="w-6 h-6">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">{task.status}</p>
          </button>
        ) : task.status === TaskStatus.InProgress ? (
          <button type='button' title='Em andamento' onClick={() => handleStatusChange(TaskStatus.Completed)} className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="yellow" className="w-6 h-6">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">{task.status}</p>
          </button>
        ) : (
          <button type='button' title='Concluída' onClick={() => handleStatusChange(TaskStatus.Pending)} className='flex items-center'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#16a34a" className="w-6 h-6">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z" clipRule="evenodd" />
            </svg>
            <p className="ml-2 text-sm text-gray-700">{task.status}</p>
          </button>
        )}
        <div className="flex flex-row items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#111827" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
          </svg>
          <p className="ml-2 text-sm text-gray-700">{formattedDate}</p>
        </div>
      </div>
    </div>
  );
};
