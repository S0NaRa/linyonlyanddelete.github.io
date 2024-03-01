$(document).ready( function () {
    /**
     * ger current date
     */
    const date = new Date();
    const hour = date.getHours();
    let massege = "";
    if(hour<=12){
        massege = "Good morning"
    }
    if(hour>12){
        massege="Good Afternoon"
    }
    if(hour>=17){
        massege="Good Evening"
    }
    $('#narin').empty().append(massege +  "  " +"From Zoro Juro")
})