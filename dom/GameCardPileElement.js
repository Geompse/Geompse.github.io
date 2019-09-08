class GameCardPileElement extends HTMLElement
{
	static get DISPLAY_UNIQUE()
	{
		return 'unique';
	}
	static get DISPLAY_HORIZONTAL_LEFT_COVER()
	{
		return 'horizontal-left-cover';
	}
	static get DISPLAY_HORIZONTAL_RIGHT_COVER()
	{
		return 'horizontal-right-cover';
	}
	static get DISPLAY_VERTICAL_COVER()
	{
		return 'vertical-cover';
	}
	
	constructor(options)
	{
		super();
		if(!options)
			options = {};
		if(options.display)
			this.setAttribute('display',options.display);
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
		
		if(options.events)
		{
			open_pile.draggable = true;
			open_pile.ondragstart = options.events.ondragstart;
			open_pile.ondragend = options.events.ondragend;
			open_pile.ondragover = options.events.ondragover;
			open_pile.ondrop = options.events.ondrop;
		}

		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;margin:1px;user-select:none;text-align:center;}
			:host([display="horizontal-left-cover"]){--gamecarddisplay:inline-block;--gamecardmargin:0px 0px 0px -${GameCardElement.SMALL_WIDTH*2/3}px;padding:0px ${GameCardElement.SMALL_WIDTH*2/3}px 0px ${GameCardElement.SMALL_WIDTH*2/3}px;}
			:host([display="horizontal-right-cover"]){--gamecarddisplay:inline-block;--gamecardmargin:0px 0px 0px -${GameCardElement.SMALL_WIDTH*2/3}px;padding:0px;}
			:host([display="vertical-cover"]){--gamecardmargin:-${GameCardElement.SMALL_HEIGHT*2/3}px auto;padding-top:${GameCardElement.SMALL_HEIGHT*2/3}px;}
			pile-open{display:block;}
			pile-open game-card{cursor:pointer;}
			game-card{display:var(--gamecarddisplay,block);margin:var(--gamecardmargin,0px auto);}
		`;
		shadow.appendChild(style);
	}
}
customElements.whenDefined('game-card').then(function(){
	customElements.define('game-card-pile',GameCardPileElement);
});
