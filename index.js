function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻

 
  let convHeight = height/100;

  let bmi = (weight/convHeight^2);

  alert(bmi)

  //BMI Status

  if( bmi < 18.5){
    alert("Underweight");
    alert("Not Healthy");
  } else if (bmi > 18.5 && bmi < 24.9 && age >= 19 && age <= 24){
    alert("Healthy Weight");
    alert("Healthy");

  } else if( bmi > 25.0 && bmi < 29.9 && age >= 25 && age <= 65){
    alert("Overweight");
    alert("Healthy");
  } else{
    alert("Above Obesity");
    alert("Not Healthy");
    
  }

  
  // BMI by Age 





}
