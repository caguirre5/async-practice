const API = 'https://api-nba-v1.p.rapidapi.com/teams'
        
const content = null || document.getElementById('contenido-agregado')

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '19ec1704f6msha8bdacbee020a43p1c8199jsn1eed94a9a671',
		'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
	}
};

async function fetchData(urlAPI) {
    const response = await fetch(urlAPI, options)
    const data = await response.json()
    return data
}

(async () => {
    try {
        const teams = await fetchData(API)
        console.log(teams.response[0].logo)
        let view = `
        ${teams.response.map(team => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${team.logo}" alt="${team.nickname}" class="w-full" width="48px" height="48px">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${team.name}
                    </h3>
                </div>
            </div>
        `).slice(0,8).join('')}
        `;
        console.log(content)
        content.innerHTML = view;
    } catch (error) {
        alert(error)
    }
})()