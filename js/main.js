
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

// Track data from the API
var trackData = {"tags_rating": [0.019519, 0.014509, 0.010803, 0.009544, 0.009119, 0.008189, 0.00715, 0.00692, 0.006537, 0.005585, 0.004953, 0.004463, 0.004198, 0.00346, 0.00346, 0.00346, 0.003201, 0.003076, 0.002776, 0.002593, 0.002542, 0.002542, 0.002383, 0.002363, 0.002336, 0.002291, 0.002242, 0.002233, 0.002168, 0.002025, 0.001953, 0.001841, 0.001466, 0.001157, 0.000919], "tags": ["relationship", "summer", "seasonal love", "leaves", "sky represent", "met", "signal", "innocent", "heartbeat sound", "baby", "blue", "act", "good times", "girl", "baze dropz", "yo", "truthful", "beating loud", "end", "extreme feelings", "harris' upcoming album", "calvin harris' upcoming", "wrong", "lied", "long", "sight", "fell", "classic bitch move", "heart", "watch", "video", "hear", "lead single", "start", "make"]};

// Arrays holding rating and name of each tag
var tagRatings = trackData["tags_rating"];
var tagNames = trackData["tags"];

// Array holding objects of type {tagName : , tagRating : }
var tagData = [];

for(var i = 0 ; i < tagRatings.length ; i++) {
	tagData.push(newTagData(tagNames[i], tagRatings[i]));
}

// Rearranges the tag data array to ascending order by the tag rating 
tagData.sort(descBy('tagRating'));

///////////////

// Converting tag data to DOM elements
var tagContainer = document.querySelector('.tagContainer');
tagData.forEach(function(currentTagData, index) {
	var newTagDOMEl = document.createElement('div');
	newTagDOMEl.style.backgroundColor = shadeColor('#5ECF81', index * 3);
	newTagDOMEl.className = 'tag';
	newTagDOMEl.textContent =  currentTagData['tagName'];
	tagContainer.appendChild(newTagDOMEl);
});


/// For the Chart 

var data = [
    {
        value: 300,
        color:"#F7464A",
        highlight: "#FF5A5E",
        label: "Red"
    },
    {
        value: 50,
        color: "#46BFBD",
        highlight: "#5AD3D1",
        label: "Green"
    },
    {
        value: 100,
        color: "#FDB45C",
        highlight: "#FFC870",
        label: "Yellow"
    }
];

var chartOptions = {
    //Boolean - Whether we should show a stroke on each segment
    segmentShowStroke : false,

    //String - The colour of each segment stroke
    segmentStrokeColor : "#fff",

    //Number - The width of each segment stroke
    segmentStrokeWidth : 3,

    //Number - The percentage of the chart that we cut out of the middle
    percentageInnerCutout : 50, // This is 0 for Pie charts

    //Number - Amount of animation steps
    animationSteps : 100,

    //String - Animation easing effect
    animationEasing : "easeOutQuint",

    //Boolean - Whether we animate the rotation of the Doughnut
    animateRotate : true,

    //Boolean - Whether we animate scaling the Doughnut from the centre
    animateScale : false,

    //String - A legend template
    legendTemplate : "<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; i<segments.length; i++){%><li><span style=\"background-color:<%=segments[i].fillColor%>\"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>"

};

var chartView = document.getElementById("myChart");
var ctx = chartView.getContext("2d");
var myPieChart = new Chart(ctx).Pie(data,chartOptions);
