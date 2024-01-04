"use strict";
//3.2.4 A Have a web table
//3.2.6 A Use of system date
var date = new Date();

document.getElementById("calendar").innerHTML=("<table>" + tabelements(date) + "</table>");

function tabelements(date)
{
    var htmlreturn=getCaption(date);
    htmlreturn+=weekdays();
    htmlreturn+=days(date);
    
    
    return htmlreturn;
}

function getCaption(date)
{
    var month=["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return("<caption>" + date.getFullYear() + "\t" + month[date.getMonth()]+"</caption>");
}

function weekdays()
{
    var weekdays=["Sunday", "Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var ret = "<tr>";
    for(var x=0; x<weekdays.length;x++)
    {
        ret+=("<th>"+ weekdays[x] + "</th>");
    }
    ret+="</tr>";
    return ret;
}

function days(date)
{
    var ret="<tr>";
    var tempDate = new Date(date.getFullYear(), date.getMonth(), 1);
    for(var x=0; x<tempDate.getDay(); x++)
    {
        ret+="<td></td>";
    }

    for(var x=0; x<getMonthDays(date); x++)
    {
        tempDate.setDate(x+1);
    
        if(tempDate.getDay()==0)
        {
            ret+="<tr>"
        }
        ret+="<td>"+tempDate.getDate()+devent[x+1]+"</td>";
    }
    return ret;

}

function getMonthDays(date)
{
    var monthdays=[31,28,31,30,31,30,31,31,30,31,30,31];
    if(date.getFullYear%4==0)
    {
        monthdays[1]=29;
    }
    return monthdays[date.getMonth()]
}