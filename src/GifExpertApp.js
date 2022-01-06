import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";


const GifExpertApp = () => {

  //  const categories = ['Rufino', 'Lisset', 'Davis'];

    const [categories, setCategories] = useState(['Cat']);

    // const handleAdd = () => {
    //     const nuevo = 'Scoot';
    //     //setCategories( [...categories, nuevo] );     
    //     setCategories( cats => [...categories, nuevo] );
    // }


    return (
        <>
         <h2>GifExpertApp</h2>
         <AddCategory setCategories= { setCategories } />
         <hr />
                  
         <ol>
         {
          categories.map( (category) => (                  
              <GifGrid 
                key={ category }
                category = { category } />
             ))
         }    
        </ol>
       
        </>
    );
}

export default GifExpertApp;
