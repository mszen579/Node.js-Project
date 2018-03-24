module.exports.counter = function(arr){
return 'There are ' + arr.length + " elements in this array";
};

module.exports.adder = function(a,b){
    return `The sum of the 2 numbers is ${a+b}`; // we used the ticks `` as a replacement of concatination but we need to add ${} to insert the variable into the sentence

};

module.exports.pi = 3.142;
