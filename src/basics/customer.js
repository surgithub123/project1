const Mycustomer = () =>{
    let customer=["Mahesh","RAkesh","Mohit","Punit","Raju"];

    return(
        <div className="container">
            <h1 className="center red"> { customer.length} :Customer in List</h1>
            <p>{ customer[0]}</p>
            {
                customer.map((fullname, index)=>{
                    return(
                        <p key={index} className="four purple">{index}-{fullname}</p>
                    )
                })
            }
        </div>
    )
}
export default Mycustomer;