import React from 'react'
import { useSelector } from "react-redux";
import Article from './Article';
import SortComponent from './elements/SortComponent';
import FilterComponent from './elements/FilterComponent';
import { getArticlesArray, sortArticles } from '../functions';
import './ArticleList.css'
import { useState } from 'react';

const ArticleList = () => {

    const list = useSelector(state => state.list);
    const [sortState, setSortState] = useState("beeYardNumber")
    //const [dateRange, setDateRange] = useState({startDate: "", endDate: ""})
    const [allArticles, setAllArticles] = useState(sortArticles(getArticlesArray(list), sortState))

    const showAllArticles = () => (
        allArticles.map(article =>
                <Article 
                    id={article.id} 
                    key={article.id} 
                    name={article.name} 
                    date={article.dateAdd} 
                    ownerNumber={article.ownerNumber} 
                    beeYardNumber={article.beeYardNumber}  
                    />
        )
    )

    const handleSelectSortOption = (e) => {
        setSortState(e.target.value)
        const newArticlesSet = sortArticles(allArticles, e.target.value)
        //console.log(sortArticles(allArticles, e.target.value))
        setAllArticles(newArticlesSet)
    }

    const handleFilterByDate = (startDate, endDate) => {
        function parseAndCheckIfDateFit(article) {
            var date_components = article.dateAdd.split(".");
            const formattedDate = new Date([date_components[1], date_components[0], date_components[2]].join("."))
            return startDate.setHours(0, 0, 0, 0) <= formattedDate.setHours(0, 0, 0, 0) && formattedDate.setHours(0, 0, 0, 0) <= endDate.setHours(0, 0, 0, 0);
        }
        setAllArticles(getArticlesArray(list).filter(parseAndCheckIfDateFit))
    }

    return ( 
        <>  
            <div className="toolbar">
                <SortComponent handleSetSortOption={handleSelectSortOption} currentSortState={sortState}/>
                <FilterComponent handleFilterByDate={handleFilterByDate}/>
            </div>
            {showAllArticles().length ?
                <table id="articlesTable">
                    <tbody>
                        <tr>
                            <th>Bee Yard Number</th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Owner Number</th>
                        </tr>
                        {showAllArticles()}
                    </tbody>
                </table>
            : <p className="empty-table-warning">Brak dodanych pasiek</p>}
        </>
    );
}
 
export default ArticleList;