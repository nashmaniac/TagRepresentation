var tagData = [];
var tagDOMEls = [];
var songData = [];
// var loadedData = {"message":{"header":{"status_code":200,"execute_time":0.046993017196655,"maintenance_id":0},"body":{"track_list":[{"track":{"track_id":83371564,"track_mbid":"45d81a45-b57f-4ad5-8896-273f8578a97e","track_isrc":"","track_spotify_id":"","track_soundcloud_id":206709736,"track_xboxmusic_id":"","track_name":"Bad Blood","track_name_translation_list":[],"track_rating":69,"track_length":244,"commontrack_id":46615074,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":1017,"lyrics_id":11409636,"subtitle_id":5496822,"album_id":20797064,"album_name":"Bad Blood","artist_id":28705075,"artist_mbid":"","artist_name":"Taylor Swift feat. Kendrick Lamar","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Taylor-Swift-feat-Kendrick-Lamar\/Bad-Blood","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Taylor-Swift-feat-Kendrick-Lamar\/Bad-Blood?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Taylor-Swift-feat-Kendrick-Lamar\/Bad-Blood","restricted":0,"updated_time":"2015-05-18T13:54:38Z","primary_genres":{"music_genre_list":[]},"secondary_genres":{"music_genre_list":[]}}}]}}};
$(document).ready(function() {
	// Constants
	var NOT_FOUND = -1;

	var largeDataUrl = "http://api.musixmatch.com/ws/1.1/chart.tracks.get?page=1&page_size=5&country=us&f_has_lyrics=1&apikey=1ded3ade3e63977aef9212b43320afb1&format=jsonp&callback=?";
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
	$('.loader').addClass('hidden');

	// Constants
	var SELECTED_TAG_NAME = "selected";
	var TAG_BG_COLOR = "#5ECF81";

	// Show the top songs 

	var songContainer = document.querySelector('.songContainer');
	songData.forEach(function(song, index) {
		var songDOM = document.createElement('div');
		songDOM.className = 'song';
		// create the rank div
		var rankDOM = document.createElement('div');
		rankDOM.className = 'rank';
		rankDOM.textContent = index + 1;
		// add this to the earlier thing 
		songDOM.appendChild(rankDOM);
		// create a span for this thing 
		var songTitle = document.createElement('span');
		songTitle.className = 'songTitle';
		songTitle.textContent = song.songName;

		songDOM.appendChild(songTitle);
		songContainer.appendChild(songDOM);

		// let us do something about clicking this shit 
		songDOM.addEventListener('click', function(event) {
			$('.tagContainer').children().toArray().forEach(function(child){
				if(songData[index].tags.indexOf(child.innerText) > -1)
					$(child).removeClass('lowProfile');
				else
					$(child).addClass('lowProfile');
			});
		});

	});

	///////////


	// Rearranges the tag data array to descending order by the tag rating 
	tagData.sort(descBy('tagRating'));

	var colorIndex = 0;
	var colorsPresentInChart = [];
	// Converting tag data to DOM elements
	var tagContainer = document.querySelector('.tagContainer');
	tagData.forEach(function(currentTagData, index) {
		// Create and add a new tag DOM element to the tag container
		var newTagDOMEl = document.createElement('div');
		var tagColor = shadeColor(TAG_BG_COLOR, index * 1.4);
		newTagDOMEl.style.backgroundColor = tagColor;
		newTagDOMEl.className = 'tag';
		newTagDOMEl.textContent =  currentTagData['tagName'];
		tagContainer.appendChild(newTagDOMEl);
		tagDOMEls.push(newTagDOMEl);

		newTagDOMEl.addEventListener('click', function(event) {
			if(isSelected(this.className)){ 
				deselect(this);
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

				select(this, segmentColor);
			}

		});
	});




	/// For the Chart 
	var chartColors = ["#AA78CA", "#FF6940", "#00BD94", "#FF5363", "#FF71A0", "#006FAD", "#51B46D", "#F7921E",
		"#295D73", "#41C980", "#34ADD3", "#D34E53", "#E7EAEC", "#8A7365", "#FF8051"
	];




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


});