function getAge(birth, death){
    if(!death){
        death = new Date().getFullYear();
    }
    return death - birth;
}

const findTheOldest = function(people) {
    return people.reduce((oldestPerson, person)=>{
      const currentAge = getAge(person.yearOfBirth, person.yearOfDeath)
      const oldestAge = getAge(oldestPerson.yearOfBirth, oldestPerson.yearOfDeath)
      return currentAge < oldestAge? oldestPerson:person;        
    })
};

// Do not edit below this line
module.exports = findTheOldest;
