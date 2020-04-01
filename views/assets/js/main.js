$("#submit_burger").on("click", function(event) {
    event.preventDefault();
    let newBurger = {
      name: $("#burger_input").val().trim()
    };
    console.log(newBurger);
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function(response) {
          $("#burgersToEat").append(`<li class="list-group-item" id="${response.id}">${response.name}<button class="btn btn-outline-danger btn-sm float-right devourBurger" index="${response.id}">Eat me!</button></li>`);
        //console.log(response);
        location.reload();
            }
        );
        $("#burger_input").val("");
});

$(".devourBurger").on("click", function(event) {
    event.preventDefault();
    
    const newId = $(this).attr("index");
    const burgerId = {
       id: newId
    };
    
    $.ajax({
        method: "PUT",
        url: "/api/burgers",
        data: burgerId
      }).then( function() {
        location.reload();
        console.log("done");
    });

});