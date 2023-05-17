import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

const Searchapi = ()=>{
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
    },[1]);
    let[keyword, pickKeyword]= useState("");

    // pagination start
    function handlePageClick({selected: selectedPage }) {
        setCurrentPage(selectedPage)
    }

    const PER_PAGE = 3;
    const [currentPage, setCurrentPage]= useState(0);
    const offset = currentPage * PER_PAGE;
    const pageCount = Math.ceil(allcompany.length / PER_PAGE);
    //pagination end

return(
    <div className="container">
        <h1 className="center m3 red">Search and pagination in React</h1>
        <p className=" center">
            <input type="text" size="40" placeholder="Search here"
             onChange={obj=>pickKeyword(obj.target.value)}/>
        </p>
            <table width="50%" align="center" cellPadding="10">
                <thead align="left">
                    <tr className="blue">
                        <th >Company Id</th>
                        <th>Company Name</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allcompany.filter(post =>{
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
                            onPageChange={handlePageClick}
                        />
                    </div>
        
    </div>
)
}
export default Searchapi;