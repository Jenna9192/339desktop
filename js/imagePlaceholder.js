document.querySelectorAll('img').forEach(img => {
    console.log("run")
    img.onerror = function(){
        this.onerror = null;
        this.src = '../js/placeholder-image.jpg';
        this.alt = "missing profile picture"
    };
});

function filterByGrade() {
    const selectedGrade = document.getElementById("grade-filter").value;
    const athletes = document.querySelectorAll(".athlete");

    athletes.forEach(athlete => {
        const athleteGrade = athlete.getAttribute("data-grade");
        if (selectedGrade === "all" || athleteGrade === selectedGrade) {
            athlete.style.display = "block";
        } else {
            athlete.style.display = "none";
        }
    });
}

function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}