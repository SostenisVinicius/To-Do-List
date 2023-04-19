import { TaskProvider } from '@/context/TaskContext';
import { Page } from './Page';

export default function Home() {
  return (
    <TaskProvider>
      <Page />
    </TaskProvider>
  )
}
