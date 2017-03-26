$(document).ready(function(){
// stores the input from the user to calculate later

var inputs = []; //an array init - empty
// stores the current input string
var totalString; 
// operators array for validation without the "."
var operators1 = ["+","-","/","*"];

var operators3 = ["/","*"];

//operators array with the ".'' for validation
var operators2 = ["."];
//numbers for validation
var nums = [0,1,2,3,4,5,6,7,8,9];

function getValue(input){
	console.log(input);
     // if(operators2.includes(inputs[inputs.length-1]===true && input === ".")){
     // 	console.log("Duplicate '.' ");
     // }
     // validation so that it doesn't start with an operator
     // if(inputs.length ===1 && operators1.includes(input)===false){
     // 	inputs.push(input);
     // }
     // if last character was not an operator add operator to the array
     if(inputs.length<1 && operators3.includes(input)){
     	return;
     }
     else if(operators1.includes(inputs[inputs.length -1 ]) === false){
     	inputs.push(input);
        console.log(inputs);

     }
     else if (nums.includes(Number(input))){ // converts string to number
          	inputs.push(input);
            alert(input);
     }
     update();
}

function update(){
	totalString = inputs.join("");
	$("#steps").html(totalString);
}

function getTotal(){
	totalString = inputs.join("");
	$("#steps").html(eval(totalString)); // eval works on strings only
}

$("a").on("click", function(){
	//console.log(this.id);
	if(this.id === "deleteAll"){
		inputs = [];
		update();
    }

    else if(this.id === "backOne"){
    	inputs.pop();
    	update();
    }
    else if(this.id === "total"){
    	getTotal();
    }
    else{
    	// if(inputs[inputs.length-1].indexOf("+","-","*","/") === -1){
    	// 	getValue(this.id);
    	// }
    	// else{
    		getValue(this.id); //when any digit or operator pressed
    	// }
    }
    
});


});