import { useState } from "react"

const LettersCalculator = () =>{
    const [text,setText] = useState('')
    const [count,setcount] = useState(0)
     const handleTextChange =(event) =>{
        const newText = event.target.value;
        setText(newText);
        setcount(newText.length);
     };
     return(
        <div className="d-flex flex-row card2 w-75 bg-success">
            <div className="" style={{margin:"10%",padding:"10%"}}>
                <h1>Calculater the <br/> letter you <br/> enter</h1>
                <p>Enter the phrase</p>
                <input value={text} onChange={handleTextChange} className="input"/><br/><br/>
                <button className="">no.of Letter:{count}</button>
            </div>
            <img src=""/>
        </div>
     )
};
export default LettersCalculator;