document.querySelectorAll('img').forEach(img => {
    console.log("run")
    img.onerror = function(){
        this.onerror = null;
        this.src = '../js/placeholder-image.jpg';
        this.alt = " "
    };
});