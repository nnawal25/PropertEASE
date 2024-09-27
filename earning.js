
const lineChartData = {
labels: ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
datasets: [
    {
    label: "Revenue (this week)",
    data: [10000, 15000, 12000, 18000,20000, 15000, 12000], 
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

  // Call the function
window.addEventListener("load", createLineChart);
