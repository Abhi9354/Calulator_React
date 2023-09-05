import React from 'react'

const Message = ({style,CountValue,text}) => {
  //const size=style;

  return (

    <div style={style} >
      <h2>{text}{CountValue}</h2>  
    </div>
  )
}

export default Message
