// FOR ALL EXERCISES WHERE YOU WORK WITH AN ARRAY, PRINT THE RESULTS AT EACH STEP!

/********************** Exercise 1 **********************/

// Go to a website of your choosing (a news site or a shopping site). Find examples of data that might be stored as arrays. Provide a description of the data below. 


// answer: on any given website, when clicking something that lists a group of items that would fall under that topic/subject - an arary would be used to group all these items together under that specific item name to be called upon later by clicking whatever button/element pulls up the array variables 


/********************** Exercise 2 **********************/
// Create an array of books to be sold in an online store. 

const books = ["who", "what", "when", "where", "how", "why"]


/********************** Exercise 3 **********************/
const shopping = ["bread", "milk", "cheese", "hummus", "noodles"];

// For the above array, log the string "bread" to the console.



// After the following code is run, what will happen? Console log the new array.
shopping[0] = "rice";


// Try changing the value "cheese" to "vegetables" using an index.

// Log the value at index 2. Note that it is NOT the second value! Why is that?

// Log the last value WITHOUT using a set number. That is, do NOT write: `shopping[4]`. You can use the `.length` to figure out what the last index is!

// Now write the same code in the square brackets, using the `.length` property to calculate the last index, only with the `gems` array below instead of `shopping`. The solution should give you the last value in ANY array!

const gems = ["ruby", "saphhire", "pearl", "steven", "amethyst", "garnet", "lapis lazuli", "peridot"]


/********************** Exercise 4 **********************/

const cities = ["Oakland", "New York"];

cities.push("Memphis");
// Use an array method to add Memphis to the END of the array.

// Use an array method to add Phoenix to the END of the array.

// Use an array method to add Atlanta to the START of the array.

// Use an array method to add Chicago and Denver to the END of the array with one method call.

// Use an array method to remove the FIRST element of the array.

// Use an array method to remove the LAST element of the array.

// Log the final array to the console. It should look like this: ["Oakland", "New York", "Memphis", "Phoenix", "Chicago"]


/********************** Exercise 5 **********************/

const colors = ["red", "green", "blue", "yellow"];

// Use the slice method on the above array to produce the following array: ["red", "green", "blue"]

// Now use the slice method to produce the following array: ["green", "blue", "yellow"]

// Next use the slice method to produce the following array: ["red", "green"]



/********************** Exercise 6 **********************/

const numbers = [5, 1, 8, 3, 2, 7, 4, 6, 9];

// Sort the array in ascending order




/********************** Exercise 7 **********************/
// The following array contains data about a user. How would you log the string 'Python' to the console?
const userMember = ["Dava Sorbel", 795, ['Python', 'JavaScript', 'Ruby']];

// How would you use that array to find the letter J? Remember that you can use indexes with arrays AND strings!


/********************** Exercise 8 **********************/

const cityString = "Detroit,Atlanta,Birmingham,New Haven,Dallas,San Diego,Portland";
;
// Now let's split the array at each comma. How would you create an array with each of the cities as a separate value?


// What is the length of the new array?


// Log the array to the console


// How would you log the last city in the array to the console?


// Using the .join() method, how would you turn the list of cities back into a string with spaces after the commas?


/********************** Exercise 9 **********************/


let myString = 'Ryu+Ken+Chun-Li+Cammy+Guile+Sakura+Sagat+Juri';

// Convert the string into an array, removing the + characters in the process. Save the result in a variable called myArray.


// Store the length of the array in a variable called arrayLength.


// Store the last item in the array in a variable called lastItem.


// Remove the last item in the array.



// Add two new names to the end of the array.
