//  - Break it down
//    - loop over the longer string
//      - loop over the shorter string
//        - if the character dont match, break out of the inner loop 
//        - if the characters match, keep going
//        - if you complete the inner loop and find a match, increment the count of matches
//        - return count

function stringSearch(string, subString) {
  let counter = 0;
  let subStringFrequency = 0;
  let strformed = "";
  console.log("Entering 1st loop");
  while (counter < string.length - 1) {
    console.log("*******")
    console.log(counter);
    for (let j = 0; j <= subString.length - 1; j++) {
      console.log("Inner loop");
      console.log("comparing: " + `${string[counter]} ` + "and " + `${subString[j]}` );
        if (string[counter] !== subString[j]) {
          console.log(`${string[counter]} ` + "and " + `${subString[j]}`);
          counter++;
          strformed = "";
          break;
        }
        else {
          
          strformed += subString[j];
          console.log(`String Formed: ${strformed}`);
          if (strformed === subString) {
            subStringFrequency++;
            strformed = "";
          };
          counter++;
          

        }
        
    }
    
  }
  console.log(`sub String Frequency: ${subStringFrequency}`);
  return subStringFrequency;
}
// 0 1 2 3 4 5 6 7 8 9 10  11 12 13
// a w e s o m e a w e  s  o  m  e
//       |

// 0 1 2 
// e s o
//   |

// console.log(stringSearch('awesomeawesome', 'eso'));
console.log(stringSearch("hellotherewheretherewherethere", 'there'));