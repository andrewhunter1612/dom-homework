document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    addNewForm(body)
})

const addNewForm = function(element){
    const form = document.createElement('form')

    const nameInput = document.createElement('input')
    nameInput.placeholder = "Enter beer name"

    const breweryInput = document.createElement('input')
    breweryInput.placeholder = "Enter brewery name"

    const dateInput = document.createElement('input')
    dateInput.setAttribute('type', 'date')
    dateInput.placeholder = "Enter date"

    const strengthInput = document.createElement('input')
    strengthInput.placeholder = "Enter beer strength"

    const likedInput = document.createElement('input')
    likedInput.setAttribute('type', 'radio')
    likedInput.textContent = "radio"

    const notesInput = document.createElement('input')
    notesInput.placeholder = "Enter extra notes"

    
    form.appendChild(nameInput)
    form.appendChild(breweryInput)
    form.appendChild(dateInput)
    form.appendChild(strengthInput)
    form.appendChild(likedInput)
    form.appendChild(notesInput)
    element.appendChild(form)
    }
