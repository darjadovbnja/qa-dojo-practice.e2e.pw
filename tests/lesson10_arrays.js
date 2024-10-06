const carsArr = ['toyota', 'bmw'];
console.log(carsArr[1]);


//prototype 
 const student = {
    name: 'Daryna',
    isActive: true
 };

 const studentQa = Object.create(student) //Object - встроенная библиотека
 student['budget'] = true;
 studentQa['program'] = 'test automation';
 studentQa['is employed'] = true;

 console.log(studentQa);
 const employee = Object.create(studentQa);
//
 const cities = [
    "miami",
    "barcelona",
    "madrid",
    "amsterdam",
    "berlin",
    "sao paulo",
    "lisbon",
    "mexico city",
    "paris"
  ];

  const citiesWithCapitalLetter = cities.map(
    function(city){
        const citiesWithUpper = city.charAt(0).toUpperCase() + city.slice(1).toLocaleLowerCase();
        return citiesWithUpper;
    }
  )
  console.log(citiesWithCapitalLetter);
  
citiesWithCapitalLetter.forEach((city, index) => {
    console.log(`${city} has index ${index}`);
})

