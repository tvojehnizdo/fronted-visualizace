
async function generateImage() {
  const prompt = document.getElementById("prompt").value.trim();
  const status = document.getElementById("status");
  const img = document.getElementById("result");
  img.src = "";
  status.textContent = "Načítání obrázku...";

  try {
    const response = await fetch("https://api-production-0c11.up.railway.app/generate-image", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ prompt })
    });

    const data = await response.json();
    if (data.imageUrl) {
      img.src = data.imageUrl;
      status.textContent = "";
    } else {
      status.textContent = "Nelze načíst obrázek.";
    }
  } catch (error) {
    console.error("Chyba při generování:", error);
    status.textContent = "Chyba při komunikaci se serverem.";
  }
}
