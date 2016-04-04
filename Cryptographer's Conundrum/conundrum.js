var str = readline();
var arr = str.split('');
var comp = "PER";
var per = comp.split("");
var days = 0;

for (var i = 0; i < arr.length; i++){
  if(arr[i] != per[i%3]){
    days++;
  }
}

print(days);