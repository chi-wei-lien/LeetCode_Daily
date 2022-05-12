var MyLinkedList = function() {
    this.head = null;
};

MyLinkedList.prototype.createNode = function(val) {
    return {
        val,
        next: null,
        prev: null
    }
}

/** 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if (index < 0) {
        return -1;
    }
    let temp = this.head;
    for (let i = 0; i < index; i++) {
        if (!temp) {
            return -1;
        }
        temp = temp.next;
    }
    if (!temp) {
        return -1;
    }
    return temp.val;
};

/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    let newNode = this.createNode(val);
    newNode.next = this.head;
    if (this.head) {
        this.head.prev = newNode;
    }
    this.head = newNode;
};


/** 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let temp = this.head;
    if (!temp) {
        this.addAtHead(val);
        return;
    }
    while (temp.next) {
        temp = temp.next;
    }
    let newNode = this.createNode(val);
    temp.next = newNode;
    newNode.prev = temp;
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if (index === 0) {
        this.addAtHead(val);
        return;
    }
    
    let temp = this.head;
    
    for (let i = 1; i < index; i++) {
        if (!temp) {
            return;
        }
        temp = temp.next;
    }
    let newNode = this.createNode(val);
    if (!temp) {
        return;
    }
    let nextNode = temp.next;
    
    temp.next = newNode;
    newNode.prev = temp;
    newNode.next = nextNode;
    if (nextNode) {
        nextNode.prev = newNode;
    }
};

/** 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index === 0) {
        this.head = this.head.next;
    }
    let temp = this.head;
    for (let i = 1; i < index; i++) {
        if (!temp) {
            return;
        }
        temp = temp.next;
    }
    let nextNode = null;
    if (!temp) {
        return;
    }
    if (temp.next) {
        nextNode = temp.next.next;
        if (temp.next.next) {
            temp.next.next.prev = temp;
        }
    }
    temp.next = nextNode;
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */