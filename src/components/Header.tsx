// import { Filters } from "@/components/filter";
// import Loading from "@/components/Loading";

import { useState } from "react";
import { CreateTask } from "./CreateTask";
import Link from "next/link";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="mx-auto max-w-sm px-4 sm:px-6 lg:max-w-7xl lg:px-6 flex-col flex items-center justify-center">
      <h1 className="text-2xl font-semibold text-white">Tarefas</h1>
      <div className="w-full h-11 mt-8 flex items-center justify-center">
        <input
          // onChange={e => {
          //   setPageNumber(1)
          //   setSearch(e.target.value)
          // }}
          placeholder="Pesquisar"
          type="text"
          name="search"
          autoComplete="off"
          className="bg-white border border-gray-300 focus:ring-gray-500 focus:border-gray-500 block w-96 p-2.5 rounded-md"
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
        {open && <CreateTask setOpen={setOpen} />}
      </div>
    </div>
  )
}