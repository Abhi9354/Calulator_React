import React from 'react'

const Button = ({value,className,style,fn}) => {
    const classname=`btn btn-${className}`;
    const css = style;
    const clicked=()=>{
        fn(value);
    }
    return (
    
    <button onClick={clicked}className={classname} style={css}>
      {value}
    </button>
  )
}

export default Button
