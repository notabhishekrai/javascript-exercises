const findTheOldest = function(people) {
    people.forEach(person => {
        if(!person['yearOfDeath']){
            person['yearOfDeath'] = new Date().getFullYear();
        }
    })
    const age = person => person.yearOfDeath - person.yearOfBirth;
    return people.reduce((oldestPerson, person)=>{
      return age(person) < age(oldestPerson)? oldestPerson:person;        
    })
};

// Do not edit below this line
module.exports = findTheOldest;
