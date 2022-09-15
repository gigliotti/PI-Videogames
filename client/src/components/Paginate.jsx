import React from "react";
import '../css/paginate.css'

function Paginate({videogamesPerPage, allVideogames, paginate}) {
    const pageNumbers = []

    for (let i = 1; i < Math.ceil(allVideogames/videogamesPerPage); i++) {
        pageNumbers.push(i)      
    }

    return (  
        <div className="pagination">
            
                { pageNumbers &&
                    pageNumbers.map(number => 
                        (
                            <a  onClick={() => paginate(number)}> {number}</a>
                        )
                    )
                }
            
        </div>
    );
}

export default Paginate;