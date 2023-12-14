const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {

  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {

    const newNode = new Node(data);

    if (this.rootNode === null) {
      this.rootNode = newNode;
    } else {
      this.addNewNode(this.rootNode, newNode);
    }
  }

  addNewNode(curNode, newNode) {
    if (newNode.data < curNode.data) {
      if (curNode.left === null) {
        curNode.left = newNode;
      } else {
        this.addNewNode(curNode.left, newNode);
      }
    } else if (newNode.data > curNode.data) {
      if (curNode.right === null) {
        curNode.right = newNode;
      } else {
        this.addNewNode(curNode.right, newNode);
      }
    }
  }

  has(data) {
    return this.find(data) !== null;
  }

  find(data, curNode = this.rootNode) {
    if (curNode === null) return null;

    if (data < curNode.data) {
      return this.find(data, curNode.left);
    } else if (data > curNode.data) {
      return this.find(data, curNode.right);
    }

    return curNode;
  }

  remove(data) {
    this.rootNode = this.removeNode(data, this.rootNode);
  }

  removeNode(data, curNode) {
    if (curNode === null) {
      return null;
    } else if (data < curNode.data) {
      curNode.left = this.removeNode(data, curNode.left);
      return curNode;
    } else if (data > curNode.data) {
      curNode.right = this.removeNode(data, curNode.right);
      return curNode;
    } else {
      if (curNode.left === null && curNode.right === null) {
        curNode = null;
        return curNode;
      }
      
      if (curNode.left === null) {
        curNode = curNode.right;
        return curNode;
      } else if (curNode.right === null) {
        curNode = curNode.left;
        return curNode;
      }

      let rightNodeMinVal = this.min(curNode.right);
      curNode.data = rightNodeMinVal;
      curNode.right = this.removeNode(curNode.data, curNode.right);
      return curNode;
    }
  }

  min(curNode = this.rootNode) {
    if (curNode.left === null) return curNode.data;
    
    return this.min(curNode.left);
  }

  max(curNode = this.rootNode) {
    if (curNode.right === null) return curNode.data;
    
    return this.max(curNode.right);
  }
}

module.exports = {
  BinarySearchTree
};