import React, {useState} from 'react'

import Button from 'react-bootstrap/Button';
import { addItem } from '../actions';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { padTo2Digits, getNextDefaultOwnerNumberForToday, getTodaysDate } from '../functions';

import {v4} from 'uuid'

const Form = () => {
    const list = useSelector(state => state.list);
    const [enteredValues, setEnteredValues] = useState({
        id: v4(), 
        name: "Nowa pasieka", 
        dateAdd: getTodaysDate(), 
        ownerNumber: getNextDefaultOwnerNumberForToday(list),
        beeYardNumber: 2022060912987852}
    )

    const dateGen = (date = new Date(), specialNumber=enteredValues.ownerNumber) => {
        const dateYYYYMMDD = [
            date.getFullYear(),
            padTo2Digits(date.getMonth() + 1),
            padTo2Digits(date.getDate()),
        ].join('')
        let sum = 1;
        const dateWithNumber = dateYYYYMMDD+specialNumber;
        let constructedArray = dateWithNumber.split('');
        constructedArray.map(letter => {
            if(parseInt(letter)>0) return sum = sum*parseInt(letter)
            else return letter
        })
        sum = sum*parseInt(dateWithNumber);
        let threeLetters = sum.toString()[1] + sum.toString()[6] + sum.toString().slice(-1);
        return parseInt(dateWithNumber+threeLetters);
    }

    const handleInputName = (event) => setEnteredValues({...enteredValues, name: event.target.value})
    const handleInputNumber = (event) => {
        const result = event.target.value.replace(/\D/g, '');
        setEnteredValues({...enteredValues, ownerNumber: result})
    }

    // This stores the dispatch function for using in the component
    const dispatch = useDispatch();

    const handleAdd = (event) => {
        event.preventDefault()
        
        // we run the dispatch function containing the addItem function
        // As you remember addItem takes a payload and returns an object
        // It will now run the reducer
        enteredValues.beeYardNumber = dateGen()
        dispatch(addItem({...enteredValues}));
        alert(`Pasieka o nazwie ${enteredValues.name} została dodana!`)
        setEnteredValues({...enteredValues, id: v4(), name: "Nowa pasieka", ownerNumber: getNextDefaultOwnerNumberForToday(list)})
    }

    return ( 
        <div className="container">
            <form className="addBookForm" onSubmit={handleAdd}>
                <label >Nazwa: 
                    <input 
                        className="input titleInput"
                        onChange={handleInputName} 
                        type="text" 
                        name="name" 
                        placeholder="Wpisz nazwę..." 
                        value={enteredValues.name}
                        required
                    />
                </label>
                <label >Pięciocyfrowy numer: 
                    <input 
                        className="input titleInput"
                        onChange={handleInputNumber} 
                        type="text" 
                        minLength='5'
                        maxLength='5'
                        pattern='\d{5}'
                        name="ownerNumber" 
                        placeholder="Podaj osobisty numer..." 
                        value={enteredValues.ownerNumber}
                        required
                    />
                </label>
                <Button type="submit" variant="primary">Zatwierdź</Button>
            </form>
        </div>
     );
}
 
export default Form;