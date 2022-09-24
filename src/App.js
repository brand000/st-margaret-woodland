import "./App.css";
import Video from "./component/video";
import NavBar from "./component/navbar";

function App() {
  function Navitem(props) {
    return (
      <li className="link">
        <a className="item" href={props.link} className="Nav-Item">
          {props.item}
        </a>
      </li>
    );
  }
  // function SelectItem(){
  //   return(
  //     <div className="Nav-Item-Dropbox">
  //       <select className="menu">
  //           <option className="service"></option>
  //           <option className="host Events"></option>
  //           <option className="sports activity"></option>
  //       </select>
  //     </div>
  //   );
  // }

  return (
    <div className="main">
      <NavBar>
        <Navitem link="./" item="habitats" />
        <Navitem link="./" item="Events" />
        <Navitem link="./" item="Contact Us" />
        <Navitem link="./" item="About" />
      </NavBar>
      <div className="page-container">
        <div className="top">
          <Video />
        </div>
        <div className="middle">
          <p></p>
        </div>
        <div className="bottom"></div>
      </div>
    </div>
  );
}

export default App;
