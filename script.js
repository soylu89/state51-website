// Tokenomics Chart
const ctx = document.getElementById('tokenomics-chart').getContext('2d');
new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ['Community', 'Staking Rewards', 'Burn Mechanism', 'Development', 'Others'],
    datasets: [{
      data: [20, 10, 10, 10, 50],
      backgroundColor: ['#ff0000', '#00ff00', '#0000ff', '#ffa500', '#f4f4f4'],
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
  }
});
