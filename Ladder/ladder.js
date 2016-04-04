var line = readline();
var nums = line.split(' ');
var a, rad, length, deg;
if(nums.length == 2){
    a = parseInt(nums[0]);
    deg = parseInt(nums[1]);
    
    rad= deg*Math.PI/180;
    length = parseInt(Math.ceil(a/Math.sin(rad)));
    print(length);
   
}