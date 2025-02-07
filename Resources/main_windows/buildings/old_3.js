// Hi Rob, here is your file and folder, add ui.js or whatever you want to your folder
var win = Titanium.UI.currentWindow;
win.backgroundImage('images/paper.jpg');

//var number = Ti.UI.currentWindow.number;

// create table view data object

var data = [
{leftImage:'images/house1.jpg', title:'Metal Works', hasChild:true, header:'Buildings', urlink:'metalworks.js'},
{leftImage:'images/house1.jpg', title:'Tollgate', hasChild:true, urlink:'tollgate.js'},
{leftImage:'images/house1.jpg', title:'Shop', hasChild:true, urlink:'shop.js'}
];

// create auto' view
var tableview = Titanium.UI.createTableView({
    data:data,
    style:Titanium.UI.iPhone.TableViewStyle.GROUPED
});


// create table view event listener
tableview.addEventListener('click', function(e)
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

// add table view to the window
Titanium.UI.currentWindow.add(tableview);
