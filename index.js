var placeText = document.getElementById("placeText");

function handleOnChange(string) {
    if(string.match(/^\d*$/))
    {
        const reverseMatch = string.split("").reverse().join("").match(/\d{1,3}/g);
        try {
            lateString = reverseMatch.toString().split("").reverse().join("")
            placeText.innerHTML = lateString;
        }
        catch{
            placeText.innerHTML = "Enter a valid number";
        }
    } else {
        placeText.innerHTML = "Enter a valid number";
    }
    
}
