import { useState } from "react";

const Validation = ()=>{
    let [msg, updateMsg] = useState("");
    let [name,pickname] = useState("");
    let [nameError,updatenameError] = useState("");
    let [mobile, pickmobile] = useState("");
    let [mobileError, updateMobileError] = useState("");
    let [email, pickEmail] = useState("");
    let [emailError, updateemailEror] = useState("");
    let [message, pickmsg] = useState("");
    let [messageError, updatemsgEror] = useState("");
    let [city, pickCity] = useState("");
    let[cityError, updatecityError]= useState("");

    let[tnc, pickTnc] = useState(false);
    let[tncError, updateTncError]= useState("");

    const save = ()=>{
       let formstatus = true;
        if(name == ""){
            updatenameError("invalid name");
            formstatus = false;
        }
        else{
            updatenameError("");
        }

        let mpattern = /^[0]?[6789]\d{9}$/;

        if(! mpattern.test(mobile))
        {
            updateMobileError("invalid mobile no");
            formstatus = false;
        }
        else{
            updateMobileError("");
        }

        let epattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-z]{2,6}$/;
        if(! epattern.test(email) )
        {
            updateemailEror("invalide email id");
            formstatus = false;
        }
        else{
            updateemailEror("");
        }

        if(message.length<30){
            updatemsgEror("message lessthan 30 char");
            formstatus = false;
        }else{
            updatemsgEror("");
        }

        if(city==""){
            updatecityError("invalid city");
            formstatus(false);
        }else{
            updatecityError("");
        }

        if(tnc == false){
            updateTncError("Invalid T&C");
        }else{
            updateTncError("");
        }
       
       
        //do not write anything after this line
       if(formstatus == true){
        updateMsg("Please Wait Processing....");
       } else{
        updateMsg("Invalid input");
       }
    }
    return(
        <div className="container">
            <h1 className="center red m10">Contact US</h1>
            <p align="center"> {msg} </p>
            <p className="error" align="center">
                The * Marked fields are mandatory
            </p>
            <table id="contact">
                <tbody>
                    <tr>
                        <td>Full Name<i>*</i></td>
                        <td>
                            <input type="text" onChange={obj=>pickname(obj.target.value)}/>
                            <i> {nameError} </i>
                        </td>
                    </tr>
                    <tr>
                        <td>Mobile No<i>*</i></td>
                        <td>
                            <input type="number" onChange={obj=>pickmobile(obj.target.value)}/>
                            <i> {mobileError} </i> 
                        </td>
                    </tr>
                    <tr>
                        <td>email<i>*</i></td>
                        <td>
                            <input type="email" onChange={obj=>pickEmail(obj.target.value)}/>
                            <i> {emailError} </i> 
                        </td>
                    </tr>
                    <tr>
                        <td>Message</td>
                        <td>
                            <textarea  onChange={obj=>pickmsg(obj.target.value)}>
                             </textarea>
                             <i> {messageError} </i>
                        </td>
                    </tr>
                    <tr>
                        <th> City Name</th>
                        <td>
                            <select onChange={obj=>pickCity(obj.target.value)}>
                                <option value="">Choose</option>
                                <option>Mumbai</option>
                                <option>Hyderabad</option>
                                <option>Chennai</option>
                                <option>Delhi</option>
                            </select>
                            <i>{cityError}</i>
                        </td>
                    </tr>
                    <tr>
                        <td colSpan="2">
                            <input type="checkbox" onChange={obj=>pickTnc(obj.target.checked)}/>
                            I Am Agree on T & C
                            <p className="error"> {tncError} </p>
                        </td>
                    </tr>
                    <tr>
                        <td align="center" colspan="2">
                            <button onClick={save}>Send Message</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Validation;