
document.getElementById('form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const prompt = document.getElementById('prompt').value;
  const loading = document.getElementById('loading');
  const output = document.getElementById('output');
  loading.style.display = 'block';
  output.innerHTML = '';
  try {
    const res = await fetch('https://api-production-0c11.up.railway.app/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt })
    });
    const data = await res.json();
    if (data.imageUrl) {
      output.innerHTML = `<img src="\${data.imageUrl}" alt="Vizualizace domu">`;
    } else {
      output.innerHTML = '❌ Nelze načíst obrázek.';
    }
  } catch (err) {
    output.innerHTML = '❌ Došlo k chybě při komunikaci s API.';
  }
  loading.style.display = 'none';
});
