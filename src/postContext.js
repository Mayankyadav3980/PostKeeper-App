// create post context here

// Create custom hook that returns context value here

// create a custom saved post provider here with add and reset functions

import { createContext, useContext, useState } from "react";

 const postContext = createContext();

 const useValue = () => {
    const value = useContext(postContext);
    return value;
 }



const CustomPostContext = ({children}) => {
   
    //declare state here
    const [savedPosts, setSavedPosts] = useState([]);

    const add = (post) => {
        setSavedPosts(pv => [post, ...pv]);
    }

    const reset = () => {
        setSavedPosts([]);
    }

    return(
        <postContext.Provider value={{add, reset, savedPosts, setSavedPosts}}>
            {children}
        </postContext.Provider>
    )
}

export { useValue };
export default CustomPostContext;