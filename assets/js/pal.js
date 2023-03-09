
function DateDiff(b, e)
{
     var    endYear = e.getFullYear();
    var    endMonth = e.getMonth();
   var     years = endYear - b.getFullYear();
   var    months = endMonth - b.getMonth();
    var    days = e.getDate() - b.getDate();
    if (months < 0)
    {
        years--;
        months += 12;
    }
    if (days < 0)
    {
	if(months == 0) {
	years--;
	months += 11;
	} 
	else {    months--; }
     days += new Date(endYear, endMonth, 0).getDate();
    }
    return [years, months, days];
}


function skaiciuoti(){

var B = document.getElementById("b").value.trim();
var A = document.getElementById("a").value.trim();
var C = document.getElementById("c").value.trim();
var L = new Date();
if (B < A) {alert("B < A!"); return;}

var Bdata = new Date(B);
var Adata = new Date(A);
var Cdata = new Date(C);


if(!isDate(Adata)) {alert("Neteisinga A data!"); document.getElementById("a").focus(); return;}
if(!isDate(Bdata)) {alert("Neteisinga B data!"); document.getElementById("b").focus(); return;}
if(!isDate(Cdata)) {alert("Neteisinga C data!"); document.getElementById("c").focus(); return;}

var diff = DateDiff(Adata, Bdata);

var metusk = diff[0];
var mensk = diff[1];
var dsk = diff[2];
var metusk_5 = metusk - 5;
if( metusk_5 < 0) {alert("B - A - 5 < 0!"); return;}

var dtext;
if( metusk_5 >= 5) {
dtext = "5 m. 0 mėn. 0 d.";
L = new Date(Cdata);
L.setFullYear(L.getFullYear() + 5);
} else {
dtext = metusk_5 + " m. " + mensk+ " mėn. " + dsk + " d.";
L = new Date(Cdata);
L.setFullYear(L.getFullYear() + metusk_5);
L.setMonth(L.getMonth() + mensk);
L.setDate(L.getDate() + dsk);
}

var b15  = new Date(Cdata);
b15.setFullYear(b15.getFullYear() + 15);
if(L<=b15) {} else L = b15;

Ltext =  L.toISOString().slice(0,10);

document.getElementById("d").value = dtext;
document.getElementById("l").value =  Ltext;


var popupWindow = window.open("","PAL","height=500,width=600,left=100,top=200,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=yes,directories=no, status=no");
popupWindow.document.write("<p>Patento Nr. <b>" + document.getElementById("patnr").value +  "</b></p>");
popupWindow.document.write("<table><tr><td>Patento paraiškos padavimo data (A) </td><td>" + document.getElementById("a").value +  "</td></tr>");
popupWindow.document.write("<tr><td>Leidimo pateikti produktą į rinką data (B) &nbsp;</td><td> " + document.getElementById("b").value +  "</td></tr>");
popupWindow.document.write("<tr><td>Patento galiojimo pabaigos data (C)</td><td>" + document.getElementById("c").value +  "</td></tr>");


popupWindow.document.write("<tr><td>PAL galiojimo terminas (D) </td><td> <b>" + document.getElementById("d").value +  "</b></td></tr>");
popupWindow.document.write("<tr><td>PAL galiojimo pabaigos data (L) </td><td> <b>" + document.getElementById("l").value +  "</b></td></tr></table>");

popupWindow.document.write("<br>");

popupWindow.focus();



}

function pat_gal_pabaiga(){
var aDate = new Date(document.getElementById("a").value);
if(isDate(aDate)){
aDate.setFullYear(aDate.getFullYear() + 20);
document.getElementById("c").value =  aDate.toISOString().slice(0,10);
}

}

function valyti(){
document.getElementById("d").value = "";
document.getElementById("l").value =  "";
}

function valyti2(){
document.getElementById("d").value = "";
document.getElementById("l").value =  "";
document.getElementById("a").value = "";
document.getElementById("b").value =  "";
document.getElementById("c").value = "";
document.getElementById("patnr").value = "";
}

function isDate(x){
 return (null != x) && !isNaN(x) && ("undefined" !== typeof x.getDate); 
}


