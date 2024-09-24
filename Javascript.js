var countryData;
			
			
fetch('AsianFlags.json')
.then(function (response) {
	return response.json();
})
.then(function (data) {
	countryData = data;
	RandomCountry();
})
.catch(function (err) {
	console.log(err);
});

document.getElementById("winScreen").style.display = "none";			  
			
var nums = [0,1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,48];
var correctId = -1;
			
var correct = 0;			
			
function RandomCountry(){
	if(nums.length<1)
	winScreen();
	else{
		
		document.getElementById("htxt").style.display = "none";
		document.getElementById("ans1").removeAttribute("disabled");
		document.getElementById("ans2").removeAttribute("disabled");
		document.getElementById("ans3").removeAttribute("disabled");
		document.getElementById("ans4").removeAttribute("disabled");
		document.getElementById("hintButton").removeAttribute("disabled");
		
		var random = Math.round(Math.random() * (nums.length-1))
		var num = nums[random];
		nums.splice(random,1);
					
		var cName = countryData.countries[num].name;
		//console.log(cName);
		//document.getElementById("nm").innerHTML = cName;
		//document.getElementById("cptl").innerHTML = countryData.countries[num].capital;
		//document.getElementById("ppl").innerHTML = countryData.countries[num].population;
		//document.getElementById("la").innerHTML = countryData.countries[num].land_area_sq_km;
		//document.getElementById("ff").innerHTML = countryData.countries[num].Fun_Fact;
					
					
		var imgSource = "Flags/" + cName.replaceAll(' ','') +".png";
		var id = "flagImg";
		document.getElementById(id).src = imgSource;
					
		var nums2 = [0,1,2,3,4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47,48];
					
		nums2.splice(num,1);
		console.clear();
		for(let i=1;i<=4;i++){
			var id = "ans" + i;
			var rand= Math.abs(Math.round(Math.random() * nums2.length-1));
			var num2 = nums2[rand];
						
			console.log(rand);
			document.getElementById(id).innerHTML = countryData.countries[num2].name;
			document.getElementById(id).style.backgroundColor = "white";
			nums2.splice(rand,1);
		}
					
		var rand = Math.round(Math.random() * 3)+1;
					
		correctId = "ans" + rand;
		document.getElementById(correctId).innerHTML = cName;
		
		var hint = countryData.countries[num].Fun_Fact;
		document.getElementById("htxt").innerHTML = hint.replace(cName, "<strong>???????</strong>");
	}
}
				
function submitAnswer(ans){
	if(correctId == ans)
	{
		document.getElementById(ans).style.backgroundColor = "green";
		correct++;
		document.getElementById("score").innerHTML = "Score: "+ correct+ " / 49";
		
	}
	else{
		document.getElementById(ans).style.backgroundColor = "red";
		document.getElementById(correctId).style.backgroundColor = "green";
	}
		
	document.getElementById("ans1").setAttribute("disabled", "");
	document.getElementById("ans2").setAttribute("disabled", "");
	document.getElementById("ans3").setAttribute("disabled", "");
	document.getElementById("ans4").setAttribute("disabled", "");
	document.getElementById("hintButton").setAttribute("disabled", "");
		
	delay(1000).then(() =>RandomCountry());
}			 

var hints = 0;

function RevealHint(){
	hints++;
	document.getElementById("htxt").style.display = "block";
}

function winScreen(){
	document.getElementById("finalScore").innerHTML = "Score: "+ correct+ " / 49";
	document.getElementById("hintsUsed").innerHTML = "Hints Used: "+ hints;
	document.getElementById("hide").style.display = "none";
	document.getElementById("winScreen").style.display = "block";
}

function Reload(){
	location.reload();
}

function delay(time) {
  return new Promise(resolve => setTimeout(resolve, time));
}
