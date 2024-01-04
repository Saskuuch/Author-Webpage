"use strict";



window.addEventListener("load", function(){
    changeDate();

    var dataString =location.search.slice(1);
    dataString=dataString.replace(/\+/g, " ");
    dataString=decodeURIComponent(dataString);
    var data=dataString.split(/[&=]/g);

    document.getElementById("bookCost").value=data[3];
    document.getElementById("formatCost").value=data[7];
    document.getElementById("subtotal").value=data[9];
    document.getElementById("taxes").value=data[11];
    document.getElementById("total").value=data[13];
    document.getElementById("bookName").innerHTML=("<i>" + data[15] +"</i>");
    document.getElementById("format").innerHTML=("<i>" + data[17] +"</i>");
    for(var x=0; x<data.length; x++){console.log(data[x]);}
});

function changeDate(){
    var month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var curDate= new Date();
    
    var outDate= curDate.getDate();
    var outDate= outDate + " " + month[curDate.getMonth()];
    var outDate= outDate + " " + curDate.getFullYear();

    document.getElementById("orderDate").value=outDate;
}

//3.2.6 C Use of alerts for validation
//3.2.6 B Form input validation
function validate(form){
    if(document.getElementById("country").value==="United States")
    {
        if(!/\d{5} \d{4}/.test(document.getElementById("postal").value))
        {
            alert("That is not a valid input for ZIP code")
            return false;
        }
        else{
            return confirm("Submit purchase?");
        }
    }
    else
    {
        var pattern1=/[A-Z]\d[A-Z] \d[A-Z]\d/i;

        if(!pattern1.test(document.getElementById("postal").value))
        {
            alert("That is not a valid input for postal code")
            return false;
        }
        else{
            return confirm("Submit purchase?");
        }
    }
    
}