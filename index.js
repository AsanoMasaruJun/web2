$(document).ready(function() {
  var key = 'AIzaSyArjXn31-xzHzZ3D43XY43dirRmOA_bt1I';
  var playlistId = 'UU8FwEy3F0BHzyxYVNlrvzew'
  var URL = 'https://www.googleapis.com/youtube/v3/playlistItems';
  var popularlistId = 'PU8FwEy3F0BHzyxYVNlrvzew'
  
  var options = {
    part: 'snippet',
    key: key,
    maxResults: 20,
    playlistId: playlistId
  }
  
  loadVids();
  
  function loadVids() {
    $.getJSON(URL, options, function(data) {
      var id = data.items[0].snippet.resourceId.videoId;
      mainVid(id);
      resultsLoop(data);
    })
  }
  
  function mainVid(id) {
    $('#video').html(`

         `);
    
  }
  
  function resultsLoop(data){
    
    $.each(data.items, function(i, item) {
      
      var thumb = item.snippet.thumbnails.medium.url;
      var title = item.snippet.title;
      var desc = item.snippet.description.substring(0, 100);
      var vid = item.snippet.resourceId.videoId;
      
      $('main').append(`
      <a href="https://www.youtube.com/watch_popup?v=${vid}" style="text-decoration: none; color: black;">
      <article class="item" data-key="${vid}"> 
         
          <img src="${thumb}" class=o"thumb"/ width="250px">
         
          <br>
            <div class="details">

             <h4>${title}</h4>
             
            </div>

        </article>
        </a>
     
    `);
    });
  }
  
  $('main').on('click', 'article', function() {
    var id = $(this).attr('data-key');
  
  });
  
});
