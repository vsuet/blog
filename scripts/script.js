const url = window.location.href;
console.log(url);
const body = document.getElementById("body");
body.innerHTML = `
    <p>${url}</p>
    
<script src="scripts/script.js"></script>
`