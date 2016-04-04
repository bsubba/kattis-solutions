var sequences = readline();
var seqArr = sequences.split('');
var initial1 = seqArr[0];
var initial2 = seqArr[0];

var policy1 = 'U';
var policy2 = 'D';
var policy3Initial = seqArr[0];
var adjCount3 = 0;
var adjCount1 = 0;
var adjCount2 = 0;
for(var i = 1; i<seqArr.length; i++){
//check for first prefernce i.e leave the seat up
if(seqArr[i] == 'U' || seqArr[i] == 'D'){                
if(seqArr[i].toUpperCase() != initial1){
    adjCount1++;
    

}

if(seqArr[i].toUpperCase() != initial2){
    
    adjCount2++;

}

if(seqArr[i].toUpperCase()!=policy1)
    adjCount1++;

if(seqArr[i].toUpperCase()!=policy2)
    adjCount2++;



if(seqArr[i].toUpperCase() != policy3Initial){                  
    adjCount3++;
}
//console.log(adjCount3);
policy3Initial = seqArr[i].toUpperCase();
initial1 = policy1;
initial2 = policy2;
//initial = seqArr[i];

}
}
print(adjCount1);
print(adjCount2);
print(adjCount3);