// function getAddressKey(){
//     return "address";
// }

// const person= {id:123, name: 'Vasya', last_name: 'Ivanov',
//  year: 2000, address: {city: 'Lod',street: 'Sokolov', app: 100}
// };
//  console.log(person[yearExp]);
//  console.log(person.address.street);

function displayOccurrences(strings){
    const occurrences = {};
    strings.forEach(element => {
        if (occurrences[element]) {
            occurrences[element] ++;
        } else{
            occurrences[element] = 1;
        }
    });
     //console.log(Object.entries(occurrences)); 
  const occurrencesAr = Object.entries(occurrences);
  occurrencesAr.sort((e1, e2) => e2[1] - e1[1]);
  console.log(occurrencesAr);
}

// const x = {};
// const string = "abc";
// x[string] = 1;
// console.log(x);
// x[string] ++;
// console.log(x);

const strings = ["a", "opr", "lmn", "abc", "lmn", 
"abs", "lmn", "lmn", "abc", "a"];
displayOccurrences(strings);
