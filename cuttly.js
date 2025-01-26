// Cutt.ly API Key
const API_KEY_CUTTLY = "3fa0cda9c620b4a53f577619750ba31f4ac52"; // Ganti dengan API key Anda

export async function shortenWithCuttly(longUrl) {
  const response = await fetch(
    `https://cutt.ly/api/api.php?key=${API_KEY_CUTTLY}&short=${encodeURIComponent(longUrl)}`
  );

  if (!response.ok) {
    throw new Error(`Cuttly API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();

  if (data.url.status !== 7) {
    throw new Error("Cuttly API failed to generate a short URL.");
  }

  return data.url.shortLink;
}
