let user_input = document.getElementById("input");

user_input.addEventListener("keyup", (event) => {
    if(event.key === "Enter") {
        submit()
    }
})

function user() {
    let parentElement = document.createElement("div");
    parentElement.className = "user";

    let userImg = document.createElement("img");
    userImg.src = "user.png";

    let newElement = document.createElement("span");
    newElement.className = "user-res";

    parentElement.appendChild(newElement);
    let response_area = document.querySelector(".response-area");
    response_area.appendChild(parentElement);
    parentElement.appendChild(userImg);

    newElement.textContent = user_input.value;
    user_input.value = "";
}

function jarvisCode(content) {
    let parentElement = document.createElement("div");
    parentElement.className = "jarvis";

    let userImg = document.createElement("img");
    userImg.src = "jarvis.png";

    let newElement = document.createElement("span");
    newElement.className = "jarvis-res";

    parentElement.appendChild(userImg);
    parentElement.appendChild(newElement);
    let response_area = document.querySelector(".response-area");
    response_area.appendChild(parentElement);

    newElement.textContent = content;
}

function autoScroll() {
    let response_area = document.querySelector(".response-area");
    response_area.scrollTop = response_area.scrollHeight;
}


function submit() {
    if(user_input.value != ""){

    let lower = user_input.value.toLowerCase();
    const processedInput = lower.replace(/[^\w\s]/gi, '');
    user()

    const splitedInput = processedInput.split(" ")

        if(splitedInput.includes("hi")) {
            jarvisCode("Hello")
        } 
        else if(processedInput.includes("how" && "are" && "you")) {
            jarvisCode("Fine What about you?")
        }
        else if(splitedInput.includes("fine")) {
            jarvisCode("That great!")
        }
        else if(splitedInput.includes("date") || splitedInput.includes("day") || splitedInput.includes("month") || splitedInput.includes("year")) {
            let date = new Date().toDateString();
            jarvisCode(date);
        }
        else if(splitedInput.includes("time")) {
            let time = new Date().toLocaleTimeString();
            jarvisCode(time);
        }
        else if(splitedInput == "clear") {
            document.querySelector(".response-area").innerHTML = "";
        }
        else if(splitedInput.includes("your" && "name")) {
            jarvisCode("JARVIS");
        }
        else if(splitedInput.includes("you") || splitedInput.includes("your" && "name") || splitedInput.includes("who" && "is" && "this") || splitedInput.includes("who" && "are" && "you")) {
            jarvisCode("JARVIS")
        }
        else if(splitedInput.includes("your" && "developer") || splitedInput.includes("who" && "developed" && "you")) {
            jarvisCode("Shanmukha");
        }
        else {
            jarvisCode("Sorry it's not in my data list!");
        }
        }
    else {
        return true;
    }
    autoScroll();
}