alert("Welcome to SREENATH BURGER KING");

   
function totalsum(){
		var quantity = document.getElementById("num").value;
		var price = 4.50;
		var quantity2 = document.getElementById("lum").value;
		var price2 = 5.50;
		var total1= (quantity2*price2);
		var quantity3 =document.getElementById("cum").value;
		var price3 = 6.50;
		var total2=(quantity3*price3);
		var quantity4 = document.getElementById("dum").value;
		var price4 = 7.50;
		var total3=(quantity4*price4);
		var quantity5 = document.getElementById("kum").value;
		var price5 = 4.50;
		var total4 = (quantity5*price5);

	
         var total = (quantity*price)+total1+total2+total3+total4;
         
        document.getElementById("sum").innerHTML = "The Toatal Bill is :" + total;
          };


    







/*  var age = promt("Enter your age");
if(age < 15){

}


// alert("Welcome to Sreentah Burger King");

var amount = function(quantity,price){

  mul quantity*price
  return amount; */
// }
