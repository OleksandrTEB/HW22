const wis = document.querySelector(".wis")
wis.addEventListener("click", () => {
    kosmonawtsNasa()
})

const appendHtml = document.querySelector(".person-cards")

const baseUrl = "https://api.spacexdata.com/v4/crew"

async function kosmonawtsNasa() {
    const response = await fetch(baseUrl, {
        method: "GET",
    })
    const data = await response.json()

    if (response.ok) {
        const updateData = data.filter( kosmonawsts => kosmonawsts.agency === "NASA" )

        let html = ''
        updateData.forEach((kosmonawt, index) => {
            html += `
                  <div class="person-card">
                      <img src="${kosmonawt.image}">
                      <div class="name">${kosmonawt.name}</div>
                      <div class="agency">${kosmonawt.agency}</div>
                      <div class="detalis"><a href="${kosmonawt.wikipedia}"><u>Детальніше</u></a></div>
                  </div>
            `
            appendHtml.innerHTML = html
        })
    }
}