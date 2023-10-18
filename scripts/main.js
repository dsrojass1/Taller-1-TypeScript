import { dataSeries } from "./dataSeries.js";
var seriesTbody = document.getElementById("seriesTbody");
function renderSeriesInTable(series) {
    series.forEach(function (serie) {
        var tr = document.createElement("tr");
        tr.innerHTML = "<td class= \"bg-light\">".concat(serie.id, "</td>\n                        <td class= \"bg-light\"><p class=\"text-primary\">").concat(serie.name, "</p></td>\n                        <td class= \"bg-light\">").concat(serie.channel, "</td>\n                        <td class= \"bg-light\">").concat(serie.seasons, "</td>");
        seriesTbody.appendChild(tr);
    });
}
function calculateAvarage(series) {
    var total = 0;
    series.forEach(function (serie) {
        total += serie.seasons;
    });
    return total / series.length;
}
function renderAvarage() {
    var avarage = calculateAvarage(dataSeries);
    var avarageP = document.getElementById("avarage");
    avarageP.innerText = "Season average: " + avarage.toString();
}
renderSeriesInTable(dataSeries);
renderAvarage();
