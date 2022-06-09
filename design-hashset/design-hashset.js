
var MyHashSet = function() {
    this.hashset = new Array(1001);
    for (let i = 0; i < 1001; i++) {
        this.hashset[i] = [];
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    if (!this.contains(key)) {
        this.hashset[Math.floor((key + 1) / 1000)].push(key);
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let bucket = this.hashset[Math.floor((key + 1) / 1000)];
    if (bucket.length) {
        for (let i = 0; i < 1000; i++) {
            if (bucket[i] === key) bucket.splice(i, 1);
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let bucket = this.hashset[Math.floor((key + 1) / 1000)];
    if (bucket.length) {
        for (let i = 0; i < 1000; i++) {
            if (bucket[i] === key) return true;
        }
    } 
    return false;
};

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */