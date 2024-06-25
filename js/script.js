window.onload = function () {

  // input with id "username" on change event
  document.getElementById("username").onchange = function () {
    // get the value of the input field
    var username = document.getElementById("username").value;
    // regex to check if the username has at least 1 capital letter, 1 number and is 8 characters long
    var regex = /^(?=.*[A-Z])(?=.*[0-9]).{8,}$/;
    // check if the username matches the regex
    if (regex.test(username)) {
      // if it does, set the input border color to green
      document.getElementById("username").style.borderColor = "green";
    } else {
      // if it doesn't, set the input border color to red
      document.getElementById("username").style.borderColor = "red";
    }
  }

  // Get the download button
  var downloadButton = document.getElementById("download");

  // Function to download the canvas as an image
  function downloadCanvasAsImage() {
    // Get the canvas
    var canvas = document.getElementById("myChart");

    // Convert the canvas to a data URL
    var dataUrl = canvas.toDataURL("image/png");

    // Create a new link element
    var link = document.createElement("a");

    // Set the href of the link to the data URL
    link.href = dataUrl;

    // Set the download attribute of the link
    link.download = "chart.png";

    // Trigger a click on the link
    link.click();
  }

  // Add an event listener to the download button
  downloadButton.addEventListener("click", downloadCanvasAsImage);

  // Function to get the value of an input field
  function getInputValue(id) {
    return document.getElementById(id).value;
  }

  // Create the data for the chart
  var data = {
    labels: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    datasets: [
      {
        label: "Income",
        data: [],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1
      },
      {
        label: "Expenses",
        data: [],
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1
      }
    ]
  };

  // Get the context of the canvas element we want to select
  var ctx = document.getElementById("myChart").getContext("2d");

  // Create the bar chart
  var myBarChart = new Chart(ctx, {
    type: "bar",
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Get the chart tab
  var chartTab = document.getElementById("chart-tab");

  // Add an event listener to the chart tab
  chartTab.addEventListener("click", generateChart);

  // Function to generate the chart
  function generateChart() {
    // Get the income and expenses for each month
    var januaryIncome = getInputValue("january-income");
    var februaryIncome = getInputValue("february-income");
    var marchIncome = getInputValue("march-income");
    var aprilIncome = getInputValue("april-income");
    var mayIncome = getInputValue("may-income");
    var juneIncome = getInputValue("june-income");
    var julyIncome = getInputValue("july-income");
    var augustIncome = getInputValue("august-income");
    var septemberIncome = getInputValue("september-income");
    var octoberIncome = getInputValue("october-income");
    var novemberIncome = getInputValue("november-income");
    var decemberIncome = getInputValue("december-income");

    var incomeData = [januaryIncome, februaryIncome, marchIncome, aprilIncome, mayIncome, juneIncome, julyIncome, augustIncome, septemberIncome, octoberIncome, novemberIncome, decemberIncome];

    var januaryExpenses = getInputValue("january-expenses");
    var februaryExpenses = getInputValue("february-expenses");
    var marchExpenses = getInputValue("march-expenses");
    var aprilExpenses = getInputValue("april-expenses");
    var mayExpenses = getInputValue("may-expenses");
    var juneExpenses = getInputValue("june-expenses");
    var julyExpenses = getInputValue("july-expenses");
    var augustExpenses = getInputValue("august-expenses");
    var septemberExpenses = getInputValue("september-expenses");
    var octoberExpenses = getInputValue("october-expenses");
    var novemberExpenses = getInputValue("november-expenses");
    var decemberExpenses = getInputValue("december-expenses");

    var expensesData = [januaryExpenses, februaryExpenses, marchExpenses, aprilExpenses, mayExpenses, juneExpenses, julyExpenses, augustExpenses, septemberExpenses, octoberExpenses, novemberExpenses, decemberExpenses];

    myBarChart.data.datasets[0].data = incomeData;
    myBarChart.data.datasets[1].data = expensesData;

    myBarChart.update();
  }

}
