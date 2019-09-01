class GameCardElement extends HTMLElement
{
	static SUIT_SPADES = '\u2660';
	static SUIT_CLUBS = '\u2663';
	static SUIT_HEARTS = '\u2665';
	static SUIT_DIAMONDS = '\u2666';
	static SUITS_COLOR = [GameCardElement.SUIT_DIAMONDS,GameCardElement.SUIT_CLUBS,GameCardElement.SUIT_HEARTS,GameCardElement.SUIT_SPADES];
	static SUITS_ALPHA = [GameCardElement.SUIT_CLUBS,GameCardElement.SUIT_DIAMONDS,GameCardElement.SUIT_HEARTS,GameCardElement.SUIT_SPADES];
	static SUITS = GameCardElement.SUITS_COLOR;
	
	static DECK13 = ['1','2','3','4','5','6','7','8','9','10','J','Q','K'];
	static DECK13_AS_FIRST = ['A','2','3','4','5','6','7','8','9','10','J','Q','K'];
	static DECK13_AS_LAST = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
	static DECK = GameCardElement.DECK13_AS_FIRST;
	
	static BLACK_JOKER = '*';
	static RED_JOKER = '#';
	
	static get observedAttributes()
	{
		return ['suit','rank','large'];
	}
	static factory(suit,rank,large)
	{
		var game_card = new GameCardElement();
		if(suit)
			game_card.setAttribute('suit',suit);
		if(rank)
			game_card.setAttribute('rank',rank);
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
		wrapper.appendChild(AnchorHTMLElement.factory('center','middle',suit+rank,'value_center'));
		for(var top_bottom of ['top','bottom'])
			for(var left_right of ['left','right'])
				wrapper.appendChild(AnchorHTMLElement.factory(left_right,top_bottom,suit+rank,'value_'+top_bottom+'_'+left_right));
		
		var style = document.createElement('style');
		style.textContent = `
			:host{display:inline-block;width:50px;height:70px;margin:1px;}
			:host([large]){--centervaluefontsize:50px;--minivaluesdisplay:inline-block;display:inline-block;width:150px;height:350px;--cardborderradius:20px;}
			:host([suit="${GameCardElement.SUIT_SPADES}"],[suit="${GameCardElement.SUIT_CLUBS}"],[rank="${GameCardElement.BLACK_JOKER}"]){--cardcolor:black;--cardbackground:rgba(0,0,0,0.1);}
			:host([suit="${GameCardElement.SUIT_HEARTS}"],[suit="${GameCardElement.SUIT_DIAMONDS}"],[rank="${GameCardElement.RED_JOKER}"]){--cardcolor:red;--cardbackground:rgba(255,0,0,0.1);}
			.wrapper{box-sizing:border-box;display:inline-block;position:relative;width:100%;height:100%;color:var(--cardcolor,gray);background:var(--cardbackground,rgba(255,192,0,0.3));border-radius:var(--cardborderradius,5px)}
			.value_center{display:inline-block;position:absolute;top:0px;left:0px;width:100%;height:100%;font-size:var(--centervaluefontsize,initial);}
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
		var chs = this.shadowRoot.querySelectorAll('anchor-html');
		for(var c=0; c<chs.length; c++)
			chs[c].setAttribute('value',rank==GameCardElement.BLACK_JOKER||rank==GameCardElement.RED_JOKER?'Joker':((suit?suit:'')+(rank?rank:'')));
	}
}
customElements.whenDefined('anchor-html').then(function(){
	customElements.define('game-card',GameCardElement);
});
