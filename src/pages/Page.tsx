import React, { useState } from 'react';
import { TaskList } from '@/components/TaskList';
import { Header } from '@/components/Header';
import TaskById from './task/[id]';

export function Page() {
  const [search, setSearch] = useState('');
  const [status, setStatus] = useState('');

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex flex-col items-center justify-center">
        <Header search={search} setSearch={setSearch} setStatus={setStatus}/>
        <TaskList search={search} status={status}/>
      </div>
    </main>
  )
}
