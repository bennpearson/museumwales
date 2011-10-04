// use a closure to (a) test it and (b) not expose this into global scope

	// window container
	var welcomeWindow = Titanium.UI.createWindow({
		height:480,
		width:320,
		backgroundColor:'#fff',
		opacity:1,
		top:0,
		touchEnabled:true
	});


	// message
	var message = Titanium.UI.createLabel({
		text:'St Fagans',
		color:'#000',
		textAlign:'center',
		font:{fontSize:32,fontWeight:'bold'},
		height:'auto',
		width:'auto',
		top: 40
	});
	
	var iconImages = Ti.UI.createImageView({
		image:'iconImages.png',
		width:320,
		height:300,
		top:70
	});
	
	// create a button to close window
	var welcomeClose = Titanium.UI.createButton({
		title:'Close',
		height:30,
		width:150,
		top:360
	});	
	
	var t = Titanium.UI.create2DMatrix();
	
	welcomeClose.addEventListener('click', function()
	{
		var tt3 = Titanium.UI.create2DMatrix();
		tt3 = tt3.scale(0);
		welcomeWindow.close({transform:tt3,duration:300});
	});
	
	welcomeWindow.add(iconImages);	
	welcomeWindow.add(message);
	welcomeWindow.add(welcomeClose);
	welcomeWindow.open();


	

