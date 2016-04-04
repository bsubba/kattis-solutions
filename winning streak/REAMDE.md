#Winning Streak

Mikael likes to gamble, and as you know, almost anything can be gambled on these days. A particular thing that has recently caught Mikael’s interest is the length of the longest winning streak of a team during a season (i.e. the highest number of consecutive games won). In order to be able to make smarter bets, Mikael has asked you to write a program to help him compute the expected value of the longest winning streak of his favorite teams.

In general, the probability that a team wins a game depends on a lot of different factors, such as whether they’re the home team, whether some key player is injured, and so on. For the first prototype of the program, however, we simplify this, and simply assume that all games have the same fixed probability pp of being won, and that the result of a game does not affect the win probability for subsequent games.

The expected value of the longest streak is the average of the longest streak in all possible outcomes of all games in a season, weighted by their probability. For instance, assume the season only consists of three games, and that p=0.4p=0.4. There are eight different outcomes, which we can represent by a string of ’W’:s and ’L’:s, indicating which games were won and which games were lost (for example, ’WLW’ indicates that the team won the first and the third game, but lost the second). The possible results of the season are:

| Result | Probability | Longest streak | Result | Probability | Longest streak
|--------|-------------|----------------|--------|-------------|--------------
| LLL    |  0.216      |  0			    | WLL    | 0.144       | 1
| LWL    |  0.144      |  1			    | WWL    | 0.096       | 2
| LLW    |  0.144      |  1			    | WLL    | 0.096       | 1
| LWW    |  0.096      |  2			    | WWW    | 0.064       | 3


In this case, the expected length of the longest winning streak becomes

0.216⋅0+0.144⋅1+0.144⋅1+0.096⋅2+0.144⋅1+0.096⋅1+0.096⋅2+0.064⋅3=1.104

##Input
The input file consists of up to 55 test cases, each on a line of its own. Each test case consists of an integer 1≤n≤30001≤n≤3000 giving the number of games in a season, and a real number 0≤p≤10≤p≤1, the win probability.

##Output
For each test case, the expected length of the longest winning streak, with an absolute or relative error of at most 10−6 .


Sample Input 1
```
3 0.4
10 0.75
```

Sample Output 1
```
1.104
5.0680904388
```

 	
