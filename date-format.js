import moment from 'moment'

// const currDateTime = new Date().toLocaleString()
const currDateTime = moment()

const formattedDate = currDateTime.format('DD-MM-YYYY')
const formattedDate1 = currDateTime.format('MMM Do YY')
const formattedDate2 = currDateTime.format('dddd')

console.log(currDateTime);
console.log(formattedDate);
console.log(formattedDate1);
console.log(formattedDate2);


