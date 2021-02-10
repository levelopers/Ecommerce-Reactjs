import React from 'react'

const style={
  fontSize:'15px',
  marginBottom:'30px'
}

export default function footer({content}) {
  return (
    <div className="footer" style={style}>
      {content}
    </div>
  )
}

