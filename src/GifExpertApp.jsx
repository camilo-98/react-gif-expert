import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([ 'Black Metal' ]);
    

    const onAddCategory = (newCategory) => {

        console.log(newCategory);

        if(categories.includes(newCategory)) return;
        // No usar el push
        //setCategories(categories.push('tech'));
        setCategories( [ newCategory, ...categories ] );

    }

    return (
        <>
            {/* TITULO */}
            <h1>GifExpertApp</h1>

            {/* Input */}
            <AddCategory 
                //setCategories={ setCategories }
                onNewCategory={(event)=>onAddCategory(event)}
            />

            {/* Listado de Gig */}
            {/* <button onClick={ onAddCategory }>Agregar</button> */}
            
            { categories.map( (category)  => (
                <GifGrid key={ category } category={ category } />
            )) 
            }
            
            {/* Gif Item */}

        </>
    )
}