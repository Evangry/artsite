const piecesContent = document.getElementById("pieces-content").textContent;
let piecesHtml = ""

const projects = piecesContent.split('\nProject: ').slice(1);
projects.forEach((content, index, array) => {
	let lines = content.split('\n');
	let projectTitle = lines[0];
	piecesHtml += `<div><h3 style="margin-bottom: 5px;">${projectTitle}</h3>`;
	let pieces = lines.slice(2, -1);
	pieces.forEach((content, index, array) => {
		let pieceData = content.split(', ');
		piecesHtml += `<div style="display: inline-block; margin: 15px">`
		piecesHtml += `<img src='pieces/${pieceData[0]}.JPG' alt="image" width=500 height=auto>`
		piecesHtml += `<div style="margin-top: 0px;"><h4 style="margin-bottom: 5px; margin-top: 0px">${pieceData[0]}</h4>${pieceData[1]}, ${pieceData[2]}</div>`
		piecesHtml += `</div>`
	})
	piecesHtml += `</div>`

})

document.getElementById("pieces-display").innerHTML = piecesHtml