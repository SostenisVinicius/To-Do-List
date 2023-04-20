import React, { Fragment, useEffect, useState } from 'react';
import { Transition, Dialog } from "@headlessui/react";
import { useTaskContext, TaskStatus, TaskData } from '../context/TaskContext';

interface CreateTaskProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  edit?: boolean;
  task?: TaskData;
}
export function CreateTask({ setOpen, edit, task }: CreateTaskProps) {
  const { addTask, tasks, editTask } = useTaskContext();
  const [title, setTitle] = useState('');
  const [newDescription, setNewDescription] = useState('');
  const [newImportance, setNewImportance] = useState(false);
  const [newStatus, setNewStatus] = useState(TaskStatus.Pending);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newTaskData: TaskData = {
      id: Date.now(),
      title: title,
      descricao: newDescription,
      importante: newImportance,
      status: newStatus,
      data: new Date(),
    }

    addTask(newTaskData);

    setTitle('');
    setNewDescription('');
    setNewImportance(false);
    setNewStatus(TaskStatus.Pending);
    setOpen(false);
  };

  useEffect(() => {
    if (task && task.descricao) {
      setTitle(task.title);
      setNewDescription(task.descricao);
      setNewImportance(task.importante);
      setNewStatus(task.status);
    }
  }, [task])

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    if (task) {
      const updatedTask: TaskData = {
        id: task.id,
        title: title,
        status: newStatus,
        descricao: newDescription,
        importante: newImportance,
        data: new Date()
      };
      editTask(task.id, updatedTask);
      setOpen(false);
    }
  };

  const handleClose = () => {
    setOpen(false);
  }

  return (
    <div>
      <Transition.Root show={true} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={handleClose}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div className="sm:flex sm:items-start sm:justify-between">
                      <Dialog.Title as="h3" className="text-xl font-semibold leading-6 text-gray-900">
                        {task ? 'Editar Tarefa' : 'Criar uma Tarefa'}
                      </Dialog.Title>
                      <button type="button" onClick={handleClose}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </div>

                    <div className="mt-8">
                      <form onSubmit={task ? handleUpdate : handleSubmit}>
                        <div className="sm:col-span-4">
                          <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">
                            Título
                          </label>
                          <div className="mt-2">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 hover:ring-1 hover:ring-inset hover:ring-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                              placeholder='Ex.: Arrumar a casa'
                              defaultValue={task ? task.title : ''}
                              value={title}
                              onChange={(e) => setTitle(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="sm:col-span-3 w-full mt-4">
                          <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">
                            Descrição (opcional)
                          </label>
                          <div className="mt-1">
                            <textarea
                              id="description"
                              name="description"
                              rows={3}
                              className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 hover:ring-1 hover:ring-inset hover:ring-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 sm:text-sm sm:leading-6"
                              placeholder='Ex.: Limpar quartos e banheiros'
                              value={newDescription}
                              onChange={(e) => setNewDescription(e.target.value)}
                            />
                          </div>
                        </div>
                        <div className="flex flex-row mt-4">
                          <div className="sm:col-span-3">
                            <label htmlFor="status" className="block text-sm font-medium leading-6 text-gray-900">
                              Status
                            </label>
                            <div className="mt-1">
                              <select
                                id="status"
                                name="status"
                                autoComplete="status-name"
                                className="block w-full h-9 rounded-md border-0 p-4 py-1.5 text-gray-900 hover:ring-1 hover:ring-inset hover:ring-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-gray-500 sm:max-w-xs sm:text-sm sm:leading-6"
                                value={newStatus}
                                // @ts-ignore
                                onChange={(e) => setNewStatus(e.target.value)}
                              >
                                <option>{TaskStatus.Completed}</option>
                                <option>{TaskStatus.InProgress}</option>
                                <option>{TaskStatus.Pending}</option>
                              </select>
                            </div>
                          </div>
                          <div className="sm:col-span-3 flex items-center ml-4">
                            {newImportance ? (
                              <div className="flex flex-row items-center gap-x-3 mt-6">
                                <button type="button" onClick={(e) => setNewImportance(false)}>
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                                  </svg>
                                </button>
                                <h2 className="text-sm font-medium leading-6 text-gray-900">
                                  Importante
                                </h2>
                              </div>
                            )
                              :
                              (
                                <div className="flex flex-row items-center gap-x-3 mt-6">
                                  <button type="button" onClick={(e) => setNewImportance(true)}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z" />
                                    </svg>
                                  </button>
                                  <h2 className="text-sm font-medium leading-6 text-gray-900">
                                    Não Importante
                                  </h2>
                                </div>
                              )
                            }
                          </div>
                        </div>

                        <div className="bg-gray-50 w-full pt-3 py-3 sm:flex sm:flex-row-reverse sm:col-span-3 mt-4">
                          <button
                            type="submit"
                            className="justify-center rounded-md bg-red-600 py-2 text-base font-semibold text-white shadow-sm hover:bg-red-500 sm:w-full"
                          >
                            {task ? 'Editar Tarefa' : 'Adicionar Tarefa'}
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div >
        </Dialog >
      </Transition.Root >
    </div >
  );
};