const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
     for (l of horizontalJoin) {
         if (l.includes(word)) {
             return true;
             continue;
         }
     }
   let newArr = [];
   for (let a = 0; a < letters[0].length; a++) {
     let newArr2 = [];
     for (let b = 0; b < letters.length; b++) {
       newArr2.push(letters[b][a])
     }
     newArr.push(newArr2);
     
   }
   const verticalJoin = newArr.map((val) => val.join(''));
   for (a of verticalJoin) {
     if (a.includes(word)) {
       return true;
       continue;
     }
   }
   return false;
 }
 
 
 
module.exports = wordSearch