const startTxt = document.querySelector("#startBox")
const startBtn = document.querySelector("#startBtn")
const container = document.querySelector("#container")

startBtn.addEventListener('click', function() {
    const subcontainer = document.createElement('div')

    const checkbox = document.createElement('input')
    checkbox.type = 'checkbox'

    const updateBox = document.createElement('input')
    updateBox.type = 'text'
    updateBox.value = startTxt.value

    
    const updateBtn = document.createElement('button')
    updateBtn.textContent = "Update"
    updateBtn.addEventListener('click', function() {
        updateBox.value = startTxt.value  
        alert('Your notes are now updated')
    })

    
    const deleteBtn = document.createElement('button')
    deleteBtn.textContent = "Delete"
    deleteBtn.addEventListener('click', function() {
        subcontainer.remove()  
    })

    deleteBtn.addEventListener('click',function() {
       startTxt.value=null
    })

    startBtn.addEventListener('click',(){
        startTxt.value=''
    })

    
    subcontainer.append(checkbox, updateBox, updateBtn, deleteBtn)

    
    container.append(subcontainer)
})
