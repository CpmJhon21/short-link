import { shortenWithTinyURL } from "./tinyurl.js";
import { shortenWithBitly } from "./bitly.js";
import { shortenWithCuttly } from "./cuttly.js";
import { shortenWithVgd } from "./vgd.js";

// Elemen DOM
const form = document.getElementById("shorten-form");
const longUrlInput = document.getElementById("long-url");
const serviceSelect = document.getElementById("service");
const resultDiv = document.getElementById("result");
const shortUrlDisplay = document.getElementById("short-url");

// Event Listener untuk Form
form.addEventListener("submit", async (event) => {
  event.preventDefault(); // Mencegah refresh halaman

  const longUrl = longUrlInput.value.trim(); // URL panjang dari input
  const selectedService = serviceSelect.value; // Pilihan layanan
  if (!longUrl) {
    alert("Please enter a valid URL.");
    return;
  }

  try {
    let shortUrl;

    // Tentukan layanan berdasarkan pilihan pengguna
    if (selectedService === "tinyurl") {
      shortUrl = await shortenWithTinyURL(longUrl);
    } else if (selectedService === "bitly") {
      shortUrl = await shortenWithBitly(longUrl);
    } else if (selectedService === "cuttly") {
      shortUrl = await shortenWithCuttly(longUrl);
    } else if (selectedService === "vgd") {
      shortUrl = await shortenWithVgd(longUrl);
    }

    // Tampilkan hasil short URL
    shortUrlDisplay.innerHTML = `<a href="${shortUrl}" target="_blank">${shortUrl}</a>`;
    resultDiv.classList.remove("hidden");
  } catch (error) {
    console.error("Error while creating short URL:", error);
    shortUrlDisplay.textContent = "Failed to create short URL. Please try again.";
    resultDiv.classList.remove("hidden");
  }
});
