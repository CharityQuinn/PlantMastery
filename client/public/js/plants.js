// Need to make this react

$(document).ready(function () {
  function getRecipes() {
    $.ajax({
      method: "GET",
      url: "/recipes"
    }).then(function (dbRecipes) {
      dbRecipes.forEach(recipe => {
        $("<li>")
          .addClass("list-group-item recipe")
          .append(recipe.title)
          .attr("data-id", recipe._id)
          .appendTo($("#recipes"));
      });
    });
  }

  $("recipes").on("click", function () {

    const recipeId = $(this).attr("data-id");
    $("#note-title").val('');
    $("#note-body").val('');

    $ajax({
      url: `/recipes/${recipeId}`,
      method: "GET"
    }).then(function (recipeData) {
      console.log(recipeData);
      $("#submit-note").attr("data-id", recipeData._id).attr("data-note-id", recipeDate.note._id);
      $("recipe-link")
        .attr("href", recipeData.link)
        .text(recipeData.title);
      $("note-body").val(recipeData.note.body);
      $("#note-title").val(recipeData.note.title)
    });
  });

  $("#submit-note").on("click", function(e) {
    e.preventDefault();

    const recipeId = $(this).attr("data-id");
    if (!recipeId) {
      return false;
    }
    const noteData = {
      title: $("#note-title")
      .val()
      .trim(),
      body: $("#note-body")
      .val()
      .trim()
    };

    $.ajax({
      url: `/recipes/${recipeId}`,
      method: "POST",
      data: recipeData
    }).then(function(data) {
      console.log(data);
      $("#note-title").val('');
      $("#note-body").val('');
    });
  });

  getRecipes();
});
