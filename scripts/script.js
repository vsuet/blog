const url = window.location.href;
console.log(url);
const head = document.getElementById("head");
head.innerHTML = `
    <title id="main-header">Заголовок</title>
    
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <link rel="shortcut icon" href="image/favicon.ico" type="image/x-icon">
    <link rel="stylesheet" href="styles/style.css">
`