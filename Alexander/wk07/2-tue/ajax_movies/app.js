var $btn = $('button');

$btn.on('click', function(event) {
  $('#stuff').empty();
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
      var list = document.createElement('h2');
      list.innerHTML = link;
      $('#stuff').append(list)
    };
    // response.Search.forEach(function(movie) {
    //   var url = 'http://www.imdb.com/title/'+ movie.imdbID;
    //   var link = $('<a>').attr('href', url).text(movie.Title);
    //   var heading = $('<h2>').append(link);
    //   $('#movies').append(heading);
    // })
    var movies = $('a')

    for (var i = 0; i < movies.length; i++) {
      movies[i].target = "_blank"
    }
  })
})
