let inputEl = document.getElementById("searchInput");
let searchResultsEl = document.getElementById("searchResults");
let spinnerEl = document.getElementById("spinner");

function getallresults(result) {

    let {
        link,
        title,
        description
    } = result;
    let resultEl = document.createElement("div");
    searchResultsEl.appendChild(resultEl);
    let resulttitleEl = document.createElement("a");
    resulttitleEl.href = link;
    resulttitleEl.target = "_blank";
    resulttitleEl.textContent = title;
    resultEl.appendChild(resulttitleEl);
    let breakEl = document.createElement('br');
    resultEl.appendChild(breakEl);
    let resultlinkEl = document.createElement("a");
    resultlinkEl.classList.add('linkStyle');
    resultlinkEl.href = link;
    resultlinkEl.target = "_blank";
    resultlinkEl.textContent = link;
    resultEl.appendChild(resultlinkEl);
    let breakEl2 = document.createElement('br');
    resultEl.appendChild(breakEl2);
    let descriptionEl = document.createElement('p');
    descriptionEl.classList.add("description");
    descriptionEl.textContent = description;
    resultEl.appendChild(descriptionEl);
}






function addSearchResult(search_results) {
    spinnerEl.classList.toggle("d-none");
    for (let result of search_results) {
        getallresults(result);
    }

}




function searchInput(event) {
    if (event.key === "Enter") {
        spinnerEl.classList.toggle("d-none");
        searchResultsEl.textContent = '';
        let searchInputvalue = inputEl.value;
        let url = "https://apis.ccbp.in/wiki-search?search=" + searchInputvalue;
        let options = {
            method: "GET"
        }
        fetch(url, options)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                console.log(data);
                let {
                    search_results
                } = (data);
                addSearchResult(search_results);
            });
    }

}





inputEl.addEventListener('keydown', searchInput);
