
export const sortArticles = (articlesArray, propertyToSortBy) => {
    return articlesArray.sort((a,b) => (a[propertyToSortBy] > b[propertyToSortBy]) ? 1 : ((b[propertyToSortBy] > a[propertyToSortBy]) ? -1 : 0))
}

export const padTo2Digits = (num) => num.toString().padStart(2, '0');

export const getArticlesArray = (list) => {
    let articlesArray = [];
    for (const [, value] of Object.entries(list)) {
        articlesArray.push(value.label);
    }
    return articlesArray
}

export const getTodaysDate = (date = new Date()) => [padTo2Digits(date.getDate()), padTo2Digits(date.getMonth() + 1),date.getFullYear()].join('.')

export const getNextDefaultOwnerNumberForToday = (list) => {
    let allTodaysRecords = getArticlesArray(list).filter(article => article.dateAdd === getTodaysDate())
    if(allTodaysRecords.length === 0) return '00001';
    else {
        let numberToAdd = (allTodaysRecords.length)+1
        let zerosToAdd = "0".repeat(5-((allTodaysRecords.length).toString().length))
        return zerosToAdd + numberToAdd
    }
}