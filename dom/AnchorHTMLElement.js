class AnchorHTMLElement extends HTMLElement
{
	static get observedAttributes()
	{
		return ['value','horizontal','vertical'];
	}
	static factory(horizontal,vertical,value,className)
	{
		var anchor_html = new AnchorHTMLElement();
		anchor_html.setAttribute('horizontal',horizontal);
		anchor_html.setAttribute('vertical',vertical);
		if(typeof(value) != 'value')
			anchor_html.setAttribute('value',value);
		if(typeof(className) != 'undefined')
			anchor_html.className = className;
		return anchor_html;
	}
	constructor()
	{
		super();
		var shadow = this.attachShadow({mode:'open'});
		this.wrapper = document.createElement('span');
		this.wrapper.className = 'wrapper';
		shadow.appendChild(this.wrapper);
		this.content = document.createElement('span');
		this.content.className = 'content';
		this.wrapper.appendChild(this.content);
		var style = document.createElement('style');
		style.textContent = `
			:host([horizontal="left"]){--horizontal:left;}
			:host([horizontal="center"]){--horizontal:center;}
			:host([horizontal="right"]){--horizontal:right;}
			:host([vertical="top"]){--vertical:top;}
			:host([vertical="middle"]){--vertical:middle;}
			:host([vertical="bottom"]){--vertical:bottom;}
			.wrapper{box-sizing:border-box;display:table;width:100%;height:100%;}
			.content{display:table-cell;text-align:var(--horizontal,center);vertical-align:var(--vertical,middle);}
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
		this.content.innerHTML = this.getAttribute('value');
	}
}
customElements.define('anchor-html',AnchorHTMLElement);
