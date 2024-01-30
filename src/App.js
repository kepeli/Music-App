import Sidebar from "./components/navigation/Sidebar";
import Mainbody from "./components/navigation/Mainbody";
import Footer from "./components/navigation/Footer";
import "./App.css";


// import 'react-bootstrap'
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="pageBody">
      <div className="header">
        <div className='leftBar'>
          <Sidebar />
        </div>
        <div className="mainBar">
          <Mainbody />
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
