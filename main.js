function wordCount() {
    var text = document.getElementById("text-area").value; 
    var wordArray = text.match(/\w+/g); 
    var wordCount = wordArray ? wordArray.length : 0; 
    document.getElementById("nums").textContent = "Total Number of words: " + wordCount; 
}

