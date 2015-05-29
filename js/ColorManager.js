(function() {

	// Constants
	var NOT_FOUND = -1;

 	// Collection of colors 
	var chartColors = ["#AA78CA", "#FF6940", "#00BD94", "#FF5363", "#FF71A0", "#006FAD", "#51B46D", "#F7921E",
		"#295D73", "#41C980", "#34ADD3", "#D34E53", "#E7EAEC", "#8A7365", "#FF8051"
	];

	// To cycle between chartColors
	var colorIndex = 0;

	// Holds hex vaue of colors that are present int hte pie chart at any moment
	var colorsPresentInChart = [];

	function ColorManager() {
	}

	ColorManager.prototype.getColor = function() {
		var newColor;
		while(true){
			newColor = chartColors[(colorIndex++) % chartColors.length];
			if(colorsPresentInChart.indexOf(newColor) === NOT_FOUND) break;
		}
		colorsPresentInChart.push(newColor);
		return newColor;
		
	};

	ColorManager.prototype.removeColor = function(colorToRemove){
		colorsPresentInChart.splice(colorsPresentInChart.indexOf(colorToRemove), 1);
	};

	// Create a new namespace
	window.ColorManager = {};

	// export a single instance of the class
	window.ColorManager.colorManager = new ColorManager();

})();