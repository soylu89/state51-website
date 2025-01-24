
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Tokenomics Chart
  const ctx = document.getElementById('tokenomicsChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Circulating Supply', 'Reserve', 'Liquidity Pool', 'Staking Rewards'],
      datasets: [{
        data: [20, 20, 20, 10],
        backgroundColor: [
          '#FF0000',
          '#FFD700',
          '#0000FF',
          '#00FF00'
        ],
        borderWidth: 0
      }]
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'bottom',
        },
        title: {
          display: true,
          text: 'Token Distribution',
          font: {
            size: 16
          }
        }
      }
    }
  });
  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

  // Animate elements on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('.token-card, .feature').forEach((el) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'all 0.5s ease-out';
    observer.observe(el);
  });
});
