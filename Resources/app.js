// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({   
	url:'/main_windows/map/map.js',
    title:'Map',
    navBarHidden:true,
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'icon_map.png',
    title:'Map',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

//
// create controls tab and root window
//
var win2 = Titanium.UI.createWindow({  
	url:'/main_windows/barcode/barcode.js',
    title:'Barcode',
    navBarHidden:true,
   // barImage: 'images/wood.png',
  	backgroundImage: 'main_windows/map/images/back-iphone.jpg',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'icon_barcode.png',
    title:'Barcode',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win2.add(label2);

//
// create controls tab and root window
//
var win3 = Titanium.UI.createWindow({  
	url:'/main_windows/buildings/buildings.js',
    title:'Buildings',
    navBarHidden:true,
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'icon_buildings.png',
    title:'Buildings',
    window:win3
});

var label3 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win3.add(label3);

//
// create controls tab and root window
//
var win4 = Titanium.UI.createWindow({  
	url:'/main_windows/info/info.js',
    backgroundColor:'#fff'
});
var tab4 = Titanium.UI.createTab({  
    icon:'icon_settings.png',
    title:'Settings',
    window:win4
});

var label4 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);

//
// create controls tab and root window
//
var win5 = Titanium.UI.createWindow({  
	url:'/main_windows/virtualtour/virtualtour.js',
    backgroundColor:'#fff',
    navBarHidden:true,
    backgroundImage:'vrtour.png'
});
var tab5 = Titanium.UI.createTab({  
    icon:'icon_vrtour.png',
    title:'Tour',
    window:win5
});

var label5 = Titanium.UI.createLabel({
	color:'#999',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win4.add(label4);


//
//  add tabs
//

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2);  
tabGroup.addTab(tab3);
tabGroup.addTab(tab5);
tabGroup.addTab(tab4);


// open tab group
tabGroup.open({
	transition:Titanium.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT
});

// splash screen
Ti.include("welcome.js");
