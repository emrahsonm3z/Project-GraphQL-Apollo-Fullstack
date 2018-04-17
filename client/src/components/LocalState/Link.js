// --------------------------------------- Global Imports --
import React from 'react'

// -------------------------------------- Link Component --
const Link = ({ active, children, onClick }) => {
  if (active) {
    return <span>{children}</span>
  }

  return (
    // eslint-disable-next-line
    <a
      href="#"
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

export default Link
