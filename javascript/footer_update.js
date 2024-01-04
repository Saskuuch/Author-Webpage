"use strict";

var updated=new Date(document.lastModified);
var month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//3.2.1 D Special character
var newDate="&#169; Samuel McPherson || "+ updated.getDate().toString() + " "+ month[updated.getMonth()].toString() + " " + updated.getFullYear().toString();

document.getElementById("update").innerHTML=(newDate);

