// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();
//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({  
    title:'Custom Rows',
    backgroundColor:'#fff'
});

//var win1 = Titanium.UI.currentWindow;

var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_views.png',
    title:'Custom Rows',
    window:win1
});

var TheTable = Titanium.UI.createTableView({});

var CustomData = [
{ flag:'images/house1.jpg', country:"Spain", trend:'up.png', percent:'28%' ,hasChild:true },
{ flag:'images/house1.jpg', country:"United Kingdom", trend:'down.png', percent:'-3%', hasChild:true },
{ flag:'images/house1.jpg', country:"United States", trend:'up.png', percent:'8%', hasChild:true },
{ flag:'images/house1.jpg', country:"France", trend:'down.png', percent:'-40%', hasChild:true }

];

var data=[];

for (var i = CustomData.length - 1; i >= 0; i--){

	var row = Titanium.UI.createTableViewRow();

	var flag =  Titanium.UI.createView({
		backgroundImage:CustomData[i].flag,
		width:76,
		height:50,
		left:4,
		top:2
	});
	var country = Titanium.UI.createLabel({
		text:CustomData[i].country,
		font:{fontSize:16,fontWeight:'bold'},
		width:'auto',
		color:'#000',
		textAlign:'left',
		top:2,
		left:100,
		height:'auto'
	});
	var percent =  Titanium.UI.createLabel({
		text:CustomData[i].percent,
		font:{fontSize:12,fontWeight:'bold'},
		width:'auto',
		color:'#000',
		textAlign:'left',
		bottom:0,
		left:100,
		height:'auto'
	});
	var trend =  Titanium.UI.createImageView({
		image:CustomData[i].trend,
		width:16,
		height:16,
		right:10
	});

	row.add(flag);
	row.add(country);
	row.add(percent);
	row.add(trend);
	row.hasChild=CustomData[i].hasChild;
	row.className = 'coutry_row';

	data.push(row);
};

TheTable.setData(data);

win1.add(TheTable);
//
//  add tabs
//
tabGroup.addTab(tab1);  
// open tab group
tabGroup.open();
