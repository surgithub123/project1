import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Myhook2 =()=>{
    let [itemlist, upadeitem]= useState(['apple','Orange','Mango']);
    const deleteitem = (index, name) =>{
        toast("Please wait deleting...");
        itemlist.splice(index, 1);  // item deleted from array
        upadeitem(itemlist = [...itemlist]); // remaining elements updating in state after delete
        toast(name + "Deleted Successfully!...");
       }

       let[itemname, pickItem] = useState("");

       const save = () =>{
        upadeitem(itemlist = [...itemlist, itemname]);
        toast("Item Saved Successfully!..");
        pickItem(""); // set as empty to itemname variable
    }
    return(
        <div className="container center">
            <ToastContainer/>
            <h1> Array - Add, List, DELETE Using [...] Spread operator and UseState</h1>
            <p>
            Enter Item Name: <input type="text" onChange={obj=>pickItem(obj.target.value )} value={itemname}n/>
            <button onClick={save}> Save Item </button>
        </p>
        <small> {itemname} </small>
            <table align="center" cellPadding="15" border="2">
                <thead>
                    <tr>
                        <th>Item Index</th>
                        <th>Item Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        itemlist.map((itemname, index)=>{
                            return(
                                <tr>
                                    <td>{index+1}</td>
                                    <td>{itemname}</td>
                                    <td>
                                        <button onClick={deleteitem.bind(this,index,itemname)}>Delete</button>
                                    </td>
                                </tr>
                            )
                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Myhook2;