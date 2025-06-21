import { useState } from 'react';
import ItemModal from './ItemModal';

function ViewItems({ items }) {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <div className="item-list">
        {items.map((item, index) => (
          <div key={index} onClick={() => setSelected(item)}>
            <img src={item.coverImage} alt="" width="100" />
            <p>{item.name}</p>
          </div>
        ))}
      </div>

      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </>
  );
}

export default ViewItems;
