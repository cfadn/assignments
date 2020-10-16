const addForm = document.addItem
const stuff = document.addItem.title
const list = document.getElementById("list")
const deleteBut = document.querySelectorAll(".del")


addForm.addEventListener("submit", (event) => {
    event.preventDefault()
    var listItem = document.createElement("li")
    var listDiv = document.createElement("div")
    var listEdit = document.createElement("button")
    var listDelete = document.createElement("button")


    listDiv.textContent = stuff.value
    listEdit.textContent = "edit"
    listDelete.className = "del"
    listDelete.textContent = "x"
    listDelete.addEventListener("click", deleteParent)

    list.append(listItem)
    listItem.appendChild(listDiv)
    listItem.appendChild(listEdit)
    listItem.appendChild(listDelete)



    stuff.value = ""
    
})

for (i = 0; i < deleteBut.length; i++){
deleteBut[i].addEventListener("click", deleteParent)

}

function deleteParent(){
    let thisBut = event.currentTarget
    thisBut.parentNode.remove();
}

//deleteBut[0].addEventListener("click", deleteParent)
