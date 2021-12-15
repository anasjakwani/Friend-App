import React, {useState} from 'react'
import PostCard from "./PostCard"

function PostList() {
    const initialList = [
        {
          value: <PostCard/>,
        }          
      ];
    const [list, setList] = useState(initialList);
  const [value, setName] = useState('');

  function handleChange(event) {
    setName(event.target.value);
  }

  function handleAdd() {
    const newList = list.concat({ value });

    setList(newList);
  }

  return (
    <div>
      <div>
        <input type="text" value={value} onChange={handleChange} />
        <button type="button" onClick={handleAdd}>
          Add
        </button>
      </div>

      <ul>
        {list.map((item) => (
          <li  key={item.value}>{item.value}</li>
        ))}
      </ul>
    </div>
  );
};

export default PostList
