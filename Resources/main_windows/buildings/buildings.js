
// this sets the background color of the master UIView (when there are no windows/tab groups on it)

if (Ti.Platform.osname == 'android')
{
    Titanium.UI.setBackgroundColor('#000');
    
    // create Window 2
     var win1 = Titanium.UI.createWindow({
        backgroundImage: 'images/iphone/back-iphone.jpg',
        height: 410,
        width: 320,
        top: 0,
        backgroundColor:'#000'
    });
    
    var headerView = Ti.UI.createView({
        top: 0,
        height:100
    });
    
    var label = Ti.UI.createLabel({ 
       //text:'Buildings', 
       //textAlign:'center',
       //font: {fontFamily: 'Verdana', fontSize:25}, 
       //color: '#000',
       height: 100,
       width: 320,
       top: 0,
       backgroundImage: 'images/iphone/Buildings.jpg'
    });
    
    var TheTable = Titanium.UI.createTableView({
        headerView:headerView,
        style:Titanium.UI.iPhone.TableViewStyle.GROUPED
    });
    var CustomData = [
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Hayshed", buildingDate:'1870', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Aluminium Prefab Bungalow", buildingDate:'1948', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Rhyd-y-car", buildingDate:'1800', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Communal oven", buildingDate:'1800', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Smithy", buildingDate:'18th century', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Saddler’s workshop", buildingDate:'1926', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/MaestirSchool.png', buildingName:"Maestir School", buildingDate:'1880-1916', urlink:'maestirschool.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Clogmaker’s workshop", buildingDate:'Opening 2011', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Hendre-wen Barn", buildingDate:'1600', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"The Battle of St Fagans", buildingDate:'8 May 1648', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Y Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"St Teilo’s church", buildingDate:'12th – 16th century', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Timber circle", buildingDate:'Reconstructed 1998', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Haverfordwest Trader’s House", buildingDate:'Under construction', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Gorse mill", buildingDate:'1842', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Celtic village", buildingDate:'Re-created 1992', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Tannery", buildingDate:'late 18th century', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Sawmill", buildingDate:'1892', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Pottery", buildingDate:'1900', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Workmen’s Institute", buildingDate:'1916', urlink:'Toll House.js' },
    { leftImage:'images/iphone/GwaliaStores.png', buildingName:"Gwalia Stores", buildingDate:'1880', urlink:'gwaliastores.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Cockpit", buildingDate:'17th century', urlink:'Old Farm House.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Post Office", buildingDate:'1936', urlink:'Old Farmhouse.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Tailor’s Shop", buildingDate:'1896', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'metalworks.js' },
    { leftImage:'images/iphone/Tollhouse.png', buildingName:"Tollhouse", buildingDate:'1772', urlink:'tollhouse.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Cae Adda Byre", buildingDate:'late 18th - early 19th century', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Llainfadyn Cottage", buildingDate:'1762', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Nant Wallter cottage", buildingDate:'1770', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Hendre’r-ywydd Uchaf Farmhouse", buildingDate:'1508', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Llwyn-yr-eos Farmstead", buildingDate:'1820 onwards', urlink:'Old Farm House.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Melin Bomprene", buildingDate:'1852-3', urlink:'Shop.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Circular pigsty", buildingDate:'1800', urlink:'Toll House.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Kennixton Farmhouse", buildingDate:'1610', urlink:'Abernodwydd.js' }
    ];


    var data=[];

    for (var i = CustomData.length - 1; i >= 0; i--){
        
        var row = Titanium.UI.createTableViewRow({
            selectedBackgroundImage: 'images/iphone/rollOver-iphone.jpg',
            top:0,
            width:380,
            height:100
        });
        
        var leftImage =  Titanium.UI.createView({
            backgroundImage:CustomData[i].leftImage,
            width: 120,
            height: 88,
            left: 1
        });
        var buildingName = Titanium.UI.createLabel({
            text:CustomData[i].buildingName,
            font:{fontFamily: 'Times New Roman', fontSize:18},
            width: 'auto',
            color: '#271004',
            textAlign: 'left',
            top: 22,
            left: 132,
            width: 137,
            height: 'auto'
        });
        var buildingDate =  Titanium.UI.createLabel({
            text:CustomData[i].buildingDate,
            font:{fontFamily: 'Times New Roman', fontSize:12, fontWeight:'bold'},
            width: 'auto',
            color: '#64371b',
            textAlign: 'left',
            bottom: 22,
            left: 132,
            width: 137,
            height:'auto'
        });
        var pattern =  Titanium.UI.createImageView({
            image: 'images/iphone/pattern-iphone.png',
            width: 140,
            height: 120,
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
} else if (Ti.Platform.osname == "iphone")
{
    Titanium.UI.setBackgroundColor('#000');
    
    // create Window 2
    var win1 = Titanium.UI.createWindow({
        backgroundImage: 'images/iphone/back-iphone.jpg',
        height: 410,
        width: 320,
        top: 0,
        backgroundColor:'#000'
    });
    
    var headerView = Ti.UI.createView({
        top: 0,
        height:100
    });
    
    var label = Ti.UI.createLabel({ 
       //text:'Buildings', 
       //textAlign:'center',
       //font: {fontFamily: 'Verdana', fontSize:25}, 
       //color: '#000',
       height: 100,
       width: 320,
       top: 0,
       backgroundImage: 'images/iphone/Buildings.jpg'
    });
    
    var TheTable = Titanium.UI.createTableView({
        headerView:headerView,
        top: 0,
        backgroundColor:'transparent',
           //rowBackgroundColor:'#000',
        style:Titanium.UI.iPhone.TableViewStyle.PLAIN
    });
        var CustomData = [
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Hayshed", buildingDate:'1870', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Cilewent Farmhouse", buildingDate:'1470', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Aluminium Prefab Bungalow", buildingDate:'1948', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Rhyd-y-car", buildingDate:'1800', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Communal oven", buildingDate:'1800', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Smithy", buildingDate:'18th century', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Saddler’s workshop", buildingDate:'1926', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/MaestirSchool.png', buildingName:"Maestir School", buildingDate:'1880-1916', urlink:'maestirschool.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Clogmaker’s workshop", buildingDate:'Opening 2011', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Hendre-wen Barn", buildingDate:'1600', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"The Battle of St Fagans", buildingDate:'8 May 1648', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Y Garreg Fawr Farmhouse", buildingDate:'1544', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"St Teilo’s church", buildingDate:'12th – 16th century', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Timber circle", buildingDate:'Reconstructed 1998', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Haverfordwest Trader’s House", buildingDate:'Under construction', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Gorse mill", buildingDate:'1842', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Celtic village", buildingDate:'Re-created 1992', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Tannery", buildingDate:'late 18th century', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Sawmill", buildingDate:'1892', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Pottery", buildingDate:'1900', urlink:'Abernodwydd.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Workmen’s Institute", buildingDate:'1916', urlink:'Toll House.js' },
    { leftImage:'images/iphone/GwaliaStores.png', buildingName:"Gwalia Stores", buildingDate:'1880', urlink:'gwaliastores.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Cockpit", buildingDate:'17th century', urlink:'Old Farm House.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Post Office", buildingDate:'1936', urlink:'Old Farmhouse.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Tailor’s Shop", buildingDate:'1896', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Derwen Bakehouse", buildingDate:'1900', urlink:'metalworks.js' },
    { leftImage:'images/iphone/Tollhouse.png', buildingName:"Tollhouse", buildingDate:'1772', urlink:'tollhouse.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Cae Adda Byre", buildingDate:'late 18th - early 19th century', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Llainfadyn Cottage", buildingDate:'1762', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Nant Wallter cottage", buildingDate:'1770', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Hendre’r-ywydd Uchaf Farmhouse", buildingDate:'1508', urlink:'metalworks.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Llwyn-yr-eos Farmstead", buildingDate:'1820 onwards', urlink:'Old Farm House.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Melin Bomprene", buildingDate:'1852-3', urlink:'Shop.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Circular pigsty", buildingDate:'1800', urlink:'Toll House.js' },
    { leftImage:'images/iphone/blankHouse.png', buildingName:"Kennixton Farmhouse", buildingDate:'1610', urlink:'Abernodwydd.js' }
    ];


    var data=[];

    for (var i = CustomData.length - 1; i >= 0; i--){
        
        var row = Titanium.UI.createTableViewRow({
            selectedBackgroundImage: 'images/iphone/rollOver-iphone.jpg',
            top:0,
            width:380,
            height:100
        });
        
        var leftImage =  Titanium.UI.createView({
            backgroundImage:CustomData[i].leftImage,
            width: 120,
            height: 88,
            left: 1
        });
        var buildingName = Titanium.UI.createLabel({
            text:CustomData[i].buildingName,
            font:{fontFamily: 'Times New Roman', fontSize:18},
            width: 'auto',
            color: '#271004',
            textAlign: 'left',
            top: 22,
            left: 132,
            width: 137,
            height: 'auto'
        });
        var buildingDate =  Titanium.UI.createLabel({
            text:CustomData[i].buildingDate,
            font:{fontFamily: 'Times New Roman', fontSize:12, fontWeight:'bold'},
            width: 'auto',
            color: '#64371b',
            textAlign: 'left',
            bottom: 22,
            left: 132,
            width: 137,
            height:'auto'
        });
        var pattern =  Titanium.UI.createImageView({
            image: 'images/iphone/pattern-iphone.png',
            width: 140,
            height: 120,
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
        
        // create table view event listener
        row.addEventListener('click', function(e)
        {
        '/main_windows/map/map.js'
        Titanium.API.info("You clicked the button");
        //backgroundSelectedImage: 'images/iphone/rollOver-iphone.jpg'
          if (e.rowData.urlink)
          {
        var win = Titanium.UI.createWindow({
            color:'#000',
            //backgroundColor:'transparent',
            rowBackgroundColor:'#000',
            top: 0,
            url:e.rowData.urlink,
            title:e.CustomData.title
        });
        Titanium.UI.currentTab.open(win,{animated:true});
    }
});
    };
}



TheTable.setData(data);
headerView.add(label);
win1.add(TheTable);

// open window
win1.open();
