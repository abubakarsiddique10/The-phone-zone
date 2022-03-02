// get mobile data from server
const loadMobilePhones = () => {
    const inputId = document.getElementById('search-field');
    const inputText = inputId.value.toLowerCase();
    inputId.value = '';
    document.getElementById('spinner').style.display = 'block';
    if (isNaN(inputText)) {
        fetch(`https://openapi.programming-hero.com/api/phones?search=${inputText}`)
            .then(res => res.json())
            .then(data => showMobilePhones(data.data))
    }
    else {
        document.getElementById('error').style.display = 'block';
        document.getElementById('spinner').style.display = 'none';
    }
}
// show mobile data in website
const showMobilePhones = (getAllPhone) => {
    if (getAllPhone.length == 0) {
        document.getElementById('error').style.display = 'block';
    }
    else {
        document.getElementById('error').style.display = 'none'
        const phones = getAllPhone.slice(0, 20);
        const addColumn = document.getElementById('add-column');
        addColumn.textContent = '';
        phones.forEach(phone => {
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
        })
    }
    document.getElementById('spinner').style.display = 'none';
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
    /* console.log(phone) */
    const showDetails = document.getElementById('show-details');
    showDetails.textContent = '';
    const div1 = document.createElement('div');
    div1.classList.add('col-lg-5');
    div1.classList.add('col-12');
    div1.innerHTML = `
        <div class="card h-100 text-center py-5">
            <img class="w-50 mx-auto" src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body pb-0">
                <h5 class="fw-bold fs-4">${phone.brand}</h5>
                <h5 class="card-title">${phone.name}</h5>
                <h6 class="mb-4">${phone.releaseDate ? phone.releaseDate : 'No release date found'}</h6>
                <button style="background: #2ABBE8" class="py-2 px-5 border-0 mb-3">Bye Now</button>
                <button class="py-2 px-5 border-0">Add to Cart</button>
            </div>
        </div>
    `;
    const div2 = document.createElement('div');
    div2.classList.add('col-lg-7');
    div2.classList.add('col-12')
    div2.innerHTML = `
        <div class="card h-100">
            <div class="card-body p-4">
            <h3>Product details of ${phone.name}</h3>
                <div>
                    <h5 class="card-title">Main Features</h5>
                    <div>
                        <ul>
                            <li><span class="fw-bold me-2">Chip Set :</span>${phone.mainFeatures.chipSet}</li>
                            <li><span class="fw-bold me-2">Display Size  :</span>${phone.mainFeatures.displaySize}</li>
                            <li><span class="fw-bold me-2">Memor :</span>${phone.mainFeatures.memory}</li>
                            <li><span class="fw-bold me-2">Storage :</span>${phone.mainFeatures.storage}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 class="card-title">Sensors</h5>
                    <div>
                        <ul>
                            <li>${phone.mainFeatures.sensors[0]}</li>
                            <li>${phone.mainFeatures.sensors[1]}</li>
                            <li>${phone.mainFeatures.sensors[2]}</li>
                            <li>${phone.mainFeatures.sensors[3]}</li>
                            <li>${phone.mainFeatures.sensors[4]}</li>
                            <li>${phone.mainFeatures.sensors[5]}</li>
                            <li>${phone.mainFeatures.sensors[6]}</li>
                            <li>${phone.mainFeatures.sensors[7]}</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <h5 class="card-title">Others</h5>
                    <div>
                        <ul>
                            <li><span class="fw-bold me-2">Bluetooth :</span>${phone.others ? phone.others.Bluetooth : 'No'}</li>
                            <li><span class="fw-bold me-2">GPS  :</span>${phone.others ? phone.others.GPS : 'No'}</li>
                            <li><span class="fw-bold me-2">NFC :</span>${phone.others ? phone.others.NFC : 'No'}</li>
                            <li><span class="fw-bold me-2">Radio  :</span>${phone.others ? phone.others.Radio : 'No'}</li>
                            <li><span class="fw-bold me-2">USB :</span>${phone.others ? phone.others.USB : 'No'}</li>
                            <li><span class="fw-bold me-2">WLAN  :</span>${phone.others ? phone.others.WLAN : 'No'}</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    `;
    showDetails.appendChild(div1);
    showDetails.appendChild(div2);
}