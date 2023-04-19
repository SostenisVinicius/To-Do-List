import React, { useEffect, useState } from 'react';
import { useTaskContext, TaskData } from '../context/TaskContext';
import { Task } from './Task';

export const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  console.log(tasks);

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-white font-medium">Lista de Tarefas</h2>

        <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {tasks.map((tasks) => (
            <Task key={tasks.id} task={tasks} />
          ))}
        </div>
      </div>
    </div>
  );
};