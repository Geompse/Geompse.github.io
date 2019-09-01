class GameCardElement extends HTMLElement
{
	static SUIT_SPADES = '\u2660';
	static SUIT_CLUBS = '\u2663';
	static SUIT_HEARTS = '\u2665';
	static SUIT_DIAMONDS = '\u2666';
	static SUITS_NONE = [''];
	static SUITS_ALPHA = [GameCardElement.SUIT_CLUBS,GameCardElement.SUIT_DIAMONDS,GameCardElement.SUIT_HEARTS,GameCardElement.SUIT_SPADES];
	static SUITS_COLOR = [GameCardElement.SUIT_DIAMONDS,GameCardElement.SUIT_CLUBS,GameCardElement.SUIT_HEARTS,GameCardElement.SUIT_SPADES];
	
	static FOOL = 'Excuse';
	static BLACK_JOKER = '*';
	static RED_JOKER = '#';
	static RANK_EMPTY = '-';
	static RANK_HIDDEN = '';
	static RANKS_8 = ['7','8','9','10','J','Q','K','A'];
	static RANKS_13 = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
	static RANKS_13_AS_FIRST = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
	static RANKS_13_AS_LAST = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
	static RANKS_14 = ['1','2','3','4','5','6','7','8','9','10','J','C','Q','K'];
	static RANKS_21_FOOL = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21',GameCardElement.FOOL];
	
	static DECK_EMPTY = [[GameCardElement.SUITS_NONE,[GameCardElement.RANK_EMPTY]]];
	static DECK_HIDDEN = [[GameCardElement.SUITS_NONE,[GameCardElement.RANK_HIDDEN]]];
	static DECK_32 = [[GameCardElement.SUITS_COLOR,GameCardElement.RANKS_8]];
	static DECK_52_ALPHA = [[GameCardElement.SUITS_ALPHA,GameCardElement.RANKS_13_AS_FIRST]];
	static DECK_52_COLOR = [[GameCardElement.SUITS_COLOR,GameCardElement.RANKS_13_AS_FIRST]];
	static DECK_54 = [[GameCardElement.SUITS_COLOR,GameCardElement.RANKS_13_AS_LAST],[GameCardElement.SUITS_NONE,[GameCardElement.BLACK_JOKER,GameCardElement.RED_JOKER]]];
	static DECK_78 = [[GameCardElement.SUITS_COLOR,GameCardElement.RANKS_14],[GameCardElement.SUITS_NONE,GameCardElement.RANKS_21_FOOL]];
	static DECKS = {
		'Empty':GameCardElement.DECK_EMPTY,
		'Hidden':GameCardElement.DECK_HIDDEN,
		'Battle':GameCardElement.DECK_54,
		'Belote':GameCardElement.DECK_32,
		'Bridge':GameCardElement.DECK_52_ALPHA,
		'Tarot':GameCardElement.DECK_78,
		'null':null
	};
	
	static expand(deck)
	{
		var expand = [];
		for(var definition of deck)
			for(var suit of definition[0])
				for(var rank of definition[1])
					expand.push([suit,rank]);
		return expand;
	}
	static shuffle(deck)
	{
		var shuffle = GameCardElement.expand(deck);
		for(var i=shuffle.length; i>0; i--)
		{
			var random = Math.floor(Math.random()*i);
			if(typeof(shuffle[i]) == 'undefined')
				continue;
			var temp = shuffle[i];
			shuffle[i] = shuffle[random];
			shuffle[random] = temp;
		}
		return shuffle;
	}
	static debugDecks()
	{
		for(var deck in GameCardElement.DECKS)
		{
			if(!GameCardElement.DECKS[deck])
				continue;
			var title = document.createElement('h1');
			title.innerHTML = deck;
			document.body.appendChild(title);
			for(var large of [false/*,true*/])
			{
				for(var definition of GameCardElement.DECKS[deck])
				{
					for(var suit of definition[0])
					{
						for(var rank of definition[1])
							document.body.appendChild(GameCardElement.factory(suit,rank,large));
						document.body.appendChild(document.createElement('br'));
					}
				}
			}
			document.body.appendChild(document.createElement('hr'));
		}
	}
	
	static get observedAttributes()
	{
		return ['suit','rank','large','empty'];
	}
	static factory(suit,rank,large)
	{
		var game_card = new GameCardElement();
		game_card.setValue(suit,rank,large);
		if(large)
			game_card.toggleAttribute('large');
		return game_card;
	}	
	
	constructor()
	{
		super();
		var shadow = this.attachShadow({mode:'open'});

		var wrapper = document.createElement('span');
		wrapper.className = 'wrapper';
		shadow.appendChild(wrapper);

		var suit = this.getAttribute('suit');
		var rank = this.getAttribute('rank');
		wrapper.appendChild(AnchorHTMLElement.factory('center','top',suit+rank,'value_top'));
		wrapper.appendChild(AnchorHTMLElement.factory('center','middle',suit+rank,'value_center'));
		for(var top_bottom of ['top','bottom'])
			for(var left_right of ['left','right'])
				wrapper.appendChild(AnchorHTMLElement.factory(left_right,top_bottom,suit+rank,'value_'+top_bottom+'_'+left_right));
		
		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;width:50px;height:70px;margin:1px;user-select:none;}
			:host([large]){--centervaluefontsize:50px;--minivaluesdisplay:inline-block;display:inline-block;width:150px;height:350px;--cardborderradius:20px;}
			:host([covered]){--topvaluedisplay:inline-block;--centervaluedisplay:none;}
			:host([rank]:not([suit])){--cardcolor:black;--cardbackground:#FEC;}
			:host([suit="${GameCardElement.SUIT_SPADES}"],[suit="${GameCardElement.SUIT_CLUBS}"],[rank="${GameCardElement.BLACK_JOKER}"]){--cardcolor:black !important;--cardbackground:#EEE !important;}
			:host([suit="${GameCardElement.SUIT_HEARTS}"],[suit="${GameCardElement.SUIT_DIAMONDS}"],[rank="${GameCardElement.RED_JOKER}"]){--cardcolor:red !important;--cardbackground:#FEE !important;}
			:host([rank="${GameCardElement.RANK_EMPTY}"]){--cardcolor:black;--cardbackground:#CCC !important;}
			:host([rank=""]){--cardcolor:black;--cardbackground:#CCF !important;}
			.wrapper{box-sizing:border-box;display:inline-block;position:relative;width:100%;height:100%;color:var(--cardcolor,gray);background:var(--cardbackground,transparent);border-radius:var(--cardborderradius,5px);box-shadow:0px 0px 5px #000;}
			.value_top{display:var(--topvaluedisplay,none);position:absolute;top:0px;left:0px;width:100%;height:100%;font-size:var(--centervaluefontsize,initial);}
			.value_center{display:var(--centervaluedisplay,inline-block);position:absolute;top:0px;left:0px;width:100%;height:100%;font-size:var(--centervaluefontsize,initial);}
			.value_top_left{display:var(--minivaluesdisplay,none);position:absolute;top:5px;left:5px;width:25%;height:25%;}
			.value_top_right{display:var(--minivaluesdisplay,none);position:absolute;top:5px;right:5px;width:25%;height:25%;}
			.value_bottom_left{display:var(--minivaluesdisplay,none);position:absolute;bottom:5px;left:5px;width:25%;height:25%;}
			.value_bottom_right{display:var(--minivaluesdisplay,none);position:absolute;bottom:5px;right:5px;width:25%;height:25%;}
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
		var suit = this.getAttribute('suit');
		var rank = this.getAttribute('rank');

		var newvalue = (suit?suit:'')+(rank?rank:'');
		if(rank == GameCardElement.BLACK_JOKER || rank == GameCardElement.RED_JOKER)
			newvalue = 'Joker';
		if(rank == GameCardElement.RANK_EMPTY)
			newvalue = '';
		var chs = this.shadowRoot.querySelectorAll('anchor-html');
		for(var c=0; c<chs.length; c++)
			if(chs[c].getAttribute('value') != newvalue)
				chs[c].setAttribute('value',newvalue);
	}
	setValue(suit,rank)
	{
		if(suit)
			this.setAttribute('suit',suit);
		if(typeof(rank) != 'undefined')
			this.setAttribute('rank',rank);
	}
}
customElements.whenDefined('anchor-html').then(function(){
	customElements.define('game-card',GameCardElement);
});
