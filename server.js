const express = require("express");

const app = express();

function reverseArray(arr) {
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        stack.push(arr[i]);
    }
    for (let i = 0; i < arr.length; i++) {
        arr[i] = stack.pop(); 
    }
    return arr;
}

console.log(reverseArray([1, 2, 3, 4, 5])); 

//////

class QueueUsingStacks {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    enqueue(item) {
        this.stack1.push(item);
    }

    dequeue() {
        if (this.stack2.length === 0) {
            while (this.stack1.length > 0) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop() || "Queue is empty";
    }
}

let q = new QueueUsingStacks();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
console.log(q.dequeue()); // 10
console.log(q.dequeue()); // 20



function sumArray(arr, n) {
    if (n === 0) return 0;
    return arr[n - 1] + sumArray(arr, n - 1);
}

let arr = [1, 2, 3, 4, 5];
console.log(sumArray(arr, arr.length)); 



class ListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverseLinkedList(head) {
    let prev = null;
    let current = head;
    while (current !== null) {
        let nextNode = current.next;
        current.next = prev;
        prev = current;
        current = nextNode;
    }
    return prev; 
}


let head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
head.next.next.next = new ListNode(4);

let reversedHead = reverseLinkedList(head);
console.log(reversedHead); 



function deleteMiddleNode(head) {
    if (!head || !head.next) return null;

    let slow = head, fast = head, prev = null;

    while (fast !== null && fast.next !== null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = slow.next; 
    return head;
}


let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

console.log(deleteMiddleNode(list));

/////////////


function isBalanced(expression) {
    let stack = [];
    let pairs = { ")": "(", "}": "{", "]": "[" };

    for (let char of expression) {
        if (char === "(" || char === "{" || char === "[") {
            stack.push(char);
        } else if (char === ")" || char === "}" || char === "]") {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return "Not Balanced";
            }
        }
    }

    return stack.length === 0 ? "Balanced" : "Not Balanced";
}

console.log(isBalanced("[()]{}{[()()]()}")); // Balanced
console.log(isBalanced("[(])")); // Not Balanced


////////



const PORT = 3043;
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});




