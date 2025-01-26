const API_KEY_TINYURL = "VfUKuzir3aQHIm0684mhg5Y8u1TtCyjJZ47v4OwK8ZxkyQ1tMRzXUqOMiCm1";

export async function shortenWithTinyURL(longUrl) {
  const response = await fetch("https://api.tinyurl.com/create", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY_TINYURL}`,
    },
    body: JSON.stringify({ url: longUrl }),
  });

  if (!response.ok) {
    throw new Error("TinyURL API Error");
  }

  const data = await response.json();
  return data.data.tiny_url;
}
