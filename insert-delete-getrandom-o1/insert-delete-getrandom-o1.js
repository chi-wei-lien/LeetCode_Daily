
var RandomizedSet = function() {
    this.map = new Map();
    this.array = [];
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.has(val)) {
        return false;
    }
    this.map.set(val, this.array.length);
    this.array.push(val);
    return true;
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        let loc = this.map.get(val);
        let size = this.array.length;
        if (size != 1) {
            let lastElement = this.array[size - 1]
            this.map.set(lastElement, loc);
            this.array[size - 1] = val;
            this.array[loc] = lastElement;
        }
        this.array.pop();
        this.map.delete(val);
        
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.array[Math.floor(Math.random() * this.array.length)];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */