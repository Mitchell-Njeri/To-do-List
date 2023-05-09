import {useState} from 'react';

const Todo =()=> {
    const  [text,setText]=useState("");

    // const handlechange=(event)=>{
    //     setText(event.target.value);
    // }
    const handleSubmit=(event)=>{
        event.preventDefault();
        console.log (`${text}`)
    }

return (
    <div>
        <form onSubmit={handleSubmit}>
        <label>
            List:
            <br></br>
            <input type = "text" value = {text} onChange={(event) => setText(event.target.value)}/>
        </label>
        <label>
            <button type = "submit">Add Items</button>
        </label>
        </form>
    </div>
)
}
export default Todo;