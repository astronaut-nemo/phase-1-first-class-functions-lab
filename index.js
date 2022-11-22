// Code your solution in this file!
const returnFirstTwoDrivers = function (array){
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array){
    return array.slice(-2);
}

const selectingDrivers = []
selectingDrivers.unshift(returnFirstTwoDrivers)
selectingDrivers.push(returnLastTwoDrivers)

const createFareMultiplier = function(argument){
    const multiplier = ride => ride*argument;
    return multiplier;
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare);
}

const selectDifferentDrivers  = function(arrayOfDrivers, functionToUse){
    return functionToUse(arrayOfDrivers);
}