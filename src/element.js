const styleUrl = new URL("./style.css", import.meta.url).toString();
console.log(styleUrl);
document.getElementById("put-text-here").textContent = styleUrl;
