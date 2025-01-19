// Tokenomics Chart
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
