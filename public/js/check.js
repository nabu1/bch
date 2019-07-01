function isStringCatsOnly(str) {
  const isStringCatsOnly = str
    .replace(/cat/g, '')
    .replace(/tac/g, '')
    .replace(/CAT/g, '')
    .replace(/TAC/g, '')
    .replace(/CAT/g, '')
    .replace(/cAt/g, '')
    .replace(/tAc/g, '')

  return isStringCatsOnly.length === 0
}

export const check = str => {
  let len = str.length, i = 0, setLength = 6
  const cats = ['cat', 'CAT', 'cAt']
  
  if (!len || (len % 6 !== 0)) return false 
  if (!isStringCatsOnly(str)) return false  

  while(len) { 
    const half1 = str.substr(i, setLength/2)
    const reversedHalf2 = str.substr(i + setLength/2, setLength/2).split('').reverse().join('')

    if (half1.length === 3 && !cats.includes(half1)) return false

    if(half1 === reversedHalf2) {
      str = str.substr(setLength)
      len = str.length
      setLength = 6
    }
    else {
      setLength = setLength + 6
      if (i + setLength > len) return false
    } 
  }
  return true
}  
