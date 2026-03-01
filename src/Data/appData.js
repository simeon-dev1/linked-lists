// All Data processes are linked to here
//.../src/Data/appData.js
export const Data = {
  //Application Data functions
};

//Classes

export class LinkedList {
  constructor() {}

  append(value) {
    if (!value) {
      return "Enter a reasonable value first";
    }

    let node = new Node(value);

    if (!this.headNode) {
      this.headNode = node;
      return;
    }

    let current = this.headNode;

    while (current.next) {
      current = current.next;
    }

    current.next = node;
    return node;
  }

  prepend(value) {
    const node = new Node(value);
    const currentHead = this.headNode;
    node.next = currentHead;
    this.headNode = node;
    return node;
  }

  size() {
    let sum = 0;

    let current = this.headNode;
    while (current) {
      sum += 1;
      current = current.next;
    }

    return sum;
  }

  head() {
    return this.headNode ? this.headNode : undefined;
  }

  tail() {
    let current = this.headNode;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  at(index) {
    if (typeof index !== "number") {
      return "Enter a valid number";
    } else {
      let current = this.headNode;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    }
  }

  pop() {
    if (!this.headNode) {
      return undefined;
    } else {
      let movingNode = this.headNode.next ? this.headNode.next : undefined;
      let poppedNode = this.headNode;
      delete this.headNode;
      this.headNode = movingNode;
      return poppedNode;
    }
    return "Something went wrong...?";
  }

  contains(node) {
    let current = this.headNode;
    while (current) {
      if (current === node) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }

  findIndex(node) {
    if (!this.contains(node)) {
      return -1;
    }

    let index = -1;
    let current = this.headNode;

    while (current) {
      index += 1;
      if (node === current) {
        return index;
      }
      current = current.next;
    }
    return index;
  }

  toString() {
    let stringArr = [];
    let current = this.headNode;
    while (current) {
      stringArr.push(`(${current.data})`);
      current = current.next;
    }
    stringArr.push(`${current}`);

    return stringArr.join(" -> ");
  }

  insertAt(index, ...values) {
    let leftNode = this.findNodeWithIndex(index, true);
    let rightNode = this.findNodeWithIndex(index);
    if (!rightNode || !leftNode) {
      return "RangeError";
    }
    let current = leftNode;
    for (let i = 0; i < values.length; i++) {
      let newNode = new Node(values[i]);
      current.next = newNode;
      current = newNode;
    }
    current.next = rightNode;
    return "Values inserted successfully";
  }

  removeAt(index) {
    let node = this.findNodeWithIndex(index);
    let leftNode = this.findNodeWithIndex(index - 1);
    let rightNode = this.findNodeWithIndex(index + 1);

    if (!leftNode) {
      return "RangeError";
    } else {
      leftNode.next = rightNode ? rightNode : null;
      return node;
    }
  }

  //HELPERS
  findNodeWithIndex(index, beforeIndex = false) {
    index = beforeIndex ? index - 1 : index;

    let current = this.headNode;
    for (let i = 0; i <= index; i++) {
      if (i === index) {
        return current;
      } else if (!current) {
        return undefined;
      } else {
        current = current.next;
      }
    }
  }
}

export class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
