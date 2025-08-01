// src/scripts/copyCode.js

export function initCodeCopy() {
  document.querySelectorAll("pre > code").forEach((codeBlock) => {
    const button = document.createElement("button");
    button.innerHTML = "Copy";
    button.className = "copy-button";
    button.type = "button";

    Object.assign(button.style, {
      position: "absolute",
      top: "0.5rem",
      right: "0.5rem",
      padding: "0.25rem 0.5rem",
      background: "var(--color-secondary-dark)",
      color: "white",
      fontSize: "0.7rem",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      zIndex: 10
    });

    const pre = codeBlock.closest("pre");
    pre.style.position = "relative";
    pre.appendChild(button);

    button.addEventListener("click", () => {
      try {
        navigator.clipboard.writeText(codeBlock.innerText).then(() => {
          button.innerText = "Copied!";
          setTimeout(() => (button.innerText = "Copy"), 2000);
        });
      } catch (err) {
        console.error("Copy failed", err);
        button.innerText = "Error";
      }
    });
  });
}
