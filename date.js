const dateStrings = ["9/1/2021", "12/15/2022", "5/8/2020"];

// Parse the date strings into Date objects
const dates = dateStrings.map(dateString => {
    const [month, day, year] = dateString.split('/');
    return new Date(`${year}-${month}-${day}`);
});

// Sort the array of Date objects
dates.sort((a, b) => a - b);

// Now you have sorted dates in ascending order
console.log(dates);
