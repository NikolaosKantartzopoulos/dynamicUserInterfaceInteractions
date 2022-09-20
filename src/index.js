import "./style.css";

let navBar = document.getElementsByClassName("navBar");
let dropbtn = Array.from(document.getElementsByClassName("dropbtn"));
let dropmenu = Array.from(document.getElementsByClassName("dropmenu"));

dropbtn.forEach((btn) => {
	btn.style.position = "relative";
	btn.style.cursor = "pointer";
	btn.style.border = "5px solid rgba(0,0,0,0)";
	let menu = btn.querySelector(".dropmenu");
	menu.style.display = "none";
	menu.style.position = "absolute";
	menu.style.left = "-5px";
	menu.style.width = "max-content";
	menu.style.padding = "0.5rem";
	btn.addEventListener("mouseenter", () => {
		btn.style.border = "5px solid lightblue";
		menu.style.display = "block";
		menu.style.border = "grey 1px solid";
		menu.style.boxShadow = "3px 3px 5px lightblue";
		menu.style.backgroundColor = "white";
	});
	btn.addEventListener("mouseleave", () => {
		btn.style.border = "5px solid rgba(0,0,0,0)";
		menu.style.display = "none";
	});
});

dropmenu.forEach((menu) => {
	let options = Array.from(menu.children);
	options.forEach((option) => {
		option.style.padding = "3px 0.5rem";
		option.addEventListener("mouseenter", (e) => {
			option.style.backgroundColor = "lightblue";
		});
		option.addEventListener("mouseleave", (e) => {
			option.style.backgroundColor = "white";
		});
	});
	console.log(menu.children.id);
});
