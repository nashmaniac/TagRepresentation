(function() { 

	// Global Constants
	var SELECTED_TAG_NAME = "selected";
	var TAG_BG_COLOR = "#5ECF81";

	////////////Extracting data from JSON

	// Track data from the API
	var trackData = {"tags_rating": [0.023058, 0.019902, 0.018367, 0.009643, 0.008235, 0.005049, 0.005003, 0.004081, 0.004081, 0.003776, 0.003776, 0.003543, 0.003095, 0.002658, 0.00226, 0.00223, 0.002195, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.00204, 0.001983, 0.001888, 0.001888, 0.001736, 0.001647, 0.001647, 0.001647, 0.001613, 0.001516, 0.001511, 0.00151, 0.001469, 0.001322, 0.00119, 0.00113, 0.001107, 0.001086, 0.00103, 0.001028, 0.001005, 0.00099, 0.000985, 0.000972, 0.000877, 0.000786, 0.000675, 0.000428], "tags": ["baby", "bad blood", "hey", "mad love", "remember", "live", "solve 'em", "ghosts", "band-aids", "hate", "sad", "deep cut", "problems", "fix bullet holes", "made", "battle scars", "thought", "bruised", "critique", "brimstone", "od", "pov", "yah", "amnesia", "id", "basslines", "overrate", "doc", "battle wounds", "tlc", "stabbed", "sincere", "forget", "forgive", "erase", "beats", "good times", "body bumped", "back", "dark heart", "show", "procedure", "fire jumping", "write", "hear", "wait", "facts", "replace", "similar iraq", "life", "fear", "power", "season", "money", "loss"]};
	// var trackData = {"tags_rating": [0.019519, 0.014509, 0.010803, 0.009544, 0.009119, 0.008189, 0.00715, 0.00692, 0.006537, 0.005585, 0.004953, 0.004463, 0.004198, 0.00346, 0.00346, 0.00346, 0.003201, 0.003076, 0.002776, 0.002593, 0.002542, 0.002542, 0.002383, 0.002363, 0.002336, 0.002291, 0.002242, 0.002233, 0.002168, 0.002025, 0.001953, 0.001841, 0.001466, 0.001157, 0.000919], "tags": ["relationship", "summer", "seasonal love", "leaves", "sky represent", "met", "signal", "innocent", "heartbeat sound", "baby", "blue", "act", "good times", "girl", "baze dropz", "yo", "truthful", "beating loud", "end", "extreme feelings", "harris' upcoming album", "calvin harris' upcoming", "wrong", "lied", "long", "sight", "fell", "classic bitch move", "heart", "watch", "video", "hear", "lead single", "start", "make"]};

	// Arrays holding rating and name of each tag
	var tagRatings = trackData["tags_rating"];
	var tagNames = trackData["tags"];

	// Array holding objects of type {tagName : , tagRating : }
	var tagData = [];

	for(var i = 0 ; i < tagRatings.length ; i++) {
		tagData.push(newTagData(tagNames[i], tagRatings[i]));
	}

	// Rearranges the tag data array to descending order by the tag rating 
	tagData.sort(descBy('tagRating'));


	/// For the Chart 
	var chartColors = ["#AA78CA", "#FF6940", "#00BD94", "#FF5363", "#FF71A0", "#006FAD", "#51B46D", "#F7921E",
		"#295D73", "#41C980", "#34ADD3", "#D34E53", "#E7EAEC", "#8A7365", "#FF8051"
	];

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



	// Converting tag data to DOM elements
	var tagContainer = document.querySelector('.tagContainer');
	// Stores dom elements in the same order as the tagData objects are stored in other relevant array
	var tagDOMEls = [];
	// To cycle between pie chart segment colors
	var colorIndex = 0;
	var colorsPresentInChart = [];
	tagData.forEach(function(currentTagData, index) {
		// Create and add a new tag DOM element to the tag container
		var newTagDOMEl = document.createElement('div');
		var tagColor = shadeColor(TAG_BG_COLOR, index * 3);
		newTagDOMEl.style.backgroundColor = tagColor;
		newTagDOMEl.className = 'tag';
		newTagDOMEl.textContent =  currentTagData['tagName'];
		tagDOMEls.push(newTagDOMEl);
		tagContainer.appendChild(newTagDOMEl);

		newTagDOMEl.addEventListener('click', function(event) {
			if(isSelected(this.className)){ 
				deselect(this);

				// Get the Index at which the deselected tag data was present in chartData array
				var chartDataIndex;
				chartData.forEach(function(data, currentIndex){
					if(data.label === currentTagData['tagName'] && data.value === currentTagData['tagRating'])
						chartDataIndex = currentIndex;
				});

				// On Deselect remove data for Pie Chart and Chart Data
				chartData.splice(chartDataIndex, 1);
				pieChart.removeData(chartDataIndex);

				// Remove the chart color from colorsPresentInChart Array
				colorsPresentInChart.splice(colorsPresentInChart.indexOf(this.style.backgroundColor), 1);
				// Reset the background color of the deselected tag to original
				this.style.backgroundColor = tagColor;
				return;
			} else {

				var selectedTagName = tagData[index]['tagName'];
				var selectedTagRating = tagData[index]['tagRating'];

				var segmentColor = chartColors[(colorIndex++) % chartColors.length];
				while(true){
					segmentColor = chartColors[(colorIndex++) % chartColors.length];
					if(colorsPresentInChart.indexOf(segmentColor) === -1) break;
				}
				colorsPresentInChart.push(segmentColor);

				select(this, segmentColor);
				insertInChart(selectedTagName, selectedTagRating, segmentColor);
			}

		});
	});




	//////// Utility Functions 


	/*
	* Function : shadeColor(String value of hex color code, positive value to lighten negative to darken)
	* ---------------------------------------------------------------------------------------------------
	* Used to lighten or darken a hex color 
	*/
	function shadeColor(color, percent) {

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
	}

	// Creates and returns a new tagData object of format {tagName : , tagRating : }
	function newTagData(newTagName, newTagRating) {
		return {
			tagName : newTagName,
			tagRating : newTagRating
		};
	}

	/*
	* Function : descBy(one of the property name of objects present in an array)
	* Usage    : arrayHoldingNames.sort(by(firstName));
	* ----------------------------------------------------------------------
	* Used to sort any array of objects in descending order by a property name 
	* of the obejcts inside that array.
	*/
	function descBy(propertyName) {
		return function(m, n) {
			if(typeof m === 'object' && typeof n === 'object') {
				var propertyValueM = m[propertyName];
				var propertyValueN = n[propertyName];

				if(propertyValueM === propertyValueN) return 0;
				if(typeof propetyValueM === typeof propertyVaueN) {
					return (propertyValueM < propertyValueN ? 1 : -1);
				}else{
					return (typeof propertyValueM < propertyValueN ? 1 : -1);
				}

			}else{
				throw {
					type : 'Error',
					message : 'Expected objects got something else'
				};
			}
		}
	}

	
	/*
	* Function : insertInChart(name of tag, rating of tag, color of pieChart segment for tag)
	* ---------------------------------------------------------------------------------------
	* Inserts data into chartData also inserts new data into live pie chart that is visible 
	* in the view port
	*/	
	function insertInChart(tagName, tagRating, segmentColor) {
		var newData = {
			value : tagRating,
			color : segmentColor,
			highlight : "",
			label : tagName
		};
		pieChart.addData(newData);
		chartData.push(newData);
	}

	/*
	* Function : isSelected(class name of the clicked DOM element)
	* -------------------------------------------------------------
	* Checks if the clicked DOM tag element is already selected returns
	* true if selected false otherwise
	*/
	function isSelected(className) {
		return (className.indexOf(SELECTED_TAG_NAME) > -1)
	}

	/*
	* Function : deselect(tag DOM element)
	* -------------------------------------
	* Deselcts the passed in tag DOM element
	*/
	function deselect(tagDOMEl){
		tagDOMEl.className = tagDOMEl.className.slice(0, tagDOMEl.className.indexOf(SELECTED_TAG_NAME));
	}

	/*
	* Function : select(tag DOM element, Background color to apply)
	* ------------------------------------------------------------------------
	*/
	function select(tagDOMEl, backgroundColor) {
		tagDOMEl.className = tagDOMEl.className + " " + SELECTED_TAG_NAME;
		tagDOMEl.style.backgroundColor = backgroundColor;
	}


}).call(this);
