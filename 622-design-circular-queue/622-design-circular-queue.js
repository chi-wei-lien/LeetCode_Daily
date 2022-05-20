/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    this.head = -1;
    this.tail = -1;
    this.queue = new Array(k);
};

/** 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (!this.isFull()) {
        if (this.head === -1) {
            this.head++;
        }
        this.tail++;
        if (this.tail >= this.queue.length) {
            this.tail -= this.queue.length;
        }
        this.queue[this.tail] = value;
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (!this.isEmpty()) {
        this.queue[this.head] = undefined;
        if (this.head === this.tail) {
            this.head = -1;
            this.tail = -1;
            return true;
        }
        this.head++;
        if (this.head >= this.queue.length) {
            this.head -= this.queue.length;
        }
        return true;
    }
    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.head != -1) {
        let result = this.queue[this.head];
        return result;
    }
    return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.tail != -1) {
        let result = this.queue[this.tail];
        return result;
    }
    return -1;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    if (this.head === -1 && this.tail === -1) {
        return true;
    }
    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    for (let i = 0; i < this.queue.length; i++) {
        if (this.queue[i] == undefined) {
            return false;
        }
    }
    return true;
};

/** 
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */