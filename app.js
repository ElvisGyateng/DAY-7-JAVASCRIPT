const greet = () => {
    console.log("Hello");
};

const add = (a, b) => {
    return a + b;
};

const checkEven = (number) => {
    return number % 2 === 0;
};

greet();

console.log(add(5, 3));

console.log(checkEven(10));


const dataPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 2000);
});

dataPromise.then((result) => {
    console.log(result);
});


const failedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Something went wrong");
    }, 2000);
});

failedPromise.catch((error) => {
    console.log(error);
});


const userPromise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Users loaded successfully");
    }, 2000);
});

async function loadData() {
    try {
        const result = await userPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}

loadData();


function slowOperation() {
    setTimeout(() => {
        console.log("Operation finished");
    }, 3000);
}

console.log("Starting operation...");

slowOperation();

console.log("Waiting...");


const loadUsersButton = document.querySelector("#loadUsers");
const statusMessage = document.querySelector("#status");
const usersContainer = document.querySelector("#users");

const users = [
    {
        name: "Elvis",
        email: "elvis@example.com"
    },
    {
        name: "Kofi",
        email: "kofi@example.com"
    },
    {
        name: "Ama",
        email: "ama@example.com"
    },
    {
        name: "Yaw",
        email: "yaw@example.com"
    },
    {
        name: "Akua",
        email: "akua@example.com"
    }
];

function loadUsersData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.5;

            if (success) {
                resolve(users);
            } else {
                reject("Failed to load users");
            }
        }, 2000);
    });
}

loadUsersButton.addEventListener("click", async () => {
    statusMessage.textContent = "Loading...";
    usersContainer.innerHTML = "";

    try {
        const data = await loadUsersData();

        data.forEach((user) => {
            const userElement = document.createElement("p");

            userElement.textContent = `${user.name} - ${user.email}`;

            usersContainer.appendChild(userElement);
        });

        statusMessage.textContent = "";
    } catch (error) {
        statusMessage.textContent = "Sorry, something went wrong.";
    }
});