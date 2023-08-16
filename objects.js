let me = {
    name: "Hailey",
    age: 26,
    address: {
        streetNumber: 763,
        streetName: "Main Street",
        city: "Manchester",
        state: "CT",
        zipCod: "06040",
        },

friends: [
    'Catie',
    'Laura',
    'Dawn',
    'Robyn',
],
};

let otherMe = {
name: 'Bailey',
age: 62,
mentalAge: 60,
};

let friendsList = me.friends;
console.log(friendsList[2]);

otherMe.name = 'Dailey';

// console logs:

console.log('OBJECTS LESSON LOGS');
console.log(me);
console.log(me.address.city + ' is the town ' + me.name + ' lives in');
console.log(me.age + ' year old ' + me.name);

console.log(me.friends[2])
console.log(otherMe);
console.log('END OF OBJECTS LESSONS LOGS');