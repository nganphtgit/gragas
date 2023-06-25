interface List<T> {
  length: number
  isEmpty: () => boolean
  add: (value: T) => void
  insertAt: (index: number, value: T) => void
  deleteAt: (index: number) => void
  toArray: () => Array<T>
}


class ListNode<T> {
  data: T
  next: ListNode<T> | null

  constructor(data: T) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList<T> implements List<T> {
  head: ListNode<T> | null
  length: number

  constructor() {
    this.head = null
    this.length = 0
  }

  isEmpty() {
    return this.length === 0
  }

  add(value: T) {
    const node = new ListNode(value)
    let current = <ListNode<T> | null>this.head
    if (!current) {
      this.head = node
    } else {
      while (current.next) {
        current = current.next
      }
      current.next = node
    }
    this.length = this.length + 1
  }

  insertAt(index: number, value: T) {
    if (index < 0 || index > this.length) {
      return console.log('Invalid index')
    }

    const node = new ListNode(value)

    if (this.length === 0) { // index must be 0
      this.head = node
    } else {
      let curr: ListNode<T>, prev: ListNode<T>
      prev = <ListNode<T>>this.head // prevent to declare null type
      curr = <ListNode<T>>this.head
      for (let i = 0; i < index; i++) {
        prev = <ListNode<T>>curr
        curr = <ListNode<T>>curr.next
      }
      prev.next = node
      node.next = curr
    }
    this.length = this.length + 1
  }

  deleteAt(index: number) {
    if (index < 0 || index > this.length) {
      return console.log('Invalid index')
    }

    if (this.length === 0) {
      this.head = null
    } else {
      let curr: ListNode<T>, prev: ListNode<T>
      prev = <ListNode<T>>this.head // prevent to declare null type
      curr = <ListNode<T>>this.head
      for (let i = 0; i < index; i++) {
        prev = <ListNode<T>>curr
        curr = <ListNode<T>>curr.next
      }
      curr = <ListNode<T>>curr.next
      prev.next = curr
    }
    this.length = this.length - 1
  }

  toArray() {
    const arr = []
    let p = this.head

    while (p) {
      arr.push(p.data)
      p = p.next
    }
    return arr
  }
}


const list = new LinkedList()
list.add(1)
list.add(3)
list.add(5)

list.insertAt(1, 2)
list.deleteAt(2)

console.log(list.toArray())

