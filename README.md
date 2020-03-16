# Fantasy Football Database #

Contributors: Kyle Betlach, Mai Xiong, Jacob Rosenbaum, Hamza Abdikarim

### Introduction

For project01, we were tasked with creating an application with the following requirements: 

* Must use at least two server-side APIs
* Must be interactive (i.e: accept and respond to user input)
* Use at least one new third-party API//Library
* Must have a polished UI
* Must meet good quality coding standards
* Does not use alerts, confirms or prompts (look into modals)
* Must be deployed to GitHub Pages

We chose to create a page that displays the highest projected point earners by position in NFL fantasy football, as well as have a player search function and interactive NFL schedule feature.

### Technologies

The program was created in VS Code using html, css, Bootstrap, and JavaScript / jQuery.

APIs used include the fantasy football API for the points and player search features, and MySportsFeeds API for the NFL schedule. Animation CSS was used as the third party library. Font Awesome and moment.js were also included for fonts and formatting the time in the NFL schedule display.

### Launch

Nothing too fancy! Simply open it up with your favorite web browser to view it!

### Status

The application has met and is beyond a "minimum viable product" status, as early users are able to view and interact with all 3 intended features (projected points, player search, NFL schedule).

The following features were brainstormed as things the group would like to include in the future:

- Add all player’s headshots to search results.

- Add video highlights.

- Allow users to create their own fantasy football team and include projected team points.

- A more in-depth schedule function that also includes team logos, records, stadium info, etc. 

### Sources and Inspiration

We wanted to create a simple page that provides fantasy football players with basic, but crucial information.

Kyle's favorite code: This was the first time I incorporated audio into my code! It was surprisingly simple, but adds a nice touch to the final design.

<script>
    var hike = new Audio();
    hike.src = "assets/audio/hike.mp3";
</script>

<button id="select-player" onmousedown="hike.play()" type="button" value="Search">Search</button>

Jacob's favorite code - The NFL schedule toggle:

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

Shoutout to Chris and the TAs who all helped us when we hit snags in the road!
