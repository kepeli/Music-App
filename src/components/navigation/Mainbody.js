import { AiOutlineSearch } from 'react-icons/ai';

import "./mainbody.css";

const MainBody = () => {
  return (
    <div className="mainbody container">
      <div className="row">
      <div className="col">
        <div className='searchBar'>
        <AiOutlineSearch />
          <input type='text' placeholder='Search for songs, artists...' />
        </div>
        <div className="track-list-container">
          <h2>Trending right now</h2>
        </div>
      </div>
      <div className="col">hapy</div>
      </div>
      </div>
  );
};

export default MainBody;
