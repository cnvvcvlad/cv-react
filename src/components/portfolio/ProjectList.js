import React, { useState } from 'react';
import { portfolioData } from '../../data/portfolioData'; // on importe l'objet portfolioData
import Project from './Project';
import ReactPaginate from 'react-paginate';

function ProjectList() {
    const radio = [
        { id: 1, value: "javascript" },
        { id: 2, value: "css" },
        { id: 3, value: "react" },
        { id: 4, value: "php" }
    ];
    const [selectedRadio, setSelectedRadio] = useState("javascript");
    const [projects, setProjects] = useState(portfolioData.filter(item => item.languages.includes(selectedRadio)));
    const itemsPerPage = 3;
    const [itemOffset, setItemOffset] = useState(0);
    const endOffset = itemOffset + itemsPerPage;
    const currentItems = projects.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(projects.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % projects.length;        
        setItemOffset(newOffset);
    };

    const handleRadio = (event) => {
        setSelectedRadio(event.target.value);
        setProjects(portfolioData.filter(item => item.languages.includes(event.target.value)));
        setItemOffset(0);
    }

    return (
        <div className="portfolioContent">
            <ul className="radioDisplay">
                {
                    radio.map(item => {
                        return (
                            <li key={item.id}>
                                <input
                                    type="radio"
                                    name="radio"
                                    checked={item.value === selectedRadio}
                                    value={item.value}
                                    id={item.value}
                                    // la fonction va prendre en charge la selection d'un autre radio
                                    onChange={handleRadio}
                                />
                                <label htmlFor={item.value}>{item.value}</label>
                            </li>
                        )
                    })
                }
            </ul>
            {currentItems ? (
                <div className="projects">
                    {
                        currentItems
                            .map(item => {
                                return (
                                    <Project
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })
                    }                    
                </div>

            ) : (
                <p>Loading...</p>
            )}
            <div className="pagination">
                <ReactPaginate
                    breakLabel="..."
                    nextLabel="next >"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                />
            </div>
        </div>
    );
};

export default ProjectList;