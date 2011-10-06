


var win = Titanium.UI.currentWindow;

var UUID = Titanium.Platform.createUUID();


// the scrollview starts here

var scrollView = Titanium.UI.createScrollView({
  contentHeight: 'auto',
  contentWidth: '2500',
  maxZoomScale: 1,
  minZoomScale: 0.3,
  showHorizontalScrollIndicator: true,
  showVerticalScrollIndicator: true,
  top: 0,
  disableBounce: true,
  backgroundImage: 'images/background.png',
  zoomScale: 0.5,
});

  scrollView.setContentOffset({x:500 ,y:225});

// the scrollview ends here



// the help window starts here

var helpbutton = Titanium.UI.createImageView({
	height: 40,
	width: 40,
	top: 5,
	left: 5,
	image: 'images/red-question-mark.png',
	
});

helpbutton.addEventListener('singletap', function(e)


{
	var tt = Titanium.UI.create2DMatrix();
	tt = tt.scale(0);


    var help = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		backgroundImage:'images/back-iphone.jpg',
		height:358,
		width:310,
		top:49,
		opacity:0.92,
		transform:tt
	});

	// create first transform to go beyond normal size
	var tt1 = Titanium.UI.create2DMatrix();
	tt1 = tt1.scale(1.1);
	var aa = Titanium.UI.createAnimation();
	aa.transform = tt1;
	aa.duration = 400;

	// when this animation completes, scale to normal size
	aa.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var tt2 = Titanium.UI.create2DMatrix();
		tt2 = tt2.scale(1.0);
		help.animate({transform:tt2, duration:200});

	});

	// create a button to close window
	var helpclose = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150
	});
	helpclose.addEventListener('click', function()
	{
		var tt3 = Titanium.UI.create2DMatrix();
		tt3 = tt3.scale(0);
		help.close({transform:tt3,duration:300});
	});


	help.add(helpclose);
    help.open(aa);

});   

// The help window ends here



// THE GPS WINDOW STARTS HERE

var gpsbutton = Titanium.UI.createImageView({
	height: 40,
	width: 40,
	top: 50,
	left: 5,
	image: 'images/gps.png',
	
});

gpsbutton.addEventListener('singletap', function(e)


{
	var ttt = Titanium.UI.create2DMatrix();
	ttt = ttt.scale(0);


    var gps = Titanium.UI.createWindow({
		backgroundColor:'#336699',
		height:358,
		width:310,
		top:49,
		opacity:0.92,
		transform:ttt
	});

	// create first transform to go beyond normal size
	var ttt1 = Titanium.UI.create2DMatrix();
	ttt1 = ttt1.scale(1.1);
	var aaa = Titanium.UI.createAnimation();
	aaa.transform = ttt1;
	aaa.duration = 400;

	// when this animation completes, scale to normal size
	aaa.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var ttt2 = Titanium.UI.create2DMatrix();
		ttt2 = ttt2.scale(1.0);
		gps.animate({transform:ttt2, duration:200});

	});

	// create a button to close window
	var gpsclose = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150
	});
	gpsclose.addEventListener('click', function()
	{
		var ttt3 = Titanium.UI.create2DMatrix();
		ttt3 = ttt3.scale(0);
		gps.close({transform:ttt3,duration:300});
	});


//TABLE OF CHECKINS MOTHERFUCKER

var checkin = Titanium.UI.createTableView({
	});

var data=[];

	for (var i = checkInArray.length - 1; i >= 0; i--){
		
		var row = Titanium.UI.createTableViewRow({
			height: 100
		});
		
		
		var latitude = Titanium.UI.createLabel({
			text:'latitude: ' + checkInArray[i].lat,
			textAlign: 'left',
			bottom:70,
		});
		
		var longitude = Titanium.UI.createLabel({
			text:'longitude: ' + checkInArray[i].longi,
			textAlign: 'left',
			bottom:30,
		});
		
		var time = Titanium.UI.createLabel({
		text:checkInArray[i].timer,
		textAlign: 'left',
		top:15,
		});
		
		var id = Titanium.UI.createLabel({
			text:'ID: ' + UUID,
			textAlign: 'left',
			top:65,
		});
		
		
		row.add(latitude);
		row.add(longitude);
		row.add(time);
		row.add(id);
		row.className = 'checkin';
		
		data.push(row);
	};

	checkin.setData(data);

	gps.add(checkin)
	gps.add(gpsclose);
    gps.open(aaa);

});   

// GPS WINDOW ENDS HERE



// the map starts here

map = Titanium.UI.createImageView({
  image: 'images/mapbg2.jpg',
  height: 1415,
  top: 0,
});

// the map ends here



// the animation for all the building windows starts here

	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);
	
	// create first transform to go beyond normal size
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;

	// when this animation completes, scale to normal size
	Titanium.API.info('here in complete');
	var t2 = Titanium.UI.create2DMatrix();
	t2 = t2.scale(1.0);

	var t3 = Titanium.UI.create2DMatrix();
	t3 = t3.scale(0);

// the animation for all the building windows ends here



// building33 (Y Garreg Fawr Farmhouse) starts here

bimg33 = Titanium.UI.createImageView({
  width:80,
  height:90,
  left:200,
  top: 110
});

bimg33.addEventListener('click', function()
{

	var bwin33 = Titanium.UI.createWindow   ({
		backgroundColor:'#336699',
		backgroundImage:'images/back-iphone.jpg',
		//borderWidth:8,
		//borderColor:'#999',
		height:300,
		width:310,
		//borderRadius:10,
		top:49,
		opacity:0.92,
		transform:t
	});


	a.addEventListener('complete', function()
	{
		bwin33.animate({transform:t2, duration:200});

	});

	// create a button to close window
	var b33 = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150
	});
	
	bwin33.add(b33);
	
	b33.addEventListener('click', function()
	{
		bwin33.close({transform:t3,duration:300});
	});

	bwin33.open(a);

});

// building33 (Y Garreg Fawr Farmhouse) ends here



// the hand starts here

hand = Titanium.UI.createImageView({
  image: 'images/redhand.png',
  width:90,
  height:100,
  left:1300,
  top: 750,
});

map.addEventListener('singletap', function(e)
{
   map.add(hand);

   
var a = Ti.UI.createAnimation();
a.left = (e.x);
a.top = (e.y-100);
a.duration = 200;
   
   hand.animate(a, function(){
   	
   });
   

});
	
// the hand ends here


scrollView.add(map);
scrollView.add(bimg33);

win.add(scrollView);
win.add(helpbutton);
win.add(gpsbutton);




var UUID = Titanium.Platform.createUUID();

function isIPhone3_2_Plus()
{
	// add iphone specific tests
	if (Titanium.Platform.name == 'iPhone OS')
	{
		var version = Titanium.Platform.version.split(".");
		var major = parseInt(version[0],10);
		var minor = parseInt(version[1],10);
		
		// can only test this support on a 3.2+ device
		if (major > 3 || (major == 3 && minor > 1))
		{
			return true;
		}
	}
	return false;
}


if (isIPhone3_2_Plus())
{
	//NOTE: starting in 3.2+, you'll need to set the applications
	//purpose property for using Location services on iPhone
	Ti.Geolocation.purpose = "St Fagans GPS";
}


Ti.Geolocation.preferredProvider = "gps";


if (Titanium.Geolocation.locationServicesEnabled === false)
{
	Titanium.UI.createAlertDialog({title:'Kitchen Sink', message:'Your device has geo turned off - turn it on.'}).show();
}



Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
Titanium.Geolocation.distanceFilter = 0;

/* var label = Ti.UI.createLabel({
	text:'Forward Geo (Addr->Coords)',
	font:{fontSize:10, fontWeight:'bold'},
	color:'#111',
	top:250,
	left:10,
	height:15,
	width:300
	});
	
win.add(label);

*/

var checkInArray = [];

function reportPosition(e) {
    if (!e.success || e.error) {
        label.text = 'error: ' + JSON.stringify(e.error);
    }
    else {
        var accuracy = e.coords.accuracy;
        var timestamp = e.coords.timestamp;
        var longitude = e.coords.longitude;
        var latitude = e.coords.latitude;
        //label.text = UUID + ': lat: ' + latitude + ', long: ' + longitude + ', time: ' + new Date(timestamp) + ', accuracy: ' + accuracy;
        checkInArray.push({'lat':latitude,'longi':longitude, 'timer':new Date(timestamp)}); 
    }
}






// this fires once
Titanium.Geolocation.getCurrentPosition(reportPosition);
// this firces whenever hte distance filter is surpassed
Titanium.Geolocation.addEventListener('location', reportPosition);
