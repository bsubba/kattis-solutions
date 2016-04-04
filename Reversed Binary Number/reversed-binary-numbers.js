var num = readline();
var bin = (num >>> 0).toString(2);

var rev = reverse(bin);
var res = parseInt(rev,2);
print(res);
function reverse(s){
    return s.split("").reverse().join("");
}