$(function() {
    $(".devour-burger").on("click", function(event) {
        var id = $(this).data("id");
        var devouredBurger = $(this).data("devouredburger");

        var burgerStatus = {
            devoured: devouredBurger
        };

        // Send the PUT request.
        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: burgerStatus
        }).then(
            function() {
                console.log("Changed devoured to", devouredBurger);

                // Reload the page to get the updated list
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger-name").val().trim()
        };

        // Send the POST request.
        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("Created a new burger!");
                // Reload the page to get the updated list
                location.reload();
            }
        );
    });
});