
var MyQueue = function() {
    this.stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stack.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let tempStack = [];
    let stackLength = this.stack.length;
    for (let i = 0; i < stackLength; i++) {
        tempStack.push(this.stack.pop());
    }
    let result = tempStack.pop();
    for (let i = 0; i < stackLength - 1; i++) {
        this.stack.push(tempStack.pop());
    }
    return result;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let tempStack = [];
    let stackLength = this.stack.length;
    for (let i = 0; i < stackLength; i++) {
        tempStack.push(this.stack.pop());
    }
    console.log(tempStack);
    let result = tempStack[tempStack.length - 1];
    for (let i = 0; i < stackLength; i++) {
        this.stack.push(tempStack.pop());
    }
    return result;
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return (this.stack.length === 0);
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */