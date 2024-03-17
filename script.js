const generateForm = document.querySelector(".generate-form");

const handleFormSubmission = (e) => {
    e.preventDefault();

    // Get user input quantity values from the form
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;

    console.log(userPrompt, userImgQuantity);
}

generateForm.addEventListener("submit", handleFormSubmission);