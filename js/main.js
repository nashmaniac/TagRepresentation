var tagData = [];
var tagDOMEls = [];
var songData = [];
var NOT_FOUND = -1;
// Constants
var SELECTED_TAG_NAME = "selected";
var TAG_BG_COLOR = "#5ECF81";


$(document).ready(function() {
	$('#showChart').hide();
	$('.selectTagMessage').hide();
	// Constants


	var largeDataUrl = "http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=2&country=in&f_has_lyrics=1&apikey=1ded3ade3e63977aef9212b43320afb1&format=jsonp&callback=?";
	var tagUrl = "http://ec2-23-20-32-78.compute-1.amazonaws.com/lyrics_tagger/v1/tags?trackID=";

	var tagUrls = [];
	$.getJSON(largeDataUrl, function(loadedData) {
		// An array of objects, each object holding data of a single track
		var trackDatas = loadedData.message.body.track_list;
		trackDatas.forEach(function(trackData) {
			var currentTrackId = trackData.track.track_id;
			// Put data about the current track/song in the respective array

			var currentTrackTagsUrl = tagUrl + currentTrackId;

			// get data out of this url 
			$.getJSON(currentTrackTagsUrl, function(currentTagData) {
				// both the arrays have same elements stored in respective order
				var tagRatings = currentTagData.tags_rating; 
				var tagNames = currentTagData.tags;
				tagRatings.forEach(function(tagRating, index) {
					addNewTagData(tagRating, tagNames[index]);
				});
				// also assing the tagnames to the current track/song
				songData.push({
					songName : trackData.track.track_name,
					artist : trackData.track.artist_name,
					tags : tagNames
				});
				
			});
		});
	});

	// Pushes new data into the tagData Array, avoids duplicate data
	function addNewTagData(newTagRating, newTagName) {
		// firt we have to find if something related to the current tag is already present in the dataset
		var checkIndex = NOT_FOUND;
		tagData.forEach(function(currentTagData, index) {
			if(currentTagData.tagName === newTagName)
				checkIndex = index;
		});
		if(checkIndex !== NOT_FOUND) {
			tagData[checkIndex].tagRating += newTagRating;
			return;
		}else{
			tagData.push(
				{
					tagName : newTagName,
					tagRating : newTagRating
				}
			);
		}

	}
		

});


// Once data has finished loading we can run the following 
$(document).ajaxStop(function() {
	// hide the loader
	$('.loader').hide();
	$('.songContainer').hide();
	$('#showChart').show();
	$('.selectTagMessage').show();


	// Stuff to manage color in the chart
	var colorManager = new ColorManager();


	// For the tabs
	$('.tabsContainer').on('click', function(event) {
		if(event.target.id === 'showChart') {
			$('.songContainer').toggle();
			$('.chartContainer').toggle();
		}
	});

	// Chart variables
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

	var ctx = document.getElementById("myChart").getContext("2d");
	var pieChart = new Chart(ctx).Pie(chartData,chartOptions);

	// Show the top songs 
	var songContainer = document.querySelector('.songContainer');
	songData.forEach(function(song, index) {
		var songDOM = getNewDOMClass('div', 'song');
		var rankDOM = getNewDOMClass('div', 'rank');
		rankDOM.textContent = index + 1;
		// add this to the earlier thing 
		songDOM.appendChild(rankDOM);
		// create a span for this thing 
		var songTitle = getNewDOMClass('span', 'songTitle');
		songTitle.textContent = song.songName;

		songDOM.appendChild(songTitle);
		songContainer.appendChild(songDOM);

		// let us do something about clicking this shit 
		songDOM.addEventListener('click', function(event) {
			if(this.className.indexOf("selectedSong") > -1) {
				$(this).removeClass('selectedSong');
				$('.tagContainer').children().toArray().forEach(function(child){
						$(child).removeClass('lowProfile');
				});
			}else{
				$(this).addClass('selectedSong')
				$(this).siblings().removeClass('selectedSong');
				$('.tagContainer').children().toArray().forEach(function(child){
					if(songData[index].tags.indexOf(child.innerText) > -1)
						$(child).removeClass('lowProfile');
					else
						$(child).addClass('lowProfile');
				});
				
			}
		});

	});

	///////////


	// Rearranges the tag data array to descending order by the tag rating 
	tagData.sort(descBy('tagRating'));
	// Converting tag data to DOM elements
	var tagContainer = document.querySelector('.tagContainer');
	tagData.forEach(function(currentTagData, index) {
		// Create and add a new tag DOM element to the tag container
		var newTagDOMEl = getNewDOMClass('div', 'tag');
		var tagColor = shadeColor(TAG_BG_COLOR, index * 1.4);
		newTagDOMEl.style.backgroundColor = tagColor;
		newTagDOMEl.textContent =  currentTagData['tagName'];
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
				colorManager.removeColor(this.style.backgroundColor);
				// Reset the background color of the deselected tag to original
				this.style.backgroundColor = tagColor;

			} else {

				var selectedTagName = tagData[index]['tagName'];
				var selectedTagRating = tagData[index]['tagRating'];

				var segmentColor = colorManager.getRandomColor();

				select(this, segmentColor);
				insertInChart(selectedTagName, selectedTagRating, segmentColor);
			}
			if(chartData.length <= 0) $('.selectTagMessage').show();
			else $('.selectTagMessage').hide();

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
	* Function : getNewDOMClass(tagName i.e. <p>/<div>/ , class Name for the new element)
	* -------------------------------------------------------------------------------------
	* Creates and returns a new DOM element with specified tag name and class name
	*/
	function getNewDOMClass(tagName, className) {
		var newElement = document.createElement(tagName);
		newElement.className = className;
		return newElement;
	}

	/*
	* Function : ColorManager()
	* --------------------------------------------------
	* Returns a random color, for the pie chart segments
	* avoids returning same color consecutively
	*/
	function ColorManager(){
		var colorIndex = 0;
		var colorsPresentInChart = [];
		var chartColors = ["#AA78CA", "#FF6940", "#00BD94", "#FF5363", "#FF71A0", "#006FAD", "#51B46D", "#F7921E",
			"#295D73", "#41C980", "#34ADD3", "#D34E53", "#E7EAEC", "#8A7365", "#FF8051"
		];

		return {
			getRandomColor : function(){
				var randomColor;
				while(true){
					randomColor = chartColors[(colorIndex++) % chartColors.length];
					if(colorsPresentInChart.indexOf(randomColor) === -1) break;
				}
				colorsPresentInChart.push(randomColor);	
				return randomColor;
			},

			removeColor : function(colorToRemove) {
				colorsPresentInChart.splice(colorsPresentInChart.indexOf(colorToRemove), 1);
			}
		};

	};

});



