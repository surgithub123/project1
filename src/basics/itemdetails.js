const Details = (xyz)=>{
    return(
        <fieldset>
            <legend>{xyz.pname}</legend>
            <img src={xyz.photo} height="100" width="100%"/>
            <p>Price : {xyz.price}</p>
            <p>Model : {xyz.model}</p>
            <p>Sold unit : {xyz.sold}</p>
            
        </fieldset>
    )
}
export default Details;