const submitButton = document.getElementById('submitButton');

submitButton.addEventListener("click", ()=>{
    // get all input elements
    const campName = document.getElementById('camp-name');
    const campImage = document.getElementById('camp-image-url');
    const campContinent = document.getElementById('camp-continent');

    // Check all inputs are there
    if(!campName.value || !campImage.value || campContinent.value == 0){
        location.reload();
        return;
    }

    // Add to local storage
    const newCamp = {
        name: campName.value,
        imageURL: campImage.value
    };    

    // Get respective continent object
    const oldContinentString = window.localStorage.getItem(campContinent.value);
    const oldContinents = JSON.parse(oldContinentString);

    // Add it to new array
    let newContinents = [];
    if(oldContinents == null){
        newContinents = [newCamp];
    }
    else{
        newContinents = [...oldContinents, newCamp];
    }

    // Set new array to local storage
    window.localStorage.setItem(campContinent.value, JSON.stringify(newContinents));


});