import { useParams, Link } from "react-router-dom";

const Myhook5 = () =>{
    const{fullname, mobile, city, edu} = useParams();
    return(
        <div className="container center">
            <h1> React hooks useParams() Example </h1>
             <h2> Name - {fullname} </h2>
             <h2> Mobile - {mobile} </h2>
             <h2> City - {city} </h2>
             <h2> Education - {edu} </h2>
             <p>
                <Link to="/hook5/Tahir/7702934139/Kadapa/B.Tech" className="abc"> Tahir </Link>
                <Link to="/hook5/Shafi/9008989677/Chennai/B.Pharma" className="abc"> Shafi </Link>
                <Link to="/hook5/Ghouse/7456763413/Mumbai/M.Tech" className="abc"> Ghouse </Link>
                <Link to="/hook5/Minhaas/7892935679/Hyderabad/B.Tech" className="abc"> Minhaas </Link>
                <Link to="/hook5/Asif/9876543439/Delhi/B.Tech" className="abc"> Asif </Link>
             </p>
        </div>
    )
}

export default Myhook5;