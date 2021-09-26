function gameObject(){
    return {
       home: {
                teamName: "Brooklyn Nets",
                colors: ["Black", "White"],
                players: {
                    "Alan Anderson": {
                        Number: 0,
                        shoe: 16,
                        points: 22,
                        rebounds: 12,
                        assists: 12,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 1
                    },
                        "Reggie Evans":{
                        Number: 30,
                        shoe: 14,
                        points: 12,
                        rebounds: 12,
                        assists: 12,
                        steals: 12,
                        blocks: 12,
                        slamDunks: 7
                    },
                    "Brook Lopez": {
                        Number: 11,
                        shoe: 17,
                        points: 17,
                        rebounds: 19,
                        assists: 10,
                        steals: 3,
                        blocks: 1,
                        slamDunks: 15
                    },
                        "Mason Plumlee": {
                        Number: 1,
                        shoe: 19,
                        points: 26,
                        rebounds: 12,
                        assists: 6,
                        steals: 3,
                        blocks: 8,
                        slamDunks: 5
                    },
                    "Jason Terry": {
                        Number: 31,
                        shoe: 15,
                        points: 19,
                        rebounds: 2,
                        assists: 2,
                        steals: 4,
                        blocks: 11,
                        slamDunks: 1
                    }
                }
            },
        away:{
                teamName: "Charlotte Hornets",
                colors: ["Turquoise", "Purple"],
                players: {
                        "Jeff Adrien": {
                        Number: 4,
                        shoe: 18,
                        points: 10,
                        rebounds: 1,
                        assists: 1,
                        steals: 2,
                        blocks: 7,
                        slamDunks: 2
                    },
                    "Bismak Biyombo": {
                        Number: 0,
                        shoe: 16,
                        points: 12,
                        rebounds: 4,
                        assists: 7,
                        steals: 7,
                        blocks: 15,
                        slamDunks: 10
                    },
                    "Desagna Diop": {
                        Number: 2,
                        shoe: 14,
                        points: 24,
                        rebounds: 12,
                        assists: 12,
                        steals: 4,
                        blocks: 5,
                        slamDunks: 5
                    },
                    "Ben Gordon": {
                        Number: 8,
                        shoe: 15,
                        points: 33,
                        rebounds: 3,
                        assists: 2,
                        steals: 1,
                        blocks: 1,
                        slamDunks: 0
                    },
                    "Brendan Haywood": {
                        Number: 33,
                        shoe: 15,
                        points: 6,
                        rebounds: 12,
                        assists: 12,
                        steals: 22,
                        blocks: 5,
                        slamDunks: 12
                    }
                }
        }
    };
  }


// console.log(gameObject());

const homeTeam = gameObject().home.players;
const awayTeam = gameObject().away.players;
const players = {
  ...homeTeam,
  ...awayTeam
}


// const numPointsScored = (playerName) => {
//   return }


const numPointsScored = (playerName) => {
  for(let prop in players){
  // console.log (prop)
  // console.log ("-------")
  // console.log (players[prop])
  // console.log ("-------")
  // console.log (players[prop]["points"])
  // console.log ("-------")
  if (playerName === prop){
    return players[prop]["points"]
  };
}}

console.log(numPointsScored("Brendan Haywood"));