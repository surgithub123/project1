import { HashRouter, Routes, Route, Link } from "react-router-dom";

import Myuser from "./basics/user";
import Myproject from "./basics/project";
import Booklist from "./basics/book";
import Mycustomer from "./basics/customer";
import Myhome from "./basics/home";
import ItemList from "./basics/item";
import Myhook1 from "./hooks/hook1";
import Myhook2 from "./hooks/hook2";
import Myhook3 from "./hooks/hook3";
import Myhook4 from "./hooks/hook4";
import Myhook5 from "./hooks/hook5";
import Myhook6 from "./hooks/hook6";
import Myapi1 from "./API/company";
import Myapi2 from "./API/product";
import Myapi3 from "./API/user";
import Companyapi from "./API/editcompany";
import Searchapi from "./API/search";
import Searchapi2 from "./API/search2";
import Searchapi3 from "./API/search3";
import Validation from "./hooks/validation";


function App() {
  return (
          <HashRouter>
            <ul id="topnav">
              <li><Link to="/" className="mylink">Home</Link></li>
              <li><Link to="/customer" className="mylink">Customer</Link></li>
              <li><Link to="/book" className="mylink">Books</Link></li>
              <li><Link to="/project" className="mylink">Project</Link></li>
              <li><Link to="/user" className="mylink">User List</Link></li>
              <li><Link to="/props" className="mylink">Props</Link></li>
              <li><Link to="/hook1" className="mylink">hk-1</Link></li>
              <li><Link to="/hook2" className="mylink">hk-2</Link></li>
              <li><Link to="/hook3" className="mylink">hk-3</Link></li>
              <li><Link to="/hook4" className="mylink">hk-4</Link></li>
              <li><Link to="/hook5/Tahir/7702934139/Kadapa/B.Tech" className="mylink">useParams</Link></li>
              <li><Link to="/hook6" className="mylink">useeffect</Link></li>
              <li><Link to="/api1" className="mylink">api1</Link></li>
              <li><Link to="/api2" className="mylink">api2</Link></li>
              <li><Link to="/api3" className="mylink">api3</Link></li>
              <li><Link to="/search" className="mylink">Search Company</Link></li>
              <li><Link to="/search2" className="mylink">Search Product</Link></li>
              <li><Link to="/search3" className="mylink">Search User</Link></li>
              <li><Link to="/validation" className="mylink">Validation Form</Link></li>
              

            </ul>
            <Routes>
              <Route exact path="/" element={ <Myhome/> } />
              <Route exact path="/customer" element={ <Mycustomer/>} />
              <Route exact pathhook1="/book" element={ <Booklist/> } />
              <Route exact path="/project" element={ <Myproject/> } />
              <Route exact path="/user" element={ <Myuser/> } />
              <Route exact path="/props" element={ <ItemList/> } />
              <Route exact path="/hook1" element={ <Myhook1/> } />
              <Route exact path="/hook2" element={ <Myhook2/> } />
              <Route exact path="/hook3" element={ <Myhook3/> } />
              <Route exact path="/hook4" element={ <Myhook4/> } />
              <Route exact path="/hook5/:fullname/:mobile/:city/:edu" element={ <Myhook5/> } />
              <Route exact path="/hook6" element={ <Myhook6/> } />
              <Route exact path="/api1" element={ <Myapi1/> } />
              <Route exact path="/api2" element={ <Myapi2/> } />
              <Route exact path="/api3" element={ <Myapi3/> } />
              <Route exact path="/editmycompany/:id" element={ <Companyapi/> } />
              <Route exact path="/search" element={ <Searchapi/> } />
              <Route exact path="/search2" element={ <Searchapi2/> } />
              <Route exact path="/search3" element={ <Searchapi3/> } />
              <Route exact path="/validation" element={ <Validation/> } />
              
            </Routes>
          </HashRouter>
         );
}

export default App;

