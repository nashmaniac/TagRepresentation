(function(){
	// Create a new namespace 
	window.ChartManager = {};

	// Export a single instance of 
	window.ChartManager.chartManager = new ChartManager();

	
	// Holds Data objects of the chart
	var chartData = [];

	var chartOptions = {
	    //Boolean - Whether we should show a stroke on each segment
	    segmentShowStroke : true,

	    //String - The colour of each segment stroke
	    segmentStrokeColor : "#384047",

	    //Number - The width of each segment stroke
	    segmentStrokeWidth : 2,

	    //Number - The percentage of the chart that we cut out of the middle
	    percentageInnerCutout : 0, // This is 0 for Pie charts

	    //Number - Amount of animation steps
	    animationSteps : 100,

	    //String - Animation easing effect
	    animationEasing : "easeInOutQuint",

	    //Boolean - Whether we animate the rotation of the Doughnut
	    animateRotate : true,

	    //Boolean - Whether we animate scaling the Doughnut from the centre
	    animateScale : true,

	    //String - A legend template
	    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>",

	    tooltipTemplate: "<%if (label){%><%=label%><%}%>",

	    showTooltips : false,

	    tooltipFontFamily: "'Source Sans Pro', 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",

	     // Number - Pixel radius of the tooltip border
	    tooltipCornerRadius: 4,

		// Array - Array of string names to attach tooltip events
	    tooltipEvents: [""],

	    onAnimationComplete: function(){
	        this.showTooltip(this.segments, true);
	    }

	};

	var chartView = document.getElementById("myChart");
	var ctx = chartView.getContext("2d");
	var pieChart = new Chart(ctx).Pie(chartData,chartOptions);

	function ChartManager() {

	}

	ChartManager.prototype.getChartData = function() {
		return chartData;
	};

	/*
	* Function : insertInChart(name of tag, rating of tag, color of pieChart segment for tag)
	* ---------------------------------------------------------------------------------------
	* Inserts data into chartData also inserts new data into live pie chart that is visible 
	* in the view port
	*/	
	ChartManager.prototype.insertInChart = function(tagName, tagRating, segmentColor) {
		var newData = {
			value : tagRating,
			color : segmentColor,
			highlight : "",
			label : tagName
		};
		pieChart.addData(newData);
		chartData.push(newData);
	};

	ChartManager.prototype.removeData = function(rmTagName) {
		var removalIndex;
		chartData.forEach(function(data,currentIndex) {
			if(data.label === rmTagName) {
				removalIndex = currentIndex;
			}
		});
		chartData.splice(removalIndex, 1);
		pieChart.removeData(removalIndex);
	};






})();