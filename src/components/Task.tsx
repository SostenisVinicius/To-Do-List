import React, { useEffect, useState } from 'react';
import { TaskData, TaskStatus, useTaskContext } from '@/context/TaskContext';

interface TaskProps {
  task: TaskData;
}

export const Task: React.FC<TaskProps> = ({ task }) => {
  console.log(task);
  const { editTask, removeTask } = useTaskContext();
  const [editing, setEditing] = useState(false);
  const [updatedTitle, setUpdatedTitle] = useState(task.title);
  const [updatedDesc, setUpdatedDesc] = useState(task.descricao);
  const [updatedImportante, setUpdatedImportante] = useState(task.importante);
  const [updatedDate, setUpdatedDate] = useState(task.data);

  const handleStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const updatedTask: TaskData = {
      id: task.id,
      title: updatedTitle,
      status: e.target.value as TaskStatus,
      descricao: task.descricao,
      importante: task.importante,
      data: task.data
    };
    editTask(task.id, updatedTask);
  };

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUpdatedTitle(e.target.value);
  };

  const handleEditClick = () => {
    setEditing(true);
  };

  const handleSaveClick = () => {
    const updatedTask: TaskData = {
      id: task.id,
      title: updatedTitle,
      status: task.status,
      descricao: updatedDesc,
      importante: updatedImportante,
      data: updatedDate
    };
    editTask(task.id, updatedTask);
    setEditing(false);
  };

  const handleDeleteClick = () => {
    removeTask(task.id);
  };

  return (
    // <div>
    //   {editing ? (
    //     <input
    //       type="text"
    //       value={updatedTitle}
    //       onChange={handleTitleChange}
    //     />
    //   ) : (
    //     <div className="bg-white">
    //       <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
            
    //         <h2 className="text-2xl font-bold tracking-tight text-gray-900">{task.title}</h2>

    //         <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
    //           <h3 className="mt-4 text-sm text-gray-700">{task.title}</h3>
    //           <p className="mt-1 text-lg font-medium text-gray-900">{task.status}</p>
    //         </div>
    //       </div>
    //     </div>
    //   )}
    //   <select value={task.status} onChange={handleStatusChange}>
    //     <option value={TaskStatus.Pending}>Pendente</option>
    //     <option value={TaskStatus.InProgress}>Em andamento</option>
    //     <option value={TaskStatus.Completed}>Concluída</option>
    //   </select>
    //   {editing ? (
    //     <button onClick={handleSaveClick}>Salvar</button>
    //   ) : (
    //     <button onClick={handleEditClick}>Editar</button>
    //   )}
    //   <button onClick={handleDeleteClick}>Excluir</button>
    // </div>
      <div className="bg-white m-4 mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">{task.title}</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <div className='flex flex-col items-start justify-start'>
              <h3 className="mt-1 text-lg font-medium text-gray-900">{task.descricao}</h3>
              <p className="mt-4 text-sm text-gray-700">{task.status}</p>
          </div>
        </div>
      </div>
  );
};
