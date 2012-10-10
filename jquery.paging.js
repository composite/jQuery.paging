(function($){
	var defs={
		item:'a',next:'[{5}&gt;]',prev:'[{4}&lt;]',format:'[{0}]',
		itemClass:'paging-item',sideClass:'paging-side',
		itemCurrent:'selected',length:10,max:1,current:1
		,href:'#%d',event:true
	},format=function(str){
		var arg=arguments;
		return str.replace(/\{(\d+)\}/g,function(m,d){
			if(+d<0) return "";
			else return arg[+d+1]||"";
		});
	},item,make=function(op,page,cls,str){
		item=document.createElement(op.item);
		item.className=cls;
		item.innerHTML=format(str,page,op.length,op.start,op.end,op.start-op.length,op.end+op.length);
		if(item.nodeName.toLowerCase()=='a') item.href=format(op.href,page);
		if(op.event){
			$(item).bind('click',function(e){
				var fired=true;
				if($.isFunction(op.onclick)) fired=op.onclick.call(item,e,page,op);
				if(fired==undefined||fired)
					op.origin.paging($.extend({},op,{current:page}));
			}).appendTo(op.origin);
			var ev='on';
			switch(str){
				case op.prev:ev+='prev';break;
				case op.next:ev+='next';break;
				default:ev+='item';break;
			}
			if($.isFunction(op[ev])) op[ev].call(item,page,op);
		}
		return item;
	};

	$.fn.paging=function(op){
		op=$.extend({origin:this},defs,op||{});this.html('');
		if(op.max<1) op.max=1; if(op.current<1) op.current=1;
		var origin=this;
		op.start=Math.floor((op.current-1)/op.length)*op.length+1;
		op.end=op.start-1+op.length;
		if(op.end>op.max) op.end=op.max;
		this.html('');
		//prev button
		if(op.current>op.length) make(op,op.start-1,op.sideClass,op.prev);
		//pages button
		for(var i=op.start;i<=op.end;i++)
			make(op,i,op.itemClass+(i==op.current?' '+op.itemCurrent:''),op.format);
		//next button
		if(op.current<=Math.floor(op.max/op.length)*op.length)
			make(op,op.end+1,op.sideClass,op.next);
	};
})(jQuery);