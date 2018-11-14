document.getElementById('hakunappi').addEventListener('click', search, false);

function search() {
  let userInput = document.getElementById('hakukentta').value;
  fetch('http://api.tvmaze.com/search/shows?q=' + userInput).
      then(response => response.json()).
      then(info => {
        console.log(info);
        return info;
      }).
      then(shows => {
        const sarjat = document.getElementById('sarjat');
        sarjat.innerHTML = shows.map(({show}) => `
          <div class="uudet">
            ${show.image ? `<img src="${show.image.medium}">` : ''}
            <div>
              <h3>${show.name}</h3>
              <span><a href="${show.officialSite}">Open show homepage</a></span>
              <br />
              <span>Summary: ${show.summary}</span>
            </div>
          </div>
        `).join('');
      }).
      catch(error => {
        console.log(error);
      });
  return;
}