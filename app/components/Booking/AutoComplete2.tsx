import React from 'react'

const AutoComplete2 = () => {
  return (
    <div className="flex flex-col gap-2 border-2 border-gray-700 p-2" >
        <input type="text" placeholder="From To" className="p-2  border border-gray-700" />
        <input type="text" placeholder="Where To" className="p-2 border border-gray-700" />
    </div>
  )
}

export default AutoComplete2