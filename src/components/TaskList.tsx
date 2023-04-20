import React, { useEffect, useState } from 'react';
import { useTaskContext, TaskData } from '../context/TaskContext';
import { Task } from './Task';

export const TaskList: React.FC = () => {
  const { tasks } = useTaskContext();

  if (tasks.length === 0) {
    return <p>Nenhuma tarefa encontrada.</p>;
  }

  console.log(tasks);
  const taskSorted = tasks.sort((a, b) => {
    const aDate = new Date(a.data);
    const bDate = new Date(b.data);

    if (aDate < bDate) {
      return 1;
    } else if (aDate > bDate) {
      return -1;
    } else {
      return 0;
    }
  })

  return (
    <div className="mx-auto max-w-sm px-4 py-8 sm:max-w-3xl  sm:px-6 sm:py-12 lg:max-w-7xl lg:px-8">

      <div className=" grid grid-cols-1 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {taskSorted.map((tasks) => (
          <Task key={tasks.id} task={tasks} />
        ))}
      </div>
    </div>
  );
};