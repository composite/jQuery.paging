jQuery.Paging

a Simple Paging for jQuery

usage : $('#paging').paging({max:50});
will display as : [1][2][3][4][5][6][7][8][9][10][>]

options :
	item : item tag element name, default is "a".
	itemClass : item tag element class, default is "paging-item".
	itemCurrent : current page element class. this class will append with item class, default is "selected".
	format : a content of page element, default is "[%d]".
	sideClass : class for next and prev button, default is "paging-side".
	next : a content of next page element. default is "[&gt;]" ("[>]")
	prev : a content of prev page element. default is "[&lt;]" ("[<]")
	length : length of display pages. default is 10.
	max : defines max page. default is 1.
	current : defines default page. default is 1.
	href : if item tag name is 'a', activate link each item. default is "#%d"
	event : activate default events. If you click any item, change paging dynamically. usally for ajax. default is true.
	>these event will only affected when event=true.
	onclick : fire event if clicked any items. if you returns false, will not refresh paging.
	onprev : init additional operation for prev button. 'this' scopes prev button element(plain DOM. not jQuery!)
	onnext : init additional operation for next button. 'this' scopes next button element(plain DOM. not jQuery!)
	onitem : init additional operation for each page item button. 'this' scopes any page item element.

subtitudes (for format,next,prev property)
{0} = item page
{1} = page length
{2} = start page
{3} = end page
{4} = start page of prev part
{5} = end page of next part