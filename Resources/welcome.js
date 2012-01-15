// use a closure to (a) test it and (b) not expose this into global scope

	// window container
	var welcomeWindow = Titanium.UI.createWindow({
		height:480,
		width:320,
		backgroundColor:'#fff',
		opacity:1,
		top:0,
  		backgroundImage: 'main_windows/map/images/back-iphone.jpg',
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
		width:280,
		height:380,
		top:10
	});
	
	// create a button to close window
	var welcomeClose = Titanium.UI.createButton({
	//	style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
	    title: "Start",
	    borderRadius:12, 
	    font:{fontFamily: 'Times New Roman', fontSize:18},
	    color:'#fff',
	    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
	    borderColor:'#b8b29c',
	    borderWidth: 2,
	    height:40,
	    width:100,
	    bottom:60		
	});	
	
	var t = Titanium.UI.create2DMatrix();
	
	welcomeClose.addEventListener('click', function()
	{
		var tt3 = Titanium.UI.create2DMatrix();
		tt3 = tt3.scale(0);
		welcomeWindow.close({transform:tt3,duration:300});
	});
	
	welcomeWindow.add(iconImages);	
	welcomeWindow.add(welcomeClose);
	welcomeWindow.open();


	

