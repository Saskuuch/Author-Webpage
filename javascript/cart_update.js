"use strict";

var booknames=["Will's Inferno", "To Bail Moré", "Melting Ice", "The Current's Pull", "The Burned Ones"];
var editionNames={"15.38":"Mass-Market Paperback", "20.47":"Paperback", "25.19":"Hardcover", "9.63":"Audiobook", "4.99":"EBook"};

window.addEventListener("load", function(){
    var Pform=document.forms.Purchaseform;
    calcOrder();
    
    Pform.elements.bookC.onchange=changePic;

    var edOption = document.querySelectorAll('input[name="edit"]');
    for(var y=0; y<edOption.length; y++){
    edOption[y].onclick=calcOrder;
}
});

function calcOrder(){
    var Pform=document.forms.Purchaseform;

    var bCost=parseFloat(Pform.elements.bookC.options[Pform.elements.bookC.selectedIndex].value);
    var edCost=parseFloat(document.querySelector('input[name="edit"]:checked').value);
    var sub=(bCost+edCost);
    var tax=(sub*0.12);
    var alltot=(tax+sub);

    Pform.elements.bookcost.value=formatNum(bCost);
    Pform.elements.editcost.value=formatNum(edCost);
    Pform.elements.subtotal.value=formatNum(sub);
    Pform.elements.taxes.value=formatNum(tax);
    Pform.elements.tot.value=formatNum(alltot);
    Pform.elements.bookName.value=booknames[Pform.elements.bookC.selectedIndex];
    Pform.elements.editName.value=editionNames[document.querySelector('input[name="edit"]:checked').value];
}

function formatNum(x){
    return(x.toLocaleString('en-US', {style: "currency", currency: "USD"} ));
}

function changePic(){

    calcOrder();

    switch(document.forms.Purchaseform.elements.bookC.selectedIndex){
        case 0:
            document.getElementById("bookCover").src="covers\\Will's Inferno.png";
        break;

        case 1:
            document.getElementById("bookCover").src="covers\\To Bail More.png";
            break;

        case 2:
            document.getElementById("bookCover").src="covers\\Melting Ice.png";
            break;

        case 3:
            document.getElementById("bookCover").src="covers\\The Current's Pull.png";
            break;

        case 4:
                document.getElementById("bookCover").src="covers\\The Burned Ones.png";
                break;

    }
}
