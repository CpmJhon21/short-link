// Bitly API Key
const API_KEY_BITLY = "87bb1223a7e89887f5019e6254306d7cdff69cea"; // Ganti dengan API key Anda

export async function shortenWithBitly(longUrl) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${API_KEY_BITLY}`,
    },
    body: JSON.stringify({ "long_url": "https://dev.bitly.com", "domain": "bit.ly", "group_guid": "Ba1bc23dE4F" })
});
  });

  if (!response.ok) {
    throw new Error(`Bitly API Error: ${response.status} ${response.statusText}`);
  }

  const data = await response.json();
  return data.link;
}
