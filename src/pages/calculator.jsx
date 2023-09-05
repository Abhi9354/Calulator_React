import React, { useState } from 'react'
import Button from '../components/Button'
import Message from '../components/Message'
const Calculator = () => {
    //let val= 0;
    
    const[value,setValue]=useState('');
   // const lastIndexValue=value.length-1;
  
  const logic=(ButtonValue)=>{
  setValue(value+ButtonValue);
      
    }

     const [result,setResult]=useState();
     const res_logic= ()=>{
      setResult(eval(value));

     }
  const ac_logic=()=>{
    setValue("");
    setResult(0);
    
  }
  
    return (
    
   
   <div className="container text-center "style={{width:"400px",height:"100px"}}>
    <h1>CALCULATOR</h1>
    <div style={{ wordWrap:"break-word",paddingRight:"1vh",width:"360px",height:"110px",border:"1px solid black", textAlign:"right"}}>
    <Message  text='ans=' CountValue={result}/>
    <Message   CountValue={value}/>
    
    </div>
    <div className='row row-cols-5'>
                <Button fn={logic} value="(" className="secondary " style={{margin : "1vh"}}/>
                <Button fn={logic} value=")" className="secondary" style={{margin : "1vh"}}/>
                <Button fn={logic} value="%" className="secondary" style={{margin : "1vh"}} />
                <Button fn={ac_logic} value="AC" className="secondary" style={{margin : "1vh"}}/>
                <Button fn={logic} value="7" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="8" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="9" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="/" className="secondary" style={{margin : "1vh"}}/>
                <Button fn={logic} value="4" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="5" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="6" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="*" className="secondary" style={{margin : "1vh"}}/>
                <Button fn={logic} value="1" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="2" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="3" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="-" className="secondary" style={{margin : "1vh"}}/>
                <Button fn={logic} value="0" className="dark" style={{margin : "1vh"}}/>
                <Button fn={logic} value="." className="dark" style={{margin : "1vh"}}/>
                <Button fn={res_logic} value="=" className="primary" style={{margin : "1vh"}}/>
                <Button fn={logic} value="+" className="secondary" style={{margin : "1vh"}}/>
       
        </div>
        </div>
        
    
    
  )
}

export default Calculator
