"use strict";

console.log("Loaded successfully");

const banner = document.createElement("div");

banner.textContent = "Loaded successfully";

Object.assign(banner.style, {
	position: "fixed",
	top: "0",
	left: "0",
	right: "0",
	zIndex: "2147483647",
	padding: "12px",
	background: "#ff9800",
	color: "#000",
	fontSize: "16px",
	fontWeight: "bold",
	textAlign: "center"
});

document.body.appendChild(banner);