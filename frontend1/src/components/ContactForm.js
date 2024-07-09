import {useState,useEffect} from "react";

function ContactForm(props){
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [Message,setMessage]=useState("props.messageValue");

    useEffect(()=>{
        const email=localStorage.getItem('email');
        const name=localStorage.getItem('name');
        setName(name)
        setEmail(email)
    },[])
    const arr=[Name,Email,Message];
    const handleClick=()=>{
        props.getState(arr);
    }
    return(
        <div style={{ maxWidth: "40%", margin: "0px auto" }}>
        <input value={Name} class="form-control my-3" placeholder="Enter your name" readOnly/>
        <input value={Email} class="form-control my-3" placeholder="Enter your email" readOnly/>
        <textarea defaultValue={props.messageValue} onChange={(event) => setMessage(event.target.value)} class="form-control my-3" placeholder="Enter Message"></textarea>
        <button onClick={handleClick} class="btn btn-outline-primary my-3 d-block mx-auto" type="submit">Submit</button>
</div>

        )
}
export default ContactForm;