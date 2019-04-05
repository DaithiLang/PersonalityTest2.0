// Automatic Slideshow - change image every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000);
}

// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}


function check(){

var Q1 = document.PT.radio1.value;
var Q2 = document.PT.radio2.value;
var Q3 = document.PT.radio3.value;
var Q4 = document.PT.radio4.value;
var Q5 = document.PT.radio5.value;
var Q6 = document.PT.radio6.value;
var Q7 = document.PT.radio7.value;
var Q8 = document.PT.radio8.value;
var Q9 = document.PT.radio9.value;
var Q10 = document.PT.radio10.value;
var Q11 = document.PT.radio11.value;
var Q12 = document.PT.radio12.value;
var Q13 = document.PT.radio13.value;
var Q14 = document.PT.radio14.value;
var Q15 = document.PT.radio15.value;
var Q16 = document.PT.radio16.value;
var Q17 = document.PT.radio17.value;
var Q18 = document.PT.radio18.value;
var Q19 = document.PT.radio19.value;
var Q20 = document.PT.radio20.value;
var Q21 = document.PT.radio21.value;
var Q22 = document.PT.radio22.value;
var Q23 = document.PT.radio23.value;
var Q24 = document.PT.radio24.value;
var Q25 = document.PT.radio25.value;
var Q26 = document.PT.radio26.value;
var Q27 = document.PT.radio27.value;
var Q28 = document.PT.radio28.value;
var Q29 = document.PT.radio29.value;
var Q30 = document.PT.radio30.value;
var Q31 = document.PT.radio31.value;
var Q32 = document.PT.radio32.value;
var Q33 = document.PT.radio33.value;
var Q34 = document.PT.radio34.value;
var Q35 = document.PT.radio35.value;
var Q36 = document.PT.radio36.value;
var Q37 = document.PT.radio37.value;
var Q38 = document.PT.radio38.value;
var Q39 = document.PT.radio39.value;
var Q40 = document.PT.radio40.value;
var Q41 = document.PT.radio41.value;
var Q42 = document.PT.radio42.value;
var Q43 = document.PT.radio43.value;
var Q44 = document.PT.radio44.value;
var Q45 = document.PT.radio45.value;
var Q46 = document.PT.radio46.value;
var Q47 = document.PT.radio47.value;
var Q48 = document.PT.radio48.value;
var Q49 = document.PT.radio49.value;
var Q50 = document.PT.radio50.value;

var Ival = 0;
var Eval = 0;
var Sval = 0;
var Nval = 0;
var Tval = 0;
var Fval = 0;
var Jval = 0;
var Pval = 0;


if(Q1 == "1"){
Jval=Jval+2; }
if(Q1 == "2"){
Pval=Pval+2; }

if(Q2 == "3"){
Sval=Sval+2; }
if(Q2 == "4"){
Nval=Nval+2; }

if(Q3 == "5"){
Eval=Eval+2; }
if(Q3 == "6"){
Ival=Ival+2; }

if(Q4 == "7"){
Fval=Fval+1; }
if(Q4 == "8"){
Tval=Tval+2; }

if(Q5 == "9"){
Nval=Nval+1; }
if(Q5 == "10"){
Sval=Sval+1; }

if(Q6 == "11"){
Eval=Eval+2; }
if(Q6 == "12"){
Ival=Ival+1; }

if(Q7 == "13"){
Jval=Jval+1; }
if(Q7 == "14"){
Pval=Pval+1; }
if(Q7 == "14a"){
Pval=Pval+1; }

if(Q8 == "15"){
Jval=Jval+1; }
if(Q8 == "16"){
Pval=Pval+2; }

if(Q9 == "17"){
Eval=Eval+2; }
if(Q9 == "18"){
Ival=Ival+1; }

if(Q10 == "19"){
Sval=Sval+1; }
if(Q10 == "20"){
Nval=Nval+2; }

if(Q11 == "21"){
Jval=Jval+2; }
if(Q11 == "22"){
Pval=Pval+1; }

if(Q12 == "23"){
Sval=Sval+1; }
if(Q12 == "24"){
Nval=Nval+2; }

if(Q13 == "25"){
Eval=Eval+1; }
if(Q13 == "26"){
Ival=Ival+2; }

if(Q14 == "27"){
Fval=Fval+1; }
if(Q14 == "28"){
Tval=Tval+2; }

if(Q15 == "29"){
Nval=Nval+0; }
if(Q15 == "30"){
Sval=Sval+1; }

if(Q16 == "31"){
Eval=Eval+2; }
if(Q16 == "32"){
Ival=Ival+2; }

if(Q17 == "33"){
Jval=Jval+2; }
if(Q17 == "34"){
Pval=Pval+2; }

if(Q18 == "35"){
Jval=Jval+1; }
if(Q18 == "36"){
Pval=Pval+1; }

if(Q19 == "37"){
Jval=Jval+1; }
if(Q19 == "38"){
Pval=Pval+1; }

if(Q20 == "39"){
Sval=Sval+2; }
if(Q20 == "40"){
Nval=Nval+2; }

if(Q21 == "41"){
Eval=Eval+2; }
if(Q21 == "42"){
Ival=Ival+2; }

if(Q22 == "43"){
Fval=Fval+2; }
if(Q22 == "44"){
Tval=Tval+2; }

if(Q23 == "45"){
Nval=Nval+1; }
if(Q23 == "46"){
Sval=Sval+2; }

if(Q24 == "47"){
Eval=Eval+1; }
if(Q24 == "48"){
Ival=Ival+1; }

if(Q25 == "49"){
Jval=Jval+1; }
if(Q25 == "50"){
Pval=Pval+1; }

if(Q26 == "51"){
Eval=Eval+1; }
if(Q26 == "52"){
Ival=Ival+0; }

if(Q27 == "53"){
Jval=Jval+2; }
if(Q27 == "54"){
Pval=Pval+2; }

if(Q28 == "55"){
Sval=Sval+2; }
if(Q28 == "56"){
Nval=Nval+1; }

if(Q29 == "57"){
Ival=Ival+2; }
if(Q29 == "58"){
Eval=Eval+2; }

if(Q30 == "59"){
Tval=Tval+2; }
if(Q30 == "60"){
Fval=Fval+1; }

if(Q31 == "61"){
Nval=Nval+0; }
if(Q31 == "62"){
Sval=Sval+2; }

if(Q32 == "63"){
Tval=Tval+1; }
if(Q32 == "64"){
Fval=Fval+1; }

if(Q33 == "65"){
Fval=Fval+0; }
if(Q33 == "66"){
Tval=Tval+2; }

if(Q34 == "67"){
Jval=Jval+2; }
if(Q34 == "68"){
Pval=Pval+2; }

if(Q35 == "69"){
Sval=Sval+2; }
if(Q35 == "70"){
Nval=Nval+1; }

if(Q36 == "71"){
Ival=Ival+1; }
if(Q36 == "72"){
Eval=Eval+2; }

if(Q37 == "73"){
Tval=Tval+1; }
if(Q37 == "74"){
Fval=Fval+2; }

if(Q38 == "75"){
Nval=Nval+0; }
if(Q38 == "76"){
Sval=Sval+2; }

if(Q39 == "77"){
Tval=Tval+1; }
if(Q39 == "78"){
Fval=Fval+1; }

if(Q40 == "79"){
Fval=Fval+1; }
if(Q40 == "80"){
Tval=Tval+2; }

if(Q41 == "81"){
Jval=Jval+2; }
if(Q41 == "82"){
Pval=Pval+2; }

if(Q42 == "83"){
Sval=Sval+1; }
if(Q42 == "84"){
Nval=Nval+2; }

if(Q43 == "85"){
Ival=Ival+1; }
if(Q43 == "86"){
Eval=Eval+1; }

if(Q44 == "87"){
Tval=Tval+1; }
if(Q44 == "88"){
Fval=Fval+2; }

if(Q45 == "89"){
Nval=Nval+0; }
if(Q45 == "90"){
Sval=Sval+2; }

if(Q46 == "91"){
Tval=Tval+2; }
if(Q46 == "92"){
Fval=Fval+0; }

if(Q47 == "93"){
Fval=Fval+1; }
if(Q47 == "94"){
Tval=Tval+2; }

if(Q48 == "95"){
Sval=Sval+1; }
if(Q48 == "96"){
Nval=Nval+1; }

if(Q49 == "97"){
Tval=Tval+2; }
if(Q49 == "98"){
Fval=Fval+1; }

if(Q50 == "99"){
Tval=Tval+2; }
if(Q50 == "100"){
Fval=Fval+0; }

if(Ival >= Eval){
var letter1 = "I";
} else{ var letter1 = "E";}

if(Nval >= Sval){
var letter2 = "N";
} else{ var letter2 = "S";}

if(Fval >= Tval){
var letter3 = "F";
} else{ var letter3 = "T";}

if(Pval >= Jval){
var letter4 = "P";
} else{ var letter4 = "J";}

var PT = letter1 + letter2 + letter3 + letter4;

document.getElementById("after_submit").style.display = "block";

document.getElementById("type").innerHTML = PT;

}

// Close the Modal
function closeModal() {
  document.getElementById('after_submit').style.display = "none";
  location.href="test.html";
 
}