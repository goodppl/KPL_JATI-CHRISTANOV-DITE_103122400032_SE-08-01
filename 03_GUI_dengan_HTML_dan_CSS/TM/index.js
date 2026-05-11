const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");

const btnBesarkan = document.getElementById("huruf-besar");
const btnKecilkan = document.getElementById("huruf-kecil");

// Function to update character counts
function updateCounts() {
    const text = editorElement.value;
    
    // Total characters
    charCountElement.textContent = text.length;
    
    // Uppercase letters count
    const upperMatch = text.match(/[A-Z]/g);
    upperCountElement.textContent = upperMatch ? upperMatch.length : 0;
    
    // Lowercase letters count
    const lowerMatch = text.match(/[a-z]/g);
    lowerCountElement.textContent = lowerMatch ? lowerMatch.length : 0;
}

// Event listener for real-time counting
editorElement.addEventListener("input", updateCounts);

// Event listener for "Besarkan" (Uppercase) button
btnBesarkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCounts();
});

// Event listener for "Kecilkan" (Lowercase) button
btnKecilkan.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCounts();
});
