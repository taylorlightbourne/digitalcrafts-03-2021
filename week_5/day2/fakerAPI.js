const mainContainer = document.querySelector(".main-container");

// Get People
const peopleData = async () => {
    let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30&_gender=male&_birthday_start=2005-01-01");
    let json = await response.json();
    console.log(json);
    let counter1 = 480;
    let counter2 = 630;

    
    
    for (let people of json.data) {
        console.log(people);
        const peopleContents = document.querySelector(".peopleContents");
        const peopleFirstName = document.createElement("h3");
        peopleFirstName.classname = "firstName";
        peopleFirstName.innerHTML = people['firstname'];
        const peopleLastName = document.createElement("h3");
        peopleLastName.classname = "lastName";
        peopleLastName.innerHTML = people['lastname'];
        const img = document.createElement("img");
        img.src = `http://placeimg.com/${counter1}/${counter2}/people`;
        img.height = "250";
        img.width = "250";
        const address = document.createElement("p");
        address.classname = "address";
        address.innerHTML = people['address']['city', 'country'];
        const email = document.createElement("p");
        email.classname = "email";
        email.innerHTML = people['email'];
        const phone = document.createElement("p");
        phone.classname = "phone";
        phone.innerHTML = people['phone'];
        const website = document.createElement("p");
        website.classname = "website";
        website.innerHTML = people['website'];

        peopleContents.append(img, peopleFirstName, peopleLastName, address, email, phone, website);
        counter1 += 480;
        counter2 += 630;
    }
    return json;
}

const buttonPeople = document.querySelector("#getPeople")
buttonPeople.addEventListener("click", function() {
    peopleData();
});
// Get Places
const userData = async () => {
    let response = await fetch("https://fakerapi.it/api/v1/users?_quantity=30&_gender=male");
    let json = await response.json();
    console.log(json);

    
    
    for (let user of json.data) {
        console.log(user);
        const userContents = document.querySelector(".userContents");
        const userFirstName = document.createElement("h3");
        userFirstName.classname = "firstName";
        userFirstName.innerHTML = user['firstname'];
        const userLastName = document.createElement("h3");
        userLastName.classname = "lastName";
        userLastName.innerHTML = user['lastname'];
        const uuid = document.createElement("p");
        uuid.classname = "uuid";
        uuid.innerHTML = user['uuid'];
        const userName = document.createElement("p");
        userName.classname = "userName";
        userName.innerHTML = user['username'];

        userContents.append(userFirstName, userLastName, uuid, userName);
    }
    return json;
}

const buttonUser = document.querySelector("#getUser")
buttonUser.addEventListener("click", function() {
    userData();
});
