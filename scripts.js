// FOR ALL EXERCISES WHERE YOU WORK WITH AN ARRAY, PRINT THE RESULTS AT EACH STEP!

"answer viewable on index.html page / live html page"

/********************** Exercise 1 **********************/

// Go to a website of your choosing (a news site or a shopping site). Find examples of data that might be stored as arrays. Provide a description of the data below. 

function myFunction1() {
    let text;
    text = "The website nbcnews.com: the list of pages to visit in the header bar, the list of pages to click in the menu section, and the list of pages to click in the footer section could all be examples of items listed in an array";
    console.log("Exercise 1: " + text);
    document.getElementById("exercise1").innerHTML = text;
}


/********************** Exercise 2 **********************/
// Create an array of books to be sold in an online store. 

const books = ["who", "what", "when", "where", "how", "why"]
 
function myFunction2() {
    let text;
    text = books.join(' ' + '<br />');
    console.log("Exercise 2:\n" + books.join((' ') + '\n'));
    document.getElementById("exercise2").innerHTML = text;
}
 



/********************** Exercise 3 **********************/
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];
const gems = ["ruby", "saphhire", "pearl", "steven", "amethyst", "garnet", "lapis lazuli", "peridot"]
// For the above array, log the string "bread" to the console.

function myFunction3() {
    let text;
    console.log('Exercise 3: \n \n')
console.log(shopping[0])
shopping[0] = "rice";
console.log(shopping[0])
shopping[2] = 'vegetables'
console.log(shopping[2]+ ': the index 2 returns cheese because arrays start with the number 0, not 1')
console.log(shopping[shopping.length -1] + '\n' + gems[gems.length -1])
    text = `The new log when changing bread to rice and cheese to vegetables:<br />${shopping.join(', ')}<br />Last item: ${shopping[shopping.length - 1]}<br />Last item of gems: ${gems[gems.length - 1]}`
    document.getElementById("exercise3").innerHTML = text;
} 

// After the following code is run, what will happen? Console log the new array.

// Try changing the value "cheese" to "vegetables" using an index.

// Log the value at index 2. Note that it is NOT the second value! Why is that?

// Log the last value WITHOUT using a set number. That is, do NOT write: `shopping[4]`. You can use the `.length` to figure out what the last index is!
 
// Now write the same code in the square brackets, using the `.length` property to calculate the last index, only with the `gems` array below instead of `shopping`. The solution should give you the last value in ANY array!




/********************** Exercise 4 **********************/


// Use an array method to add Memphis to the END of the array.

// Use an array method to add Phoenix to the END of the array.

// Use an array method to add Atlanta to the START of the array.

// Use an array method to add Chicago and Denver to the END of the array with one method call.

// Use an array method to remove the FIRST element of the array.

// Use an array method to remove the LAST element of the array.

// Log the final array to the console. It should look like this: ["Oakland", "New York", "Memphis", "Phoenix", "Chicago"]

const cities = ["Oakland", "New York"];

function myFunction4() {
    let text;
    cities.push("Memphis");
    cities.push("Phoenix");
    cities.unshift('Atlanta');
    cities.push('Chicago', 'Denver');
    cities.shift();
    cities.pop();
    let city = cities.join(' ' + '<br />');
    text = city + '<br /> <br />' + "Reversed:" + '<br />  <br />' + cities.reverse().join('<br /> ');
    console.log("Exercise 4:\n\n" + cities.join(' ' + '\n') + "\n\nReversed:\n\n" + cities.reverse().join(', ' + '\n') + "!");
    document.getElementById("exercise4").innerHTML = text;
}

/********************** Exercise 5 **********************/

const colors = ["red", "green", "blue", "yellow"];

// Use the slice method on the above array to produce the following array: ["red", "green", "blue"]

// Now use the slice method to produce the following array: ["green", "blue", "yellow"]

// Next use the slice method to produce the following array: ["red", "green"]

function myFunction5() {
    let text;
    text = colors.slice(0,3).join(', ') + '<br />' + colors.slice(1).join(', ') + '<br />' +  colors.slice(0,2).join(', ');
    console.log('Exercise 5:\n' + colors.slice(0,3).join(', ') + '\n' + colors.slice(1).join(', ') + '\n' + colors.slice(0,2).join(', '))
    document.getElementById("exercise5").innerHTML = text;
}

// Random
// let x = 'flexible'
// let y = x.charAt(3).toUpperCase()
// let newX = x.split(x.charAt(3)).join(y)

// console.log(x, y, newX)


/********************** Exercise 6 **********************/

const numbers = [5, 1, 8, 3, 2, 7, 4, 6, 9];

// Sort the array in ascending order

function myFunction6() {
    let text;
    text = numbers.sort().join('<br />');
    console.log('Exercise 6:\n' + numbers.sort().join('\n'));
    document.getElementById("exercise6").innerHTML = text;
}


/********************** Exercise 7 **********************/
// The following array contains data about a user. How would you log the string 'Python' to the console?
const userMember = ["Dava Sorbel", 795, ['Python', 'JavaScript', 'Ruby']];

// How would you use that array to find the letter J? Remember that you can use indexes with arrays AND strings!

function myFunction7() {
    let text;
    let py = userMember[2][0];
    let next = userMember[2][1].at(0);
    text = py + '<br />' + next;
    console.log('Exercise 7: ' + py + ' ' + next);
    document.getElementById("exercise7").innerHTML = text;
}

/********************** Exercise 8 **********************/

const cityString = "Detroit,Atlanta,Birmingham,New Haven,Dallas,San Diego,Portland";
;
// Now let's split the array at each comma. How would you create an array with each of the cities as a separate value?


// What is the length of the new array?


// Log the array to the console


// How would you log the last city in the array to the console?


// Using the .join() method, how would you turn the list of cities back into a string with spaces after the commas?

        function myFunction8() {
            let text;
            let arr = cityString.split(",");
            let newArr = arr.join(', ')
            text = 'Array: ' + arr + '<br /> Array length: ' + arr.length + '<br /> Last city: ' + arr[arr.length - 1] + '<br /> To appear with spaces:  ' + newArr;

            console.log('Exercise 8: \nArray: ' + arr + '\nArray length: ' + arr.length + ' \nLast city: ' + arr[arr.length - 1] + '\nTo appear with spaces:  ' + arr.join(', '));

            document.getElementById("exercise8").innerHTML = text;
        }

/********************** Exercise 9 **********************/


let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.


// Store the length of the array in a variable called arrayLength.


// Store the last item in the array in a variable called lastItem.


// Remove the last item in the array.



// Add two new names to the end of the array.

function myFunction9() {
    let text;
    let myArray = myString.split("+");
    let arrayLength = myArray.length;
    let lastItem = myArray[myArray.length - 1];
    myArray.pop();
    myArray.push('Han', 'Tek');

    text = 'myArray: ' + myArray + '<br /> arrayLength: ' + arrayLength + '<br /> lastItem: ' + lastItem + '<br /> final result: ' + myArray.join(', ') + '<br /> new arrayLength: ' + myArray.length + '<br /> new lastItem: ' + myArray[myArray.length - 1];

    console.log('Exercise 9: \nmyArray: ' + myArray + ' \narrayLength: ' + arrayLength + '\nlastItem: ' + lastItem + '\nfinal result: ' + myArray.join(', ') + '\nnew arrayLength: ' + myArray.length + '\nnew lastItem: ' + myArray[myArray.length - 1]);
    document.getElementById("exercise9").innerHTML = text;
}  