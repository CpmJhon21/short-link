const BITLY_API_KEY = "87bb1223a7e89887f5019e6254306d7cdff69cea";

async function shortenWithBitly(longUrl) {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${BITLY_API_KEY}`,
    },
    body: JSON.stringify({
      long_url: longUrl,
    }),
  });

  if (!response.ok) {
    throw new Error("Bitly API error");
  }

  const data = await response.json();
  return data.link;
}
