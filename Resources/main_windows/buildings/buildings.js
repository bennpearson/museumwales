// this sets the background color of the master UIView (when there are no windows/tab groups on it)

if (Ti.Platform.osname == 'android')
{
		Titanium.UI.setBackgroundColor('#000');
	
	// create Window 2
	var win1 = Titanium.UI.createWindow({
		backgroundImage: 'images/android/back.jpg',
	    backgroundColor:'#000'
	});
	
	var headerView = Ti.UI.createView();
	
	var label = Ti.UI.createLabel({ 
	   //text:'Buildings', 
	   //textAlign:'center',
	   //font: {fontFamily: 'Verdana', fontSize:25}, 
	   //color: '#000',
	   height: 100,
	   width: 480,
	   backgroundImage: 'images/android/TopBarBuildings.jpg',
	   backgroundColor:'#000'
	});
	
	var TheTable = Titanium.UI.createTableView({
		headerView:headerView,
		style:Titanium.UI.iPhone.TableViewStyle.GROUPED
	});
	var CustomData = [
	{ leftImage:'images/android/Abernodwydd.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'Abernodwydd.js' },
	{ leftImage:'images/android/Toll House.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'Toll House.js' },
	{ leftImage:'images/android/Shop.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'Shop.js' },
	{ leftImage:'images/android/Old Farm House.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'Old Farm House.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'Old Farmhouse.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farmhouse.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'metalworks.js' },
	{ leftImage:'images/android/Old Farm House.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'Old Farm House.js' },
	{ leftImage:'images/android/Shop.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'Shop.js' },
	{ leftImage:'images/android/Toll House.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'Toll House.js' },
	{ leftImage:'images/android/Abernodwydd.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'Abernodwydd.js' }
	];


	var data=[];

	for (var i = CustomData.length - 1; i >= 0; i--){
		
		var row = Titanium.UI.createTableViewRow({
			backgroundSelectedImage: 'images/android/rollOver.jpg',
			height: 150
		});
		
		var leftImage =  Titanium.UI.createView({
			backgroundImage:CustomData[i].leftImage,
			width: 190,
			height: 138,
			left: 5
		});
		var buildingName = Titanium.UI.createLabel({
			text:CustomData[i].buildingName,
			font:{fontFamily: 'serif', fontSize:24},
			width: 'auto',
			color: '#271004',
			textAlign: 'left',
			top: 30,
			left: 210,
			width: 190,
			height: 'auto'
		});
		var buildingDate =  Titanium.UI.createLabel({
			text:CustomData[i].buildingDate,
			font:{fontFamily: 'serif', fontSize:18, fontWeight:'bold'},
			width: 'auto',
			color: '#64371b',
			textAlign: 'left',
			bottom: 35,
			left: 210,
			height:'auto'
		});
		var pattern =  Titanium.UI.createImageView({
			image: 'images/android/pattern.png',
			width: 185,
			height: 130,
			right: 85
		});
		var btn =  Titanium.UI.createImageView({
			image: 'images/android/btn.png',
			width: 85,
			height: 85,
			top: 32.5,
			right: 5
		});
		
		row.add(leftImage);
		row.add(buildingName);
		row.add(buildingDate);
		row.add(pattern);
		row.add(btn);
		row.className = 'building_row';
		
		data.push(row);
	};
} else if (Ti.Platform.osname == "iphone")
{
	Titanium.UI.setBackgroundColor('#000');
	
	// create Window 2
	var win1 = Titanium.UI.createWindow({
		backgroundImage: 'images/iphone/back-iphone.jpg',
	    backgroundColor:'#000'
	});
	
	var headerView = Ti.UI.createView();
	
	var label = Ti.UI.createLabel({ 
	   //text:'Buildings', 
	   //textAlign:'center',
	   //font: {fontFamily: 'Verdana', fontSize:25}, 
	   //color: '#000',
	   height: 100,
	   width: 320,
	   backgroundImage: 'images/iphone/TopBarBuildings-iphone.jpg',
	   backgroundColor:'#000'
	});
	
	var TheTable = Titanium.UI.createTableView({
		headerView:headerView,
		style:Titanium.UI.iPhone.TableViewStyle.GROUPED
	});
		var CustomData = [
	{ leftImage:'images/iphone/Abernodwydd-iphone.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'Abernodwydd.js' },
	{ leftImage:'images/iphone/Toll-iphone House.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'Toll House.js' },
	{ leftImage:'images/iphone/Shop-iphone.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'Shop.js' },
	{ leftImage:'images/iphone/Old Farm House-iphone.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'Old Farm House.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'Old Farmhouse.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farmhouse-iphone.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'metalworks.js' },
	{ leftImage:'images/iphone/Old Farm House-iphone.png', buildingName:"Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'Old Farm House.js' },
	{ leftImage:'images/iphone/Shop-iphone.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'Shop.js' },
	{ leftImage:'images/iphone/Toll House-iphone.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'Toll House.js' },
	{ leftImage:'images/iphone/Abernodwydd-iphone.png', buildingName:"Abernodwydd Farmhouse", buildingDate:'1678', urlink:'Abernodwydd.js' }
	];


	var data=[];

	for (var i = CustomData.length - 1; i >= 0; i--){
		
		var row = Titanium.UI.createTableViewRow({
			backgroundSelectedImage: 'images/iphone/rollOver-iphone.jpg',
			height: 100
		});
		
		var leftImage =  Titanium.UI.createView({
			backgroundImage:CustomData[i].leftImage,
			width: 120,
			height: 88,
			left: 10
		});
		var buildingName = Titanium.UI.createLabel({
			text:CustomData[i].buildingName,
			font:{fontFamily: 'serif', fontSize:18},
			width: 'auto',
			color: '#271004',
			textAlign: 'left',
			top: 20,
			left: 132,
			width: 137,
			height: 'auto'
		});
		var buildingDate =  Titanium.UI.createLabel({
			text:CustomData[i].buildingDate,
			font:{fontFamily: 'serif', fontSize:12, fontWeight:'bold'},
			width: 'auto',
			color: '#64371b',
			textAlign: 'left',
			bottom: 20,
			left: 132,
			height:'auto'
		});
		var pattern =  Titanium.UI.createImageView({
			image: 'images/iphone/pattern-iphone.png',
			width: 137,
			height: 80,
			right: 51
		});
		var btn =  Titanium.UI.createImageView({
			image: 'images/iphone/btn-iphone.png',
			width: 39,
			height: 39,
			right: 7
		});
		
		row.add(leftImage);
		row.add(buildingName);
		row.add(buildingDate);
		row.add(pattern);
		row.add(btn);
		row.className = 'building_row';
		
		data.push(row);
	};
}

// create table view event listener
row.addEventListener('click', function(e)
{
    if (e.rowData.urlink)
    {
         var win = Titanium.UI.createWindow({
         	color:'#000',
         	backgroundColor:'transparent',
         	rowBackgroundColor:'#000',
            url:e.rowData.urlink,
            title:e.rowData.title

        });
        Titanium.UI.currentTab.open(win,{animated:true});
    }
});

TheTable.setData(data);
headerView.add(label);
win1.add(TheTable);

// open window
win1.open();
