import { Serie } from "./serie.js";
import { dataSeries } from "./dataSeries.js";

let seriesTbody: HTMLElement = document.getElementById("seriesTbody")!;

function renderSeriesInTable (series: Serie[]): void{
    series.forEach((serie: Serie) => {
        let tr: HTMLElement = document.createElement("tr");
        tr.innerHTML = `<td class= "bg-light">${serie.id}</td>
                        <td class= "bg-light"><p class="text-primary">${serie.name}</p></td>
                        <td class= "bg-light">${serie.channel}</td>
                        <td class= "bg-light">${serie.seasons}</td>`;
        seriesTbody.appendChild(tr);
    });
}

function calculateAvarage(series: Serie[]): number {
    let total: number = 0;
    series.forEach((serie: Serie) => {
        total += serie.seasons;
    });
    return total / series.length;
}

function renderAvarage(): void {
    let avarage: number = calculateAvarage(dataSeries);
    let avarageP: HTMLElement = document.getElementById("avarage")!;
    avarageP.innerText = "Season average: " + avarage.toString();
}

renderSeriesInTable(dataSeries);
renderAvarage();