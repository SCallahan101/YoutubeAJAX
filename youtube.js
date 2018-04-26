const YouTube_Search = 'https://www.googleapis.com/youtube/v3/search';

function DataReturn(term, listOfResults) {
  const theList = {
    part: `snippet`,
    key: 'AIzaSyCqQJ1Pkje_oe_uAWGpZsXd4b7geHI3HWI',
    q:`${term} `, 
    per_page: 3
  }
  $.getJSON(YouTube_Search, theList, listOfResults);
}


function renderResult(list) {
  return `
    <div>
      <br>
      <a class='topicResult' href='https://www.youtube.com/watch?v=${list.id.videoId}' target="_self"> <img src='${list.snippet.thumbnails.default.url}'></a>
      <p id='above'>Click the IMG ^^^</p>
      <ul><li\'${list.snippet.title}\'</li></ul>
   </div>
  `;}
  
  function displayData(data) {
    const results = data.items.map((item, index) => renderResult(item));
    $('#result').html(results);
    console.log(data.items);
  }

function watchSubmit() {
  $('#search').submit(event => {event.preventDefault();
    const queryTarget = $(event.currentTarget).find('#input');
    const theList = queryTarget.val();
    queryTarget.val('');
    DataReturn(theList, displayData);
  });
}

$(watchSubmit);
