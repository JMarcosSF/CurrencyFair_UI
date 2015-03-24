google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap(jsonArray) {
	console.log(jsonArray);
	var colArray = ["Country Name", "Transactions Received"];
	jsonArray.unshift(colArray);
	var data = google.visualization.arrayToDataTable(jsonArray);
	var options = {};
	var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));
	chart.draw(data, options);
}