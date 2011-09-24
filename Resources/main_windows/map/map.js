


var win = Titanium.UI.currentWindow;



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
	help.add(helpclose);
	helpclose.addEventListener('click', function()
	{
		var tt3 = Titanium.UI.create2DMatrix();
		tt3 = tt3.scale(0);
		help.close({transform:tt3,duration:300});
	});

	help.open(aa);

});   

// the help window ends here



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
		borderWidth:8,
		borderColor:'#999',
		height:300,
		width:300,
		borderRadius:10,
		top:55,
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

