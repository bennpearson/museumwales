// Hi Rob, here is your file and folder, add ui.js or whatever you want to your folder

var win = Titanium.UI.currentWindow;


var scrollView = Titanium.UI.createScrollView({
  contentHeight: 'auto',
  contentWidth: '525',
  maxZoomScale: 4,
  minZoomScale: 1,
  showHorizontalScrollIndicator: true,
  showVerticalScrollIndicator: true,
  top: 0,
  disableBounce: true,
  backgroundColor: '#ffffcc',
});

image = Titanium.UI.createImageView({
  image: 'images/mapbg.jpg',
});

image2 = Titanium.UI.createImageView({
  backgroundColor: 'blue',
  width:10,
  height:10,
  left:72,
  top: 110
});

image2.addEventListener('click', function(event){
	if(image2.backgroundColor == 'blue') {
		image2.backgroundColor = 'green';
	} 
	else {
		image2.backgroundColor = 'blue';
	}
	});



image2.addEventListener('click', function()
{
	var t = Titanium.UI.create2DMatrix();
	t = t.scale(0);

	var w = Titanium.UI.createWindow   ({
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

	// create first transform to go beyond normal size
	var t1 = Titanium.UI.create2DMatrix();
	t1 = t1.scale(1.1);
	var a = Titanium.UI.createAnimation();
	a.transform = t1;
	a.duration = 200;

	// when this animation completes, scale to normal size
	a.addEventListener('complete', function()
	{
		Titanium.API.info('here in complete');
		var t2 = Titanium.UI.create2DMatrix();
		t2 = t2.scale(1.0);
		w.animate({transform:t2, duration:200});

	});

	// create a button to close window
	var b = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150
	});
	w.add(b);
	b.addEventListener('click', function()
	{
		var t3 = Titanium.UI.create2DMatrix();
		t3 = t3.scale(0);
		w.close({transform:t3,duration:300});
	});

	w.open(a);


});

image3 = Titanium.UI.createImageView({
  backgroundColor: 'blue',
  width:5,
  height:30,
  left:270,
  top: 150,
});


image.addEventListener('singletap', function(e)
{
   image.add(image3);

   
var a = Ti.UI.createAnimation();
a.left = (e.x-2.5);
a.top = (e.y-30);
a.duration = 200;
   
   image3.animate(a, function(){
   	
   });

});
	



scrollView.add(image);
scrollView.add(image2);

win.add(scrollView);


