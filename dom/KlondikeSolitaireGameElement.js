class KlondikeSolitaireGameElement extends HTMLElement
{
	static factory(suit,rank,large)
	{
		var game = new KlondikeSolitaireGameElement();
		return game;
	}	
	
	constructor()
	{
		super();
		this.setup();
		var shadow = this.attachShadow({mode:'closed'});

		var wrapper = document.createElement('span');
		wrapper.className = 'wrapper';
		shadow.appendChild(wrapper);

		var foundations = document.createElement('span');
		foundations.className = 'foundations';
		foundations.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		foundations.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		foundations.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		foundations.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		wrapper.appendChild(foundations);

		var stock = document.createElement('span');
		stock.className = 'stock';
		//stock.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		//stock.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		stock.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_EMPTY));
		stock.appendChild(GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN));
		wrapper.appendChild(stock);

		var piles = document.createElement('span');
		piles.className = 'piles';
		for(var p=0; p<7; p++)
		{
			var pile = document.createElement('span');
			pile.className = 'pile';
			for(var c=0; c<p; c++)
			{
				var card = GameCardElement.factory(GameCardElement.SUIT_NONE,GameCardElement.RANK_HIDDEN);
				if(!card.hasAttribute('covered'))
					card.toggleAttribute('covered');
				pile.appendChild(card);
			}
			pile.appendChild(GameCardElement.factory(this.piles[p][p][0],this.piles[p][p][1]));
			piles.appendChild(pile);
		}
		wrapper.appendChild(piles);

		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;width:800px;height:500px;margin:1px;user-select:none;background:#484;position:relative;}
			.foundations{position:absolute;left:5px;top:5px;width:50%;height:15%;text-align:left;}
			.stock{position:absolute;right:5px;top:5px;width:50%;height:15%;text-align:right;}
			.piles{display:table;position:absolute;left:0px;width:100%;bottom:0px;height:85%;}
			.pile{display:table-cell;width:calc(100%/7);text-align:center;padding-top:10%;}
			.pile game-card{display:block;margin:-45% auto;}
			game-card{cursor:pointer;}
		`;
		shadow.appendChild(style);
	}
	setup()
	{
		var deck = GameCardElement.shuffle(GameCardElement.DECK_52_ALPHA);
		this.piles = [];
		for(var p=0; p<7; p++)
		{
			this.piles.push([]);
			for(var c=0; c<=p; c++)
				this.piles[p].push(deck.pop());
		}
		this.stock = deck;
	}
}
customElements.whenDefined('game-card').then(function(){
	customElements.define('klondike-solitaire-game',KlondikeSolitaireGameElement);
});
