$(document).ready(function () {
  // Create : POST
  $(".create-burger").on("click", (event) => {
    event.preventDefault();

    let newBurger = {
      name: $("#burgers").val().trim(),
    };

    $.ajax("/api/burger", {
      type: "POST",
      data: newBurger,
    }).then(() => {
      console.log("created new burger");

      location.reload();
    });
  });

  // Update : PUT
  $(".devour-burger").on("click", function (event) {
    event.preventDefault();

    let id = $(this).attr("data-id");
    console.log(id);

    $.ajax("/api/burger/" + id, {
      type: "PUT",
    }).then(() => {
      console.log("Burger was devoured");

      location.reload();
    });
  });
});
