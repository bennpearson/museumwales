
var UUID = Titanium.Platform.createUUID();

Ti.Geolocation.preferredProvider = "gps";

Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;

Titanium.Geolocation.distanceFilter = 10;

if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Titanium.UI.createAlertDialog({title:'Kitchen Sink', message:'Your device has geo turned off - turn it on.'}).show();
}

var currentLocationLabel = Titanium.UI.createLabel({
	text:'Current Location (One Shot)',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#111',
	top:110,
	left:10,
	height:15,
	width:300
});
win.add(currentLocationLabel);

var currentLocation = Titanium.UI.createLabel({
	text:'Current Location not fired',
	font:{fontSize:11},
	color:'#444',
	top:130,
	left:10,
	height:15,
	width:300
});
win.add(currentLocation);

var updatedLocationLabel = Titanium.UI.createLabel({
	text:'Updated Location',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#111',
	top:150,
	left:10,
	height:15,
	width:300
});
win.add(updatedLocationLabel);

var updatedLocation = Titanium.UI.createLabel({
	text:'Updated Location not fired',
	font:{fontSize:11},
	color:'#444',
	top:170,
	left:10,
	height:15,
	width:300
});
win.add(updatedLocation);

var updatedLatitude = Titanium.UI.createLabel({
	text:'',
	font:{fontSize:11},
	color:'#444',
	top:190,
	left:10,
	height:15,
	width:300
});
win.add(updatedLatitude);

var updatedLocationAccuracy = Titanium.UI.createLabel({
	text:'',
	font:{fontSize:11},
	color:'#444',
	top:210,
	left:10,
	height:15,
	width:300
});
win.add(updatedLocationAccuracy);

var updatedLocationTime = Titanium.UI.createLabel({
	text:'',
	font:{fontSize:11},
	color:'#444',
	top:230,
	left:10,
	height:15,
	width:300
});
win.add(updatedLocationTime);



var forwardGeoLabel = Titanium.UI.createLabel({
	text:'Forward Geo (Addr->Coords)',
	font:{fontSize:12, fontWeight:'bold'},
	color:'#111',
	top:250,
	left:10,
	height:15,
	width:300
});


	//
	// GET CURRENT POSITION - THIS FIRES ONCE
	//
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
		if (!e.success || e.error)
		{
			currentLocation.text = 'error: ' + JSON.stringify(e.error);
			Ti.API.info("Code translation: "+translateErrorCode(e.code));
			alert('error ' + JSON.stringify(e.error));
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;
		Ti.API.info('speed ' + speed);
		currentLocation.text = 'long:' + longitude + ' lat: ' + latitude;

		Titanium.API.info('geo - current location: ' + new Date(timestamp) + ' long ' + longitude + ' lat ' + latitude + ' accuracy ' + accuracy);
	});

	//
	// EVENT LISTENER FOR GEO EVENTS - THIS WILL FIRE REPEATEDLY (BASED ON DISTANCE FILTER)
	//
	var locationCallback = function(e)
	{
		if (!e.success || e.error)
		{
			updatedLocation.text = 'error:' + JSON.stringify(e.error);
			updatedLatitude.text = '';
			updatedLocationAccuracy.text = '';
			updatedLocationTime.text = '';
			Ti.API.info("Code translation: "+translateErrorCode(e.code));
			return;
		}

		var longitude = e.coords.longitude;
		var latitude = e.coords.latitude;
		var altitude = e.coords.altitude;
		var heading = e.coords.heading;
		var accuracy = e.coords.accuracy;
		var speed = e.coords.speed;
		var timestamp = e.coords.timestamp;
		var altitudeAccuracy = e.coords.altitudeAccuracy;

		//Titanium.Geolocation.distanceFilter = 100; //changed after first location event

		updatedLocation.text = 'long:' + longitude;
		updatedLatitude.text = 'lat: '+ latitude;
		updatedLocationAccuracy.text = 'accuracy:' + accuracy;
		updatedLocationTime.text = 'timestamp:' +new Date(timestamp);
		
	}
