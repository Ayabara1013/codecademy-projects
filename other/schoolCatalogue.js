class School 
{
    constructor(name, level, students)
    {
        this._name = name;
        this._level = level;
        this._students = students;
    }

    get name() {
        return this._name;
    }
    get level() {
        return this._level;
    }
    get students() {
        return this._students;
    }

    set students(num){
        if (typeof students == 'number') {
            this._students = num;
        }
        else {
            console.log('invalid input: (number of) students must be set to a number');
        }  
    }

    quickFacts()
    {
        console.log(`${this._name} educates ${this._students} students at the ${this._level} school level.`);
    }
    
    static pickSubstituteTeacher(substituteTeachers)
    {
        const x = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[x];
    }
}

class PrimarySchool extends School
{
    constructor(name , students, pickupPolicy)
    {
        super(name, 'primary', students);
        this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
        return this._pickupPolicy;
    }
}

class MiddleSchool extends School
{
    constructor(name , students) {
        super(name, 'middle', students);
    }
}

class HighSchool extends School
{
    constructor(name , students, sportsTeams)
    {
        super(name, 'high', students);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
        console.log(this._sportsTeams);
    }
}

const LorraineHansbury = new PrimarySchool('Lorraine Handsbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
LorraineHansbury.quickFacts();
// School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']);

const alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
alSmith.sportsTeams;