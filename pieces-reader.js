const file = document.getElementById("fileContents").textContent;
console.log(file);
const lines = file.split('\n')
console.log(lines)
lines.forEach((content, index, array) => {
 if (content.toLowerCase().startsWith('project')){
 		array[index] = content.split('ject: ')[1];

 	} else if (content){
 		let piece = content.split(', ')
 		
 		

 }

})

console.log(lines)