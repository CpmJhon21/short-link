const form = document.getElementById("shorten-form");
const longUrlInput = document.getElementById("long-url");
const serviceSelect = document.getElementById("service");
const resultDiv = document.getElementById("result");
const shortUrlDisplay = document.getElementById("short-url");

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const longUrl = longUrlInput.value.trim();
  const service = serviceSelect.value;

  if (!longUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  resultDiv.classList.add("hidden");
  shortUrlDisplay.textContent = "";

  try {
    let shortUrl;
    if (service === "tinyurl") {
      shortUrl = await shortenWithTinyURL(longUrl);
    } else if (service === "bitly") {
                                        shortUrl = await shortenWithBitly(longUrl);
    } else if (service === "vgd") {
      shortUrl = await shortenWithVgd(longUrl);
    }

    if (shortUrl) {
      shortUrlDisplay.textContent = shortUrl;
      shortUrlDisplay.href = shortUrl;
      resultDiv.classList.remove("hidden");
    } else {
      throw new Error("Failed to generate short URL.");
    }
  } catch (error) {
    alert("Error: " + error.message);
    console.error(error);
  }
});
