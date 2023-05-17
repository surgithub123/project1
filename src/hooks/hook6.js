import { useEffect, useState } from "react";

const Myhook6 = () =>{

     let[location, updateLocation] = useState([]);

      const getData = () =>{
           fetch("sampledata.json")
           .then(fileData =>fileData.json())
           .then(cityArray =>{
            updateLocation(cityArray);
           })
      }

      let[userlist, updateUser] = useState([]);
      const getUser = () =>{
        fetch("user.json")
        .then(userData =>userData.json())
        .then(userArray=>{
            updateUser(userArray);
        })
      }

      useEffect(()=>{  // useEffect is used to give alert/call a function automatically onload
       getData();
      })


return(
    <div className="container">
        <p className="center">
            <button onClick={getUser}> Show User : {userlist.length} </button>
        </p>

        {
            userlist.map((name, index)=>{
               return(
                <p key={index} className="four"> {index} - {name} </p>
               )
            })
        }

        <h1 className="center red"> useEffect() in React : {location.length} </h1>
        {
            location.map((cityname, index)=>{
               return(
                <p className="four purple" key={index}> {cityname} </p>
               ) 
            })
        }
    </div>
)

}
export default Myhook6;