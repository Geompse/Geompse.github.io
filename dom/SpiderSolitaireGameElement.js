class SpiderSolitaireGameElement extends HTMLElement
{
	static setup(obj,options)
	{
		if(!options.nbdraw || isNaN(options.nbdraw) || options.nbdraw < 0)
			options.nbdraw = 1;
		if(!options.width)
			options.width = '600px';
		if(!options.height)
			options.height = '500px';
		var deck = GameCardElement.shuffle([].concat(GameCardElement.DECK_52_ALPHA,GameCardElement.DECK_52_ALPHA));
		obj.piles = [];
		for(var p=0; p<10; p++)
		{
			obj.piles.push([]);
			for(var c=0; c<(p<4?6:5); c++)
				obj.piles[p].push(deck.pop());
		}
		obj.stocks = [];
		for(var s=0; s<5; s++)
		{
			obj.stocks.push([]);
			for(var c=0; c<10; c++)
				obj.stocks[s].push(deck.pop());
		}
	}

	constructor(options)
	{
		super();
		if(!options)
			options = {};
		SpiderSolitaireGameElement.setup(this,options);
		var shadow = this.attachShadow({mode:'closed'});

		var pile_events = {ondragstart:this.ondragstart.bind(this),ondragend:this.ondragend.bind(this),ondragover:this.ondragover.bind(this),ondrop:this.ondrop.bind(this)};
		
		var donepiles = document.createElement('donepiles');
		donepiles.toggleAttribute('active');
		donepiles.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_HORIZONTAL_LEFT_COVER,closed:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY)],events:pile_events}));
		shadow.appendChild(donepiles);

		var stock = document.createElement('stock');
		stock.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_HORIZONTAL_RIGHT_COVER,closed:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN),new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN)],events:pile_events}));
		shadow.appendChild(stock);

		var piles = document.createElement('piles');
		for(var p=0; p<10; p++)
		{
			var pile_options = {display:GameCardPileElement.DISPLAY_VERTICAL_COVER,closed:[],open:[],events:pile_events};
			for(var c=0; c<(p<4?5:4); c++)
			{
				var card = new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN);
				if(!card.hasAttribute('covered'))
					card.toggleAttribute('covered');
				pile_options.closed.push(card);
			}
			pile_options.open.push(new GameCardElement(this.piles[p][p<4?5:4][0],this.piles[p][p<4?5:4][1]));
			piles.appendChild(new GameCardPileElement(pile_options));
		}
		shadow.appendChild(piles);

		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;min-width:${Math.max(10*GameCardElement.SMALL_WIDTH,4*(GameCardElement.SMALL_WIDTH+2)+(options.nbdraw+1)*(GameCardElement.SMALL_WIDTH+2))+15}px;min-height:500px;width:${options.width};height:${options.height};margin:5px;user-select:none;background:#484;position:relative;}
			donepiles{position:absolute;left:5px;top:5px;width:0px;height:${GameCardElement.SMALL_HEIGHT+2}px;text-align:left;white-space:nowrap;}
			stock{position:absolute;right:5px;top:5px;width:0px;height:${GameCardElement.SMALL_HEIGHT+2}px;text-align:right;direction:rtl;white-space:nowrap;}
			piles{display:table;position:absolute;left:0px;width:100%;right:0px;bottom:0px;top:${GameCardElement.SMALL_HEIGHT+10}px;}
			piles game-card-pile{display:table-cell;width:calc(100%/10);}
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
	customElements.define('spider-solitaire-game',SpiderSolitaireGameElement);
});
