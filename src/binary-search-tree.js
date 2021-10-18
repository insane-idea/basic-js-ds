const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

module.exports = class BinarySearchTree {
  constructor() {
    this.root1 = null;
  }

  root() {
    return this.root1;
  }

  add(value) {
    this.root1 = addNode(this.root1, value);

    function addNode(node, value) {
      if (!node) {
        return new Node(value);
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addNode(node.left, value);
      } else {
        node.right = addNode(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return hasNode(this.root1, value);

    function hasNode(node, value) {
      if (!node) {
        return false;
      }
      if (node.data === value) {
        return true;
      }
      return value < node.data ?
        hasNode(node.left, value) :
        hasNode(node.right, value);
    }
  }

  // returns node with the data if node with the data exists in the tree and null otherwise
  find(value) {
    return findNode(this.root1, value);

    function findNode(node, value) {
      if (!node) {
        return null;
      }
      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        return findNode(node.left, value);
      } else {
        return findNode(node.right, value);
      }
    }
  }

  remove(value) {
    this.root1 = removeValue(this.root1, value);

    function removeValue(node, value) {

      if (!node) {
        return null;
      }

      if (value < node.data) {
        node.left = removeValue(node.left, value);
        return node;
      } else if (value > node.data) {
        node.right = removeValue(node.right, value);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        else {
          let maxFromLeft = node.left;
          while (maxFromLeft.right) {
            maxFromLeft = maxFromLeft.right;
          }
          node.data = maxFromLeft.data;

          node.left = removeValue(node.left, maxFromLeft.data);
          return node;
        }
      }
    }
  }

  min() {
    // Easy without recursion
    if (!this.root1) {
      return;
    }

    let minimum = this.root1;
    while (minimum.left) {
      minimum = minimum.left;
    }

    return minimum.data;
  }

  max() {
    if (!this.root1) {
      return;
    }

    return checkRight(this.root1);

    function checkRight(node) {
      if (!node.right) {
        return node.data || null;
      }

      let maxValue = node;
      while (maxValue.right) {
        maxValue = maxValue.right;
      }
      checkRight(maxValue);

      return maxValue.data;
    }
  }

}

