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
    try {
      const res = await axios.get('/api/items');
      console.log('Fetched items:', res.data);
      setItems(res.data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const handleAddItem = async (item) => {
    try {
      const res = await axios.post('/api/items', item);
      console.log('Added item:', res.data);
      fetchItems();
    } catch (error) {
      console.error('Error adding item:', error);
    }
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
