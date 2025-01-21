const selectedTranslation = document.querySelector("#translations")
const translationContainer = document.querySelector(".translation-container")
const translationNameContainer = document.querySelector(".translation-name-container")

async function handleClick() {
  const selectedTranslationValue = selectedTranslation.options[selectedTranslation.selectedIndex].value
  const promise = await fetch(`https://api.alquran.cloud/v1/ayah/262/en.${selectedTranslationValue}`)
  const processedResponse = await promise.json()

  translationContainer.innerText = processedResponse.data.text
  translationNameContainer.innerText = processedResponse.data.edition.name
}

function initialise() {
  document.querySelector(".ayatul-kursi-button").addEventListener("click", handleClick)
}

initialise()
