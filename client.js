// array of employee objects
const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

console.log('array of employee data: ',  employees );


// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.
let employeeBonusList = [];
for (let employee of employees ) {
  // console.log( employee );
  console.log('return from bonus calc',bonusCalc (employee )); //return from bonus clac
  employeeBonusList.push(employee)
} //end for loop

console.log('Total list of bonus details:', employeeBonusList);









function bonusCalc ( arg ) {
  let bonusDetails = {
    name: arg.name,
    bonusPercentage: 0,
    totalBonus: 0,
    totalCompensation: 0,

  }
  let salary = parseInt (arg.annualSalary);
 //console.log( 'in bonusCalc, checkling bonusDetails object: ', bonusDetails)   
  if(arg.reviewRating <= 2){
    bonusDetails.bonusPercentage = 0;
    bonusDetails.totalBonus = 0; 
  }else if(arg.reviewRating == 3){
    bonusDetails.bonusPercentage = .04;
    bonusDetails.totalBonus = bonusDetails.bonusPercentage * arg.annualSalary;
  }else if(arg.reviewRating == 4){
    bonusDetails.bonusPercentage = .06;
    bonusDetails.totalBonus = bonusDetails.bonusPercentage * arg.annualSalary;
  }else if(arg.reviewRating == 5){
    bonusDetails.bonusPercentage = .1;
    bonusDetails.totalBonus = bonusDetails.bonusPercentage * arg.annualSalary;
  }

  if(arg.employeeNumber.length < 5){ //checking if employee# is less than 5 digits, adding 5% bonus
    bonusDetails.bonusPercentage += .05;
    //console.log('yes', bonusDetails.totalBonus);

  }

  if (arg.annualSalary > 65000 && bonusDetails.bonusPercentage > 0) { // reducing bonus percentage by 1 if over 65k salary
    console.log( bonusDetails.bonusPercentage );
    bonusDetails.bonusPercentage = Math.round((bonusDetails.bonusPercentage - .01) * 100) / 10;
    // console.log('in above 65k, testing', bonusDetails.bonusPercentage );
  }
  
  // console.log('maxbonus', maxBonus);
  if (bonusDetails.bonusPercentage > .13 ) {
    bonusDetails.bonusPercentage = .13;
  }

  bonusDetails.totalCompensation = Math.round(salary * bonusDetails.bonusPercentage + salary);
  
  return bonusDetails;
}
