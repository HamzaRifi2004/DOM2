document.addEventListener("DOMContentLoaded", function() {  
    const colorBox = document.getElementById("color-box");  
    const changeColorBtn = document.getElementById("change-color-btn");  

    function getRandomColor() {  
        const randomColor = Math.floor(Math.random()*16777215).toString(16);  
        return `#${randomColor}`;  // Convert to hex color format  
    }  

    changeColorBtn.addEventListener("click", function() {  
        const newColor = getRandomColor();  
        colorBox.style.backgroundColor = newColor;  
    });  
});