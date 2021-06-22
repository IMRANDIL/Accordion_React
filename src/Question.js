import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
const Question = ({title,info}) => {
  const [shwoInfo, setShowInfo] = useState(false);
  return <article className="question">
    <header>
      <h4>{title}</h4>
      <button className="btn" onClick={()=>setShowInfo(!shwoInfo)}>
{shwoInfo ? <AiOutlineMinus/> : <AiOutlinePlus/>}
      </button>
    </header>
    {shwoInfo &&  <p>{info}</p>}
   
  </article>
};

export default Question;
