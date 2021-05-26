let score = 0;


function onSubmition(){
		var div = document.getElementById("diiv");
		document.getElementById("diiv").style.display = 'none';
		//div.remove();
		//form1 = document.getElementById('om1');
		//var a1 = document.getElementsByName('q1').value; 
		//console.log(document.getElementByName('q1').value);
		var a1 = document.getElementsByName('q1');
		var a1_value;
		for(var i = 0; i < a1.length; i++){
		if(a1[i].checked){
			a1_value = a1[i].value;
		}
		
	}
	
	var a2 = document.getElementsByName('q2');
		var a2_value;
		for(var i = 0; i < a2.length; i++){
		if(a2[i].checked){
			a2_value = a2[i].value;
		}
		
	}
	
	var a3 = document.getElementsByName('q3');
		var a3_value;
		for(var i = 0; i < a3.length; i++){
		if(a3[i].checked){
			a3_value = a3[i].value;
		}
		
	}
	
	var a4 = document.getElementsByName('q4');
		var a4_value;
		for(var i = 0; i < a4.length; i++){
		if(a4[i].checked){
			a4_value = a4[i].value;
		}
		
	}
	
	var a5 = document.getElementsByName('q5');
		var a5_value;
		for(var i = 0; i < a5.length; i++){
		if(a5[i].checked){
			a5_value = a5[i].value;
		}
		
	}
	
	if(a1_value == "Minecraft" || a1_value == "Undertale"){
		score++;
	}	
	
	if(a2_value == "Bugs"){
		score++;
	}	
	
	if(a3_value == "All_Of_The_Above"){
		score++;
	}
	
	if(a4_value == "Harry_Potter"){
		score++;
	}
	
	if(a5_value == "India"){
		score++;
	}
	
	document.getElementById('bobaginga').innerHTML = "You scored " + score + " points!(This quiz is in development, I will add more features soon!)";
	
}