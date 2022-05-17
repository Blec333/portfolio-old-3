function projectList() {
  fetch(`/api/projects`)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.results.length; i++) {
        $("#projects").append($("<option>").text(data.results[i].name));
      }
      return data;
    });
}

projectList();