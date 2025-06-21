import { useState } from 'react';

function AddItems({ onAdd }) {
  const [item, setItem] = useState({
    name: '',
    type: '',
    description: '',
    coverImage: '',
    images: []
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'coverImage') {
      setItem({ ...item, coverImage: URL.createObjectURL(files[0]) });
    } else if (name === 'images') {
      const urls = Array.from(files).map(file => URL.createObjectURL(file));
      setItem({ ...item, images: urls });
    } else {
      setItem({ ...item, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAdd(item);
    setMessage('Item added successfully');

    setItem({
      name: '',
      type: '',
      description: '',
      coverImage: '',
      images: []
    });

    e.target.reset();
    setTimeout(() => setMessage(''), 3000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Item Name"
        value={item.name}
        onChange={handleChange}
        required
      />

      <select name="type" value={item.type} onChange={handleChange} required>
        <option value="">Select Type</option>
        <option value="Shirt">Shirt</option>
        <option value="Pant">Pant</option>
        <option value="Shoes">Shoes</option>
        <option value="Sports Gear">Sports Gear</option>
        <option value="Accessories">Accessories</option>
        <option value="Jacket">Jacket</option>
        <option value="Others">Others</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={item.description}
        onChange={handleChange}
        required
      />

      <input type="file" name="coverImage" onChange={handleChange} required />
      <input type="file" name="images" onChange={handleChange} multiple />

      <button type="submit">Add Item</button>
      {message && <p style={{ color: 'green' }}>{message}</p>}
    </form>
  );
}

export default AddItems;
