// Write your JavaScript code here!



window.addEventListener("load", function() {
    let form = document.querySelector("form");
    form = document.addEventListener("submit", function(event) {
        
        let list = document.getElementById("faultyItems");
        let pilot = document.querySelector("input[name=pilotName]").value;
        let copilot = document.querySelector("input[name=copilotName]").value;
        let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
        let cargoLevel = document.querySelector("input[name=cargoMass]").value;

        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);

        event.preventDefault();
        
    });
    
   
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()

   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);

       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.

       let planet = pickPlanet(listedPlanets);

       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let moons = planet.moons;
       let imageUrl = planet.image;
       

       addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl);

   });

});








