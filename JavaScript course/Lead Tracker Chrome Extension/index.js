let myLeads = []

const inputEl = document.getElementById("input-el")
const ulEL = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")
const tabBtn = document.getElementById("tab-btn")
const deleteBtn = document.getElementById("delete-btn")

const leadsFromStorage = JSON.parse(localStorage.getItem("myLeads"))
if (leadsFromStorage)
    {
        myLeads = leadsFromStorage
        render(myLeads)
    }


function render(Lead)
{
    let listItems = ""
    for (let i = 0; i < Lead.length; i++)
    {
        // listItems += "<li><a href='" + myLeads[i] + "' target='_blank'>" + myLeads[i] + "</a></li>" 
        listItems +=`
        <li>
            <a href='${Lead[i]}' target='_blank'>${Lead[i]}</a>
        </li>`
    }

    ulEL.innerHTML = listItems
}
    
inputBtn.addEventListener("click", function()
{
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
})

tabBtn.addEventListener("click", function (){

    chrome.tabs.query({active:true, currentWindow:true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})


deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

