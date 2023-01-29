import React from 'react'
import { useEffect } from 'react';


const FilterCategory = ({ activeGenre, setActiveGenre, movies, setFiltered }) => {

    useEffect(() => {
        if (activeGenre === 0) {
            setFiltered(movies);
            return;
        }

        let filtered = movies.filter((movie) =>
            movie.genre_ids.includes(activeGenre)
        );
        console.log("filterd:", filtered)
        setFiltered(filtered);

    }, [activeGenre]);

    return (
        <div className='filter-container'>
            <button className={activeGenre === 0 ? "active" : ""} onClick={() => setActiveGenre(0)}>All movie</button>
            <button className={activeGenre === 27 ? "active" : ""} onClick={() => setActiveGenre(27)}>Horror</button>
            <button className={activeGenre === 16 ? "active" : ""} onClick={() => setActiveGenre(16)}>Animation</button>
            <button className={activeGenre === 80 ? "active" : ""} onClick={() => setActiveGenre(80)}>Crime</button>
            <button className={activeGenre === 10749 ? "active" : ""} onClick={() => setActiveGenre(10749)}>Romance</button>
        </div >
    )
}

export default FilterCategory
