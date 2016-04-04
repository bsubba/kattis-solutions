var line;
while (line = readline()) {
    var nums = line.split(' ');
    if(nums.length == 2){
        var matchesCount = parseInt(nums[0]);
        var winningProbability = parseFloat(nums[1]);
        var longestWinningStreak = solve(matchesCount, winningProbability);
        print(longestWinningStreak);
    }
}
    
function solve(matchesCount, winningProbability) {
    lossProbability = 1 - winningProbability;
    winProbabilities = []; 
    winProbabilities[0] = 1;

    for (var i = 1; i < matchesCount + 1; i++) {

        winProbabilities[i] = winProbabilities[i - 1] * winningProbability;
    }
    var streakByMatch = []; 
    for (var match = 0; match < matchesCount + 1; match++) {
        streakByMatch[match] = [];
        for (var streak = 0; streak < matchesCount + 1; streak++) {
            if (streak >= match) {

                streakByMatch[match][streak] = 1;
                continue;
            }
            if (streak + 1 == match) {
                streakByMatch[match][streak] = 1 - winProbabilities[match];
                continue;
            }
            streakByMatch[match][streak] = streakByMatch[match - 1][streak];

            if (match - streak - 2 >= 0) {
                streakByMatch[match][streak] -= streakByMatch[match - streak - 2][streak] * lossProbability * winProbabilities[streak + 1];
            }
        }
    }
    var result = 0.;
    for (var i = 1; i < matchesCount + 1; i++) {
        result += i * (streakByMatch[matchesCount][i] - streakByMatch[matchesCount][i - 1]);
    }
    return result;
}