
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";

const Companyapi = () =>{
    const{id} = useParams();
    let[name, pickName]= useState("");
    let[city, pickCity]= useState("");

    const getcompanyinfo = () =>{
        let url = "http://localhost:1234/company/"+id;
        fetch(url)
        .then(Response=>Response.json())
        .then(companyinfo=>{
            pickName(companyinfo.name);
            pickCity(companyinfo.cityname);
        })
    }
    useEffect(()=>{
        getcompanyinfo();
    },[1]);

    const updateCompany = ()=>{
        let url="http://localhost:1234/company/"+id;
        let companyinfo = {name:name,cityname:city};  //left name is property in json file
        let postData = {
            headers:{'Content-Type':'application/json'},
            method:"PUT",
            body:JSON.stringify(companyinfo)
        };
        fetch(url,postData)
        .then(response=>response.json())
        .then(serverInfo=>{
            toast(name + "Updated Successfully");
            pickName("");
            getcompanyinfo();
           
        })
      }

    return(
        <div className="container center">
           <ToastContainer/> 
            <h1>Edit Company Details - {id} - {name}</h1>
            <p>
                Company Name : <input type="text" value={name}
                onChange={obj =>pickName(obj.target.value) } size="50"/>
            </p>

            <p>
            City Name:<input type="text" value={city}
            onChange={obj=>pickCity(obj.target.value)}
             size="50"/>
           
        </p>
            <button onClick={updateCompany}>Update Company</button>
        </div>
    )
}
export default Companyapi;