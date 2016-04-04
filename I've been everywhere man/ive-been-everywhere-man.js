var line, dataString;
while(line = readline()){
    if(!dataString)
        dataString = line;
    else    
        dataString = dataString+","+line;
}
var data = dataString.split(',');
var numOfTests = parseInt(data[0]);
var numberOfTimesVisited = parseInt(data[1]);
var list= [];
var sliceAt = 2;
for(var i=0; i<numOfTests; i++){
    var x = numberOfTimesVisited + sliceAt;
    list[i] = data.slice(sliceAt,x);
    list[i].sort();
    var uniq = list[i].reduce(function(a,b){
        if (a.indexOf(b) < 0 ) a.push(b);
        return a;
      },[]);
    print(uniq.length);
    sliceAt = parseInt(sliceAt + numberOfTimesVisited) + 1;
    numberOfTimesVisited =  parseInt(data[sliceAt-1]);
}