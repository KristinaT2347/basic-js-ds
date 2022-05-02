const { NotImplementedError } = require("../extensions/index.js")

const { Node } = require("../extensions/list-tree.js")

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.node = null
  }

  root() {
    return this.node
  }

  add(data) {
    const node = new Node(data)

    if (!this.node) {
      this.node = node
      return
    }

    let currentNode = this.root()

    while (true) {
      const key = currentNode.data < data ? "right" : "left"

      if (currentNode[key]) {
        currentNode = currentNode[key]
      } else {
        currentNode[key] = node
        return
      }
    }
  }

  has(data) {
    return !!this.find(data)
  }

  find(data) {
    let node = this.root()

    while (node) {
      if (node.data === data) {
        return node
      }

      const key = node.data < data ? "right" : "left"
      node = node[key]
    }

    return null
  }

  remove(data) {
    const getChildren = (node) => {
      let arr = []

      if (node.left) {
        arr = [...arr, node.left.data, ...getChildren(node.left)]
      }

      if (node.right) {
        arr = [...arr, node.right.data, ...getChildren(node.right)]
      }

      return arr
    }

    let node = this.root()

    if (node.data === data) {
      const treeValues = getChildren(node)
      this.node = null
      treeValues.map((item) => this.add(item))

      return null
    }

    while (node) {
      const key = node.data < data ? "right" : "left"

      if (node[key] && node[key].data === data) {
        const treeValues = getChildren(node[key])

        node[key] = null
        treeValues.map((item) => this.add(item))
        return null
      }

      

      if (node[key]) {
        node = node[key]
      }
    }

    return null
  }

  min() {
    let node = this.root()
    let min = node.data

    console.log(JSON.stringify(node, '  '))

    while (node) {
      if (min > node.data) {
        min = node.data
      }

      if (node.left) {
        node = node.left
      } else {
        return min
      }
    }

    return min
  }

  max() {
    let node = this.root()
    let max = node.data

    while (node) {
      if (max < node.data) {
        max = node.data
      }

      if (node.right) {
        node = node.right
      } else {
        return max
      }
    }

    return max
  }
}

module.exports = {
  BinarySearchTree,
}
