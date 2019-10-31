$(document).ready(function(event) {
    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=DEF&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        $(".def").html(response.players[playerIndex].name + "<br>" + response.players[playerIndex].teamAbbr + "<br>" + "Projected points this week: " + response.players[playerIndex].weekProjectedPts);
    });

    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=QB&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        $(".qb").html(response.players[playerIndex].name + "<br>" + response.players[playerIndex].teamAbbr + "<br>" + "Projected points this week: " + response.players[playerIndex].weekProjectedPts);
    });

    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=RB&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        $(".rb").html(response.players[playerIndex].name + "<br>" + response.players[playerIndex].teamAbbr + "<br>" + "Projected points this week: " + response.players[playerIndex].weekProjectedPts);
    });

    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=WR&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        $(".wr").html(response.players[playerIndex].name + "<br>" + response.players[playerIndex].teamAbbr + "<br>" + "Projected points this week: " + response.players[playerIndex].weekProjectedPts);
    });

    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=TE&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        $(".te").html(response.players[playerIndex].name + "<br>" + response.players[playerIndex].teamAbbr + "<br>" + "Projected points this week: " + response.players[playerIndex].weekProjectedPts);
    });

    var queryURL = "https://api.fantasy.nfl.com/v1/players/stats?statType=weekProjectedStats&season=2019&currentWeek&position=K&format=json";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        type: "GET",
    }).then(function(response) {
        console.log(response);
        var topScore = 0;
        var playerIndex;
        for (var i = 0; i < response.players.length; i++) {
            if (response.players[i].weekProjectedPts > topScore) {
                topScore = response.players[i].weekProjectedPts
                playerIndex = i;
            }
        }
        console.log(response.players[playerIndex].name);
        $(".k").html(response.players[playerIndex].name + "<br>" + response.players[playerIndex].teamAbbr + "<br>" + "Projected points this week: " + response.players[playerIndex].weekProjectedPts);
    });
});