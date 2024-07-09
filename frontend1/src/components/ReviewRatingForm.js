import {useState,useEffect} from "react";

function ContactForm(props){
    const [name,setname]=useState("");
    const [email,setemail]=useState("");
    const [HotalRating,sethotalrating]=useState("props.hotalratingValue");
    const [HotalReview,sethotalreview]=useState("props.hotalreviewValue");
    useEffect(()=>{
        const email=localStorage.getItem('email');
        const name=localStorage.getItem('name');
        setname(name)
        setemail(email)
    },[])

    const arr=[name,email,HotalRating,HotalReview];
    const handleClick=()=>{
        props.getState(arr);
    }
    return(
        
       <div>
        <h1 style={{color:"skyblue",textAlign:"center"}}><span style={{color:"pink"}}>1-poor</span> <span style={{color:"orange"}}>2-below average</span>  <span style={{color:"skyblue"}}>3-average </span> <span style={{color:"green"}}>4-Good</span> <span style={{color:"yellow"}}>5-Excellent</span> </h1>
        <p style={{color:"white",textAlign:"center",fontWeight:"bold",fontSize:"20px"}}>Enter Ratings(1-5)</p>
         <div style={{ maxWidth: "40%", margin: "0px auto" }}>
        <input value={name} class="form-control my-3" placeholder="Enter your name" />
        <input value={email} class="form-control my-3" placeholder="Enter your email" />
        <textarea defaultValue={props.hotalratingValue} onChange={(event) => sethotalrating(event.target.value)} class="form-control my-3" placeholder="Rating (1-5)"></textarea>
        <textarea defaultValue={props.hotalreviewValue} onChange={(event) => sethotalreview(event.target.value)} class="form-control my-3" placeholder="Review"></textarea>
        <button onClick={handleClick} class="btn btn-info my-3 d-block mx-auto" type="submit">Submit</button>
</div>

       </div>
        )
}
export default ContactForm;