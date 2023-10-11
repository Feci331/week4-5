//const arr = ["egy", "ketto", "három", "négy"]

//console.log(arr.includes("text"))

//console.log(["one", "two", "three", "four"].includes("four"))

/* const obj = {
    key1: "value",
    key2: 10,
    key3: function() {
        console.log("hello")
    }
}

console.log(obj.key3()) */

const obj = {
    name: "Gipsz Jakab",
    age: 27,
    pets: ["Mirci", "Lajcsi", "Géza"]
}

for (const key of Object.keys(obj)) {
    console.log(key, obj[key])
}
