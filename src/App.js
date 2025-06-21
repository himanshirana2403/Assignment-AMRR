import { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from './components/NavBar';
import AddItems from './components/AddItems';
import ViewItems from './components/ViewItems';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

function App() {
  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const res = await axios.get('http://localhost:5000/items');
    setItems(res.data);
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async (item) => {
    await axios.post('http://localhost:5000/items', item);
    fetchItems();
  };

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/add" element={<AddItems onAdd={handleAddItem} />} />
        <Route path="/view" element={<ViewItems items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
