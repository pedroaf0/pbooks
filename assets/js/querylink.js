
const setquerylink = function (query) {

    const params = new URLSearchParams(location.search);
    params.set('q', query);

    window.history.replaceState({}, '', `${location.pathname}?${params.toString()}`);
    document.title = `${decodeURI(query)} - Polemic Books Web`
}
const checkquerylink = async function () {
    let params = new URLSearchParams(document.location.search.substring(1));


  if (params.get('q')){
    const response = await request(params.get('q'));
    handleSearch(response);
    document.querySelector('.input').value = decodeURI(params.get('q'));
    document.title = `${decodeURI(params.get('q'))} - Polemic Books Web`

  }
}
checkquerylink()