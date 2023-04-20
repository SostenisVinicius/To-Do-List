import React, { Fragment, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { TaskStatus } from '../context/TaskContext';

export function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(' ')
}

interface FilterProps {
  setStatus: (status: string) => void;
  setSearch: (search: string) => void;
}

export function Filters({ setStatus, setSearch }: FilterProps) {
  const [selectedStatus, setSelectedStatus] = useState('');
  console.log(selectedStatus);
  
  if (!setStatus) {
    return (
      <p>Nenhuma tarefa encontrada.</p>
    )
  }

  const handleChange = (status: TaskStatus) => {
    setSelectedStatus(status);
    setStatus(status);
  }

  const clear = () => {
    setSelectedStatus('');
    setStatus('');
    setSearch('');
  };

  return (
    <Listbox value={selectedStatus} onChange={handleChange}>
      {({ open }) => (
        <>
          <div className="relative h-11">
            <Listbox.Button className="relative h-11 w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
              <span className="flex items-center">
                {selectedStatus === TaskStatus.Completed ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#16a34a" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a.75.75 0 10-1.061-1.061 3.5 3.5 0 01-4.95 0 .75.75 0 00-1.06 1.06 5 5 0 007.07 0zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z" clipRule="evenodd" />
                  </svg>
                ) : selectedStatus === TaskStatus.Pending ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="red" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3.536-3.475a.75.75 0 001.061 0 3.5 3.5 0 014.95 0 .75.75 0 101.06-1.06 5 5 0 00-7.07 0 .75.75 0 000 1.06zM9 8.5c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S7.448 7 8 7s1 .672 1 1.5zm3 1.5c.552 0 1-.672 1-1.5S12.552 7 12 7s-1 .672-1 1.5.448 1.5 1 1.5z" clipRule="evenodd" />
                  </svg>
                ) : selectedStatus === TaskStatus.InProgress ? (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="yellow" className="w-6 h-6">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM6.75 9.25a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5z" clipRule="evenodd" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
                  </svg>
                )}
                <span className="ml-3 block truncate">
                  {selectedStatus === '' ? 'Filtrar' : selectedStatus}
                  </span>
              </span>
              <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
                {/* <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                <Listbox.Option
                  key={"isclosed"}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-4 pl-3 pr-9'
                    )
                  }
                  value={""}
                >
                  <div className="flex items-center">
                    <div onClick={()=> clear()} className={classNames(
                      'flex items-center px-4 py-2 mb-1 text-sm rounded-md border border-gray-300 hover:bg-gray-400 hover:text-white'
                    )}>
                      Limpar filtros
                    </div>
                  </div>
                </Listbox.Option>
                <Listbox.Option
                  key={TaskStatus.Completed}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={TaskStatus.Completed}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          onClick={() => setStatus(TaskStatus.Completed)}
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                          {TaskStatus.Completed}
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
                <Listbox.Option
                  key={TaskStatus.InProgress}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={TaskStatus.InProgress}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          onClick={() => setStatus(TaskStatus.InProgress)}
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                          {TaskStatus.InProgress}
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
                <Listbox.Option
                  key={TaskStatus.Pending}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={TaskStatus.Pending}
                >
                  {({ selected }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          onClick={() => setStatus(TaskStatus.Pending)}
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                          {TaskStatus.Pending}
                        </span>
                      </div>
                    </>
                  )}
                </Listbox.Option>
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )
      }
    </Listbox >
  )
}