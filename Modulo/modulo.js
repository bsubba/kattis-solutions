var line;
var out = [];
while (line = readline()) {
    var mod = line % 42;
    out.push(mod);
}
var unique = out.filter(function(item, i, ar){ return ar.indexOf(item) === i; });
print(unique.length);