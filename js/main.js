const loadMobilePhones = () => {
    const inputId = document.getElementById('search-field').value;
    const inputText = inputId.toLowerCase();
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
        .then(res => res.json())
        .then(data => showMobilePhones(data.data))
}
loadMobilePhones()
const showMobilePhones = (getAllPhone) => {
    const phones = getAllPhone.slice(0, 5)
    /*  console.log(phones) */
    const addColumn = document.getElementById('add-column');
    addColumn.textContent = '';

    phones.forEach(phone => {
        /*  console.log(phone); */
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
            <div class="col text-center ">
                <div class="card h-100 border-0 py-5">
                    <img class="w-50 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body pb-0">
                        <h5 class="card-title">${phone.phone_name}</h5>
                        <p class="card-text">${phone.brand}</p>
                        <button onclick="getPhoneDetails('${phone.slug}')" class="py-2 px-5 rounded border-0">Show Details</button>
                    </div>
                   
                </div>
            </div>
        `;
        addColumn.appendChild(div);
    })
}

const getPhoneDetails = (slug) => {
    const url = document.getElementById('slug');
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => displayDeatails(data.data))

}

const displayDeatails = (data) => {
    console.log(data)
}