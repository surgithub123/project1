import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Myhook3 = ()=>{
    let[booklist, updateBook] = useState([]);
    let[newbook, pickBook] = useState("");
   
    const save = () =>{
        updateBook( booklist = [...booklist, newbook]);
        toast(newbook + " Added Successfully !");
        pickBook("");
    }
   
    const delBook = (index, name)=>{
        booklist.splice(index, 1);   //  a-b
        updateBook( booklist = [...booklist] );  // a = a
       // a = a-b
         toast(name + "Deleted Successfully !");
    }

    return(
        <div className="container">
            <ToastContainer/>
            <h1 className="center red"> useState(), [...] spread operator Example </h1>
            <p className="center">
                Enter Book Name:
                <input type="text" maxlength="100"
                 onChange={obj=>pickBook(obj.target.value)}
                 value={newbook} 
                 />
                <button onClick={save}>Save</button>
            </p>
            <p className="center"> The Book Name is : {newbook} </p>
            <h3 className="center"> The total books are : {booklist.length} </h3>
       
             <div className="sixitem">
                  {
                    booklist.map((name, index)=>{
                        return(
                            <div key={index}>
                                <h5></h5>
                               <h4> {name} </h4>
                               <button onClick={delBook.bind(this, index, name)}> Delete </button>
                               <h4></h4>
                             </div>   
                        )
                    })
                  }
             </div>

        </div>
    )
}

export default Myhook3;