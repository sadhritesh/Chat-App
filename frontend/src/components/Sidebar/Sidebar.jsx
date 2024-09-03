import React from 'react'
import SearchBar from './SearchInput.jsx'
import Conversations from './Conversations.jsx'
import LogoutButton from './LogoutButton.jsx'

const Sidebar = () => {
  return (
    <div>
      <SearchBar/>
      <Conversations/>
      <LogoutButton/>
    </div>
  )
}

export default Sidebar
