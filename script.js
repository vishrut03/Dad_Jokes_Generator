const btnEl = document.getElementById("btn")
const jokeEl = document.getElementById("joke")

const apiKey = "lccMi23oFeLe9gtE+U5YnA==rOrrvXBZe5PKqSXA";

const options = {
    method: "GET",
    headers:{
        "X-Api-Key": apiKey
    }
}

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
async function getJoke()
{
    try {
        jokeEl.innerText = "Updating..."
        btnEl.disabled = true;
        btnEl.innerText = "Loading..."

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke"
        jokeEl.innerText = data[0].joke;
    } catch (error) {
        jokeEl.innerText = "An Error occurred, Please Try Again Later";
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me A Joke"
    }
}

btnEl.addEventListener("click", getJoke)