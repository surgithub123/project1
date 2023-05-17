import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

const Myapi3 =() =>{
    let[alluser, updateuser] = useState( [] );
    const getuser = () =>{
        fetch("http://localhost:1234/user")
        .then(ServerResponse =>ServerResponse.json())
        .then(userArray=>{
            updateuser(userArray);
        })
    }
    useEffect(()=>{
        getuser();
    },[1])
    let[newuser, pickName] = useState("");
    const save =()=>{
        let url = "http://localhost:1234/user";
        let usertdata = {name:newuser};
        let postdata = {
            headers:{'content-type':'application/json'},
            method:"POST",
            body: JSON.stringify(usertdata)
        }
        fetch(url,postdata)
        .then(Response=>Response.json())
        .then(companyinfo =>{
            toast(newuser + " save successfully...");
            pickName(""); // reset the newcompany by empty
            getuser();// to reload the lidt
        })
    }

    const deleteuser = (cid) =>{
        let url = "http://localhost:1234/user/"+cid;
        let postData = {method : "DELETE"};
        fetch(url,postData)
        .then(Response=>Response.json())
        .then(serverRes=>{
         toast("The user id : "+cid + " Deleted Successfully !");
         getuser();
        })
     }
    return(
        <div className="container">
            <ToastContainer/>
            <h1 className=" center red">
                fetch(), useState(), useeffect(), get, post, delete Example
                
            </h1>
            <p className="center">
                new user :<input type="text" className="m10" onChange={obj=>pickName(obj.target.value)} value={newuser}/>

                <button className="m10" onClick={save}>Save  user</button><br/>

                Total users: {alluser.length}
             </p>
            {
                alluser.map((cinfo, index)=>{
                    return(
                        <p className="four center blue" key={index}>
                            {cinfo.id} . {cinfo.name}
                            <br/>
                            <button onClick={deleteuser.bind(this, cinfo.id)}>Delete</button>
                        </p>
                    )
                })
            }
            
        </div>
    )
}

export default Myapi3;