import { shortenWithTinyURL } from "./tinyurl.js";
import { shortenWithBitly } from "./bitly.js";
import { shortenWithCuttly } from "./cuttly.js";
import { shortenWithVgd } from "./vgd.js";

// DOM Elements
const form = document.getElementById("shorten-form");
const longUrlInput = document.getElementById("long-url");
const serviceSelect = document.getElementById("service");
const resultDiv = document.getElementById("result");
const shortUrlDisplay = document.getElementById("short-url");

// Event Listener
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const longUrl = longUrlInput.value.trim();
  const selectedService = serviceSelect.value;

  if (!longUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  try {
    let shortUrl;

    switch (selectedService) {
      case "tinyurl":
        shortUrl = await shortenWithTinyURL(longUrl);
        break;
      case "bitly":
        shortUrl = await shortenWithBitly(longUrl);
        break;
      case "cuttly":
        shortUrl = await shortenWithCuttly(longUrl);
        break;
      case "vgd":
        shortUrl = await shortenWithVgd(longUrl);
        break;
      default:
        throw new Error("Invalid service selected.");
    }

    shortUrlDisplay.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
    resultDiv.classList.remove("hidden");
  } catch (error) {
    console.error("Error generating short URL:", error);
    shortUrlDisplay.textContent = "Failed to generate short URL. Please try again.";
    resultDiv.classList.remove("hidden");
  }
});
