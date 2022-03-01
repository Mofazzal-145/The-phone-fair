document.getElementById('error-message').style.display = 'none';
const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    // clear data
    searchField.value = '';
    document.getElementById('error-message').style.display = 'none';
    if(searchText == '') {
       
    }
    else{
      // load data
    const url = ` https://openapi.programming-hero.com/api/phones?search=${searchText}`;

    fetch(url)
      .then(res => res.json())
      .then(data => displaySearchResult(data.data))
      .catch(error => displayError(error));
    }
    
}
const displayError = error => {
    
 document.getElementById('error-message').style.display = 'block';

}

   const displaySearchResult = data => {
      const searchResult = document.getElementById('search-result');
      searchResult.textContent  = '';
      data.forEach(phone =>{
      const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onclick = "loadPhoneDetail('${phone.slug}')" class="card h-100">
          <img src="${phone.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${phone.phone_name}</h5>
               <p> ${phone.brand} </p>
               <button class="btn btn-primary" >Details</button>
            </div>
       </div>
        `;
        searchResult.appendChild(div); 

    })  
 
}  

 const loadPhoneDetail = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayPhoneDetail(data.data))
}

const displayPhoneDetail = ph => {
    const phoneDetails = document.getElementById('phone-detail');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${ph.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${ph.name}</h5>
               <p> ${ph.brand} </p>
               <button onclick = "loadPhone('${ph.slug}')" class="btn btn-primary" >Details</button>
            </div>
            
    `;
   phoneDetails.appendChild(div);
}
 
const loadPhone = id => {
    const url = `https://openapi.programming-hero.com/api/phone/${id}`;
     fetch(url)
     .then(res => res.json())
     .then(data => displayPhone(data.data))
}

//  details button
const displayPhone = ph => {
    const phoneDetails = document.getElementById('phone-detail');
    phoneDetails.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
        <img src="${ph.image}" class="card-img-top" alt="...">
            <div class="card-body">
            <h5 class="card-title">${ph.name}</h5>
               <p> ${ph.mainFeatures.storage} </p>
               <p> ${ph.mainFeatures.displaySize} </p>
               <p> ${ph.mainFeatures.chipSet} </p>
               <p> ${ph.mainFeatures.sensors} </p>
               <p> ${ph.releaseDate} </p>
 
            </div>
    `;
   phoneDetails.appendChild(div);
}


