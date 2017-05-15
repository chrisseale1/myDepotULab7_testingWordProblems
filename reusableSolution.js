var library = (function(){
  return {
// Utility --- Complete Functions Below
      identity: function(val) {
        return val;
      },

// Collections --- Complete Functions Below

      each: function(list, iterator) {
        if(list.constructor === Array) {
          for(var i = 0; i < list.length; i++) {
            iterator(list[i], i, list);
          }
        } else {
          for(var key in list) {
            iterator(list[key], key, list);
          }
        }
      },

      filter: function(list, test) {
        var array = [];
        this.each(list, function(item){
          if(test(item)){
            array.push(item);
          }
        });
        return array;
      },

      reject: function(list, test) {
        return this.filter(list, function(item){
          return !test(item)
        });
      },

      map: function(list, iterator) {
        var results = [];
        this.each(list, function(item){
          results.push(iterator(item));
        });

        return results;
      },

      pluck: function(list, key) {
        return this.map(list, function(item){
          return item[key];
        });
      },

      reduce: function(list, iterator, accumulator) {
        accumulator = accumulator !== undefined ? accumulator : list[0];
        this.each(list, function(item) {
          accumulator = iterator(accumulator, item);
        });

          return accumulator;
      },

      every: function(list, iterator) {
        if(typeof iterator === 'undefined') iterator = this.identity;
        return this.reduce(list, function(remainsTrue, item){
            if(!remainsTrue) return false;
            return !!iterator(item);
          }, true);
      },

      some: function(list, iterator) {
        if(typeof iterator === 'undefined') iterator = this.identity;
        return !this.every(list, function(item){
          return !iterator(item);
        });
      },

      contains: function(list, target) {
        return this.reduce(list, function(wasFound, item) {
            if (wasFound) {
              return true;
            }
            return item === target;
          }, false);
      },


// Advanced Collections --- Complete Functions Below

      shuffle: function(array) {
      	var copy = array.slice();

      	for (var i = 0; i < copy.length - 1; i++) {
      		for (var j = 1; j < copy.length; j++) {
      			if(Math.random() < 0.5) {
      				var temp = copy[i];
      				copy[i] = copy[j];
      				copy[j] = temp;
      			}
      		}
      	}
      	return copy;
      },

      invoke: function(list, methodName, args) {
        return this.map(list, function(item){
          if(typeof methodName == 'function'){
            return methodName.apply(item, args);
          } else {
            return item[methodName].apply(item, args);
          }
        });
      },

      sortBy: function(list, iterator) {
      	if (typeof iterator !== 'function') {
      		var str = iterator;
      		iterator = function(item) { return item[str];};
      	}
      	var res = [];
      	this.each(list, function(item) { res.push(item); });

      	for (var i = 0; i < res.length - 1; i++) {
      		for (var j = i + 1; j < res.length; j++) {
      			if (iterator(res[i]) > iterator(res[j]) ||
      			!res[i]) {
      				var temp = res[i];
      				res[i] = res[j];
      				res[j] = temp;
      			}
      		}
      	}
      	return res;
      },

// Objects --- Complete Functions Below
      extend: function(obj) {
        var args = Array.prototype.slice.call(arguments, 1);
        this.each(args, function(property){
          for(var key in property) {
              obj[key] = property[key];
          }
        });
        return obj;
      },

      defaults: function(obj) {
        var args = Array.prototype.slice.call(arguments, 1);

        this.each(args, function(property){
          for(var key in property){
            if(!obj.hasOwnProperty(key)){
              obj[key] = property[key];
            }
          }
        });
        return obj;
      },

// Arrays --- Complete Functions Below
      first: function(array, n) {
        return n === undefined ? array[0] : array.slice(0, n);
      },

      last: function(array, n) {
        if(n === undefined) {
          return array[array.length -1];
        } else if (n === 0) {
          return [];
        } else {
          return array.slice(-n);
        }
      },

      indexOf: function(array, target){
        var result = -1;

        this.each(array, function(item, index) {
          if (item === target && result === -1) {
            result = index;
          }
        });

        return result;
      },

      uniq: function(array) {
        var el = [];
        this.each(array, function(item) {
          if(el.indexOf(item) === -1) {
            el.push(item);
          }
        })

        return el;
      },

  // Advanced Arrays --- Complete Functions Below

      zip: function() {
      	var arrays = Array.prototype.slice.call(arguments);
      	var longest = this.sortBy(arrays, 'length')[arrays.length - 1].length;
      	var zipped = [];
      	for (var i = 0; i < longest; i++) {
      		var zipPart = [];
      		this.each(arrays, function(arr) {
      			if (i >= arr.length) zipPart.push(undefined);
      			else zipPart.push(arr[i]);
      		});
      		zipped.push(zipPart);
      	}

      	return zipped;
      },

      flatten: function(nestedArray, result) {
        var self = this;
      	result = result || [];
      	this.each(nestedArray, function(item) {
      		if (!Array.isArray(item)) result.push(item);
      		else self.flatten(item, result);
      	});
      	return result;
      },

      intersection: function() {
      	var over = [], args = Array.prototype.slice.call(arguments, 1);
        var self = this;

      	self.each(arguments[0], function(i) {
      		var cross = true;
      		self.each(args, function(j) {
      			if (self.indexOf(j, i) < 0) cross = false;
      		});
      		if (cross) over.push(i);
      	});
      	return over;

      },

      difference: function(array) {
      	var arrays = Array.prototype.slice.call(arguments, 1);
      	var unique = [];
        var self = this;

      	self.each(array, function(i) {
      		var selfish = true;
      		self.each(arrays, function(j) {
      			if (self.indexOf(j, i) >= 0) selfish = false;
      		});
      		if (selfish) unique.push(i);
      	});
      	return unique;
      },

// Functions --- Complete Functions Below

      once: function(func) {
        var alreadyCalled = false;
        var result;
        return function() {
          if (!alreadyCalled) {
            result = func.apply(this, arguments);
            alreadyCalled = true;
          }
          return result;
        };
      },

      memoize: function(func) {
        var storage = {};
      	return function() {
      		if (!storage[arguments[0]]) {
      			storage[arguments[0]] = func.apply(this, arguments);
      		}
      		return storage[arguments[0]];
      	};
      },

      delay: function(func, wait) {
        var args = Array.prototype.slice.call(arguments, 2);
        setTimeout(function(){
          func.apply(this, args);
        }, wait);
      }
  }
})();