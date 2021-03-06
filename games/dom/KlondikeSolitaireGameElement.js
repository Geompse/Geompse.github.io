class KlondikeSolitaireGameElement extends HTMLElement
{
	static setup(obj,options)
	{
		if(!options.nbdraw || isNaN(options.nbdraw) || options.nbdraw < 0)
			options.nbdraw = 1;
		options.minWidth = (Math.max(7*(GameCardElement.SMALL_WIDTH+2),4*(GameCardElement.SMALL_WIDTH+2)+(options.nbdraw+1)*(GameCardElement.SMALL_WIDTH+2)+5))+'px';
		if(!options.width)
			options.width = options.minWidth;
		options.minHeight = (5+GameCardElement.SMALL_HEIGHT+2+18*GameCardElement.SMALL_HEIGHT*1/3+GameCardElement.SMALL_HEIGHT)+'px';
		if(!options.height)
			options.height = options.minHeight;
		var deck = GameCardElement.shuffle(GameCardElement.DECK_52_ALPHA);
		obj.piles = [];
		for(var p=0; p<7; p++)
		{
			obj.piles.push([]);
			for(var c=0; c<=p; c++)
				obj.piles[p].push(deck.pop());
		}
		obj.stock = deck;
	}

	constructor(options)
	{
		super();
		if(!options)
			options = {};
		KlondikeSolitaireGameElement.setup(this,options);
		var shadow = this.attachShadow({mode:'closed'});

		var pile_events = {ondragstart:this.ondragstart.bind(this),ondragend:this.ondragend.bind(this),ondragover:this.ondragover.bind(this),ondrop:this.ondrop.bind(this)};
		
		var foundations = document.createElement('foundations');
		foundations.toggleAttribute('active');
		for(var f=0; f<4; f++)
			foundations.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,closed:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY)],events:pile_events}));
		shadow.appendChild(foundations);

		var stock = document.createElement('stock');
		for(var d=1; d<options.nbdraw; d++)
			stock.appendChild(new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		stock.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,closed:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY)],events:pile_events}));
		stock.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,open:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN)]}));
		shadow.appendChild(stock);

		var piles = document.createElement('piles');
		for(var p=0; p<7; p++)
		{
			var pile_options = {display:GameCardPileElement.DISPLAY_VERTICAL_COVER,closed:[],open:[],events:pile_events};
			for(var c=0; c<p; c++)
			{
				var card = new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN);
				if(!card.hasAttribute('covered'))
					card.toggleAttribute('covered');
				pile_options.closed.push(card);
			}
			pile_options.open.push(new GameCardElement(this.piles[p][p][0],this.piles[p][p][1]));
			piles.appendChild(new GameCardPileElement(pile_options));
		}
		shadow.appendChild(piles);

		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;min-width:${options.minWidth};min-height:${options.minHeight};width:${options.width};height:${options.height};user-select:none;background:#484;position:relative;border:4px solid #484;}
			foundations{position:absolute;left:0px;top:0px;width:${4*(GameCardElement.SMALL_WIDTH+2)}px;height:${GameCardElement.SMALL_HEIGHT+2}px;text-align:left;}
			stock{position:absolute;right:0px;top:0px;width:${(options.nbdraw+1)*(GameCardElement.SMALL_WIDTH+2)}px;height:${GameCardElement.SMALL_HEIGHT+2}px;text-align:right;}
			piles{display:table;position:absolute;left:0px;width:100%;right:0px;bottom:0px;top:${GameCardElement.SMALL_HEIGHT+5}px;}
			piles game-card-pile{display:table-cell;width:calc(100%/7);}
		`;
		shadow.appendChild(style);
	}
	ondragstart(event)
	{
		console.log('ondragstart',event);
		event.dataTransfer.setData('text','coucou');
		event.effectAllowed = 'move';
	}
	ondragend(event)
	{
		console.log('ondragend',event);
	}
	ondragover(event)
	{
		console.log('ondragover',event);
		event.preventDefault();
	}
	ondrop(event)
	{
		console.log('ondrop',event);
		event.preventDefault();
	}
}
customElements.whenDefined('game-card-pile').then(function(){
	customElements.define('klondike-solitaire-game',KlondikeSolitaireGameElement);
});
