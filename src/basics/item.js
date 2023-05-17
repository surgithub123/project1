import Details from "./itemdetails";
const ItemList = ()=>{
    return(
        <div className="container">
            <h1 className="center red">React Component Re-use, props Example</h1>

            <Details pname="Mouse" photo="image2.jpg" price="300" model="2018" sold="500"/>
            <Details pname="Keyboard" photo="image1.jpg" price="500" model="2021" sold="200"/>
            <Details pname="Laptop" photo="image3.jpg" price="30000" model="2021" sold="20"/>
            <Details pname="Bike" photo="image5.jpg" price="80000" model="yamaha" sold="10"/>
        </div>
    )
}
export default ItemList;

// xyz = {pname:"Mouse" photo:"image2.jpg" price:"300" model:"2018" sold:"500"}