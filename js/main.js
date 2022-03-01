

const loadMobilePhones = () => {
    fetch('https://openapi.programming-hero.com/api/phones')
        .then(res => res.json())
        .then(data => showMobilePhones(data.data))
}
loadMobilePhones()

const showMobilePhones = (phones) => {
    const addColumn = document.getElementById('add-column');
    phones.forEach(phone => {
        console.log(phone);
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col text-center ">
                <div class="card h-100 border-0 p-4">
                    <img class="w-75 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body pb-0">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button class="py-2 px-5 rounded border-0">Show Details</button>
                    </div>
                   
                </div>
            </div>
        `;
        addColumn.appendChild(div);
    })
}