
// 1. Create a function that finds the highest number.


// Old Syntax
// Purpose: To find the highest number in an array.
// Signature: Takes an array
// Example:
var testArray = [2,7,8,3,7]
function highestNumber(arr){
  var max = 0

  for (var i = 0; i < arr.length; i ++) {
    if (arr[i] > max) {
      max = arr[i]
    }
  }
  return max
}

//1.b New Syntax Highest number

var testArray = [-2,-7,-10,-13,-18]
function highestNumber(arr){

  var max = -Infinity
  arr.forEach(function(ele){
    if (ele > max) {
      max = ele
    }
  })
  return max
}
// 2. Create a function that finds the lowest number.

var testArray = [2,7,8,3,17]
function lowestNumber(arr){
  var min = Infinity
  arr.forEach(function(ele){
    if (ele < min) {
      min = ele
    }
  })
  return min
}

//3. Finds the smallest number (the closest to zero). Same as beneath but not a function
var testArray = [7,8,-2,3,17,-1]


var closest = Infinity
testArray.forEach(function(ele){
  if (Math.abs(ele) < Math.abs(closest)) {
    closest = ele
  }
})
closest


// 3.b Create a function that finds the smallest number (the closest to zero).
var testArray = [7,8,-2,3,17,-1]

function smallestNumber(arr) {
  var closest = Infinity
  arr.forEach(function(ele){
    if (Math.abs(ele) < Math.abs(closest)) {
      closest = ele
    }
  })
  return closest
}


// 4. Create a function that calculate the sum of an array
var testArray = [7,8,-2,3,17,-1]
function calcSum(arr){
  sum = 0
  arr.forEach(function(ele){
    sum = sum + ele
  })
  return sum
}

// 5. Create a function that calculate the mean value. Uses calcSum from before.
var testArray = [7,8,-2,3,17,-1]
function calcMean(arr){
  var mean = 0
  arr.forEach(function(ele){
    mean= calcSum(arr)/arr.length
  })
  return mean
}

// 6. Create a function that finds the index of the highest number. .
var testArray = [7,8,-2,3,17,-1]

//highestNumber from previous
function highestNumber(arr){

  var max = -Infinity
  arr.forEach(function(ele){
    if (ele > max) {
      max = ele
    }
  })
  return max

//This finds the index of the highest number.
function indexHighestNumber(arr){
  var hiNum = highestNumber(arr)
  return arr.lastIndexOf(hiNum)
}

//7. Arrays of Strings
// Create an array with your siblings names, and an array with your parents names.
var siblingNames = ["Sergio", "Charmaine", "Brady"]
var parentNames = ["Adam", "Jez", "Diane"]

// a. Sort your siblings names in alphabetical order.
siblingNames.sort ()

// b. Sort your parents names in reverse alphabetical order.
parentNames.reverse(parentNames.sort())

// c. Sort all the names in alphabetical order.
//Hint: Combine the arrays into a single array.
var bothNames = siblingNames.concat(parentNames)
bothNames.sort()


// d. Sort all the names in reverse alphabetical order.
bothNames.reverse(bothNames.sort())

// e. Create a function that determines if a given name is amongst the names.

function findName(name, arr){
  var target = name + " isn't"
  arr.forEach(function(ele){
    if (name === ele){
      target = name
    }
  })
  return target + " here"
}

// Advanced Functions
// 8. Create a function that returns an array with only the even elements from the array.
// Hint: use the % operator

var numbers =[3,7,3,11,5,1]
function evenElements(arr){
  var newArray = []
  arr.forEach(function(ele){
    if ((ele % 2) === 0){
      newArray.push(ele)
    }
  })
  return newArray
}


// Create a function that returns an array with only the odd elements from the array.

var numbers =[3,8,3,10,5,2]
function oddElements(arr){
  var newArray = []
  arr.forEach(function(ele){
    if ((ele % 2) != 0){
      newArray.push(ele)
    }
  })
  return newArray
}
















//
