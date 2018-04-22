$(function(){
    $.ajax({
      url: 'http://localhost/dfequinealarm/sweat.php',
      type: 'GET',
      success : function(data) {
        chartData = data;
        var chartProperties = {
          "caption": "Sweat",
          "xAxisName": "Date",
          "yAxisName": "Sweat",
          "rotatevalues": "1",
          "theme": "zune"
        };
        apiChart = new FusionCharts({
          type: 'line',
          renderAt: 'sweat_chart-container',
          width: '550',
          height: '350',
          dataFormat: 'json',
          dataSource: {
            "chart": chartProperties,
            "data": chartData
          }
        });
        apiChart.render();
      }
    });
  });

  $(function(){
    $.ajax({
      url: 'http://localhost/dfequinealarm/temperature.php',
      type: 'GET',
      success : function(data) {
        chartData = data;
        var chartProperties = {
          "caption": "Temperature",
          "xAxisName": "Date",
          "yAxisName": "Temperature",
          "rotatevalues": "1",
          "theme": "zune"
        };
        apiChart = new FusionCharts({
          type: 'line',
          renderAt: 'temperature_chart-container',
          width: '550',
          height: '350',
          dataFormat: 'json',
          dataSource: {
            "chart": chartProperties,
            "data": chartData
          }
        });
        apiChart.render();
      }
    });
  });