var main = document.getElementById("container");

var user = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496"
        }
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: [
        "Romaguera-Crona",
        "Multi-layered client-server neural-net",
        "harness real-time e-markets"
    ]
}

console.log(user);

var id = document.createElement("button");
id.innerHTML = "id";
id.setAttribute("onclick","ide()");
id.style.padding = "5px 15px";
id.style.marginLeft = "10px";
id.style.fontSize = "20px";
main.appendChild(id);

function ide(){
    var idprompt = prompt("enter data to replace id ");
    user.id = idprompt.innerHTML;
    console.log(user);
}

var namee = document.createElement("button");
namee.innerHTML = "name";
namee.setAttribute("onclick","namee()");
namee.style.padding = "5px 15px";
namee.style.marginLeft = "10px";
namee.style.fontSize = "20px";
main.appendChild(namee);

function namee(){
    var namee = prompt("enter data to replace id ");
    user.id = namee.innerHTML;
    console.log(user);
}

var username = document.createElement("button");
username.innerHTML = "username";
username.style.padding = "5px 15px";
username.style.marginLeft = "10px"
username.style.fontSize = "20px";
main.appendChild(username);

var email = document.createElement("button");
email.innerHTML = "email";
email.style.padding = "5px 15px";
email.style.marginLeft = "10px"
email.style.fontSize = "20px";
main.appendChild(email);

var street = document.createElement("button");
street.innerHTML = "street";
street.style.padding = "5px 15px";
street.style.marginLeft = "10px"
street.style.fontSize = "20px";
main.appendChild(street);

var suite = document.createElement("button");
suite.innerHTML = "suite";
suite.style.padding = "5px 15px";
suite.style.marginLeft = "10px"
suite.style.fontSize = "20px";
main.appendChild(suite);

var city = document.createElement("button");
city.innerHTML = "city";
city.style.padding = "5px 15px";
city.style.marginLeft = "10px"
city.style.fontSize = "20px";
main.appendChild(city);

var zipcode = document.createElement("button");
zipcode.innerHTML = "zipcode";
zipcode.style.padding = "5px 15px";
zipcode.style.marginLeft = "10px"
zipcode.style.fontSize = "20px";
main.appendChild(zipcode);

var lat = document.createElement("button");
lat.innerHTML = "lat";
lat.style.padding = "5px 15px";
lat.style.marginLeft = "10px"
lat.style.fontSize = "20px";
main.appendChild(lat);


var lng = document.createElement("button");
lng.innerHTML = "lng";
lng.style.padding = "5px 15px";
lng.style.marginLeft = "10px"
lng.style.fontSize = "20px";
main.appendChild(lng);

var phone = document.createElement("button");
phone.innerHTML = "phone";
phone.style.padding = "5px 15px";
phone.style.marginLeft = "10px"
phone.style.fontSize = "20px";
main.appendChild(phone);

var website = document.createElement("button");
website.innerHTML = "website";
website.style.padding = "5px 15px";
website.style.marginLeft = "10px"
website.style.fontSize = "20px";
main.appendChild(website);

var company = document.createElement("button");
company.innerHTML = "company";
company.style.padding = "5px 15px";
company.style.marginLeft = "10px"
company.style.fontSize = "20px";
main.appendChild(company);


// /////////////////////
