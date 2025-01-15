document.addEventListener("DOMContentLoaded", () => {
    const tagsContainer = document.getElementById("tags");
    const algorithmBoxes = document.querySelectorAll(".algorithm-box");

    // pobieranie unikalnych tagow
    const allTags = new Set();
    algorithmBoxes.forEach(box => {
        const tags = box.getAttribute("data-tags").split(",");
        tags.forEach(tag => allTags.add(tag.trim()));
    });

    // generowanie tagow w panelu
    allTags.forEach(tag => {
        const tagElement = document.createElement("div");
        tagElement.textContent = tag;
        tagElement.classList.add("tag");
        tagElement.dataset.tag = tag;
        tagsContainer.appendChild(tagElement);
    });

    // filtrowanie
    const filterAlgorithms = () => {
        const selectedTags = Array.from(document.querySelectorAll(".tag.selected")).map(tag => tag.dataset.tag);

        algorithmBoxes.forEach(box => {
            const boxTags = box.getAttribute("data-tags").split(",");
            if (selectedTags.length === 0 || selectedTags.some(tag => boxTags.includes(tag))) {
                box.style.display = "block";
            } else {
                box.style.display = "none";
            }
        });
    };

    // tagi
    tagsContainer.addEventListener("click", event => {
        if (event.target.classList.contains("tag")) {
            event.target.classList.toggle("selected");
            filterAlgorithms();
        }
    });
});
