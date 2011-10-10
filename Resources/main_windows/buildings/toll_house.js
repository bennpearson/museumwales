var win = Titanium.UI.currentWindow;
win.backgroundImage= 'images/android/back.jpg';
win.height= 410;
win.width= 320;
win.top= 0;
win.backgroundColor= '#000';

var number = Ti.UI.currentWindow.number;
// row

/// Top Image
var headerview = Ti.UI.createView({
	top: 0,
	height:100
});

var label = Ti.UI.createLabel({ 
	height: 100,
	width: 320,
	top: 0,
	backgroundImage: 'images/tollhouse.jpg',
	backgroundColor:'#000'
});
headerview.add(label);
// Top Image End ***

// Left Image
var contentview = Ti.UI.createView({
	top: 100,
	height:140,
	width: 320,
	//backgroundColor:'#fff'
});

// var imageview = Ti.UI.createView({
	// backgroundImage: '/main_windows/buildings/images/android/Tollhouse.png',
	// width: 120,
    // height: 88,
    // left: 1
// });

var imageview = Ti.UI.createView({
	backgroundImage: '/main_windows/buildings/images/gallery.png', 
	height:87, 
	width:137, 
	left:5
});

contentview.add(imageview);
// Left Image End

// Music Player
var sound = Ti.Media.createSound({
	url:'/main_windows/buildings/Kalimba.mp3', preload:true
});

var play = Titanium.UI.createButton({
	backgroundImage: '/main_windows/buildings/images/music.png', 
	height:87, 
	width:137, 
	right:5
});

play.addEventListener('click', function() {
  sound.play();
});
contentview.add(play);
// Music end

// Text Content
var textview = Ti.UI.createView({
	top: 0,
	touchEnabled: 'true',
	height: 'auto'
});
var titlelabel = Ti.UI.createLabel({
	top: 0,
	width: 320,
	left: 5,
	height: 'auto',
	//backgroundColor:'#fff',
	font:{fontFamily: 'serif', fontSize:16, fontWeight:'bold'},
	color: '#271004',
    textAlign: 'left',
    text: 'INFORMATION'
});	
var textlabel = Ti.UI.createLabel({
	top: 18,
	width: 320,
	left: 5,
	right: 5,
	height: 'auto',
	//backgroundColor:'#fff',
	font:{fontFamily: 'serif', fontSize:12, fontWeight:'normal'},
	color: '#000',
    textAlign: 'left',
	text: 'The condition of most Welsh roads was poor until the late 18th century when local gentry began to build private or turnpike roads for which tolls were charged. This tollhouse was the Aberystwyth South Gate. The building and its gates cost £40 to erect, nearly four times what a mud and thatch cottage like Nant Wallter would have cost. It was built of local slatestone and was roofed with Pembrokeshire slates. David Jones of Dihewyd was appointed as the first gatekeeper in November 1771, the first tolls being charged on 23 March 1772.\n \n The building contains just one room, one end being used for the collection of tolls. A single fireplace at the opposite end of the house was used for heating and cooking.\n \n The house has been furnished in the style of 1843, the period of the Rebecca Riots when many tollgates were destroyed. Tollhouses were very unpopular with people in rural areas who had to pay to travel along the roads; the ensuing riots resulted in the eventual abolition of most of the Turnpike Trusts in 1864, with county councils taking over responsibility for building and maintaining the roads.'
});

var imageBtn = Ti.UI.createImageView({
	url: '/main_windows/buildings/images/riots.png',
	top: 0,
	width: 320,
    height: 'auto',
});

textview.add(titlelabel);
textview.add(textlabel);

var texttableview = Ti.UI.createScrollView({
	scrollType: 'vertical',
	top: 240,
	height: 'auto'
});
texttableview.add(textview);
// Text End

//win.add(ta1);
win.add(headerview);
win.add(contentview);
win.add(texttableview);

imageview.addEventListener('click', function() {
	var texttableview = Titanium.UI.createScrollView({
	imageBtn:imageBtn,
	width: 320,
	heighht: 'auto',
	scrollType: 'horizontal'
});
	Titanium.UI.currentTab.open(texttableview,{animated:true});
});