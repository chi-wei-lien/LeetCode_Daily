
var MyHashMap = function() {
    this.hashmap = new Array(1001);
    for (let i = 0; i < 1001; i++) {
        this.hashmap[i] = [];
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
MyHashMap.prototype.put = function(key, value) {
    let bucket = this.hashmap[Math.floor((key + 1) / 1000)];
    if (bucket.length) {
        for (let i = 0; i < 1000; i++) {
            if (bucket[i]) {
                if (bucket[i][0] === key) {
                    bucket[i][1] = value;
                    return;
                }
            }
        }
    }
    bucket.push([key, value]);
};

/** 
 * @param {number} key
 * @return {number}
 */
MyHashMap.prototype.get = function(key) {
    let bucket = this.hashmap[Math.floor((key + 1) / 1000)];
    if (bucket.length) {
        for (let i = 0; i < 1000; i++) {
            if (bucket[i]) {
                if (bucket[i][0] === key) {
                    return bucket[i][1];
                }
            }
        }
    }
    return -1;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashMap.prototype.remove = function(key) {
    let bucket = this.hashmap[Math.floor((key + 1) / 1000)];
    if (bucket.length) {
        for (let i = 0; i < 1000; i++) {
            if (bucket[i]) {
                 if (bucket[i][0] === key) {
                    bucket.splice(i, 1);
                }
            }
        }
    }
};

/** 
 * Your MyHashMap object will be instantiated and called as such:
 * var obj = new MyHashMap()
 * obj.put(key,value)
 * var param_2 = obj.get(key)
 * obj.remove(key)
 */