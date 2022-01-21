function tabArray(array, children){
  const tab = ' '
  const [first] = array;

  const decorators = (item, slash) => {
    if(slash){return `<\\${item}>\n`} 
    return `<${item}>\n`
  }

  if(array.length===1){
    if(children!==undefined){
      return decorators(array[0]) + children+ `${tab.repeat(array[0]-1)}${decorators(array[0],true)}`
    }
    return decorators(array[0]) + `${tab.repeat(array[0]-1)}${decorators(array[0],true)}`
  }
  
  else {
    array.shift();
    return tabArray([first], `${tab.repeat(array[0]-1)}${tabArray(array)}`)
  }
}

console.log(tabArray([1,2,3,4,5,6]))
