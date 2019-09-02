class GameCardPileElement extends HTMLElement
{
	static get DISPLAY_UNIQUE()
	{
		return 'unique';
	}
	static get DISPLAY_VERTICAL_COVER()
	{
		return 'vertical-cover';
	}
	static get observedAttributes()
	{
		return [];
	}
	
	constructor(options)
	{
		super();
		if(!options)
			options = {};
		var shadow = this.attachShadow({mode:'open'});

		var closed_pile = document.createElement('pile-closed');
		if(options.closed)
			for(var child of options.closed)
				closed_pile.appendChild(child);
		shadow.appendChild(closed_pile);
		var open_pile = document.createElement('pile-open');
		if(options.open)
			for(var child of options.open)
				open_pile.appendChild(child);
		shadow.appendChild(open_pile);
		
		if(options.draggable)
		{
			open_pile.draggable = true;
			open_pile.ondragstart = options.draggable.ondragstart;
			open_pile.ondragend = options.draggable.ondragend;
		}

		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;width:${GameCardElement.SMALL_WIDTH}px;margin:1px;user-select:none;padding-top:${GameCardElement.SMALL_HEIGHT*2/3}px;text-align:center;}
			pile-open{display:block;}
			pile-open game-card{cursor:pointer;}
			game-card{display:block;margin:-${GameCardElement.SMALL_HEIGHT*2/3}px auto;}
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
	}
}
customElements.whenDefined('game-card').then(function(){
	customElements.define('game-card-pile',GameCardPileElement);
});
