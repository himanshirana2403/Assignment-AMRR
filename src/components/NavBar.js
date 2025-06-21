// NavBar.js
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav>
      <Link to="/add">Add Item</Link>
      <Link to="/view">View Items</Link>
    </nav>
  );
}

export default NavBar;
