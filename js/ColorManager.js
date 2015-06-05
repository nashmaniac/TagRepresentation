(function() {

	// Constants
	var NOT_FOUND = -1;

	function ColorManager() {
	 	// Collection of colors 
		this.chartColors = ["#AA78CA", "#FF6940", "#00BD94", "#FF5363", "#FF71A0", "#006FAD", "#51B46D", "#F7921E",
			"#295D73", "#41C980", "#34ADD3", "#D34E53", "#E7EAEC", "#8A7365", "#FF8051"
		];

		// To cycle between chartColors
		this.colorIndex = 0;

		// Holds hex vaue of colors that are present in the pie chart at any moment
		this.colorsPresentInChart = [];
	}

	ColorManager.prototype.getColor = function() {
		var newColor;
		while(true){
			newColor = this.chartColors[(this.colorIndex++) % this.chartColors.length];
			if(this.colorsPresentInChart.indexOf(newColor) === NOT_FOUND) break;
		}
		this.colorsPresentInChart.push(newColor);
		return newColor;
		
	};

	ColorManager.prototype.removeColor = function(colorToRemove){
		this.colorsPresentInChart.splice(this.colorsPresentInChart.indexOf(colorToRemove), 1);
	};

	/*
	* Function : shadeColor(String value of hex color code, positive value to lighten negative to darken)
	* ---------------------------------------------------------------------------------------------------
	* Used to lighten or darken a hex color 
	*/
	ColorManager.prototype.shadeColor = function(color, percent) {
	    var R = parseInt(color.substring(1,3),16);
	    var G = parseInt(color.substring(3,5),16);
	    var B = parseInt(color.substring(5,7),16);

	    R = parseInt(R * (100 + percent) / 100);
	    G = parseInt(G * (100 + percent) / 100);
	    B = parseInt(B * (100 + percent) / 100);

	    R = (R<255)?R:255;  
	    G = (G<255)?G:255;  
	    B = (B<255)?B:255;  

	    var RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
	    var GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
	    var BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));

	    return "#"+RR+GG+BB;
	
	};

	// Create a new namespace
	window.ColorManager = {};

	// export a single instance of the class
	window.ColorManager.colorManager = new ColorManager();

})();