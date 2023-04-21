// import { Filters } from "@/components/filter";
// import Loading from "@/components/Loading";

import { useState } from "react";
import { CreateTask } from "./CreateTask";
import Link from "next/link";
import { Filters } from "./FilterStatus";

interface HeaderProps {
  search: string
  setSearch?: (search: string) => void
  setStatus?: (status: string) => void
}

export function Header({ search, setSearch, setStatus }: HeaderProps) {
  const [open, setOpen] = useState(false);

  if (!setSearch) {
    return (
      <h1 className="text-2xl font-semibold text-white">Carregando</h1>
    )
  }


  return (
    <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:max-w-7xl lg:px-6 flex-col flex items-center justify-center">
      {open && <CreateTask setOpen={setOpen} />}
      <h1 className="text-3xl  font-semibold text-white">Tarefas</h1>
      <div className="flex flex-col items-center justify-center">
        <div className="flex mt-4 items-center sm:hidden">
          <input
            onChange={e => {
              setSearch(e.target.value)
            }}
            placeholder="Pesquisar"
            defaultValue={""}
            value={search}
            type="text"
            name="search"
            autoComplete="off"
            className="bg-white w-full text-gray-700 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block  p-2.5 rounded-md"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#323232"
            className="w-6 h-6 -ml-8">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <div className="w-full h-11 mt-4 sm:mt-8 flex items-center justify-center">
          <div className="hidden w-full min-w-min items-center justify-center sm:flex">
            <input
              onChange={e => {
                setSearch(e.target.value)
              }}
              placeholder="Pesquisar"
              defaultValue={""}
              value={search}
              type="text"
              name="search"
              autoComplete="off"
              className="bg-white w-full max-w-sm text-gray-700 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block  p-2.5 rounded-md"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="#323232"
              className="w-6 h-6 -ml-8 mr-4 sm:mr-4 md:mr-4 lg:mr-4 xl:mr-4">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <button
            type="button"
            className="inline-flex h-11 justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
            onClick={() => setOpen(true)}
          >
            <span className="hidden sm:inline">Adicionar</span>
            <span className="inline sm:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
            </span>
          </button>
          <Link href="/" className="mx-2">
            <button
              type="button"
              className="inline-flex w-full h-11 justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:mx sm:w-auto"
            >
              <span className="hidden sm:inline">Listar tarefas</span>
              <span className="inline sm:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </span>
            </button>
          </Link>
          {setStatus && <Filters setStatus={setStatus} setSearch={setSearch} />}
        </div>
      </div>
    </div>
  )
}