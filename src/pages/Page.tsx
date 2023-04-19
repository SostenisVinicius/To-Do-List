import React from 'react';
import { TaskList } from '@/components/TaskList';
import { CreateTask } from '@/components/CreateTask';
import { Header } from '@/components/Header';

export function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-16">
      <div className="flex flex-col items-center justify-center">
        <Header/>
        <TaskList />
        <CreateTask />
      </div>
    </main>
  )
}
