import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Myhook1 = ()=>{
   // console.log(useState() ); 
    let[xyz, abc]= useState( 100 );  
    const one =() =>{
        abc(xyz+10);
    }
    const two = ()=>{
        abc(xyz-5);
    }
    let[city, updateCity] = useState(["Delhi", "Hyderabad","Mumbai","Bangalore","Pune","Chennai"]);
     const save =()=>{
        updateCity( city = [...city, "test City"]);
        toast("city added sucessfully");
     }
    return(
        <div className="container center">
            <ToastContainer/>
            <h1 className="red">
                What is useState() How to useState() ?
            </h1>
            <h1> The Value is :{xyz} </h1>
            <button onClick={one}> click to increse by 10 </button>
            <button onClick={two}> click to decrese by 5 </button> 
            <h1>The total City :{city.length}</h1>
            <button onClick={save}>Add new City</button>
            {
                city.map((name,index)=>{
                    return(
                        <p key={index}> {name} </p>
                    )
                })
            } 
        </div>
    )
}
export default Myhook1;