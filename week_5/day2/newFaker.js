const getPeopleData = async () => {
    let peopleData = await fetch(
        "https://fakerapi.it/api/v1/persons?_quantity=30&_gender=male&_birthday_start=2005-01-01"
    );
    let json = await peopleData.json();
    let counter1 = 480;
    let counter2 = 630;
    for (let jsonValue of json.data) {
        
        if (jsonValue.firstname || jsonValue.lastName) {
            const cardContainer = document.querySelector(".cardContainer");
            const img = document.createElement("img");
            img.src = `http://placeimg.com/${counter1}/${counter2}/people`;
            img.height = "250";
            img.width = "250";
            const personCard = document.createElement("div");
            personCard.className = "personCard";
            const peopleFullName = document.createElement("h3");
            peopleFullName.className = "peopleFullName";
            peopleFullName.innerHTML = jsonValue.firstname + " " + jsonValue.lastname;

            const personInfo = document.createElement("ul");
            const address = document.createElement("li");
            address.innerHTML = jsonValue.address;
            const email = document.createElement("li");
            email.innerHTML = jsonValue.email;
            const phone = document.createElement("li");
            phone.innerHTML = jsonValue.phone;
            const website = document.createElement("li");
            website.innerHTML = jsonValue.website;

            personCard.append(img, peopleFullName, address, email, phone, website);
            cardContainer.append(personCard, personInfo);

        }
        if (jsonValue.vat) {
            const userCard = document.createElement("div");
            userCard.className = "userCard";

            const userFullName = document.createElement("h3");
            userFullName.classname = "userFullName";
            userFullName.innerHTML = jsonValue.firstname + " " + jsonValue.lastname;

            const userInfo = document.createElement("ul");

            const uuid = document.createElement("li");
            uuid.classname = "uuid";
            uuid.innerHTML = "User ID: " + jsonValue.uuid;
            const userName = document.createElement("li");
            userName.classname = "userName";
            userName.innerHTML = "User Name: " + jsonValue.username;
            
            userCard.append(userFullName, uuid, userName);
            userContainer.append(userCard, userInfo);
        }
        counter1 += 480;
        counter2 += 630;
    }
};
const buttonPeople = document.querySelector("#getPeople")
buttonPeople.addEventListener("click", () => {
    getPeopleData();
});
const buttonUser = document.querySelector("#getUser")
buttonUser.addEventListener("click", () => {
    getPeopleData();
});