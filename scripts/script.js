const loadPhone = async (searchText, isShowAll)=>{
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    const phones = data.data;
    displayPhones(phones, isShowAll)
}

const displayPhones = (phones, isShowAll) =>{
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.innerText = "";

    const showAllBtn = document.getElementById('show-all');
    if(phones.length > 6 && !isShowAll){
        showAllBtn.classList.remove('hidden');
    }else{
        showAllBtn.classList.add('hidden');
    }
    // console.log("is show All", isShowAll)
    // display online first 6 phones
    if(!isShowAll){
        phones = phones.slice(0, 6);
    }
    
    
    phones.forEach(phone =>{
        // console.log(phone)
       
        const div = document.createElement('div');
        div.classList = `card  bg-base-100 shadow-xl `;
        div.innerHTML =  `

        <figure class="px-10 pt-10">
                      <img src="${phone.image}" alt="Shoes" class="rounded-xl" />
                    </figure>
                    <div class="card-body items-center text-center">
                      <h2 class="card-title">${phone.phone_name}</h2>
                      <p>There are many variations of passages of available, but the majority have suffered</p>
                      <div class="card-actions">
                      <div class="flex flex-col justify-center items-center gap-3 ">  <p class="font-bold">$999</p>
                      <button onclick="handleShowDetails()" class="btn btn-primary">Show Details</button>
                      </div>
                    
                       
                      </div>
                    </div>
        `
    
        phoneContainer.appendChild(div)
    });
    loadingSpinner(false)
}


const handleSearch = (isShowAll)=>{
    loadingSpinner(true);
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
   
        loadPhone(searchText, isShowAll);
 
   
    
}

const loadingSpinner = (isLoading) =>{
    const spinner = document.getElementById('spinner');
   
    if(isLoading){
        spinner.classList.remove('hidden');
    }
    else{
        spinner.classList.add('hidden');
    }
}


const handleShowAll = (isShowAll) =>{
    handleSearch(true);
}

const handleShowDetails = async (id)=>{
    console.log("clicked")
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/apple_iphone_13_pro_max-11089`);
    const data = await res.json();
    console.log(data);
    showPhoneDetails(data.data)
}

const showPhoneDetails = (phone) =>{
    const phoneName = document.getElementById('phone-name');
    phoneName.innerText = phone.name;
    showDetailsModal.showModal();
}

// loadPhone();

