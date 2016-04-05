var line;
var finalScore = [];
while(line = readline()){
    var score = line.split(' ');
    var sum = 0;
    for(var i = 0; i<score.length; i++){
        sum = sum + parseInt(score[i]);                   
    }
    finalScore.push(sum);
}
var highestScore = getMax(finalScore);
var player = finalScore.indexOf(highestScore)+1;
print(player+' '+highestScore);


function getMax(array){
    return Math.max.apply(Math,array);
}
