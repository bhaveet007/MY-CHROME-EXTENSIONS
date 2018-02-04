var contextsList = ["selection","link","image","page"];

for(i=0;i<contextsList.length;i++){
var context = contextsList[i];
var titleX = "Twitter toolkit: share this "+context+" on your twitter profile ";
	chrome.contextMenus.create({
		title:" Twitter Social toolkit!",
		contexts:[context],
		onclick: myFunction,
		id:context
	});}
	//selection,name,text,image.
function myFunction(data) {
	switch(data.menuItemId){
	
	case 'selection' :
	chrome.tabs.create({url: "https://twitter.com/intent/tweet?text="+data.selectionText});
	break;
	case 'image' :
	chrome.tabs.create({url: "https://twitter.com/intent/tweet?url="+data.srcUrl});
	break;
	case 'link' :
	chrome.tabs.create({url: "https://twitter.com/intent/tweet?url="+data.linkUrl});
	break;
	case 'page' :
	chrome.tabs.create({url: "https://twitter.com/intent/tweet?text=MyPage"});
	break;
	
	}
}

	