const modeDivElement = document.getElementById("mode-div");

const STYLES = {
    "light": "",
    "dark": "mode-gelap",
    "sepia": "mode-sepia"
};

class nodeState {
    #state;
    constructor() {
        this.#state = "light";
    }

    get() {
        return this.#state;
    }

    set(newState) {
        if (newState === this.#state || !STYLES.hasOwnProperty(newState)) return;

        const body = document.body;
        const oldClass = STYLES[this.#state];
        const newClass = STYLES[newState];

        if (oldClass) body.classList.remove(oldClass);
        if (newClass) body.classList.add(newClass);

        this.#state = newState;
    }
}

const node = new nodeState();
modeDivElement.addEventListener("click", (event) => {
    const btnElement = event.target.closest("button");
    if (!btnElement) {
        return;
    }

    node.set(btnElement.value);
});

const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const upperCountElement = document.getElementById("hb");
const lowerCountElement = document.getElementById("hk");
const actionButtons = document.querySelectorAll("div > button");

const TRANSFORMATIONS = {
    "huruf-besar": (text) => text.toUpperCase(),
    "huruf-kecil": (text) => text.toLowerCase(),
    "huruf-paragraf": (text) => text.toLowerCase().replace(/(^\s*\w|[\.\!\?]\s*\w)/g, c => c.toUpperCase())
};

function updateCounts(text) {
    const textLength = text.length;
    const upperCaseCount = (text.match(/[A-Z]/g) || []).length;
    const lowerCaseCount = (text.match(/[a-z]/g) || []).length;

    charCountElement.textContent = textLength;
    upperCountElement.textContent = upperCaseCount;
    lowerCountElement.textContent = lowerCaseCount;
}

editorElement.addEventListener("input", (event) => {
    updateCounts(event.target.value);
});

actionButtons.forEach(button => {
    if (TRANSFORMATIONS[button.id]) {
        button.addEventListener("click", () => {
            editorElement.value = TRANSFORMATIONS[button.id](editorElement.value);
            updateCounts(editorElement.value);
        });
    }
});



updateCounts(editorElement.value);