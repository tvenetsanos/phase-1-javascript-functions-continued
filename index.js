function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}

function mondayWork(schedule = "go to the office"){
    return `This Monday, I will ${schedule}.`
}

function wrapAdjective(special = "*"){
    return function(adjective){
       return `You are ${special}${adjective}${special}!`;
    }
} 
