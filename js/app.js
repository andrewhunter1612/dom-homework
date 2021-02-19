document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    addNewForm(body)
})

const addNewForm = function(element){
    const formSection = document.createElement('section')
    const listSection = document.createElement('section')

    formSection.classList.add('form-section')
    const form = document.createElement('form')
    form.classList.add('input-form')

    const nameInput = document.createElement('input')
    nameInput.placeholder = "Enter beer name"
    nameInput.setAttribute('id', 'name')

    const breweryInput = document.createElement('input')
    breweryInput.placeholder = "Enter brewery name"
    breweryInput.setAttribute('id', 'brewery')

    const dateInput = document.createElement('input')
    dateInput.setAttribute('type', 'date')
    dateInput.setAttribute('id', 'date')
    dateInput.placeholder = "Enter date"

    const strengthInput = document.createElement('input')
    strengthInput.placeholder = "Enter beer strength"
    strengthInput.setAttribute('id', 'strength')

    const likedGroup = document.createElement('group')

    const likedInput = document.createElement('input')
    likedInput.setAttribute('type', 'radio')
    likedInput.setAttribute('id', 'liked')
    likedInput.value = "Liked"

    const unlikedInput = document.createElement('input')
    unlikedInput.setAttribute('type', 'radio')
    unlikedInput.setAttribute('id', 'liked')
    unlikedInput.value = "Didn't like"

    const notesInput = document.createElement('input')
    notesInput.placeholder = "Enter extra notes"
    notesInput.setAttribute('id', 'notes')

    const submitButton = document.createElement('button')
    submitButton.textContent = 'Submit'
    form.addEventListener('submit', submitForm)

    const deleteSection = document.createElement('section')

    const deleteAllButton = document.createElement('button')
    deleteAllButton.addEventListener('click', deleteAllItems)
    deleteAllButton.textContent = 'Delete All Items'

    likedGroup.appendChild(likedInput)
    likedGroup.appendChild(unlikedInput)
    form.appendChild(nameInput)
    form.appendChild(breweryInput)
    form.appendChild(dateInput)
    form.appendChild(strengthInput)
    form.appendChild(likedGroup)
    form.appendChild(notesInput)
    form.appendChild(submitButton)
    deleteSection.appendChild(deleteAllButton)
    
    formSection.appendChild(form)
    element.appendChild(formSection)
    element.appendChild(deleteSection)
    element.appendChild(listSection)
}

const submitForm = function (event){
    const body = document.querySelector('body')
    event.preventDefault()
    console.log("submit form");
    
    const listItem = document.createElement('li')

    const nameField = document.createElement('p')
    nameField.textContent = `Name: ${this.name.value}`

    const breweryField = document.createElement('p')
    breweryField.textContent = `Brewery: ${this.brewery.value}`

    const strengthField = document.createElement('p')
    strengthField.textContent = `Strength: ${this.strength.value}%`

    const dateField = document.createElement('p')
    dateField.textContent = `Date tried: ${this.date.value}`

    const likedField = document.createElement('p')
    likedField.textContent = `Liked: ${this.liked.value}`

    listItem.appendChild(nameField)
    listItem.appendChild(breweryField)
    listItem.appendChild(strengthField)
    listItem.appendChild(dateField)
    listItem.appendChild(likedField)

    if (Boolean(this.notes.value)){
        const notesField = document.createElement('p')
        notesField.textContent = `Notes: ${this.notes.value}`
        listItem.appendChild(notesField)
    }
    
    body.appendChild(listItem)

    document.querySelector(".input-form").reset()
}

const deleteAllItems = function(){
    const elements = document.querySelectorAll('li')
    for (const element of elements){
        element.remove()
    }
}
