  document.addEventListener('DOMContentLoaded', function() {
    createDonutChart();
  });

  function createDonutChart() {
    // Get the canvas element
    var donutCanvas = document.getElementById('donutChart');

    // Data for the donut chart
    var donutData = {
      labels: ['Properties Bought', 'Properties Sold'],
      datasets: [{
        data: [30, 70],
        backgroundColor: ['#007bff', '#9DB6CF'], 
        borderWidth: 0 // No border
      }]
    };

    // Options for the donut chart
    var donutOptions = {
      responsive: true,
      maintainAspectRatio: false,
      cutout: '70%', 
      legend: {
        display: true,
        position: 'bottom'
      }
    };


    var donutChart = new Chart(donutCanvas, {
      type: 'doughnut',
      data: donutData, 
      options: donutOptions 
    });
  }
