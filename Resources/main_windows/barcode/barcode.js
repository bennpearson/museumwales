var win = Titanium.UI.currentWindow;

// Commented out for presentation

// Titanium.Media.showCamera({
// 
	// success:function(event)
	// {
		// Titanium.UI.createAlertDialog({title:'Camera', message:'Check your Photo Gallery'}).show();
	// },
	// cancel:function()
	// {
// 
	// },
	// error:function(error)
	// {
		// // create alert
		// var a = Titanium.UI.createAlertDialog({title:'Camera'});
// 
		// // set message
		// if (error.code == Titanium.Media.NO_CAMERA)
		// {
			// a.setMessage('Device does not have video recording capabilities');
		// }
		// else
		// {
			// a.setMessage('Unexpected error: ' + error.code);
		// }
// 
		// // show alert
		// a.show();
	// },
	// saveToPhotoGallery:true,
	// allowEditing:true
// });



var TiBar = require('tibar');
var label = Titanium.UI.createLabel({
    textAlign:'center',
    width:'auto'
});

var button = Ti.UI.createButton({
	//style:Ti.UI.iPhone.SystemButtonStyle.PLAIN, 
    title: "Scan barcode",
    borderRadius:12, 
    font:{fontFamily: 'Times New Roman', fontSize:18},
    color:'#fff',
    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
    borderColor:'#b8b29c',
    borderWidth: 2,
    height:40,
    width:150,
    bottom:40
});

button.addEventListener('click', function(){
    TiBar.scan({
        // simple configuration for iPhone simulator
        configure: {
            classType: "ZBarReaderController",
            sourceType: "Album",
            cameraMode: "Default",
            symbol:{
                "QR-Code":true,
            }
        },
        success:function(data){
            Ti.API.info('TiBar success callback!');
            if(data && data.barcode){
            	if (data.barcode == 'Gwalia Stores') {
					var tt = Titanium.UI.create2DMatrix();
					tt = tt.scale(0);
				
				
				    var help = Titanium.UI.createWindow({
						backgroundColor:'#336699',
						backgroundImage:'../../barcode_gwalia.png',
						height:480,
						width:320,
						top:0,
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
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
				    title: "Close",
				    borderRadius:12, 
				    font:{fontFamily: 'Times New Roman', fontSize:18},
				    color:'#fff',
				    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
				    borderColor:'#b8b29c',
				    borderWidth: 2,
				    height:40,
				    width:100,
				    bottom:50,
				    left: 50
					});
					
					helpclose.addEventListener('click', function()
					{
						var tt3 = Titanium.UI.create2DMatrix();
						tt3 = tt3.scale(0);
						help.close({transform:tt3,duration:300});
					});
					
					// create a button to close window
					var moreInfo = Titanium.UI.createButton({
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
				    title: "More info",
				    borderRadius:12, 
				    font:{fontFamily: 'Times New Roman', fontSize:18},
				    color:'#fff',
				    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
				    borderColor:'#b8b29c',
				    borderWidth: 2,
				    height:40,
				    width:100,
				    bottom:50,
				    left: 170
					});
					
					
					moreInfo.addEventListener('click',function()
					{
					    win = Titanium.UI.createWindow({
					        title:'Tollhouse',
					        url: '../buildings/toll_house.js'
					    });
					    Titanium.UI.currentTab.open(win,{animated:true});
					    help.close();
					});
				
				
					help.add(helpclose);
					help.add(moreInfo);
				    help.open(aa);

                }  else if (data.barcode == 'Tollhouse') {
					var tt = Titanium.UI.create2DMatrix();
					tt = tt.scale(0);
				
				
				    var help = Titanium.UI.createWindow({
						backgroundColor:'#336699',
						backgroundImage:'../../barcode_tollhouse.png',
						height:480,
						width:320,
						top:0,
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
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
				    title: "Close",
				    borderRadius:12, 
				    font:{fontFamily: 'Times New Roman', fontSize:18},
				    color:'#fff',
				    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
				    borderColor:'#b8b29c',
				    borderWidth: 2,
				    height:40,
				    width:100,
				    bottom:50,
				    left: 50
					});
					
					helpclose.addEventListener('click', function()
					{
						var tt3 = Titanium.UI.create2DMatrix();
						tt3 = tt3.scale(0);
						help.close({transform:tt3,duration:300});
					});
					
					// create a button to close window
					var moreInfo = Titanium.UI.createButton({
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
				    title: "More info",
				    borderRadius:12, 
				    font:{fontFamily: 'Times New Roman', fontSize:18},
				    color:'#fff',
				    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
				    borderColor:'#b8b29c',
				    borderWidth: 2,
				    height:40,
				    width:100,
				    bottom:50,
				    left: 170
					});
					
					
					moreInfo.addEventListener('click',function()
					{
					    win = Titanium.UI.createWindow({
					        title:'Tollhouse',
					        url: '../buildings/toll_house.js'
					    });
					    Titanium.UI.currentTab.open(win,{animated:true});
					    help.close();
					});
				
				
					help.add(helpclose);
					help.add(moreInfo);
				    help.open(aa);

                } else if (data.barcode == 'St Marys School') {
					var tt = Titanium.UI.create2DMatrix();
					tt = tt.scale(0);
				
				
				    var help = Titanium.UI.createWindow({
						backgroundColor:'#336699',
						backgroundImage:'../../barcode_stmarys.png',
						height:480,
						width:320,
						top:0,
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
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
				    title: "Close",
				    borderRadius:12, 
				    font:{fontFamily: 'Times New Roman', fontSize:18},
				    color:'#fff',
				    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
				    borderColor:'#b8b29c',
				    borderWidth: 2,
				    height:40,
				    width:100,
				    bottom:50,
				    left: 50
					});
					
					helpclose.addEventListener('click', function()
					{
						var tt3 = Titanium.UI.create2DMatrix();
						tt3 = tt3.scale(0);
						help.close({transform:tt3,duration:300});
					});
					
					// create a button to close window
					var moreInfo = Titanium.UI.createButton({
					style:Titanium.UI.iPhone.SystemButtonStyle.PLAIN, 
				    title: "More info",
				    borderRadius:12, 
				    font:{fontFamily: 'Times New Roman', fontSize:18},
				    color:'#fff',
				    backgroundGradient:{type:'linear', colors:['#3a1b0a','#3a1b0a'], startPoint:{x:0,y:0}, endPoint:{x:3,y:80}, backFillStart:false}, 
				    borderColor:'#b8b29c',
				    borderWidth: 2,
				    height:40,
				    width:100,
				    bottom:50,
				    left: 170
					});
					
					
					moreInfo.addEventListener('click',function()
					{
					    win = Titanium.UI.createWindow({
					        title:'Tollhouse',
					        url: '../buildings/toll_house.js'
					    });
					    Titanium.UI.currentTab.open(win,{animated:true});
					    help.close();
					});
				
				
					help.add(helpclose);
					help.add(moreInfo);
				    help.open(aa);

                } else{
	                Ti.UI.createAlertDialog({
	                    title: "Scan result",
	                    message: "Barcode: " + data.barcode + " Symbology:" + data.symbology
	                }).show();                };
            }
        },
        cancel:function(){
            Ti.API.info('TiBar cancel callback!');
        },
        error:function(){
            Ti.API.info('TiBar error callback!');
        }
    });        
});

var barcodeImages = Ti.UI.createImageView({
	image:'../../barcodeImage.png',
	width:280,
	height:320,
	top:10
});

win.add(barcodeImages);	
win.add(label);
win.add(button);
