const salesData = [150, 200, 180, 220, 300, 250, 180];

const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// Create and render the sale by day chart
function createSalesPerDayChart() {
    const ctx = document.getElementById("salesPerDayChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: daysOfWeek,
            datasets: [
                {
                    label: "Sales per Day",
                    data: salesData,
                    backgroundColor: "rgba(75, 192, 192, 0.6)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 50, 
                    },
                },
            },
            plugins: {
                legend: {
                    display: false, 
                },
            },
        },
    });
}

// Call the function
window.addEventListener("load", createSalesPerDayChart);



/*number of listings*/
const lineChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            label: "Listings",
            data: [10000, 15000, 12000, 18000, 20000, 17000, 22000, 25000, 28000, 30000, 27000, 32000], 
            borderColor: "#007bff",
            backgroundColor: "rgba(0, 123, 255, 0.2)",
            pointBackgroundColor: "#007bff",
            pointBorderColor: "#fff",
            pointRadius: 5,
            pointHoverRadius: 7,
            pointHitRadius: 10,
            pointHoverBackgroundColor: "#007bff",
            pointHoverBorderColor: "#fff",
            borderWidth: 2,
            lineTension: 0.3,
            fill: true,
        },
    ],
};


function createLineChart() {
    const ctx = document.getElementById("lineChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: lineChartData,
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                    grid: {
                        display: false,
                    },
                },
                y: {
                    display: true,
                    grid: {
                        color: "#ddd",
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
        },
    });
}


window.addEventListener("load", createLineChart);


/*credit card sales*/
const paymentData = [30, 25, 20, 15, 10]; 

const paymentLabels = ["AMEX", "VISA", "Mastercard", "Discover", "Other"];
const paymentColors = ["#007bff", "#800080", "#ffa500", "#ff4500", "#008000"];

// Create and render the donut chart
function createPaymentMethodsChart() {
    const ctx = document.getElementById("paymentMethodsChart").getContext("2d");
    new Chart(ctx, {
        type: "doughnut",
        data: {
            labels: paymentLabels,
            datasets: [
                {
                    data: paymentData,
                    backgroundColor: paymentColors,
                    borderWidth: 1,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: "right",
                },
            },
        },
    });
}


window.addEventListener("load", createPaymentMethodsChart);


/*Sellers and Buyers*/
const sellersData = [10, 20, 15, 30, 25, 40]; 
const buyersData = [5, 10, 8, 12, 15, 20]; 

const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];

// Create and render the line chart for sellers and buyers
function createSellersAndBuyersChart() {
    const ctx = document.getElementById("sellersAndBuyersChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: months,
            datasets: [
                {
                    label: "Sellers",
                    data: sellersData,
                    borderColor: "#007bff",
                    backgroundColor: "rgba(0, 123, 255, 0.2)",
                    borderWidth: 1,
                    fill: true,
                },
                {
                    label: "Buyers",
                    data: buyersData,
                    borderColor: "#800080",
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    borderWidth: 1,
                    fill: true,
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    display: true,
                },
                y: {
                    display: true,
                    beginAtZero: true,
                    ticks: {
                        stepSize: 10, 
                    },
                },
            },
            plugins: {
                legend: {
                    display: true,
                    position: "top",
                },
            },
        },
    });
}


window.addEventListener("load", createSellersAndBuyersChart);


/*Top Buyers*/
const topBuyers = [
    { name: "John Doe", totalAmount: 2500 },
    { name: "Jane Smith", totalAmount: 2000 },
    { name: "Michael Johnson", totalAmount: 1800 },
    { name: "Emily Brown", totalAmount: 1500 },
    { name: "Robert Lee", totalAmount: 1200 },
  ];
  
  const buyerNames = topBuyers.map((buyer) => buyer.name);
  const buyerAmounts = topBuyers.map((buyer) => buyer.totalAmount);
  
  // Create and render the rankings chart for top 5 buyers
  function createBuyersRankingsChart() {
    const ctx = document.getElementById("buyersRankingsChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: buyerNames,
        datasets: [
          {
            label: "Total Amount",
            data: buyerAmounts,
            backgroundColor: "#ffa500",
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              stepSize: 500, 
            },
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
      },
    });
  }
  

  window.addEventListener("load", createBuyersRankingsChart);


  /*Top Sellers */
  const topSellers = [
    { name: "Alice Johnson", totalAmount: 3500 },
    { name: "Bob Smith", totalAmount: 2800 },
    { name: "Eva Brown", totalAmount: 2200 },
    { name: "James Williams", totalAmount: 1800 },
    { name: "Olivia Davis", totalAmount: 1500 },
  ];
  
  const sellerNames = topSellers.map((seller) => seller.name);
  const sellerAmounts = topSellers.map((seller) => seller.totalAmount);
  

  function createSellersRankingsChart() {
    const ctx = document.getElementById("sellersRankingsChart").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: sellerNames,
        datasets: [
          {
            label: "Total Amount",
            data: sellerAmounts,
            backgroundColor: "#ff69b4", // Pink color
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
          },
          y: {
            display: true,
            beginAtZero: true,
            ticks: {
              stepSize: 500, 
            },
          },
        },
        plugins: {
          legend: {
            display: false, 
          },
        },
      },
    });
  }
  

  window.addEventListener("load", createSellersRankingsChart);



  /**Company Revenue */
  const revenueData = [10000, 15000, 12000, 18000, 20000, 17000, 22000, 25000, 28000, 30000, 27000, 32000]; 
const month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// Create and render the revenue line chart
function createRevenueChart() {
  const ctx = document.getElementById("revenueChart").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      labels: month,
      datasets: [{
        label: "Revenue",
        data: revenueData,
        borderColor: "#ff0000", // Red color
        backgroundColor: "rgba(255, 0, 0, 0.2)",
        borderWidth: 2,
        lineTension: 0.3,
        fill: true,
      }],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: {
          display: true,
        },
        y: {
          display: true,
          beginAtZero: true,
          ticks: {
            stepSize: 5000, 
            callback: function (value) {
              return "$" + value; // Adding '$' before the value on the y-axis
            },
          },
        },
      },
      plugins: {
        legend: {
          display: true,
          position: "top",
        },
      },
    },
  });
}


window.addEventListener("load", createRevenueChart)



/*Top Locations */
const topNeighborhoods = [
    { name: "Midtown", count: 100 },
    { name: "Buckhead", count: 85 },
    { name: "Old Fourth Ward", count: 70 },
    { name: "Virginia-Highland", count: 60 },
    { name: "Inman Park", count: 50 },
    { name: "Other", count: 10 },
  ];
  
  const neighborhoodNames = topNeighborhoods.map((neighborhood) => neighborhood.name);
  const neighborhoodCounts = topNeighborhoods.map((neighborhood) => neighborhood.count);
  
  // Create and render the pie chart for top 5 Atlanta neighborhoods
  function createNeighborhoodsChart() {
    const ctx = document.getElementById("neighborhoodsChart").getContext("2d");
    new Chart(ctx, {
      type: "pie",
      data: {
        labels: neighborhoodNames,
        datasets: [{
          data: neighborhoodCounts,
          backgroundColor: ["#1E90FF", "#8A2BE2", "#FF4500", "#FFD700", "#32CD32","#ff69b4" ],
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: true,
            position: "right",
          },
        },
      },
    });
  }
  

  window.addEventListener("load", createNeighborhoodsChart);




  /**Top Housing Styles */
  const topHousingStyles = [
    { style: "Single Family Home", count: 200 },
    { style: "Apartment", count: 150 },
    { style: "Townhouse", count: 120 },
    { style: "Condo", count: 100 },
    { style: "Duplex", count: 80 },
  ];
  
  const housingStyleLabels = topHousingStyles.map((housingStyle) => housingStyle.style);
  const housingStyleCounts = topHousingStyles.map((housingStyle) => housingStyle.count);
  
  // Create and render the histogram for top 5 housing styles
  function createHousingStylesHistogram() {
    const ctx = document.getElementById("housingStylesHistogram").getContext("2d");
    new Chart(ctx, {
      type: "bar",
      data: {
        labels: housingStyleLabels,
        datasets: [{
          data: housingStyleCounts,
          backgroundColor: "#1E90FF", 
          borderWidth: 1,
        }],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            display: true,
            grid: {
              display: false,
            },
          },
          y: {
            display: true,
            grid: {
              color: "#ddd",
            },
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    });
  }
  
 
  window.addEventListener("load", createHousingStylesHistogram);
  
  
  

  
  


