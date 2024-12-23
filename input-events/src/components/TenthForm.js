import React, { useEffect, useRef } from 'react'

function TenthForm() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();

    let telInputRef = useRef();
    let hinInputRef = useRef();
    let engInputRef = useRef();
    let mathsInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();

    let resultLabelRef = useRef();

    let telSpanResultRef = useRef();
    let hinSpanResultRef = useRef();
    let engSpanResultRef = useRef();
    let mathsSpanResultRef = useRef();
    let sciSpanResultRef = useRef();
    let socSpanResultRef = useRef();


    useEffect(()=>{
        console.log("TenthForm component is loaded")
    }, []);




  return (
    <div className='App'>
        <form>
        <h1>MarkSheet Form</h1>
      <div>
        <label>First name</label>
        <input ref={firstNameInputRef} 
        onFocus={()=>{
            firstNameInputRef.current.style.backgroundColor = "yellow";
        }}
        onChange={()=>{
            firstNameInputRef.current.style.backgroundColor = "#7FA1C3"
        }} 
        onBlur={()=>{
            firstNameInputRef.current.style.backgroundColor = "";
        }}></input>
      </div>
      <div>
        <label>Last name</label>
        <input ref={lastNameInputRef} 
        onFocus={()=>{
            lastNameInputRef.current.style.backgroundColor ="yellow"
        }}
        onChange={()=>{
            lastNameInputRef.current.style.backgroundColor = "#7FA1C3"
        }} 
        onBlur={()=>{
            lastNameInputRef.current.style.backgroundColor = "";
        }}></input>
      </div>
      <div>
        <label>Telugu</label>
        <input ref={telInputRef}
        onFocus={()=>{
            console.log("tel onFocus")
            telInputRef.current.style.backgroundColor = "yellow"
        }} 
        onChange={()=>{
            console.log("tel onChange")
            telInputRef.current.style.backgroundColor = "#7FA1C3";

            let marks = telInputRef.current.value;
            telSpanResultRef.current.innerHTML = marks >= 35 ? "Pass😎" : "Fail😢";

            telSpanResultRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
        }} 
        onBlur={()=>{
            console.log("tel onBlur")
            telInputRef.current.style.backgroundColor = "";
        }}></input>
        <span ref={telSpanResultRef}></span>
      </div>
      <div>
        <label>Hindi</label>
        <input ref={hinInputRef} 
        onFocus={()=>{
            hinInputRef.current.style.backgroundColor ="yellow";
        }}
        onChange={()=>{
            hinInputRef.current.style.backgroundColor = "#7FA1C3"

            let marks = hinInputRef.current.value;
            hinSpanResultRef.current.innerHTML = marks >= 35 ? "Pass😎" : "Fail😢";

            hinSpanResultRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
        }} 
        onBlur={()=>{
            hinInputRef.current.style.backgroundColor = "";
        }}></input>
        <span ref={hinSpanResultRef}></span>
      </div>
      <div>
        <label>English</label>
        <input ref={engInputRef} 
        onFocus={()=>{
            engInputRef.current.style.backgroundColor = "yellow"
        }}
        onChange={()=>{
            engInputRef.current.style.backgroundColor = "#7FA1C3"

            let marks = engInputRef.current.value;
            engSpanResultRef.current.innerHTML = marks >= 35 ? "Pass😎" : "Fail😢";

            engSpanResultRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
        }}
        onBlur={()=>{
            engInputRef.current.style.backgroundColor = "";
        }}></input>
        <span ref={engSpanResultRef}></span>
      </div>
      <div>
        <label>Mathematics</label>
        <input ref={mathsInputRef} 
        onFocus={()=>{
            mathsInputRef.current.style.backgroundColor = "yellow";
        }} 
        onChange={()=>{
            mathsInputRef.current.style.backgroundColor = "#7FA1C3"

            let marks = mathsInputRef.current.value;
            mathsSpanResultRef.current.innerHTML = marks >= 35 ? "Pass😎" : "Fail😢";

            mathsSpanResultRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
        }}
        onBlur={()=>{
            mathsInputRef.current.style.backgroundColor = "";
        }}></input>
        <span ref={mathsSpanResultRef}></span>
      </div>
      <div>
        <label>Science</label>
        <input ref={sciInputRef} 
        onFocus={()=>{
            sciInputRef.current.style.backgroundColor = "yellow";
        }} 
        onChange={()=>{
            sciInputRef.current.style.backgroundColor = "#7FA1C3"

            let marks = sciInputRef.current.value;
            sciSpanResultRef.current.innerHTML = marks >= 35 ? "Pass😎" : "Fail😢";

            sciSpanResultRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
        }}
        onBlur={()=>{
            sciInputRef.current.style.backgroundColor = "";
        }}></input>
        <span ref={sciSpanResultRef}></span>
      </div>
      <div>
        <label>Social</label>
        <input ref={socInputRef} 
        onFocus={()=>{
            socInputRef.current.style.backgroundColor = "yellow";
        }} 
        onChange={()=>{
            socInputRef.current.style.backgroundColor = "#7FA1C3"

            let marks = socInputRef.current.value;
            socSpanResultRef.current.innerHTML = marks >= 35 ? "Pass😎" : "Fail😢";

            socSpanResultRef.current.style.backgroundColor = marks >= 35 ? "green" : "red";
        }}
        onBlur={()=>{
            socInputRef.current.style.backgroundColor = "";
        }}></input>
        <span ref={socSpanResultRef}></span>
      </div>
      <div className='innerButton'>
        <button type="button" onClick={ () => {

            let firstName = firstNameInputRef.current.value;
            let lastName =  lastNameInputRef.current.value;

            let telMarks = Number(telInputRef.current.value);
            let hinMarks = Number(hinInputRef.current.value);
            let engMarks = Number(engInputRef.current.value);
            let mathsMarks = Number(mathsInputRef.current.value);
            let sciMarks = Number(sciInputRef.current.value);
            let socMarks = Number(socInputRef.current.value);

            let totalMarks = telMarks+hinMarks+engMarks+mathsMarks+sciMarks+sciMarks+socMarks;

            resultLabelRef.current.innerHTML = `${firstName} ${lastName} got total marks are ${totalMarks}`
            
            
            }}>Calculate</button>
      </div>
      <label className='innerLabel' ref={resultLabelRef}>Result Here</label>
      </form>
    </div>
  )
}

export default TenthForm
