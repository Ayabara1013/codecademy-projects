function getHours(day)
{
     switch (day){
        case "monday":
            return 8;
            break;
        case "tuesday":
            return 8;
            break;
        case "wednesday":
            return 8;
            break;
        case "thursday":
            return 8;
            break;
        case "friday":
            return 8;
            break;
        case "saturday":
            return 8;
            break;
        case "sunday":
            return 8;
            break;
     }
}

function getActual()
{
    const mon = getHours("monday");
    const tues = getHours("tuesday");
    const wed = getHours("wednesday")
    const thurs = getHours("thursday");
    const fri = getHours("friday");
    const sat = getHours("saturday");
    const sun = getHours("sunday");

    const totalSleep = mon + tues + wed + thurs + fri + sat + sun;
    return totalSleep;
}

// const actual = getActual();

function getIdeal(hours) 
{
    return hours * 7; // 7 days in a * hours slept
}

/* // tests
console.log(getHours("monday"));
console.log(getHours("wednesday"));
console.log(getHours("friday"));
console.log(getHours("saturday"));
console.log(getHours("sunday"));

console.log(getActual());
console.log(getIdeal()); */


function calculateSleepDebt () 
{
    const actual = getActual();
    const ideal = getIdeal(4);
    const balance = actual - ideal;
    let goal = "invalid";

    if (balance < 0)
    {
        goal = `you are under your ideal sleep goal by ${Math.abs(balance)} hours`;
    }
    
    if (balance === 0)
    {
        goal = "you have met your sleep goal exactly";
    }
    
    if (balance > 0)
    {
        goal = `you have exceeded your sleep goal by ${Math.abs(balance)} hours`;
    }
    
    return goal;
}

console.log(getIdeal(9));


console.log(getHours("monday"));
console.log(getHours("wednesday"));
console.log(getHours("friday"));
console.log(getHours("saturday"));
console.log(getHours("sunday"));

console.log(getActual());
console.log(getIdeal(4));

console.log(calculateSleepDebt());
