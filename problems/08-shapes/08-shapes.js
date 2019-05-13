/* 8. Shapes
Define function: printShape(shape, height, character)
shape is a String and is either "Square", "Triangle", "Diamond".
height is a Number and is the height of the shape. Assume the number is odd.
character is a String that represents the contents of the shape. Assume this String contains just one character.
Use a switch statement to determine which shape was passed in.
Use the console.log function to print the desired shape.
Example for printShape("Square", 3, "%");
%%%
%%%
%%%
Example for printShape("Triangle", 3, "$");
$
$$
$$$
Example for printShape("Diamond", 5, "*");
  *
 ***
*****
 ***
  * 
*/
function printShape(shape, height, character) {
  try {
  if (typeof(shape) !== 'string' && !(shape instanceof String))
      throw `${shape}: is neither a string nor a string object`
  let lowShape = shape.toLowerCase().replace(/[^A-Za-z0-9]/g,'')

  if(isNaN(height) || typeof(n) === 'boolean')
      throw `${height}: is not a number`
  if((height % 2 == 0))
      throw `${height}: height should be an odd number` 
  if (typeof(character) !== 'string' && !(character instanceof String))
      throw `${character}: is neither a string nor a string object`
  if (character.length !== 1)
      throw `${character}: one character expected`
  
    switch(lowShape){
      case "square":{
              let sq = ''
              for(let i=0; i<height; i++){
                for(let j=0; j<height; j++){
                    sq +=character
                }
                console.log(sq)
                sq = ''
              }  
              break   
            }
      case "triangle":{
                let tr = ''
                for(let i=0; i<height; i++){
                    tr += character
                    console.log(tr)
                }
                break
            }
      case "diamond":{
                let p = ''
                let baseHeight = (height+1)/2
                let count = baseHeight - 1;
                for (let k = 1; k <= baseHeight; k++) {
                    for (let i = 1; i <= count; i++){
                        p += ' '
                    }
                        
                    count--;
                    for (let i = 1; i <= 2 * k - 1; i++){
                        p+=character
                    }
                    console.log(p);
                    p = ''
                    
                }
                count = 1;
                for (let k = 1; k <= baseHeight - 1; k++) {
                    for (let i = 1; i <= count; i++){
                        p +=' '
                    }

                    count++;
                    for (let i = 1; i <= 2 * (baseHeight - k) - 1; i++){
                          p+=character
                }
                    console.log(p);
                    p = ''
                    
                }
                break
            }
    }
  }catch(e){
    console.log(e)
  }
}

printShape('SqUarE', 7, '%')
printShape('Triangle', 5, '&')
printShape('Diamond', 9, '$')