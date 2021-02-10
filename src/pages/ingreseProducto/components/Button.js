import React from 'react'

const outStyle={
  width:'80%',
  height:'30px',
  marginBottom:'10px',
  marginTop:'5px'
}
const btnStyle={
  width:'100%',
  height:'100%',
  borderRadius:'7px',
  background:'rgb(0,100,255)',
  color:'white',
  fontFamily:'Roboto sans-serif',
  fontSize:'15px'
}

export default function Button({ button_title,onClick }) {
  return (
    <div className="forminput_button" style={outStyle}>
      <input type="button" value={button_title} style={btnStyle} onClick={onClick}/>
    </div>
  )
}
