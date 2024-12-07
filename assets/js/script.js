// NoteApp Project
// *******************


// Dom Elements Selection
let plusBtn = document.querySelector('.plus-btn')
let colorList = document.querySelector('.color-list')
let colorLi = document.querySelectorAll('.color-li')
let notesBoxTitle = document.querySelector('.notesBox-title')
let myNotesBox = document.querySelector('.my-notesBox')
let notesParent = document.querySelector('.notes-parent')
let colorToggle = false



// Function for click on plus button to show or hide color list
plusBtn.addEventListener('click', function () {
  if (!colorToggle) {
    colorList.style.visibility = 'visible'
    colorList.style.top = '20%'
    colorToggle = true
    
    colorLi[0].style.cssText = 'background-color: #545659;'
    colorLi[1].style.cssText = 'background-color: #ff5e62;'
    colorLi[2].style.cssText = 'background-color: #05bd58;'
    colorLi[3].style.cssText = 'background-color: #0575E6;'
    colorLi[4].style.cssText = 'background-color: #674B7C;'
    colorLi[5].style.cssText = 'background-color: #e79b0d;'
    
  } else {
    colorList.style.visibility = 'hidden'
    colorList.style.top = '-20%'
    colorToggle = false
  }
})

// loop for to find out which color is selected
// and create a new note
for (let i = 0; i < colorLi.length; i++) {
  colorLi[i].addEventListener('click', function (event) {
    notesBoxTitle.style.display = 'none'
    let newNotesElem = document.createElement('div')
    newNotesElem.classList.add('note')
    newNotesElem.innerHTML = `
          <textarea disabled class="note-text" spellcheck="false" name="" id=""></textarea>
          <div class="note-details">
            <span class="create-time">2024-9-28 21:04 </span>
            <div class="icons-parent">
              <div class="edit-btn">
                <img class="edit-icon" onclick="editBtn(event)" src="assets/img/edit-icon.svg" alt="">
              </div>
              <div class="delete-btn">
                <img class="delete-icon" onclick="deleteBtn(event)" src="assets/img/delete-icon.svg" alt="">
              </div>
            </div>
          </div>       
        `
    newNotesElem.style.backgroundColor = event.target.style.backgroundColor
    notesParent.append(newNotesElem)
  })
}

// Function for edit event
function editBtn(event) {
  let flag = false
  let textareaElem = event.target.parentElement.parentElement.parentElement.previousElementSibling
  textareaElem.removeAttribute("disabled")
}

// Function for delete event
function deleteBtn(event) {
  let targetNote = event.target.parentElement.parentElement.parentElement.previousElementSibling.parentElement
  targetNote.remove()
}