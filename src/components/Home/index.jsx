import { Link } from "react-router-dom";
import './index.scss';


const Home = () => {
  
return(
  <div className="container home-page">
    <div className="text-zone">
        <h1>Hi, <br /> I'm Dian Zahid,
        <br />Software developer.
        </h1>
        <h2>Fullstack Developer / Software Engineer / Problem Solver</h2>

        <Link to="/contact" className="flat-button">CONTACT ME</Link>
    </div>

  </div>
);
}

export default Home