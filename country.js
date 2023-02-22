class Country {
    constructor(name, lang, greeting, colors) {
        this.name = name;
        this.lang = lang;
        this.greeting = greeting;
        this.colors = colors;
    }
}

let usa = new Country("USA", "Murican", "Why Hello there world! Have some McDonalds", ["red", "white", "blue"]);
let mexico = new Country("Mexico", "Spanish", "Hola mundo!", ["red", "white", "green"]);
let algeria = new Country("Algeria", "Arabic and Berber", "Sup", ["blue", "yellow", "red"])


function SwitchCountry() {
    selectElement = document.querySelector("#CountryList"); //selects the element country list
    let input = selectElement.value; //what ever the user picks from that list, it's value becomes variable input
    let country;//class of country declared with the above properties

    if (input === "USA") { //if users input = USA
        //set country to usa 
        country = usa; //Set country to the usa instance of the class
        DisplayColors(country) //run function at usa instance
    }
    else if (input === "Mexico") {
        country = mexico;
       DisplayColors(country)
    }
    else if (input === "Algeria") {
        country = algeria;
        DisplayColors(country)
    }

}

DisplayColors = (country)=> {//Run displayColors at country class input by user
    //WHERE: (or at)
    document.querySelector("#CountryName").innerText = country.name;//country name. Once selected change the country name inner text in that div to match usa country class name
    document.querySelector("#OfficialLanguage").innerText = country.lang;//country lang. Once selected change the country lang inner text in that div to match usa country class lang
    document.querySelector("#HelloWorld").innerText = country.greeting;//country greeting. Once selected change the country greeting inner text in that div to match usa country class greeting

    document.querySelector("#Color1").style.backgroundColor = country.colors[0]; //color1 Once selected it goes to the style sheet containing the color one class and changes the color to that to the value in the associated space in the array
    document.querySelector("#Color2").style.backgroundColor = country.colors[1];//color2 Once selected it goes to the style sheet containing the color one class and changes the color to that to the value in the associated space in the array
    document.querySelector("#Color3").style.backgroundColor = country.colors[2];//color3 Once selected it goes to the style sheet containing the color one class and changes the color to that to the value in the associated space in the array

}


   
