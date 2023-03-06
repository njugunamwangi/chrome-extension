let myLeads = []

const inputBtn = document.querySelector("#input-btn")
const deleteBtn = document.querySelector("#delete-btn")
const inputEl = document.querySelector("#input-el")
const ulEl = document.querySelector("#ul-el")
const tabBtn = document.querySelector("#save-tab")
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
    let listItems = ""
    
    for (let i = 0; i < leads.length; i++) {
        listItems += `
            <li>
                <a href='${leads[i]}' target='_blank'>
                    ${leads[i]}
                </a>
            </li>
        `

        // const li = document.createElement("li")  
        // li.textContent = myLeads[i]
        // ulEl.append(li)
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function () {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
        // console.log(tabs)
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

inputBtn.addEventListener("click", function () {
    if (inputEl.value !== "") {
        myLeads.push(inputEl.value)
        inputEl.value = ""
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    }
}) 


