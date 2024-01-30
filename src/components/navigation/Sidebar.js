import { AiFillHome } from 'react-icons/ai';
import { FiMusic, FiUsers, FiRadio, FiHeart } from 'react-icons/fi';
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
        
      <div>
        <h1>KEPELI</h1>
      </div>

      <div>
        <h2>DISCOVER</h2>

        <ul>
          <li>
            
            <AiFillHome />
            <span>Home</span>
          </li>
          <li>
            <FiMusic />
            <span>Songs</span>
          </li>
          <li>
            <FiUsers />
            <span>Artists</span>
          </li>
          <li>
            <FiRadio />
            <span>Radio</span>
          </li>
        </ul>
      </div>
      <div>
        <h2>LIBRARY</h2>
        <ul>
          <li>
            <FiHeart />
            <span>Favorites</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
