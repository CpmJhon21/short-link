const API_KEY_CUTTLY = "3fa0cda9c620b4a53f577619750ba31f4ac52";

export async function shortenWithCuttly(longUrl) {
  const response = await fetch(`https://cutt.ly/api/api.php?key=${API_KEY_CUTTLY}&short=${longUrl}`);

  if (!response.ok) {
    throw new Error("Cutt.ly API Error");
  }

  const data = await response.json();
  if (data.url.status !== 7) {
    throw new Error("Cutt.ly Error: " + data.url.title);
  }

  return data.url.shortLink;
}
