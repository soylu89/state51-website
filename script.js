// Token fiyatını ve değişim yüzdesini API'den al ve güncelle
async function fetchTokenPrice() {
  try {
    const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=CAN51&vs_currencies=usd&include_24hr_change=true');
    const data = await response.json();
    const price = data.CAN51?.usd || "N/A";
    const priceChange = data.CAN51?.usd_24h_change?.toFixed(2) || "N/A";
    document.getElementById('price').innerText = `$${price}`;
    document.getElementById('price-change').innerText = `${priceChange}%`;
  } catch (error) {
    console.error('Error fetching token price:', error);
    document.getElementById('price').innerText = 'N/A';
    document.getElementById('price-change').innerText = 'N/A';
  }
}

fetchTokenPrice();

// Tokenomics grafiği
const ctx = document.getElementById('tokenomics-chart').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Community', 'Staking Rewards', 'Burn Mechanism', 'Others'],
    datasets: [{
      data: [20, 10, 10, 60],
      backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#f4f4f4'],
    }]
  }
});
