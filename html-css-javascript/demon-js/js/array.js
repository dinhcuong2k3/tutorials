const arrayFullName = ["dinh","manh","cuong"];
console.log(arrayFullName.join(" "))

console.log(arrayFullName.length)

arrayFullName.push("20")
console.log(arrayFullName.join(" "))

delete arrayFullName[1]
console.log(arrayFullName.join(" "))

arrayFullName.shift()
console.log(arrayFullName.join(" "))

arrayFullName.unshift("dinh")
console.log(arrayFullName.join(" "))

arrayFullName[1] = "manh"
console.log(arrayFullName.join(" "))

const insertCCCD = ["012345678"];
const FullName = arrayFullName.concat(insertCCCD)
console.log(FullName.join(" "))