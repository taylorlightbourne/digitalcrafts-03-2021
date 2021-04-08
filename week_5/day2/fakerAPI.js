const buttonPeople = document.querySelector("#getPeople")
buttonPeople.addEventListener("click", function() {
    peopleData();
});
const buttonUser = document.querySelector("#getUser")
buttonUser.addEventListener("click", function() {
    userData();
});
// Get People
const cardContainer = document.querySelector(".cardContainer");

const peopleData = async () => {
    let response = await fetch("https://fakerapi.it/api/v1/persons?_quantity=30&_gender=male&_birthday_start=2005-01-01");
    let json = await response.json();
    let counter1 = 480;
    let counter2 = 630;

    
    
    for (let people of json.data) {
        const personCard = document.createElement("div");
        personCard.className = "personCard";

        const peopleFullName = document.createElement("h3");
        peopleFullName.className = "peopleFullName";
        peopleFullName.innerHTML = people['firstname'] + " " + people['lastname'];

        const personInfo = document.createElement("ul");

        const img = document.createElement("img");
        img.src = `http://placeimg.com/${counter1}/${counter2}/people`;
        img.height = "250";
        img.width = "250";

        const address = document.createElement("li");
        address.innerHTML = people['address']['city', 'country'];
        const email = document.createElement("li");
        email.innerHTML = people['email'];
        const phone = document.createElement("li");
        phone.innerHTML = people['phone'];
        const website = document.createElement("li");
        website.innerHTML = people['website'];

        personCard.append(img, peopleFullName, address, email, phone, website);
        cardContainer.append(personCard, personInfo);
        counter1 += 480;
        counter2 += 630;
    }
    return json;
}

// Get User
const userContainer = document.querySelector(".userContainer");

const userData = async () => {
    let getUserInfo = await fetch("https://fakerapi.it/api/v1/users?_quantity=30&_gender=male");
    let formatUsers = await getUserInfo.json();
    
    for (let user of formatUsers.data) {
        console.log(user);
        const userCard = document.createElement("div");
        userCard.className = "userCard";

        const userFullName = document.createElement("h3");
        userFullName.classname = "userFullName";
        userFullName.innerHTML = user['firstname'] + " " + user['lastname'];

        const userInfo = document.createElement("ul");

        const uuid = document.createElement("li");
        uuid.classname = "uuid";
        uuid.innerHTML = "User ID: " + user['uuid'];
        const userName = document.createElement("li");
        userName.classname = "userName";
        userName.innerHTML = "User Name: " + user['username'];
        
        userCard.append(userFullName, uuid, userName);
        userContainer.append(userCard, userInfo);
    }
    return formatUsers;
}

