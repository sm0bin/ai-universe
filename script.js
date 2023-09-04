function fetchData() {
    fetch("https://openapi.programming-hero.com/api/ai/tools")
        .then(res => res.json())
        .then(json => showCards(json.data.tools))
}

function showCards(data) {
    const cardContainer = document.getElementById("card-container");
    data.forEach(element => {
        const card = document.createElement("div");
        card.className = "bg-slate-50 shadow-md rounded-2xl p-6";
        card.innerHTML =
            `
            <figure class="">
                <img src="${element.image}"
                    alt="${element.name} image" class="rounded-xl h-52 object-cover" />
            </figure>
            <div>
                <h2 class="mt-6 mb-2 text-2xl font-semibold">Features</h2>
                <ol class="list-decimal list-inside mb-6">
                    <li>${element.features[0]}</li>
                    <li>${element.features[1]}</li>
                    <li>${element.features[2]}</li>
                </ol>
                <hr class="border-slate-300">

                <div class="flex items-end justify-between">
                    <div>
                        <h2 class="mt-6 mb-2 text-2xl font-semibold">${element.name}</h2>
                        <div class="flex gap-2">
                            <svg class="fill-current text-slate-500" xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24">
                                <path d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z">
                                </path>
                                <path
                                    d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2zM19 8l.001 12H5V8h14z">
                                </path>
                            </svg>
                            <p>${element.published_in}</p>
                        </div>
                    </div>
                    <button class="bg-slate-200 hover:bg-slate-500 p-3 rounded-full" onclick="fetchDetails(${element.id})">
                        <svg class="fill-current text-slate-500 hover:text-slate-50"
                            xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24">
                            <path
                                d="m11.293 17.293 1.414 1.414L19.414 12l-6.707-6.707-1.414 1.414L15.586 11H6v2h9.586z">
                            </path>
                        </svg>
                    </button>


                </div>
            </div>
        `;
        cardContainer.appendChild(card);
    });

}

function showDetails() {
    // fetch("https://openapi.programming-hero.com/api/ai/tools")
    //     .then(res => res.json())
    //     .then(json => showCards(json.data.tools))

}

async function fetchDetails(id) {
    const res = await fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`);
    const json = await res.json();
    console.log(id);
    my_modal_3.showModal()
}

fetchData()