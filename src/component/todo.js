import { useState } from 'react';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


const Todo = () => {
    const [text, setText] = useState("");
    const [list, setList] = useState([]);

    const handlechange = (event) => {
        setText(event.target.value);
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        let temp = list;
        temp.push(text);
        setList(temp); 
        console.log(list);
        setText("");
        // console.log (`${text}`)
    }

        {/* <form onSubmit={handleSubmit}>
        <label>
            List:
            <br></br>
            <input type = "text" value = {text} onChange={handlechange}/>
        </label>
        <label>
            <button type = "submit">Add Items</button>
        </label>
        </form>
        {list.map((event)=>
        (<h3>{event}</h3>))} */}
            
    return(
        <div>
    
        </div>
    )
        
    
    }



export default Todo;
