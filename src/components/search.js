import React from 'react'

export default function Search() {
  return (
    <form>   
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-100 sr-only dark:text-gray-900">Search</label>
        <div class="relative">
            <div class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
                <input type="search" id="default-search" class="block p-2 mt-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-xl    dark:bg-gray-200 dark:border-gray-200 dark:placeholder-gray-400 dark:text-black dark:focus:ring-gray-500 dark:focus:border-gray-500" placeholder="Search" required/>
                
        </div>
    </form>
  )
}
