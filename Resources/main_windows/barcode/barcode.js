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
            	if (data.barcode == 'Been Pearson') {
	                Ti.UI.createAlertDialog({
	                    title: "Scan result",
	                    message: "Hello: " + data.barcode + " Symbology:" + data.symbology
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
