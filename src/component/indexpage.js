import React from 'react'
import PageList from './PageList'

export default function Indexpage({setIsList}) {
  return (
    <div>
      {/* User List Start */}
      <PageList setIsList={setIsList}/>
      {/* User List End */}
    </div>
  )
}
