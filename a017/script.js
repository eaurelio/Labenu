const newArray = array => {
  let newArray = []

  newArray.push (array[0] / 2)
  newArray.push (array[array.length -1] / 2)

  return newArray
}

let array = [2, 4, 6, 8]
let secArray = [3, 6, 9, 12]

console.log(newArray(array), newArray(secArray))