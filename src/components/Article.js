import React from 'react'
import '../scss/App.css'

const Article = ({name, date = "0000000", beeYardNumber, ownerNumber}) => {

    return ( 
            <tr>
                <td data-th="Bee Yard Number">{beeYardNumber}</td>
                <td data-th="Name">{name}</td>
                <td data-th="Date">{date}</td>
                <td data-th="Owner Number">{ownerNumber}</td>
            </tr>
     );
}
 
export default Article;