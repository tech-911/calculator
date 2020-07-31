
/*var main_disp_val = 0;*/
/*understanding object concept
*//*function disp_num(in_number){
	console.log(in_number);
	var disp_ele = document.getElementsByClassName('main-disp');
	var main_disp = disp_ele[0];
	console.log(main_disp);
	main_disp_val = main_disp_val*10 + in_number;
	main_disp.innerHTML = main_disp_val;


}

*/

//below is variable declared and the function to display values on the screen 1 and 2 by appiending
var main_disp_val = 0;

 function disp(c){
 	main_disp_val= main_disp_val*10 + c
	document.getElementById('screen1').innerHTML = main_disp_val;

 }
 /*//below function is to display floating values (.)
function dis(d){
	main_disp_val= main_disp_val + d;
	document.getElementById("screen1").innerHTML = main_disp_val;

}
		
*/
 /*var main_disp_val = 0;
 var second_disp_val =0;
 var main_operator = "";
*/
//below functions  performs arithmetic operation and gives the result of the values
 function set_operator(operator){
 	if(operator != '='){
 		main_operator = operator;
 		second_disp_val = main_disp_val;
 		document.getElementById('screen2').innerHTML = main_disp_val+" "+operator;
		main_disp_val = 0;
	}else{
 		document.getElementById('screen2').innerHTML =0;
 		
 		if(main_operator == "+"){
			document.getElementById('screen1').innerHTML = second_disp_val + main_disp_val;
			main_disp_val=0;
		}
		if(main_operator == "*"){
            document.getElementById('screen1').innerHTML = second_disp_val * main_disp_val;
            main_disp_val=0;
		}
		if(main_operator == "-"){
            document.getElementById('screen1').innerHTML = second_disp_val - main_disp_val;
            main_disp_val=0;
		}
		if(main_operator == "/"){
            document.getElementById('screen1').innerHTML = second_disp_val / main_disp_val;
            main_disp_val=0;
		}
 	}
 }

//below function is to clear values on the screen1 and 2 	
function cl(c){
	document.getElementById("screen1").innerHTML= c;
	document.getElementById("screen2").innerHTML= c;
	main_disp_val = 0;
	
}
//function for delet last value

function delet(){
	var a=document.getElementById("screen1").innerHTML;
	var b= a/10;
	main_disp_val= Math.floor(b);
	document.getElementById('screen1').innerHTML= main_disp_val;
	console.log(main_disp_val);

}

function cls(){
	var win = window.open();
	console.log(win);
	// win.close();
	// alert("ksjdkfja ");
}
	
	
