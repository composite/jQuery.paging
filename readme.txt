jQuery.Paging

a Simple Paging for jQuery

usage : $('#paging').paging({max:50});

options :
	item : item tag element name, default is "a".
	itemClass : item tag element class, default is "paging-item".
	itemCurrent : current page element class. this class will append with item class, default is "selected".
	format : a content of page element, default is "[%d]".
	sideClass : class for next and prev button, default is "paging-side".
	next : a content of next page element. default is "[&gt;{5}]" ("[>{5}]")
	prev : a content of prev page element. default is "[{4}&lt;]" ("[{4}<]")
	first : a content of first page element. default is "[1&lt;&lt;]"
	last : a content of last page element. default is "[&gt;&gt;{6}]"
	length : length of display pages. default is 10.
	max : defines max page. default is 1.
	current : defines default page. default is 1.
	href : if item tag name is 'a', activate link each item. default is "#%d"
	append : If you set true, append paging content instead of replace target's content. default is false.
	event : activate default events. If you click any item, change paging dynamically. usally for ajax. default is true.
	>these event will only affected when event=true.
	onclick : fire event if clicked any items. if you returns false, will not refresh paging.
	onprev : init additional operation for prev button. 'this' scopes prev button element(plain DOM. not jQuery!)
	onnext : init additional operation for next button. 'this' scopes next button element(plain DOM. not jQuery!)
	onitem : init additional operation for each page item button. 'this' scopes any page item element.

Substitution (for format,next,prev,href,first,last property)
{0} = item page
{1} = page length
{2} = start page
{3} = end page
{4} = last page of prev part
{5} = start page of next part
{6} = max page

changelog

0.1.0 : initial release.
0.1.5 :
first and last button added. and content can appends substitution.
new option 'append' : If you set this true, paging will generate content without delete target's content. default is false.
new Substitution {6} : the last page (equal of op.max).
0.1.6 : first and last content can be false. it will not make first or last button.
License : MIT