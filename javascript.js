var person = ['Veronica', 'Veronica', 'Veronica', 'Veronica', 'Veronica', 'Veronica', 'Veronica', 'Veronica', 'Veronica', 'Amber', 
'Dorian', 'Dorian', 'Dorian', 'Dorian', 'Dorian', 'Dorian', 'Dorian', 'Dorian', 'Dorian', 'Damian']
var qualifier = ['kind of', 'very much', 'such', 'a little bit of', 'not at all', 'not entirely', 
'absolutely', 'barely considered', 'much more of', 'so much more of', 'slightly', 'never', 'always',
'possibly', '', 'obviously', 'somewhat of']
var handful = ['handful', 'handful', 'handful', 'handful', 'handful', 'handful', 'handful', 'handful', 'handful', 'hand fool']
var insult = ['and a total bottom', '', '', '', '', '', '', '', '', '',
'and so are you', '', '', '', '', '', '', '', '', '', 
'and that is final', '', '', '', '', '', '', '', '', '',
'and a messy slut', '', '', '', '', '', '', '', '', '']


function newAnswer() {
	var rp = Math.floor(Math.random() * (person.length))
	var rq = Math.floor(Math.random() * (qualifier.length))
	var rh = Math.floor(Math.random() * (handful.length))
	var ri = Math.floor(Math.random() * (insult.length))
	var answer = (person[rp] + ' is ' + qualifier[rq] + ' a ' + handful[rh] + ' ' + insult[ri])
	document.getElementById('display').innerHTML = answer
	}



