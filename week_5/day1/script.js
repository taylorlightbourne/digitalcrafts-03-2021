const getPokemonDataWithXML = () => {
    const request = new XMLHttpRequest();
  
    request.onreadystatechange = function () {
      if (this.readyState === 4) {
        const response = JSON.parse(this.responseText);
        const image = document.createElement("img");
        image.src = response.sprites.front_default;
        const div = document.querySelector(".root");
        div.append(image);
      }
    };
    // // open takes in two arguments, HTTP Method, is the URL or location of what you want to get
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/6");
    request.send();
  };
  
  // async await function GetPokemon (){}
  const getPokemonDataWithAsyncAwait = async () => {
    // this is how you would do it if you use async await
    const data = await fetch("https://pokeapi.co/api/v2/pokemon/6");
    // convert to json
    const formattedJson = await data.json();
  
    let name = document.createElement("h1");
    name.innerHTML = formattedJson.name;
    let img = document.createElement("img");
    let root = document.querySelector(".root");
    img.src = formattedJson.sprites.front_default;
    root.append(img, name);
  };
  
  const getPokemonDataWithPromises = () => {
    // fetching, we need to have the URL
    // we fetch(url).then(convertTheRespone to JSON)
    // after we convert to json, .then(data) we can do whatever with our data
    // now that we have the data, we can access it and use it to create
    // elements on the page
    fetch("https://pokeapi.co/api/v2/pokemon/6")
      // this is how you'd do it if you use fetch with promises
      // you would use .then()
      .then((response) => response.json())
      .then((data) => {
        let name = document.createElement("h1");
        name.innerHTML = data.name;
        let img = document.createElement("img");
        let root = document.querySelector(".root");
        img.src = data.sprites.front_default;
        root.append(img, name);
      });
  };
  // getPokemonDataWithPromises()
  // getPokemonDataWithXML()
  getPokemonDataWithAsyncAwait();