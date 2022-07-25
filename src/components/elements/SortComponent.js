import React from 'react';
import './SortComponent.css';

const SortComponent = ({handleSetSortOption}) => {

    return ( 
        <div>
            <span>Sortuj według:</span>
            <div className="select">
                <select onChange={handleSetSortOption}>
                    <option value="beeYardNumber">Numeru pasieki</option>
                    <option value="name">Nazwy</option>
                    <option value="dateAdd">Daty dodania</option>
                    <option value="ownerNumber">Numeru bartnika</option>
                </select>
            </div>
        </div>
     );
}
 
export default SortComponent;