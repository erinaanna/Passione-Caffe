const tipuriContainer = document.getElementById("tip-de-cafea");
const metodeContainer = document.getElementById("metode");

const tipuri = [
    {
        name: "Cafea Arabica",
        description: "Un gust fin și echilibrat, ideal pentru cei care iubesc un gust mai ușor și mai rafinat."
    },
    {
        name: "Cafea Robusta",
        description: "Un gust fin și echilibrat, ideal pentru cei care iubesc un gust mai ușor și mai rafinat."
    },
    {
        name: "Cafea de Citate",
        description: "Un gust fin și echilibrat, ideal pentru cei care iubesc un gust mai ușor și mai rafinat."
    },
]

const metode = [
    {
        name: "Espresso",
        description: "Cafea concentrată, ideală pentru iubitorii de gust intens și arome bogate."
    },
    {
        name: "Filtru",
        description: "O metodă mai ușoară, care permite extragerea unui gust echilibrat și mai puțin concentrat."
    },
    {
        name: "Cold Brew",
        description: "Cafea preparată la rece, perfectă pentru zilele calde de vară, cu un gust mai puțin amar."
    },
]
function renderTipuri () {
    for (let tip of tipuri) {
        const listItem = document.createElement("li");

        const tipName = document.createElement("strong");
        tipName.textContent = tip.name;

        const tipDesc = document.createElement("p");
        tipDesc.textContent = tip.description;

        listItem.appendChild(tipName);
        listItem.appendChild(tipDesc);
        tipuriContainer.appendChild(listItem);
    }
}

function renderMetode () {
    for (let metoda of metode) {
        const listItem = document.createElement("li");

        const metodaName = document.createElement("strong");
        metodaName.textContent = metoda.name;

        const metodaDesc = document.createElement("p");
        metodaDesc.textContent = metoda.description;

        listItem.appendChild(metodaName);
        listItem.appendChild(metodaDesc);
        metodeContainer.appendChild(listItem);
    }
}

renderTipuri();
renderMetode();