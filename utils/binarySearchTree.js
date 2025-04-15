class Node {
  constructor(value) {
    this.data = value
    this.left = null
    this.right = null
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null
  }

  insert(value) {
    this.root = this._insertNode(this.root, value)
  }

  _insertNode(node, value) {
    if (node === null) {
      return new Node(value)
    }

    if (value <= node.data) {
      node.left = this._insertNode(node.left, value)
    } else {
      node.right = this._insertNode(node.right, value)
    }

    return node
  }

  search(target) {
    return this._searchNode(this.root, target)
  }

  _searchNode(node, target) {
    if (node === null) {
      return -1
    } else if (node.data === target) {
      return target
    } else if (target < node.data) {
      return this._searchNode(node.left, target)
    } else {
      return this._searchNode(node.right, target)
    }
  }

  delete(target) {
    this.root = this._deleteNode(this.root, target)
  }

  _deleteNode(node, target) {
    if (node == null) return null

    if (target < node.data) {
      node.left = this._deleteNode(node.left, target)
    } else if (target > node.data) {
      node.right = this._deleteNode(node.right, target)
    } else {
      // node tanpa anak
      if (!node.left && !node.right) return null

      // node satu anak
      if (!node.left) return node.right
      if (!node.right) return node.left

      // node dua anak
      const minRight = this._findMin(node.right)
      node.data = minRight
      node.right = this._deleteNode(node.right, minRight)
    }

    return node
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left
    }
    return node.data
  }

  _findMax(node) {
    while (node.right !== null) {
      node = node.right
    }
    return node.data
  }

  printInOrder(node = this.root) {
    if (node !== null) {
      this.printInOrder(node.left)
      console.log(node.data)
      this.printInOrder(node.right)
    }
  }
}

module.exports = {
  BinarySearchTree,
}
