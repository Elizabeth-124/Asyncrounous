const fetchBtn = document.querySelector('#fetchBtn');
const quoteText = document.querySelector('#quoteText');
const authorText = document.querySelector('#authorText');
const loadingSpinner = document.querySelector('#loadingSpinner');

const API_URL = "https://dummyjson.com/quotes/random";

const getQuote=() => {
    loadingSpinner.classList.remove('d-none');
    fetchBtn.disabled = true;

    fetch(API_URL).then((response) => {
        console.log("Raw Response Status:", response.status);
    
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then((data) => {
        console.log("Parsed Data Object:", data);
        quoteText.textContent = `${data.quote}`
        authorText.textContent = `- ${data.author}`;
    })
    .catch((error) => {
        console.error("Network problem encountered:", error);
        quoteText.textContent = "Could not load quote. Check your internet connection.";
        authorText.textContent = "- Error";
    })
    .finally(() => {
        loadingSpinner.classList.add('d-none');
        fetchBtn.disabled = false;
    });

}
fetchBtn.addEventListener('click', getQuote);