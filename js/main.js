

const loadMobilePhones = () => {
    fetch('https://openapi.programming-hero.com/api/phones')
        .then(res => res.json())
        .then(data => showMobilePhones(data.data))
}
loadMobilePhones()

const showMobilePhones = (phones) => {
    phones.forEach(phone => {
        console.log(phone.phone_name)
    })
}