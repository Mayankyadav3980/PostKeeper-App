import { useState } from "react";
import {useValue} from './postContext.js'


export const Navbar = () => {
  // remove this and get the value from context
  const { reset, savedPosts} = useValue();
  console.log(savedPosts.length);
  
  const [showSavedList, setShowSavedList] = useState(false);

  return (
    <div className="navbar">
      <span onClick={() => setShowSavedList(!showSavedList)}>
        saved posts:{savedPosts.length}
        {/* show length of saved posts here */}
      </span>
      {showSavedList && (
        <div className="saved-list">
          {savedPosts.map((p) => (
            <div className="saved-post" key={p.id}>
              <h3>{p.text}</h3>
              <img src={p.img} alt={p.text} />
            </div>
          ))}
        </div>
      )}
      {/* Add onClick functionality for the reset button */}
      <button onClick={reset}>Reset</button>
    </div>
  );
};
