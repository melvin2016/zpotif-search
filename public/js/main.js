$('document').ready(()=>{
  //making resultBar animation and onClick
  $('#title').text("meak.io");
  $('#resultBar').hide();
  $('#resultCard').hide();
  $('#albumResultCard').hide();
  $('#resultBtn').on('click',()=>{
    if($('#albumIdInput').val() == ''){
      $('#albumResultCard').fadeOut(400);
      $('#resultBar').html('No id provided...');
      $('#resultBar').slideDown(1000).delay(3000).slideUp(500);
    }else{
      const query = $('#albumIdInput').val();
      const fullQuery = encodeURI(query);
      let ul = "<ul>";
      $.getJSON(`/search/album/${fullQuery}`,(json)=>{
        const albums = json.message.albums.items;
        for(let i = 0 ; i<albums.length;i++){
          ul += `<li><a class="resultLink" value="${albums[i].id}">${albums[i].name}</a></li>`;
        }
        ul += "</ul>";
        $('#resultCard').fadeIn(900);
        $('#resultContent').html(ul);
      });
    }
    $('#resultContent').on('click','a',(e)=>{
      e.preventDefault();
      $('#albumResultCard').fadeOut(500);
      const albumIdInput = $(e.target).attr('value');
      $('#albumIdTitle').text(`Album Id : ${albumIdInput}`);
      $('#albumResultCard').fadeIn(900);
      //ajax
      $.getJSON(`/album/${albumIdInput}`,(res)=>{
        let trackArr="<ul>";
        // const tracks ;
        for(let i = 0 ; i<res.message.tracks.items.length;i++){
          const tracks = res.message.tracks.items;
          trackArr += `<li><a href='${tracks[i].external_urls.spotify}' target="_blank">${tracks[i].name}</a></li>`;
        }
        trackArr += "</ul>";
        $('#albumCardImg').attr("src",res.message.images["0"].url);
        $('#albumIdTitle').html(`<p class="flow-text">${res.message.name} - ${res.message.release_date}</p>`);
        $('#albumContent').html(`
          <p class="flow-text">Artist : ${res.message.artists["0"].name}</p>
          ${trackArr}
          <p class="center-align">${res.message.copyrights["0"].text}</p>
        `);
      });
    });
  });
});
