// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(name) {
    return cats.push('Ralph');
}
 function destructivelyPrependCat(name) {
    return cats.unshift("Bob");
 }   
function destructivelyRemoveLastCat() {
    return cats.pop();
}
function destructivelyRemoveFirstCat() {
    return cats.shift();
}
function appendCat(name) {
    const newCats = [...cats];
    newCats.push(name);
    return newCats;
}
function prependCat(name) {
    return ["Arnold", ...cats];
  }
removeLastCat = () =>{
    let lastCat = [...cats];
    lastCat.pop();
    return lastCat;
}
removeFirstCat= () => {
    const newCats = cats.slice(1);
    return newCats;
  }