var line;
var dataString;
while(line = readline()){
    if(!dataString)
        dataString = line;
    else    
        dataString = dataString+","+line;
}

var data = dataString.split(',');
var numOfTests = parseInt(data[0]);
var totalPhoneNumbers = parseInt(data[1]);
var list= [];
var sliceAt = 2;
var isConsistent = 'YES';
for(var i=0; i<numOfTests; i++){
    var x = totalPhoneNumbers + sliceAt;
    list[i] = data.slice(sliceAt,x);
    list[i].sort();
    for(var j = 0; j<list[i].length-1; j++){
        isConsistent = 'YES';
        if(hasPrefix(list[i][j], list[i][j+1])){
            isConsistent = 'NO';
            break;
        }
    }
	
	
    print(isConsistent);
    sliceAt = parseInt(sliceAt + totalPhoneNumbers) + 1;
    totalPhoneNumbers =  parseInt(data[sliceAt-1]);
}


//check if two numbers have same prefix
function hasPrefix(num1, num2){
    if(num2.length < num1.length) // candidate string can't be smaller than prefix string 
        return false;
    if (num2.indexOf(num1) === 0) {
    // string str1 is a prefix of str2
        return true;
    }
    return false;
}
