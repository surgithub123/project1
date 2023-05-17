const Booklist =() =>{
    let book = [
        {name:"html basic",cost:400, page:400, authour:"Alex"},
        {name:"CSS",cost:200, page:350, authour:"Ganesh"},
        {name:"Javascript",cost:2000, page:700, authour:"Atul"},
        {name:"Node JS",cost:750, page:400, authour:"Mohit"}
    ];
    return(
        <div className="container">
            <h1 className="center red">{book.length} :Book in list</h1>
            <table align="center" cellPadding="15" border="1" bordercolor="green" cellSpacing="0">
                <thead>
                    <tr>
                        <th>Book No</th>
                        <th>Book Name</th>
                        <th>Cost per Unit</th>
                        <th>Pages</th>
                        <th>Author</th>
                    </tr>
                </thead>
                <tbody>{
                        book.map((bookinfo, index)=>{
                            return(
                                <tr key={index}>
                                    <td> {index} </td>
                                    <td> {bookinfo.name}</td>
                                    <td> {bookinfo.cost}</td>
                                    <td> {bookinfo.page}</td>
                                    <td> {bookinfo.authour}</td>
                                </tr>
                            )
                        })
                    }</tbody>
            </table>
        </div>
    )
}
export default Booklist;