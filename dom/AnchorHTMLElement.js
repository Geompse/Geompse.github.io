class AnchorHTMLElement extends HTMLElement
{
	static get observedAttributes()
	{
		return ['value'];
	}
	static factory(horizontal,vertical,value,className)
	{
		var anchor_html = new AnchorHTMLElement();
		anchor_html.setAttribute('horizontal',horizontal);
		anchor_html.setAttribute('vertical',vertical);
		if(typeof(value) != 'undefined')
			anchor_html.setAttribute('value',value);
		if(typeof(className) != 'undefined')
			anchor_html.className = className;
		return anchor_html;
	}
	
	constructor()
	{
		super();
		var shadow = this.attachShadow({mode:'open'});
		var wrapper = document.createElement('wrapper');
		shadow.appendChild(wrapper);
		var content = document.createElement('content');
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
		this.update();
	}
	attributeChangedCallback(name, old_value, new_value)
	{
		this.update();
	}
	update()
	{
		var value = this.getAttribute('value');
		var content = this.shadowRoot.querySelector('content');
		if(content.innerHTML != value)
			content.innerHTML = value;
	}
}
customElements.define('anchor-html',AnchorHTMLElement);
