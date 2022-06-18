const bioContent = document.getElementById("bio-content").textContent;
let bioHtml = ""
const paragraphs = bioContent.split("\n")
paragraphs.forEach((content, index, array) => {
	bioHtml+= `<p>${content}</p>`
})
document.getElementById("bio-display").innerHTML = bioHtml