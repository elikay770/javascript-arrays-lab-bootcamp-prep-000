var kittens = ['Milo', 'Otis', 'Garfield']

function destructivelyAppendKitten(name){

return kittens.push(name)
    }

function destructivelyPrependKitten(name){
  return kittens.unshift(name)
}

function destructivelyRemoveLastKitten(name){
  return kittens.pop(name)
}
function destructivelyRemoveFirstKitten(){
return kittens.shift(name)
}

function appendKitten(name){
return [...kittens, name]
}

function prependKitten(name){
  return [name, ...kittens]
}
function removeLastKitten() {
  return kittens.slice(0, kittens.length-1)

}
function removeFirstKitten(){
  kittens = kittens.slice(0)
return kittens
}
