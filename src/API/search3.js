import { useState,useEffect } from "react";
import ReactPaginate from "react-paginate";

const Searchapi3 =()=>{
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
    },[1]);
    let[keyword, pickKeyword]= useState("");


    // pagination start
    function handlePageClick({selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }

    const PER_PAGE = 3;
    const [currentPage, setCurrentPage]= useState(0);
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(alluser.length / PER_PAGE);
    //pagination end

    return(
        <div className="container">
            <h1 className="center m3 red">Search User Here</h1>
            <p className=" center">
                <input type="text" size="40" placeholder="Search here"
                 onChange={obj=>pickKeyword(obj.target.value)}/>
            </p>
                <table width="50%" align="center" cellPadding="10">
                    <thead align="left">
                        <tr className="blue">
                            <th >User Id</th>
                            <th>User Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            alluser.filter(post =>{
                                if(post.name.toLowerCase().includes(keyword.toLowerCase())){
                                    return post;
                                }
                            }).slice(offset, offset + PER_PAGE).map((cinfo, index)=>{
                                return(
                                    <tr key={index}>
                                        <td>{cinfo.id}</td>
                                        <td>{cinfo.name}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
                <div className="paginate">
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                breakLabel={"..."}
                                pageCount={pageCount}  
                                onPageChange={ handlePageClick }
                            />
                        </div>
            
        </div>
    )
    }
    

export default Searchapi3;