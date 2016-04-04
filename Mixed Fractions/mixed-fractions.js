var a, b, rem, q, lines, new_numerator;
while(lines = readline()){
    if(lines != '0 0'){
        var nums = lines.split(' ');
        if(nums.length == 2){
            a = parseInt(nums[0]);
            b = parseInt(nums[1]);
            rem = a % b; 
            q = Math.floor(a/b);
            print(q+' '+rem+' / '+b);
        }
        
    }
}