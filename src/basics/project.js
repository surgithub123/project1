
const Myproject = () =>{
    let project = [
        {city:"Bangaalore", cproject:['HTML', 'PHP', 'Java'] },
        {city:"Hyderabad", cproject:['.NET', 'Python',] },
        {city:"Chennai", cproject:['SAP', 'Node', 'Java'] },
        {city:"Delhi", cproject:['React','Angular','SAP'] }
    ];
    return(
        <div className="container">
            <h1 className="center red">{project.length} -Project in List</h1>
            {
                project.map((pinfo, index)=>{
                    return(
                    <fieldset key={index}>
                        <legend> {pinfo.city} - {pinfo.cproject.length}</legend>
                        {
                            pinfo.cproject.map((pname, index2)=>{
                                return(
                                    <p key={index2}>{pname}</p>
                                )
                            })
                        }
                    </fieldset>
                )
                })
            }
        </div>
    )
}
export default Myproject;