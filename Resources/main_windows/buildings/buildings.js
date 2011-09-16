// Hi Rob, here is your file and folder, add ui.js or whatever you want to your folder

var win = Titanium.UI.currentWindow;


// var testLabel = Titanium.UI.createLabel({
    // text:'Hello Rob',
    // color:'#000',
    // textAlign:'left',
    // font:{fontSize:14},
    // top:10,
    // left:10,
    // width:300,
    // height:'auto'
// });

var StFagonsData = [
{ title:"The Galleries"},
{ title:"Kennixton Farmhouse"},
{ title:"Bee Shelter"},
{ title:"Circular Pigsty"}
];
	var TheTable = Titanium.UI.createTableView({
	data:StFagonsData
});


win.add(StFagonsData);