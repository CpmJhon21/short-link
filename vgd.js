// v.gd does not require an API key
export async function shortenWithVgd(longUrl) {
  const response = await fetch(
    `https://v.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`
  );

  if (!response.ok) {
    throw new Error(`v.gd API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.shorturl;
}
