function quicksort(arr) {
  if (arr.length < 2) {
    return arr
  } else {
    const pivot = arr[0]
    const left = [], right = []
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i])
      } else {
        right.push(arr[i])
      }
    }
    return [...quicksort(left), pivot, ...quicksort(right)]
  }
}

const testArr = [5, 78, 1, 3, 6]
console.log(quicksort(testArr))


function merge(arr, left, mid, right) {
  const n1 = mid - left + 1
  const n2 = right - mid
  const tmpLeft = new Array(n1)
  const tmpRight = new Array(n2)

  for (let i = 0; i < n1; i++) {
    tmpLeft[i] = arr[left + i]
  }
  for (let i = 0; i < n2; i++) {
    tmpRight[i] = arr[mid + 1 + i]
  }

  console.log(tmpLeft, tmpRight)
  console.log(n1, n2)
  console.log(arr)
  let i = 0
  let j = 0
  let k = left
  while (i < n1 && j < n2) {
    if (tmpLeft[i] <= tmpRight[j]) {
      arr[k] = tmpLeft[i]
      i++
    } else {
      arr[k] = tmpRight[j]
      j++
    }
    k++
  }

  while (i < n1) {
    arr[k] = tmpLeft[i]
    i++ 
    k++
  }

  while (j < n2) {
    arr[k] = tmpRight[j]
    j++
    k++
  }
}

function mergesort(arr, left, right) {
  if (left >= right) return
  const mid = left + parseInt((right - left) / 2)
  // const mid = Math.floor((left + right) / 2)
  
  mergesort(arr, left, mid)
  mergesort(arr, mid + 1, right)
  merge(arr, left, mid, right)
}

const testMergeSort = testArr.slice()
mergesort(testMergeSort, 0, testMergeSort.length - 1)
console.log(testMergeSort)