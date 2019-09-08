class BattleMultiGameElement extends HTMLElement
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
		BattleMultiGameElement.setup(this,options);
		var shadow = this.attachShadow({mode:'closed'});

		var pile_events = {ondragstart:this.ondragstart.bind(this),ondragend:this.ondragend.bind(this),ondragover:this.ondragover.bind(this),ondrop:this.ondrop.bind(this)};
		
		var player1 = document.createElement('player1');
		player1.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,open:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN,true)],events:pile_events}));
		player1.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,closed:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_NONE,true)],events:pile_events}));
		shadow.appendChild(player1);

		var player2 = document.createElement('player2');
		player2.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,open:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN,true)],events:pile_events}));
		player2.appendChild(new GameCardPileElement({display:GameCardPileElement.DISPLAY_UNIQUE,closed:[new GameCardElement(GameCardElement.SUIT_NONE,GameCardElement.RANK_NONE,true)],events:pile_events}));
		shadow.appendChild(player2);

		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;min-width:${4*GameCardElement.LARGE_WIDTH+30}px;min-height:${GameCardElement.LARGE_HEIGHT}px;width:${options.width};height:${options.height};margin:5px;user-select:none;background:#484;position:relative;}
			player1,player2{position:absolute;top:${(parseInt(options.height)-GameCardElement.LARGE_HEIGHT)/2}px;height:${GameCardElement.LARGE_HEIGHT}px;width:50%;white-space:nowrap;vertical-align:middle;}
			player1{left:0px;text-align:left;}
			player2{right:0px;text-align:right;direction:rtl;}
			player1 game-card-pile,player2 game-card-pile{vertical-align:middle;}
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
	customElements.define('battle-multi-game',BattleMultiGameElement);
});
