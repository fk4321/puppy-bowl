//store puppy info in a variable 
let puppyInfo = []

//get html elements 
const container = document.querySelector(".container")
const puppyDivs = document.querySelector(".puppyDivs")

//render function 
function render() {
    const allPuppies = puppyInfo.map(function(pup) {
        return `<div class="puppyDivs">
            <h3><a class="nameDiv" href=#${pup.name}>${pup.name}</a></h3>
            <p>${pup.breed}</p>
        </div>`
    })
    container.innerHTML = allPuppies.join("")
    const nameDiv = document.querySelector(".nameDiv")
    console.log(nameDiv)
    const clickDiv = nameDiv.addEventListener("click", function(pup) {
        // return `
        // <div>
        //     <h3><a class="nameDiv" href=#>${pup.name}</a></h3>
        //     <p>${pup.breed}</p>
        //     <div>${pup.imageUrl}
        //     </div>
        // </div>
        // `
        console.log("Puuppy")
    })

    console.log(clickDiv)

}

async function puppyBowl() {
    const puppyResponse = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2310/players")
    const puppyData = await puppyResponse.json()
    puppyInfo = puppyData.data.players
    console.log(puppyInfo)
    render()
}
puppyBowl()