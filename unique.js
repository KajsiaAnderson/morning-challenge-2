// Given a word, return true if that word contains only unique characters. Return false otherwise


// using Set to find unique characters

function isUnique(str) {
  return new Set(str).size === str.length;
}

console.log(isUnique('Monday'));  //true 
console.log(isUnique('Moonday'));  //false



// using indexOf && lastIndexOf to find unique characters

function uniqueWord(input) {
    for (i = 0; i < input.length; i++) {
      if (input.indexOf(input[i]) !== input.lastIndexOf(input[i])){
        return false
      }
    }
    return true
  }
  
  console.log(uniqueWord('Monday'))
  console.log(uniqueWord('Moonday'))

//   use nested for loops

const hasUniqueChars = (str) => {
    for(let i = 0; i<str.length; i++){
        for(let k=i+1; k<str.length; k++){
            if(str[i] === str[k]){
                return false
            }
        }
    }
    return true
}

console.log(hasUniqueChars('monday'))
console.log(hasUniqueChars('Moonday'))


// different way to use set...

const unique = (str) => {
    let set = new Set()

    str.split('').forEach(char => set.add(char))

    if([...set].join('') === str){
        return true
    }else{
        return false
    }
}

console.log(unique('monday'))
console.log(unique('Moonday'))

