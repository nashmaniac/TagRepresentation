(function() {

	var tagData = [];
	var loadedData = {"message":{"header":{"status_code":200,"execute_time":0.053714036941528,"maintenance_id":0},"body":{"track_list":[{"track":{"track_id":83371564,"track_mbid":"45d81a45-b57f-4ad5-8896-273f8578a97e","track_isrc":"","track_spotify_id":"","track_soundcloud_id":206709736,"track_xboxmusic_id":"","track_name":"Bad Blood","track_name_translation_list":[],"track_rating":69,"track_length":244,"commontrack_id":46615074,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":969,"lyrics_id":11409636,"subtitle_id":5495567,"album_id":20797064,"album_name":"Bad Blood","artist_id":28705075,"artist_mbid":"","artist_name":"Taylor Swift feat. Kendrick Lamar","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/3\/3\/0\/7\/9\/31970331_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Taylor-Swift-feat-Kendrick-Lamar\/Bad-Blood","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Taylor-Swift-feat-Kendrick-Lamar\/Bad-Blood?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Taylor-Swift-feat-Kendrick-Lamar\/Bad-Blood","restricted":0,"updated_time":"2015-05-18T13:54:38Z","primary_genres":{"music_genre_list":[]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":79780686,"track_mbid":"","track_isrc":"USAT21500313","track_spotify_id":"7wqSzGeodspE3V6RBD5W8L","track_soundcloud_id":0,"track_xboxmusic_id":"music.2787D208-0100-11DB-89CA-0019B92A3933","track_name":"See You Again","track_name_translation_list":[],"track_rating":86,"track_length":230,"commontrack_id":44320500,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":20363,"lyrics_id":11419203,"subtitle_id":5496668,"album_id":20404977,"album_name":"Furious 7 (Original Motion Picture Soundtrack)","artist_id":28403626,"artist_mbid":"","artist_name":"Wiz Khalifa feat. Charlie Puth","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/6\/0\/1\/8\/7\/5\/31578106.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/6\/0\/1\/8\/7\/5\/31578106_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/6\/0\/1\/8\/7\/5\/31578106_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/6\/0\/1\/8\/7\/5\/31578106_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Wiz-Khalifa-feat-Charlie-Puth\/See-You-Again","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Wiz-Khalifa-feat-Charlie-Puth\/See-You-Again?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Wiz-Khalifa-feat-Charlie-Puth\/See-You-Again","restricted":0,"updated_time":"2015-05-20T12:58:44Z","primary_genres":{"music_genre_list":[]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":74959678,"track_mbid":"9656e1b2-87c1-4208-8a33-fa814961fc9e","track_isrc":"USRC11401949","track_spotify_id":"4kbj5MwxO1bq9wjT5g9HaA","track_soundcloud_id":167152767,"track_xboxmusic_id":"music.B5138408-0100-11DB-89CA-0019B92A3933","track_name":"Shut Up and Dance","track_name_translation_list":[],"track_rating":100,"track_length":199,"commontrack_id":40649352,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":1465,"lyrics_id":9866142,"subtitle_id":5486043,"album_id":19775406,"album_name":"TALKING IS HARD","artist_id":13617560,"artist_mbid":"d4aad415-9cd0-4845-9b05-0416fdcc9fc4","artist_name":"WALK THE MOON","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/2\/5\/8\/4\/9\/30948525.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/2\/5\/8\/4\/9\/30948525_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/2\/5\/8\/4\/9\/30948525_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/2\/5\/8\/4\/9\/30948525_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/WALK-THE-MOON\/Shut-Up-and-Dance","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/WALK-THE-MOON\/Shut-Up-and-Dance?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"WALK-THE-MOON\/Shut-Up-and-Dance","restricted":0,"updated_time":"2015-01-28T09:16:29Z","primary_genres":{"music_genre_list":[{"music_genre":{"music_genre_id":20,"music_genre_parent_id":34,"music_genre_name":"Alternative","music_genre_name_extended":"Alternative","music_genre_vanity":"Alternative"}}]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":73048660,"track_mbid":"","track_isrc":"USZXT1400267","track_spotify_id":"2mUsezD0iyDJzvyltPoREy","track_soundcloud_id":202360207,"track_xboxmusic_id":"music.B054A808-0100-11DB-89CA-0019B92A3933","track_name":"Honey, I'm Good.","track_name_translation_list":[],"track_rating":91,"track_length":199,"commontrack_id":39997358,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":788,"lyrics_id":9741470,"subtitle_id":5348221,"album_id":19621236,"album_name":"Magazines Or Novels","artist_id":13338082,"artist_mbid":"9e60ea29-9607-4f7d-aa96-2092ef41f0d3","artist_name":"Andy Grammer","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/4\/3\/4\/9\/7\/30794345.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/4\/3\/4\/9\/7\/30794345_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/4\/3\/4\/9\/7\/30794345_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/5\/4\/3\/4\/9\/7\/30794345_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Andy-Grammer\/Honey-I-m-Good","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Andy-Grammer\/Honey-I-m-Good?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Andy-Grammer\/Honey-I-m-Good","restricted":0,"updated_time":"2014-08-07T19:01:58Z","primary_genres":{"music_genre_list":[{"music_genre":{"music_genre_id":14,"music_genre_parent_id":34,"music_genre_name":"Pop","music_genre_name_extended":"Pop","music_genre_vanity":"Pop"}}]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":74170863,"track_mbid":"","track_isrc":"GB28K1400058","track_spotify_id":"5Ok52kEHxudhX1n2RvqyIe","track_soundcloud_id":177534436,"track_xboxmusic_id":"music.2821A608-0100-11DB-89CA-0019B92A3933","track_name":"Hey Mama","track_name_translation_list":[],"track_rating":91,"track_length":193,"commontrack_id":40911794,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":1664,"lyrics_id":11149643,"subtitle_id":5496582,"album_id":19704209,"album_name":"Listen (Deluxe Version)","artist_id":27968295,"artist_mbid":"","artist_name":"David Guetta feat. Nicki Minaj & Afrojack","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/7\/2\/3\/7\/7\/8\/30877327.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/7\/2\/3\/7\/7\/8\/30877327_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/7\/2\/3\/7\/7\/8\/30877327_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/7\/2\/3\/7\/7\/8\/30877327_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/David-Guetta-feat-Nicki-Minaj-Afrojack\/Hey-Mama","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/David-Guetta-feat-Nicki-Minaj-Afrojack\/Hey-Mama?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"David-Guetta-feat-Nicki-Minaj-Afrojack\/Hey-Mama","restricted":0,"updated_time":"2015-05-13T04:42:28Z","primary_genres":{"music_genre_list":[]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":83380462,"track_mbid":"","track_isrc":"USUM71506991","track_spotify_id":"6ehmEaUo6TrZkyWOTtmFrr","track_soundcloud_id":0,"track_xboxmusic_id":"music.2432F908-0100-11DB-89CA-0019B92A3933","track_name":"Kick the Dust Up","track_name_translation_list":[],"track_rating":40,"track_length":192,"commontrack_id":46628205,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":19,"lyrics_id":11415492,"subtitle_id":5496568,"album_id":20797812,"album_name":"Kick the Dust Up","artist_id":360257,"artist_mbid":"aab35942-f176-4f77-bbf9-1d6aa98ccf3f","artist_name":"Luke Bryan","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/0\/8\/0\/1\/7\/9\/31971080.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/0\/8\/0\/1\/7\/9\/31971080_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/0\/8\/0\/1\/7\/9\/31971080_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/0\/8\/0\/1\/7\/9\/31971080_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Luke-Bryan\/Kick-the-Dust-Up","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Luke-Bryan\/Kick-the-Dust-Up?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Luke-Bryan\/Kick-the-Dust-Up","restricted":0,"updated_time":"2015-05-19T14:42:12Z","primary_genres":{"music_genre_list":[{"music_genre":{"music_genre_id":6,"music_genre_parent_id":34,"music_genre_name":"Country","music_genre_name_extended":"Country","music_genre_vanity":"Country"}}]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":74310319,"track_mbid":"","track_isrc":"QM7XC1400004","track_spotify_id":"3QUIWvYaOUWD6ZhmbzXiT9","track_soundcloud_id":188851958,"track_xboxmusic_id":"music.5505B408-0100-11DB-89CA-0019B92A3933","track_name":"Trap Queen","track_name_translation_list":[],"track_rating":98,"track_length":222,"commontrack_id":40811917,"instrumental":0,"explicit":1,"has_lyrics":1,"has_subtitles":1,"num_favourite":2479,"lyrics_id":10766905,"subtitle_id":5416106,"album_id":19715463,"album_name":"Trap Queen","artist_id":27951042,"artist_mbid":"e3492ea0-5997-4241-a7bf-2fd7fb1bfad1","artist_name":"Fetty Wap","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/8\/5\/8\/8\/8\/30888581.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/8\/5\/8\/8\/8\/30888581_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/8\/5\/8\/8\/8\/30888581_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/1\/8\/5\/8\/8\/8\/30888581_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Fetty-Wap\/Trap-Queen","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Fetty-Wap\/Trap-Queen?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Fetty-Wap\/Trap-Queen","restricted":0,"updated_time":"2015-03-16T14:45:24Z","primary_genres":{"music_genre_list":[{"music_genre":{"music_genre_id":18,"music_genre_parent_id":34,"music_genre_name":"Hip Hop\/Rap","music_genre_name_extended":"Hip Hop\/Rap","music_genre_vanity":"Hip-Hop-Rap"}}]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":82720667,"track_mbid":"","track_isrc":"USWB11503047","track_spotify_id":"0HFx7PLqzGxSfN59j3UHmR","track_soundcloud_id":198899833,"track_xboxmusic_id":"music.3F4ED808-0100-11DB-89CA-0019B92A3933","track_name":"Want to Want Me","track_name_translation_list":[],"track_rating":100,"track_length":208,"commontrack_id":45020954,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":1661,"lyrics_id":10990902,"subtitle_id":5484544,"album_id":20753156,"album_name":"Everything Is 4","artist_id":478014,"artist_mbid":"6de0f914-3e60-4418-be3b-42e0feb6eb4d","artist_name":"Jason Derulo","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/9\/9\/3\/6\/2\/9\/31926399.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/9\/9\/3\/6\/2\/9\/31926399_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/9\/9\/3\/6\/2\/9\/31926399_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/9\/9\/3\/6\/2\/9\/31926399_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Jason-Derulo\/Want-to-Want-Me","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Jason-Derulo\/Want-to-Want-Me?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Jason-Derulo\/Want-to-Want-Me","restricted":0,"updated_time":"2015-05-05T20:23:21Z","primary_genres":{"music_genre_list":[{"music_genre":{"music_genre_id":14,"music_genre_parent_id":34,"music_genre_name":"Pop","music_genre_name_extended":"Pop","music_genre_vanity":"Pop"}}]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":74365679,"track_mbid":"","track_isrc":"USSM11406291","track_spotify_id":"56sX20zTd0ju87WL2Ahihe","track_soundcloud_id":196352804,"track_xboxmusic_id":"music.C0AFBC08-0100-11DB-89CA-0019B92A3933","track_name":"Dear Future Husband","track_name_translation_list":[],"track_rating":100,"track_length":184,"commontrack_id":40375322,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":4869,"lyrics_id":10279497,"subtitle_id":5478555,"album_id":19719065,"album_name":"Title (Deluxe)","artist_id":27082592,"artist_mbid":"b2029169-2574-4305-820f-252a5fde3697","artist_name":"Meghan Trainor","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/1\/2\/9\/8\/30892183.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/1\/2\/9\/8\/30892183_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/1\/2\/9\/8\/30892183_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/1\/2\/9\/8\/30892183_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Meghan-Trainor\/Dear-Future-Husband","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Meghan-Trainor\/Dear-Future-Husband?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Meghan-Trainor\/Dear-Future-Husband","restricted":0,"updated_time":"2015-05-13T20:56:43Z","primary_genres":{"music_genre_list":[{"music_genre":{"music_genre_id":14,"music_genre_parent_id":34,"music_genre_name":"Pop","music_genre_name_extended":"Pop","music_genre_vanity":"Pop"}}]},"secondary_genres":{"music_genre_list":[]}}},{"track":{"track_id":73501297,"track_mbid":"","track_isrc":"USSM11406644","track_spotify_id":"41Fflg7qHiVOD6dEPvsCzO","track_soundcloud_id":200802748,"track_xboxmusic_id":"music.2FE1C508-0100-11DB-89CA-0019B92A3933","track_name":"Worth It","track_name_translation_list":[],"track_rating":63,"track_length":225,"commontrack_id":43454166,"instrumental":0,"explicit":0,"has_lyrics":1,"has_subtitles":1,"num_favourite":3616,"lyrics_id":10659447,"subtitle_id":5484564,"album_id":19653470,"album_name":"Reflection (Deluxe)","artist_id":28289154,"artist_mbid":"","artist_name":"Fifth Harmony feat. Kid Ink","album_coverart_100x100":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/5\/6\/2\/8\/30826583.jpg","album_coverart_350x350":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/5\/6\/2\/8\/30826583_350_350.jpg","album_coverart_500x500":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/5\/6\/2\/8\/30826583_500_500.jpg","album_coverart_800x800":"http:\/\/s.mxmcdn.net\/images-storage\/albums\/3\/8\/5\/6\/2\/8\/30826583_800_800.jpg","track_share_url":"https:\/\/www.musixmatch.com\/lyrics\/Fifth-Harmony-feat-Kid-Ink\/Worth-It","track_edit_url":"https:\/\/www.musixmatch.com\/lyrics\/Fifth-Harmony-feat-Kid-Ink\/Worth-It?utm_source=application&utm_campaign=api&utm_medium=mxm","commontrack_vanity_id":"Fifth-Harmony-feat-Kid-Ink\/Worth-It","restricted":0,"updated_time":"2015-04-26T18:03:52Z","primary_genres":{"music_genre_list":[]},"secondary_genres":{"music_genre_list":[]}}}]}}};
	var tagUrlBase = "http://ec2-23-20-32-78.compute-1.amazonaws.com/lyrics_tagger/v1/tags?trackID=";

	// Constants
	var NOT_FOUND = -1;
	var TAG_BG_COLOR = "#5ECF81";


	var tagUrls = [];
	// An array of objects, each object holding data of a single track
	var trackDatas = loadedData.message.body.track_list;
	trackDatas.forEach(function(trackData) {
		var currentTrackId = trackData.track.track_id;
		tagUrls.push(tagUrlBase+currentTrackId);
	});

	var tagPromises = [];
	tagUrls.forEach(function(tagUrl) {
		tagPromises.push(getTagPromise(tagUrl));
	});

	Promise.all(tagPromises).then(function() {
		init();
	});


	// Once data has finished loading we can run the following 
	function init() {
		// hide the loader
		$('.loader').addClass('hidden');

		// Constants
		var SELECTED_TAG_NAME = "selected";
		var TAG_BG_COLOR = "#5ECF81";

		// Rearranges the tag data array to descending order by the tag rating 
		tagData.sort(descBy('tagRating'));


		// Append data to DOM 
		var tagContainer = $('.tagContainer');
		var templateTag = Handlebars.compile($("#template-tag").html());
		tagContainer.append(templateTag(tagData));

		tagContainer.on('click', function(event){
			if($(event.target).hasClass('tag')) { // User clicked on a tag div
				var clickedTag = $(event.target);
				// Index of data corresponding to the clicked tag in tagData array
				var dataIndex = clickedTag.attr('data-index');
				if(clickedTag.hasClass('selected')) {
					var originalColor = tagData[dataIndex].bgColor;

					ChartManager.chartManager.removeData(tagData[dataIndex].tagName);
					// Remove the currently applied background color
					ColorManager.colorManager.removeColor(clickedTag.css('background-color'));
					deselect(clickedTag, originalColor);
				} else {
					var newColor = ColorManager.colorManager.getColor();
					select(clickedTag, newColor);
					ChartManager.chartManager.insertInChart(tagData[dataIndex].tagName, tagData[dataIndex].tagRating, newColor);
				}


			}
		});

	}

	//////// Utility Functions 

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
	function deselect(tagDOMEl, bgColor){
		tagDOMEl.removeClass(SELECTED_TAG_NAME);
		tagDOMEl.css('background-color',  bgColor);
	}

	/*
	* Function : select(tag DOM element, Background color to apply)
	* ------------------------------------------------------------------------
	*/
	function select(tagDOMEl, backgroundColor) {
		tagDOMEl.addClass(SELECTED_TAG_NAME);
		tagDOMEl.css('background-color', backgroundColor);
	}

	// Returns a new promise to get a new url
	function getJSON(url) {
		return $.getJSON(url);
	}

	function getTagPromise(tagUrl) {
		return new Promise(function(resolve, reject) {
			getJSON(tagUrl).then(function(response) {
				tagNames = response['tags'];
				tagRatings = response['tags_rating'];
				tagNames.forEach(function(tagName, index) {
					addNewTagData(tagRatings[index], tagName);
				});
				resolve();
			});
		});
	}


	var colorShader = 0;
	// Pushes new data into the tagData Array, avoids duplicate data
	var addNewTagData = function(newTagRating, newTagName) {
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
					tagRating : newTagRating,
					bgColor : ColorManager.colorManager.shadeColor(TAG_BG_COLOR, (colorShader++)* 1.4)
				}
			);
		}

	}


})();
