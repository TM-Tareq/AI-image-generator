const generateForm = document.querySelector(".generate-form");
const imagGallery = document.querySelector(".image-gallery");
const generateAiImages = async (userPrompt, userImgQuantity) => {
    try {
        const response = await fetch("https://api.openai.com/v1/images/generations",
        {
            method : "POST",
            headers : {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${OPENAI_API_KEY}`
            },
        });
    } catch (error) {
        console.log(error);
    }
}

const handleFormSubmission = (e) => {
    e.preventDefault();

    // Get user input quantity values from the form
    const userPrompt = e.srcElement[0].value;
    const userImgQuantity = e.srcElement[1].value;


    // Creating HTML markup for image cards forms state
    const imgCardMarkup = Array.form({length: userImgQuantity}, () =>
    `<div class="img-card loading">
    <img src="images/loader.svg" alt="Image">
    <a href="" class="download-btn">
        <img src="images/download.svg" alt="Download Icon">
    </a>
</div>`).join("");

    imagGallery.innerHTML = imgCardMarkup;
    generateAiImages(userPrompt, userImgQuantity);
}

generateForm.addEventListener("submit", handleFormSubmission);