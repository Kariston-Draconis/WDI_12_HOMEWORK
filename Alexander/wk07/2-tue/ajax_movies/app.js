var $btn = $('button');

$btn.on('click', function(event) {
  $('div').empty();
  var movie = document.querySelector('input').value
  var settings = {
    url: 'http://omdbapi.com/',
    data: { s: movie, apikey: '2f6435d9' }
  }
  $.ajax(settings).done(function(response) {
    var film = response.Search;
    for (var i = 0; i < film.length; i++) {
      var title = film[i].Title;
      var link = title.link("http://www.imdb.com/title/" + film[i].imdbID);
      var list = document.createElement('li');
      list.innerHTML = link;
      $('div').append(list)
    };
    var movies = $('a')

    for (var i = 0; i < movies.length; i++) {
      movies[i].target = "_blank"
    }
  })
})
