// Hi Me, here is your file and folder, add ui.js or whatever you want to your folder

var win = Titanium.UI.currentWindow;
<<<<<<< HEAD


var testLabel = Titanium.UI.createLabel({
    text:'Hello All',
    color:'#000',
    textAlign:'left',
    font:{fontSize:14},
    top:10,
    left:10,
    width:300,
    height:'auto'
});

win.add(testLabel);
=======
// win.layout = 'vertical';
// 
// var foo = Titanium.App.Properties.getString("foo");
// 
// var tf1 = Titanium.UI.createTextField({
	// value:foo,
	// width:250,
	// height:40,
	// top:10,
	// borderStyle:Titanium.UI.INPUT_BORDERSTYLE_ROUNDED,
	// autocorrect:false
// });
// tf1.addEventListener('return', function() {
	// tf1.blur();
// });
// tf1.addEventListener('change', function(e) {
  // Titanium.App.Properties.setString("foo",e.value);
// });
// 
// win.add(tf1);





var language = Titanium.App.Properties.getString("language");

var tf1 = Titanium.UI.createTextField({
	value:language,
	width:250,
	height:40,
	top:22,
	left:230,
	enabled:false,
	font:{textSize:10},
	color:'#777'
});

var inputData = [
	{title:'Language', hasChild:true,}
];
var tfTraslation = Titanium.UI.createTableView({
	data:inputData,
	style:Titanium.UI.iPhone.TableViewStyle.GROUPED,
	
});

tfTraslation.addEventListener('click', function(){
	
    var viewTraslation = Ti.UI.createView({
        backgroundColor: 'black',
        top: 0,
        width: 400,
        height: 400
    });
    
	
    var done = Ti.UI.createButton({
        title: 'Set',
        width: 150,
        height: 40,
        top: 250
    });
	done.addEventListener('click', function(){
		tf1.value = picker_data_traslation[selected_row_index_traslation].title;
   		Titanium.App.Properties.setString("language",picker_data_traslation[selected_row_index_traslation].title);
		if (picker_data_traslation[selected_row_index_traslation].title == 'Welsh')
		{
			win.title = 'Cyneddfau';
		}
		else
		{
			win.title = 'Settings';
		}
        win.remove(viewTraslation);
        scrollView.scrollTo(0,0);
    });
    var cancel = Ti.UI.createButton({
        title: 'Cancel',
        width: 150,
        height: 40,
        top: 310
    });
    cancel.addEventListener('click', function(){
        win.remove(viewTraslation);
        scrollView.scrollTo(0,0);
    });
	
    viewTraslation.add(done);
    viewTraslation.add(cancel);
    viewTraslation.add(picker_traslation);
    win.add(viewTraslation);
});

var picker_traslation = Ti.UI.createPicker({
    top: 10,
    width: 200,
    height: 80
});
var picker_data_traslation = [];
var j = 0;
picker_data_traslation[j++] = Ti.UI.createPickerRow({
    title: 'English'
});
picker_data_traslation[j++] = Ti.UI.createPickerRow({
    title: 'Welsh'
});
picker_traslation.add(picker_data_traslation);
// turn on the selection indicator (off by default)
picker_traslation.selectionIndicator = true;
var selected_row_index_traslation = 0;

picker_traslation.addEventListener('change', function(e){
    Ti.API.info("You selected row: " + e.rowIndex);
    selected_row_index_traslation = e.rowIndex;
});



win.add(tfTraslation);
win.add(tf1);

//
// Language Title
//

if (language == 'Welsh')
{
	win.title = 'Cyneddfau';
}
else
{
	win.title = 'Settings';
}

>>>>>>> bennbranch
