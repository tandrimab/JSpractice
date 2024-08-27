let arr1 = [{"id":0,"b":16,"y":92,"e":90,"x":96,"k":11,"z":92,"u":28,"t":68,"n":45},{"id":2,"n":36,"v":42,"i":60,"w":37,"p":78}]

let arr2 =[{"id":0,"r":74,"x":12,"n":87,"f":87,"j":53,"p":16,"b":85,"m":73},{"id":1,"b":27,"c":21,"d":6,"r":93,"z":34}]

// let result = [
//   ...arr1.filter((e) => e.id),
//   ...arr2.filter((e) => e.id),
// ];

let temp = [
  ...arr1.filter((e) => e.hasOwnProperty("id")),
  ...arr2.filter((e) =>  e.hasOwnProperty("id")),
];

let result = new Map();

for (let item of temp) {
    if (result.has(item.id)) {
        let obj = {
          ...result.get(item.id),
          ...item
        }
        result.set(item.id, obj);
    } else {
      result.set(item.id, item);

    }
}

result = Array.from(result.values()).sort((a, b) => a.id-b.id)

console.log(result);
