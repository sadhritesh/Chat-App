import React from 'react'
import MessageContainer from '../../components/messages/MessageContainer.jsx'
import Sidebar from '../../components/Sidebar/Sidebar.jsx'


const Home = () => {
  return (
    <div className='bg-white-300 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-20 border border-gray-100 w-[50rem]'>
      <div className='flex flex-row'>
        <div className='w-[40%] border'>
            <Sidebar/>
        </div>
        <div className='w-[60%] border'>
            <MessageContainer />
        </div>
      </div>
    </div>
  )
}

export default Home
