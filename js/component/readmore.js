export function ReadMore() {

    const blocks = document.querySelectorAll(".content-readmore");

    blocks.forEach((block) => {

        const button = block.querySelector(".readmore-btn");
        const content = block.querySelector(".readmore-content");

        button.addEventListener("click", () => {
            content.classList.toggle("show");

            button.textContent = content.classList.contains("show")
                ? "Read Less <<"
                : "Read More >>";
        });
    });
}