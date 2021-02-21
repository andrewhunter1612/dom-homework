document.addEventListener('DOMContentLoaded', () => {
    const body = document.querySelector('body')
    // addNewForm(body)

    body.appendChild(newForm("input", "new-class", "Enter beer type"))
})

const thingsToBeAddedToForm = ("input", "new-class")


const newForm = function(newElementType, className="", placeholder="", attributeType="", attributeName=""){
    console.log("new form", typeof newElementType);
    const newElement = document.createElement(newElementType)
    if (Boolean(placeholder)){
        newElement.placeholder = placeholder
    }

    if (Boolean(attributeType)){
        newElement.setAttribute(attributeType, attributeName)
    }

    newElement.classList.add(className)

    return newElement
}

// const addNewForm = function(element){
//     const formSection = document.createElement('section')
//     formSection.classList.add('form-section')
//     const listSection = document.createElement('section')
//     listSection.classList.add('list-section')

//     formSection.classList.add('form-section')
//     const form = document.createElement('form')
//     form.classList.add('input-form')

//     const nameInput = document.createElement('input')
//     nameInput.placeholder = "Enter beer name"
//     nameInput.setAttribute('id', 'name')

//     const breweryInput = document.createElement('input')
//     breweryInput.placeholder = "Enter brewery name"
//     breweryInput.setAttribute('id', 'brewery')

//     const dateInput = document.createElement('input')
//     dateInput.setAttribute('type', 'date')
//     dateInput.setAttribute('id', 'date')
//     dateInput.placeholder = "Enter date"

//     const strengthInput = document.createElement('input')
//     strengthInput.placeholder = "Enter beer strength"
//     strengthInput.setAttribute('id', 'strength')

//     const likedGroup = document.createElement('group')
//     const bothLiked = document.createElement('group')
//     const bothUnliked = document.createElement('group')

//     const likedLabel = document.createElement('label')
//     likedLabel.textContent = "Like: "

//     const likedInput = document.createElement('input')
//     likedInput.setAttribute('type', 'radio')
//     likedInput.setAttribute('id', 'liked')
//     likedInput.setAttribute('name', 'liked')
//     likedInput.value = "Liked"


//     const unLikedLabel = document.createElement('label')
//     unLikedLabel.textContent = "Don't like: "

//     const unlikedInput = document.createElement('input')
//     unlikedInput.setAttribute('type', 'radio')
//     unlikedInput.setAttribute('id', 'liked')
//     unlikedInput.setAttribute('name', 'liked')
//     unlikedInput.value = "Didn't like"

    
//     const notesInput = document.createElement('input')
//     notesInput.placeholder = "Enter extra notes"
//     notesInput.setAttribute('id', 'notes')

//     const submitButton = document.createElement('button')
//     submitButton.textContent = 'Submit'
//     form.addEventListener('submit', submitForm)

//     const deleteSection = document.createElement('section')

//     const deleteAllButton = document.createElement('button')
//     deleteAllButton.addEventListener('click', deleteAllItems)
//     deleteAllButton.textContent = 'Delete All Items'

//     bothLiked.appendChild(likedLabel)
//     bothLiked.appendChild(likedInput)
//     bothUnliked.appendChild(unLikedLabel)
//     bothUnliked.appendChild(unlikedInput)
//     likedGroup.appendChild(bothLiked)
//     likedGroup.appendChild(bothUnliked)
//     form.appendChild(nameInput)
//     form.appendChild(breweryInput)
//     form.appendChild(dateInput)
//     form.appendChild(strengthInput)
//     form.appendChild(likedGroup)
//     form.appendChild(notesInput)
//     form.appendChild(submitButton)
//     deleteSection.appendChild(deleteAllButton)
    
//     formSection.appendChild(form)
//     element.appendChild(formSection)
//     element.appendChild(deleteSection)
//     element.appendChild(listSection)
// }

// const submitForm = function (event){
//     const body = document.querySelector('.list-section')
//     event.preventDefault()
    
//     const listItem = document.createElement('li')
//     listItem.classList.add("list-item")

//     const nameField = document.createElement('p')
//     nameField.textContent = `Name: ${this.name.value}`

//     const breweryField = document.createElement('p')
//     breweryField.textContent = `Brewery: ${this.brewery.value}`

//     const strengthField = document.createElement('p')
//     strengthField.textContent = `Strength: ${this.strength.value}%`

//     const dateField = document.createElement('p')
//     dateField.textContent = `Date tried: ${this.date.value}`

//     const likedField = document.createElement('p')
//     likedField.textContent = `Liked: ${this.liked.value}`

//     listItem.appendChild(nameField)
//     listItem.appendChild(breweryField)
//     listItem.appendChild(strengthField)
//     listItem.appendChild(dateField)
//     listItem.appendChild(likedField)

//     if (Boolean(this.notes.value)){
//         const notesField = document.createElement('p')
//         notesField.textContent = `Notes: ${this.notes.value}`
//         listItem.appendChild(notesField)
//     }
    
//     body.appendChild(listItem)

//     document.querySelector(".input-form").reset()
// }

// const deleteAllItems = function(){
//     const elements = document.querySelectorAll('li')
//     for (const element of elements){
//         element.remove()
//     }
// }
