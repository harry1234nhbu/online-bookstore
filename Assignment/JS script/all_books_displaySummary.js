function toggleVisibility(){
    const summary = document.getElementById("book-summary");
    const btn2 = document.getElementById("to-gaze");
    const header = document.getElementById("header");
        if(summary.style.display === "none"){
            summary.style.display = "block";
            btn2.style.display = "none";
            header.style.display = "none";
        }else{
            summary.style.display = "none"
   
        }
        
}

function back(){
    const magic = document.getElementById("book-summary");
    const btn2 = document.getElementById("to-gaze");
    const header = document.getElementById("header");
    if(magic.style.display === "block"){
        magic.style.display = "none";
        btn2.style.display = "initial";
        header.style.display = "flex";
    }else{
        magic.style.display = "block";
    }
        }