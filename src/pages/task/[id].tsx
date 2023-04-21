import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { TaskData } from "../../context/TaskContext";
import { Header } from "../../components/Header";
import { Task } from "../../components/Task";

export default function TaskById() {
  const { query } = useRouter();
  const { id } = query;

  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  const [task, setTask] = useState<TaskData>();

  useEffect(() => {
    const localTasks = localStorage.getItem('tasks');
    if (localTasks) {
      const localTaskParse = JSON.parse(localTasks);
      const task = localTaskParse.find((task: TaskData) => task.id === Number(id));
      setTask(task);
    }
  }, [id]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col items-center justify-center">
        <Header search={search} setSearch={setSearch} setStatus={setStatus} />
        <div className="m-4 mx-auto min-w-full px-4 pt-4 pb-8 rounded-md overflow-hidden sm:px-6 sm:pt-8 sm:pb-12 lg:max-w-7xl lg:px-8 ">
          {task && <Task task={task} />}
        </div>
      </div>
    </main >
  )
}