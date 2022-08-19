/* SWAPPING VARIABLES  */

// let a = 'red';
// let b = 'blue';

// let c = a;
// a = b;
// b = c;

// console.log(a);
// console.log(b);


/* IF>>>>ELSE */

// eg: Hour
// If hour is between 6am and 12pm: Good morning!
// If it is between 12pm and 6pm: good afternoon!
// Otherwise: Good evening

// let hour = 20;

// if (hour >= 6 && hour < 12)
// console.log('Good morning');
// else if (hour >= 12 && hour < 18)
// console.log('Good afternoon');
// else
// console.log('Good evening');


/* INFINITE LOOPS */

// let i = 0;
// while (i < 5) {
//     console.log(i);
//     i++;
// }

// while (true) {

// }

// let x = 0; 
// do {
//     x++;
// } while (x < 5);



/* FOR-IN */

// const person = {
//     name: 'Mike',
//     age: 30
// };

// for (let key in person)
// console.log(key, person [key]);

// const colors = ['red', 'green', 'blue'];
// for (let index in colors)
// console.log(index, colors[index]);


/* BREAK AND COUNTINUE */

// let i = 0;
// while (i <= 10) {
//     // if (i === 5) break;
//     if (i % 2 === 0) {
//     i++;
//     continue;
// }

// console.log(i)
// i++;
// }




// let number = max(5, 10);
// console.log(number);

// function max(a, b) {
//     return (a > b) ? a : b;
// }


// function isLandscape(width, height) {
//     return (width > height);
// }
// console.log(isLandscape(800 > 600));



// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by both 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number
// const output = fizzBuzz(7);
// console.log(output);

// function fizzBuzz(input) {
//     if (typeof input !== 'number')
//     return 'NaN';

//     if (input % 3 === 0)
//     return 'Fizz';

//     if (input % 5 === 0)
//     return 'Buzz';

//     if ((input % 3 === 0) && (input % 5 === 0))
//     return 'FizzBuzz';
//     return input;
// }


/* SPEED CHECK */

// checkSpeed(70);

// function checkSpeed(speed) {
// const speedLimit = 70;
// const kmPerPoint = 5;

// if (speed < speedLimit + kmPerPoint)
// console.log('Ok');
// else {
//     const points = Math.floor((speed - speedLimit) / kmPerPoint);
//     if (points >= 12)
//         console.log('License suspended');
//     else
//         console.log('Points', points)
//     }

// }


/* EVEN AND ODD NUMBERS */

// showNumbers(10);

// function showNumbers(limit) {
//     for (let i = 0; i <= limit; i++) {
//         if (i % 2 === 0) console.log(i, 'EVEN');
//         else console.log(i, 'ODD');
//     }
// }


/* COUNT TRUTHY */

// const isActive = true;
// const name = 'Mike';
// if (name) console.log('Hello');

/* GRADE */

// function calculateGrade(marks) {
//     const average = calculateAverage(marks);
//     if (average < 60) return 'F';
//     if (average < 70) return 'D';
//     if (average < 80) return 'C';
//     if (average < 90) return 'B';
//     return 'A';
// }

// function calculateAverage(array) {
//     let sum = 0;
//     for (let value of array)
//     sum += value;
//     return sum / array.length;
// }


/* ADDRESS OBJECT  */

// street 
// city
// zipcode 
// showAddress(address)
// let address = {
//     street: '123 abc road blvd',
//     city: 'Austin',
//     zipcode: '78331'
// };

// function showAddress(address) {
//     for (let key in address)
//     console.log(key, address[key]);
// }

// showAddress(address);


/* FACTORY FUNCTIONS */

// let address = new Address('123 abc road blvd', 'Austin', '78331');

// console.log(address);

// function createAddress(street, city, zipcode) {
//     return {
//         street,
//         city,
//         zipcode
//     };
// }



/* CONSTRUCTOR FUNCTION */


// function Address(Street, City, ZipCode) {
//     this.Street = Street;
//     this.City = City;
//     this.ZipCode = ZipCode;
// }


/* BLOG POST OBJECT */

// let post = {
//     title: 'View my post',
//     body: 'burger distribution',
//     author: 'Mike Smith',
//     views: 10,
//     comments: [
//         { author: 'Cris Hill', body: 'Cheese cake' },
//         { author: 'Angus Hunter', body: 'Chicken soup' },
//     ],
//     islive: true
// };

// console.log(post);


/* PRICE RANGE OBJECT */

// let priceRanges = [
//     { label: '$', tooltips: 'Inexpensive', minPerPerson: 0, maxPerPerson: 10 },
//     { label: '$$', tooltips: 'Moderate', minPerPerson: 11, maxPerPerson: 20 },
//     { label: '$$$', tooltips: 'Expensive', minPerPerson: 21, maxPerPerson: 50 },
// ];

// let resaurants = [
//     { averagePerperson: 5}
// ]

// console.log(priceRanges)


/* REMOVING ELEMENTS FROM ARRAY */

// const numbers = [1, 2, 3, 4];

// end 
// const last = numbers.pop();

// begining
// const first = numbers.shift();

// middle
// numbers.splice(2, 2);
// console.log(numbers);  


/* ARRAY FROM RANGE */


// const numbers = arrayFromRange(-10, -4);

// console.log(numbers);

// function arrayFromRange(min, max) {
//     const output = [];
//     for (let i = min; i <= max; i++)
//     output.push(i);
//     return output;
// }


/* INCLUDES [ARRAY] */


// const numbers = [1, 2, 3, 4];

// console.log(includes(numbers, 1));

// function includes(array, searchElement) {
//     for (let element of array)
//     if (element === searchElement)
//     return true;
//     return false;
// }


/* EXCEPT [ARRAY] */

// const numbers = [1, 2, 3, 4, 5];

// const output = except(numbers, [1, 3]);

// console.log(output);

// function except(array, excluded) {
//     const output = []
//     for (let element of array)
//         if (!excluded.includes(element))
//             output.push(element);
//     return output;        
// }



/* MOVING AN ELEMENT */

// const numbers = [1, 2, 3, 4];

// const output = move(numbers, 1, 0);

// console.log(output);

// function move(array, index, offset) {
//     const position = index + offset;
//     if (position >= array.length || position < 0) {
//         console.error('Invalid offset.');
//         return;
//     }

//     const output = [...array];
//     const element = output.splice(index, 1) [0];
//     output.splice(position, 0, element);
//     return output;
// }


/* COUNT OCCURANCES */

// const numbers = [1, 2, 3, 4, 1];

// const count = countOccurrences(numbers, 1);

// console.log(count);

// function countOccurrences(array, searchElement) {
//     return array.reduce((accumulator, current) => {
//         const occurrences = (current === searchElement) ? 1 : 0;
//         console.log(accumulator, current, searchElement)
//         return accumulator + occurrences;
//     }, 0);
// }


/* GET MAX [ARRAY] */

// const numbers = [1, 2, 3, 4];

// const max = getMax([3]);

// console.log(max);

// function getMax(array) {
//     if (array.length === 0) return undefined;


    // let max = array[0];

    // for (let i = 1; i < array.length; i++)
    //     if (array[i] > max)
    //         max = array [i];
    // return max;  
    
    
//     return array.reduce((a, b) => (a > b) ? a : b);
// }


/* MOVIES  SORT ARRAY */

// const movies = [
//     { title: 'a', year: 2018, rating: 4.5},
//     { title: 'b', year: 2018, rating: 4.7},
//     { title: 'c', year: 2018, rating: 3},
//     { title: 'd', year: 2017, rating: 4.5},
// ];

// All the movies in 2018 with rating > 4
// Sort them by their rating
// Descending order
// Pick their title

// const titles = movies
//     .filter(m => m.year === 2018 && m.rating >= 4)
//     .sort((a, b) => a.rating - b.rating)
//     .reverse()
//     .map(m => m.title)

//     console.log(titles)


// SUM OF ARGUMENTS

try {
const numbers = [1, 2, 3, 4];

const count = countOccurrences(null, 1);
console.log(count);
}
catch (e) {
    console.log(e.message)
}
function countOccurrences(array, searchElement) {
    if (!Array.isArray(array))
    throw new Error('Invalid array.');
    return array.reduce((accumulator, current) => {
        const occurrence = (current === searchElement) ? 1 : 0;
        return accumulator + occurrence;
    }, 0);
}

