const selectedTranslation = document.querySelector("#translations")
const translationContainer = document.querySelector(".translation-container")
const translationNameContainer = document.querySelector(".translation-name")
function handleClick() {
  const selectedTranslationValue =
    selectedTranslation.options[selectedTranslation.selectedIndex].value
  const promise = fetch(
    `https://api.alquran.cloud/v1/ayah/262/en.${selectedTranslationValue}`
  )

  promise
    .then(function (response) {
      const processingResponse = response.text()
      return processingResponse
    })
    .then(function (processedResponse) {
      const translationObject = JSON.parse(processedResponse)
      translationContainer.innerText = translationObject.data.text
      translationNameContainer.innerText = translationObject.data.edition.name
    })
}

function initialise() {
  document
    .querySelector(".ayatul-kursi-button")
    .addEventListener("click", handleClick)
}

initialise()
