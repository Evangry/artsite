const file = document.getElementById("file-contents").textContent;
let displayHtml = ""

const projects = file.split('\nProject: ').slice(1);
projects.forEach((content, index, array) => {
	let lines = content.split('\n');
	let projectTitle = lines[0];
	displayHtml += `<h3>${projectTitle}</h3>`;
	let pieces = lines.slice(2, -1);
	pieces.forEach((content, index, array) => {
		let pieceData = content.split(', ');
		console.log('piece title: ' + pieceData[0]);
		displayHtml += `<h4>${pieceData[0]}</h4>`
		displayHtml += `<img src='pieces/${pieceData[0]}.JPG' alt="image">`
		displayHtml += `${pieceData[1]}, ${pieceData[2]}`
	})
})

document.getElementById("work-display").innerHTML = displayHtml