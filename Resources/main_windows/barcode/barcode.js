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
    title: "Scan barcode",
    height:50,
    width:250,
    bottom:20
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

                }  else if (data.barcode == 'Tollhouse') {
	                Ti.UI.createAlertDialog({
	                    title: "Scan result",
	                    message: "Yo: " + data.barcode + " Symbology:" + data.symbology
	                }).show();
                } else if (data.barcode == 'St Marys School') {
	                Ti.UI.createAlertDialog({
	                    title: "Scan result",
	                    message: "Boo: " + data.barcode + " Symbology:" + data.symbology
	                }).show();
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
	height:260,
	top:10
});

win.add(barcodeImages);	
win.add(label);
win.add(button);
