**This project was deprecated and no maintaince. Please use [pagings](https://github.com/composite/pagings) intead, same as this project, flexible, more simple, but no dependencies.**

# Jquery Paging

0.2.0

The pagination made simple. even you using any front-end enviroment.

[한국어 README](README.ko.md)

## What is paging? are you english dummy?

oh, sorry western users. this is a simple pagination library.
most korean users called pagination as "paging".
so, I decided named to "jquery.paging" from few years ago for korean users.

## Install

`bower install jquery.paging`

or, download ZIP, extract and place files to your script folder.

requirements: `jquery >= 1.5.0`

## Usage

```js
//I think there is no more simpler than this code.
$('#paging').paging({max:50});
//If pagination applied, you can call again without full option arguments.
//that is, you can call again that you need something change. such as change current page:
$('#paging').paging({current:2}); // you will change page 2 instead of 1 of 50 page.
//or, if you destroy pagination, write simple call below:
$('#paging').paging('destroy');
```

### `paging` options

>`className` : *(new)* the pagination container css class name. default is `"jquery-paging"`.

>`item` : item tag element name, default is `"a"`.

>`itemClass` : item tag element class, default is `"paging-item"`.

>`itemCurrent` : current page element class. this class will append with item class, default is `"selected"`.

>`format` : a content of page element, default is `"[%d]"`.

>`sideClass` : class for next and prev button, default is `"paging-side"`.

>`next` : a content of next page element. default is `"[&gt;{5}]"` `("[>{5}]")`

>`prev` : a content of prev page element. default is `"[{4}&lt;]"` `("[{4}<]")`

>`first` : a content of first page element. default is `"[1&lt;&lt;]"`

>`last` : a content of last page element. default is `"[&gt;&gt;{6}]"`

>`length` : length of display pages. default is `10`.

>`max` : defines max page. default is `1`.

>`current` : defines default page. default is `1`.

>`href` : if item tag name is 'a', activate link each item. default is `"#%d"`

>`event` : activate default events. If you click any item, change paging dynamically. usally for ajax. default is `true`.
these event will only affected when event=true.

>`onclick` : fire event if clicked any items. if you returns false, will not refresh paging. if you want apply paging but you won't any action such as link action, call `event.stopPropagation()`!

>`onprev` : init additional operation for prev button. `this` scopes prev button element(plain DOM. not jQuery!)

>`onnext` : init additional operation for next button. `this` scopes next button element(plain DOM. not jQuery!)

>`onitem` : init additional operation for each page item button. `this` scopes any page item element.

### Substitution

*(for `format`,`next`,`prev`,`href`,`first`,`last` property)*

>`{0}` = item page

>`{1}` = page length

>`{2}` = start page

>`{3}` = end page

>`{4}` = last page of prev part

>`{5}` = start page of next part

>`{6}` = max page

## Demo

[jsFiddle](https://jsfiddle.net/composite/8eyccoft/)

## Changelog

- 0.2.1 : fixed incorrect condition of show/hide the `next` and `last` button.
- 0.2.0 : remove `append` property due to unstable and unused.
added new property `className` for managing pagination container.
paging options will stored on targeted element for call again with override.
- 0.1.7 : improved onclick event.
- 0.1.6 : first and last content can be false. it will not make first or last button.
- 0.1.5 :
first and last button added. and content can appends substitution.
new option 'append' : If you set this true, paging will generate content without delete target's content. default is false.
new Substitution {6} : the last page (equal of op.max).
- 0.1.0 : initial release.


## License

MIT
