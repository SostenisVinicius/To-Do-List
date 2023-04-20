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
    <div className="mx-auto max-w-sm px-4 sm:px-6 lg:max-w-7xl lg:px-6 flex-col flex items-center justify-center">
      {open && <CreateTask setOpen={setOpen} />}
      <h1 className="text-2xl font-semibold text-white">Tarefas</h1>
      <div className="w-full h-11 mt-8 flex items-center justify-center">
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
          className="bg-white text-gray-700 border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-96 p-2.5 rounded-md"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="#323232"
          className="w-6 h-6 -ml-8 mr-16">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
          />
        </svg>
        <button
          type="button"
          className="inline-flex w-full h-11 justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setOpen(true)}
        >
          Adicionar
        </button>
        <Link href="/">
          <button
            type="button"
            className="inline-flex mx-2 w-full h-11 justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          >
            Listar tarefas
          </button>
        </Link>
        {/* <button
          type="button"
          className="inline-flex w-full h-11 justify-center items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
          onClick={() => setFilterOpen(true)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="black" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z" />
          </svg>

          Filtrar status
        </button> */}
        {setStatus && <Filters setStatus={setStatus} setSearch={setSearch} />}
      </div>
    </div>
  )
}