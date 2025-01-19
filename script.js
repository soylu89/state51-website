// Token fiyatını API'den al ve güncelle
async function fetchTokenPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=CAN51&vs_currencies=usd');
    const data = await response.json();
    const price = data.CAN51?.usd || "N/A";
    document.getElementById('price').innerText = `$${price}`;
  } catch (error) {
    console.error('Error fetching token price:', error);
    document.getElementById('price').innerText = 'N/A';
  }
}

fetchTokenPrice();

// Airdrop formu gönderimi
document.getElementById('airdrop-form').addEventListener('submit', async (e) => {
  e.preventDefault();
  const walletAddress = document.getElementById('wallet').value;
  document.getElementById('form-message').innerText = "Submitting...";
  try {
    console.log('Wallet Address Submitted:', walletAddress);
    document.getElementById('form-message').innerText = "Thank you for joining the airdrop!";
  } catch (error) {
    console.error('Error submitting form:', error);
    document.getElementById('form-message').innerText = "Submission failed. Please try again.";
  }
});
