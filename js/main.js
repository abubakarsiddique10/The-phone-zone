// get mobile data from server
const loadMobilePhones = () => {
    const inputId = document.getElementById('search-field').value;
    const inputText = inputId.toLowerCase();
    fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
        .then(res => res.json())
        .then(data => showMobilePhones(data.data))
}
// show mobile data in website
const showMobilePhones = (getAllPhone) => {
    const phones = getAllPhone.slice(0, 2)
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
                        <p class="card-text fw-bold fs-5">${phone.brand}</p>
                        <button onclick="getPhoneDetails('${phone.slug}')" class="py-2 px-5 rounded border-0">Show Details</button>
                    </div>
                   
                </div>
            </div>
        `;
        addColumn.appendChild(div);
        getPhoneDetails(`${phone.slug}`)
    })
}
// get mobile phone details from server
const getPhoneDetails = (slug) => {
    const url = document.getElementById('slug');
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
        .then(res => res.json())
        .then(data => displayDeatails(data.data))
}
// display every moblie phone details
const displayDeatails = (phone) => {
    console.log(phone)
    const showDetails = document.getElementById('show-details');
    showDetails.textContent = '';
    const div1 = document.createElement('div');
    div1.classList.add('col-5');
    div1.innerHTML = `
        <div class="card h-100 text-center py-5">
            <img class="w-50 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body pb-0">
                <h5 class="fw-bold fs-4">${phone.brand}</h5>
                <h5 class="card-title">${phone.name}</h5>
                <h6 class="mb-0">${phone.releaseDate ? phone.releaseDate : 'No release date found'}</h6>
            </div>
        </div>
    `;
    const div2 = document.createElement('div');
    div2.classList.add('col-7');
    div2.innerHTML = `
        <div class="card h-100">
            <div class="card-body">
                <div>
                    <h5 class="card-title">Main Features</h5>
                    <div>
                        <ul>
                            <li><span class="fw-bold me-2">Chip Set :</span>${phone.mainFeatures.chipSet}</li>
                            <li><span class="fw-bold me-2">Display Size  :</span>${phone.mainFeatures.displaySize}</li>
                            <li><span class="fw-bold me-2">Memor :</span>${phone.mainFeatures.memory}</li>
                        </ul>
                    </div>
                </div>
                <p class="card-text">This is a short card.</p>
            </div>
        </div>
    `;
    showDetails.appendChild(div1);
    showDetails.appendChild(div2);
}