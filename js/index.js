const requestURL = '../json/discografia.json';

async function fetchDiscsJson(){
    const response =  await fetch(requestURL);
    const discs = await response.json();
    return discs;
}

fetchDiscsJson().then(discs =>{
    for (let index = 0; index < discs.discografia.length ; index++)
    {
        const discsSection = document. getElementById('discSection');

        let id = discs.discografia[index].id;
        let portada = discs.discografia[index].portada;
        let titulo = discs.discografia[index].titulo;
        let discografica = discs.discografia[index].discografica;
        let fecha = discs.discografia[index].fecha;

        discsSection.innerHTML += `
        <div class="card" style="width: 18rem;">
            <img src="${portada}" class="card-img-top" alt="portada del disco">
            <div class="card-body">
                <h2 class="card-title">${id}. ${titulo}</h2>
                <h3 class="card-title">Discografica: ${discografica}</h3>
                <h3 class="card-title">Fecha: ${fecha}</h3>
            </div>
        </div>
        ` 
    }
})
