var win = Titanium.UI.currentWindow;
var number = Ti.UI.currentWindow.number;

// create table view data object

var data = [
{title:'Metal Works', hasChild:true, header:'Buildings', urlink:'metalworks.js'},
{title:'Tollgate', hasChild:true, urlink:'tollgate.js'},
{title:'Shop', hasChild:true, urlink:'shop.js'}
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
            url:e.rowData.urlink,
            title:e.rowData.title
        });
        Titanium.UI.currentTab.open(win,{animated:true});
    }
});

// add table view to the window
Titanium.UI.currentWindow.add(tableview);