import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

let temp = {name:"Tahir", age:"22 years", city:"Bangalore"};

const Myhook4 = ()=>{
    let [userlist, updateUser] = useState([temp]);
    let[fullname, pickName] = useState("");
    let[userage, pickAge] = useState("");
    let[usercity, pickCity] = useState("");

    const save = () =>{
       let newuser = {name:fullname, age:userage, city:usercity};
       updateUser(userlist = [...userlist, newuser]);
       toast(fullname + "Saved Successfully !");
       pickName(""); // reset by empty  fullname variable
       pickAge(""); // reset by empty  userage variable
       pickCity(""); // reset by empty  usercity variable
    }

    const deleteUser = (index, name) =>{
        userlist.splice(index,1);
        updateUser(userlist = [...userlist]);
        toast(name + "Deleted Successfully !")
    }
    return(
        
        <div className="container">
            <ToastContainer/>
            <h1 className="center green"> Add, List, Delete Array of object using [...] </h1>
            <h3 className="center red"> The Total Users Are : {userlist.length} </h3>
            
           <table align="left" cellpadding="15"> 
             <tr>
                 <th> Full Name </th>
                 <td>
                     <input type="text" size="40"
                       onChange={obj=>pickName(obj.target.value)}
                       value={fullname}/>
                  </td>
             </tr>
             <tr>
                 <th> Age </th>
                 <td> 
                    <input type="text" size="40"
                  onChange={obj=>pickAge(obj.target.value)}
                   value={userage}/> 
                  </td>
             </tr>
             <tr>
                 <th> City Name </th>
                 <td>
                     <input type="text" size="40"
                      onChange={obj=>pickCity(obj.target.value)}
                      value={usercity} />
                     </td>
             </tr>
             <tr>
                <th colSpan="4">
                    <button onClick={save}>Save User </button>
                </th>
             </tr>
           </table>

            <table align="right" cellpadding="10"> 
              <thead>
                <tr>
                    <th> User Id</th>
                    <th> Full Name </th>
                    <th> Age </th>
                    <th> City </th>
                    <th> Action </th>
                </tr>
              </thead>
              <tbody>
                 {
                    userlist.map((user, index)=>{
                        return(
                            <tr key={index}>
                                <td> {index} </td>
                                <td> {user.name} </td>
                                <td> {user.age} </td>
                                <td> {user.city} </td>
                                <td>
                                    <button
                                    onClick={deleteUser.bind(this,index,user.name)}> Delete </button>
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

export default Myhook4;