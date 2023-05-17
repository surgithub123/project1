import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import ReactPaginate from "react-paginate";

const Myapi2 =() =>{
    let[allproduct, updateproduct] = useState( [] );
    const getproduct = () =>{
        fetch("http://localhost:1234/product")
        .then(ServerResponse =>ServerResponse.json())
        .then(productArray=>{
            updateproduct(productArray);
        })
    }
    useEffect(()=>{
        getproduct();
    },[1])
    let[newproduct, pickName] = useState("");
    const save =()=>{
        let url = "http://localhost:1234/product";
        let productdata = {name:newproduct};
        let postdata = {
            headers:{'content-type':'application/json'},
            method:"POST",
            body: JSON.stringify(productdata)
        }
        fetch(url,postdata)
        .then(Response=>Response.json())
        .then(companyinfo =>{
            toast(newproduct + " saved successfully...");
            pickName(""); // reset the newcompany by empty
            getproduct();// to reload the lidt
        })
    }
    const deleteProduct = (cid) =>{
        let url = "http://localhost:1234/product/"+cid;
        let postData = {method : "DELETE"};
        fetch(url,postData)
        .then(Response=>Response.json())
        .then(serverRes=>{
         toast("The product id : "+cid + "Deleted Successfully !");
         getproduct();
        })
     }
     

    
    return(
        <div className="container">
            <ToastContainer/>
            <h1 className=" center red">
                fetch(), useState(), useeffect(), get, post, delete Example
                
            </h1>
            <p className="center">
                new product :<input type="text" className="m10" onChange={obj=>pickName(obj.target.value)} value={newproduct}/>

                <button className="m10" onClick={save}>Save  product</button><br/>

                Total products: {allproduct.length}
             </p>
            {
                allproduct.map((cinfo, index)=>{
                    return(
                        <p className="four center blue" key={index}>
                            {cinfo.id} . {cinfo.name}
                            <br/>
                            <button onClick={deleteProduct.bind(this, cinfo.id)}>Delete</button>
                        </p>
                    )
                })
            }
            
            
        </div>
    )
}

export default Myapi2;