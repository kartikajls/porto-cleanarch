export function Stack(stacks) {
    return `
        <div class="stack-container">
            ${stacks.map(stack => `
                <button class="stack-button">
                    ${stack}
                </button>
            `).join("")}
        </div>
    `;
}