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
console.table(tagData);
console.log("This is something");
