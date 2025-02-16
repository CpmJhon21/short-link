async function shortenWithVgd(longUrl) {
  const response = await fetch(
    `https://v.gd/create.php?format=json&url=${encodeURIComponent(longUrl)}`
  );

  const data = await response.json();
  if (!data.shorturl) {
    throw new Error("v.gd API error");
  }

  return data.shorturl;
}
