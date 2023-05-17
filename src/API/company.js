import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Myapi1 =() =>{
    let[allcompany, updateCompany] = useState( [] );
    const getcompany = () =>{
        fetch("http://localhost:1234/company")
        .then(ServerResponse =>ServerResponse.json())
        .then(companyArray=>{
            updateCompany(companyArray);
        })
    }
    useEffect(()=>{
        getcompany();
    },[1])
    let[newcompany, pickName] = useState("");
    let[city,pickCity] = useState("");
    const save =()=>{
        let url = "http://localhost:1234/company";
        let companydata = {name:newcompany,cityname:city};
        let postdata = {
            headers:{'content-type':'application/json'},
            method:"POST",
            body: JSON.stringify(companydata)
        }
        fetch(url,postdata)
        .then(Response=>Response.json())
        .then(companyinfo =>{
            toast(newcompany + " saved successfully...");
            pickName(""); // reset the newcompany by empty
            pickCity("");
            getcompany();// to reload the lidt
        })
    }

    const deleteCompany = (cid) =>{
       let url = "http://localhost:1234/company/"+cid;
       let postData = {method : "DELETE"};
       fetch(url,postData)
       .then(Response=>Response.json())
       .then(serverRes=>{
        toast("The company id : "+cid + "Deleted Successfully !");
        getcompany();
       })
    }
    return(
        <div className="container">
            <ToastContainer/>
            <h1 className=" center red">
                fetch(), useState(), useeffect(), get, post, delete Example
                
            </h1>
            <p className="center">
                new company :<input type="text" className="m10" onChange={obj=>pickName(obj.target.value)} value={newcompany}/>
                City Name: <input type="text" className="m10" onChange={obj=>pickCity(obj.target.value)} value={city}/>

                <button className="m10" onClick={save}>Save  Company</button><br/>

                Total Companies: {allcompany.length}
             </p>
            {
                allcompany.map((cinfo, index)=>{
                    return(
                        <p className="four center blue" key={index}>
                            {cinfo.id} . {cinfo.name}
                            <br/>
                            <button className="m5" onClick={deleteCompany.bind(this, cinfo.id)}>Delete</button>
                            <Link className='edit' to={`/editmycompany/${cinfo.id}`}> Edit</Link>
                        </p>
                    )
                })
            }
            
        </div>
    )
}

export default Myapi1;