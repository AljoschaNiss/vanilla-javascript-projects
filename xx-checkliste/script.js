const markdownFile = "content.md";

document.getElementById("clearButton").addEventListener("click", () => {
  const checkboxes = document.querySelectorAll(
    "#checklist input[type='checkbox']"
  );
  checkboxes.forEach((checkbox) => {
    if (checkbox.checked) {
      checkbox.closest("li").remove();
    }
  });
});

async function loadMarkdown() {
  try {
    const response = await fetch(markdownFile);
    if (!response.ok)
      throw new Error("Markdown-Datei konnte nicht geladen werden.");

    // Inhalt der Markdown-Datei lesen
    const markdown = await response.text();

    // Markdown in HTML konvertieren
    const htmlContent = marked(markdown);

    // HTML in das "content"-Div einfügen
    document.getElementById("content").innerHTML = htmlContent;
  } catch (error) {
    console.error("Fehler:", error);
    // document.getElementById("content").innerText =
    //   "Fehler beim Laden der Markdown-Datei.";
  }
}

loadMarkdown();
