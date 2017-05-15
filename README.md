# Reusable: Solution
### Instructions

### Further Reading
https://smthngsmwhr.wordpress.com/2014/02/02/eloquent-javascript-with-underscore-js/

### Basic Req's

A few functions have been implemented to give a sense of how others can be implemented. Work out of the js file and open the index.html file to view in browser. To know if your functions have been implemented correctly, save the js file and refresh the html page to run tests in the browser.

Some functions are defined natively in Javascript or in browser; refrain from using these methods to build out your functions. (i.e. Do not use Array.indexOf(element) to define the indexOf function.)

Attempt to reuse previously implemented functions to complete subsequent ones.

#### Utility
	Hint: Identity does little but may be useful if a function needs to provide an iterator when the user does not pass one in.

	*identity - Returns the same value that is used as the argument.

#### Collections

In Javascript, a collection refers to something which holds numerous values. This can be both objects and arrays.

	*each - Has no return value. instead - calls the iterator function over each item in the collection. Hint: calls iterator(value, key, collection).

	*filter - Return array with all elements which pass a truth test.

	*reject - Similar to filter, but returns elements which do not pass.

	*map - Returns results of running the iterator over each element.

	*pluck - Implemented with map, returns an array of extracted values.

	*reduce - Reduces a collection of values to a single value. The accumulator should be returned with the previous iterator call. A starting value can be passed in for the accumulator. If no value is passed in the first element is used.

	*every - Returns true if all the values pass the truth test. If no iterator provided, provide a default one.

	*some - Similar to every but, returns true if any values pass the truth test.
	*contains - Evaluates a collection and returns true if value is present.

	#####Advanced
	*shuffle - randomizes the order of array by arbitrary [shuffle method](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle).
	Hint: research how to [copy an array](http://mdn.io/Array.prototype.slice) may come in handy.

	*sortBy - Returns a sorted copied list by specifications of iterator provided. Iterator can also be a string  of the property to sort by.

	*invoke - Calls method named by methodName on each value in collection.
	Hint: look up [.apply here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply).


#### Objects - helpers to merge objects
	*keys - Retrieve all the names of the object's own enumerable properties

	*extend - Copies all of the properties in the source objects over to the destination object, and return the destination object.

	*defaults - fills in undefined object properties with values present in passed in objects. Does not override any pre existing properties.


#### Arrays
	*first - Returns the first n elements in array (If n undefined - returns first element).

	*last - Returns the last n elements in array (If n undefined - returns last element).

	*indexOf - Returns the index at which value can be found in the array, or -1 if value is not present in the array.

	*uniq - Returns a duplicate free version of array.


	##### Advanced
	*zip - Merges two arrays together, with similar indices going together.
		`zip(['apple', 'banana', 'grape'], ['red', 'yellow'])`
		`//returns [['apple','red'], ['banana','yellow], ['grape',undefined]]`

	*flatten - Takes a nested array (to any degree) and flattens to a normal array. Should only work for arrays.

	*intersection - Takes any amount of arrays and returns a single array with values present in each array.

	*difference - Takes the difference between an array and a given amount of other arrays.



#### Functions -  take in any function and return out a new version of the function that works somewhat differently

	*once - takes in a function and creates a version which can only be called one time. Multiple calls have no effect and return the same result from first call.

	*memoize - Memoizes a passed in function by caching result. When called, memoize checks if the result is already computed for a given argument and returns that value instead.

	*delay - invokes passed in function after a specified numner of milliseconds. Can take in optional arguments, which if passed in, will be applied to the function when it is invoked.

