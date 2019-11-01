function getSchedule() {
    var thisWeek = $("#weeks").val();

    apiKey = "272d68e4-cc86-4387-8a1e-35c762";
    queryURL = "https://api.mysportsfeeds.com/v2.1/pull/nfl/2019-regular/week/" + thisWeek + "/games.json";
    var proxy = "https://chriscastle.com/proxy/index.php?:proxy:";
    console.log(queryURL);

    $.ajax({
        type: "GET",
        url: queryURL,
        dataType: 'json',
        headers: {
            "Authorization": "Basic " + btoa("272d68e4-cc86-4387-8a1e-35c762" + ":" + "MYSPORTSFEEDS")
        },
        timeout: 2000,
        success: function(response) {
            console.log(response);
            console.log("SUCCESS")
            for (i = 0; i < response.games.length; i++) {
                var starttime = response.games[i].schedule.startTime;
                starttime = moment(starttime).format("llll");
                $(".start").append("<p>" + response.games[i].schedule.awayTeam.abbreviation + " at " + response.games[i].schedule.homeTeam.abbreviation + " ........... " + starttime + "</p>");
            }

        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            console.log(XMLHttpRequest, textStatus, errorThrown)
        }
    });
}

var toggle = $("#go");
toggle.on("click", function() {
    $(".start").empty();
    getSchedule();
});