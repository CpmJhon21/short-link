const TINYURL_API_KEY = "VfUKuzir3aQHIm0684mhg5Y8u1TtCyjJZ47v4OwK8ZxkyQ1tMRzXUqOMiCm1";

async function shortenWithTinyURL(longUrl) {
  const response = await fetch("https://api.tinyurl.com/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${TINYURL_API_KEY}`,
    },
    body: JSON.stringify({
      url: longUrl,
      domain: "tinyurl.com",
    }),
  });

  if (!response.ok) {
    throw new Error("TinyURL API error");
  }

  const data = await response.json();
  return data.data.tiny_url;
}
