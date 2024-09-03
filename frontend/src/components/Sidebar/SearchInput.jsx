import React from 'react'
import { Button, TextInput } from "flowbite-react";


const SearchInput = () => {
  return (
    <div >
      <form>
        <div className='flex border border-b-2 '>
          <div className='w-[70%] ml-4 my-3'>
            <TextInput type="text"  placeholder="search..."  sizing="md" required />
          </div>
          <div className='mx-2 my-3' >
            <Button type="submit" color="blue" sizing="sm" className='py-0.5 text-sm'>Search</Button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default SearchInput
