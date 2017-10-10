import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
  return(
    <nav>
      <Link to="/" >Home</Link>
      {" | "}
      <Link to="/songs" >Songs</Link>
      {" | "}
      <Link to="/artists" >Artists</Link>
    </nav>
  );
};

export default Header;
