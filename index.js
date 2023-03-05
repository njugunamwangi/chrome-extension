let myLeads = []

const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    renderLeads()
})

inputBtn.addEventListener("click", function () {
    if (inputEl.value !== "") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        renderLeads()
    }
}) 

function renderLeads() {
    let listItems = ""
    
    for (let i = 0; i < myLeads.length; i++) {
        listItems += `
            <li>
                <a href='//${myLeads[i]}' target='_blank'>
                    ${myLeads[i]}
                </a>
            </li>
        `

        // const li = document.createElement("li")  
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}
