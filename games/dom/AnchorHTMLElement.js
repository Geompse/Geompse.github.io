class AnchorHTMLElement extends HTMLElement
{
	constructor(horizontal,vertical,value,className)
	{
		super();
		this.setAttribute('horizontal',horizontal);
		this.setAttribute('vertical',vertical);
		if(typeof(value) != 'undefined' && value !== '')
			this.innerHTML = value;
		if(typeof(className) != 'undefined')
			this.className = className;
		var shadow = this.attachShadow({mode:'open'});
		var wrapper = document.createElement('wrapper');
		shadow.appendChild(wrapper);
		var content = document.createElement('content');
		content.appendChild(document.createElement('slot'));
		wrapper.appendChild(content);
		var style = document.createElement('style');
		style.textContent = `
			:host([horizontal="left"]){--horizontal:left;}
			:host([horizontal="center"]){--horizontal:center;}
			:host([horizontal="right"]){--horizontal:right;direction:rtl;}
			:host([vertical="top"]){--vertical:top;}
			:host([vertical="middle"]){--vertical:middle;}
			:host([vertical="bottom"]){--vertical:bottom;}
			wrapper{box-sizing:border-box;display:table;width:100%;height:100%;}
			content{display:table-cell;text-align:var(--horizontal,center);vertical-align:var(--vertical,middle);}
		`;
		shadow.appendChild(style);
	}
}
customElements.define('anchor-html',AnchorHTMLElement);
