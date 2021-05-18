function convertFahrToCelcius (temp){
    let x = ""
    if (typeof(temp) === 'string' && Number(temp) != temp){
        console.log(temp + " is not a valid number but is of type " + typeof temp)  
    }
    else if (typeof(temp) === "boolean"){
        console.log(temp + " is not a valid number but is of type " + typeof temp)
    }
    else if (typeof(temp) === "object" && Array.isArray(temp)){
        console.log(JSON.stringify(temp) + " is not a valid number but a/an array")
    }
    else if (typeof(temp) === "object" && !Array.isArray(temp)){
        console.log(JSON.stringify(temp) + " is not a valid number but a/an object")
    }
    else if (temp === undefined){
        console.log(JSON.stringify(temp) + " is not a valid number but a/an " +typeof temp)
    }
    else { 
        newTemp = (temp-32)*(5/9)
        x = newTemp.toFixed(4)
        
    }
    return x 
}
console.log(convertFahrToCelcius(undefined))

