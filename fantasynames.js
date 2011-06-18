//Name object syntax:
//Declare the object itself.
fantasyNames = {
	//Declare the desired number of casts
	male: {
		//Declare the desired parts of the string
		start:		['Aer', 'An', 'Ar', 'Ban', 'Bar', 'Ber', 'Beth', 'Bett', 'Cut', 'Dan', 'Dar', 'Dell', 'Der', 'Edr', 'Er', 'Eth', 'Ett', 'Fin', 'Ian', 'Iarr', 'Ill', 'Jed', 'Kan', 'Kar', 'Ker', 'Kurr', 'Kyr', 'Man', 'Mar', 'Mer', 'Mir', 'Tsal', 'Tser', 'Tsir', 'Van', 'Var', 'Yur', 'Yyr'],
		middle:		['al', 'an', 'ar', 'el', 'en', 'ess', 'ian', 'onn', 'or'],
		end:		['ai', 'an', 'ar', 'ath', 'en', 'eo', 'ian', 'is', 'u', 'or'],
		title:		['The Feared', 'The Bloody', 'The Cruel', 'The Hated'],
		//(optional) Declare any illegal letter combinations.
		illegal: 	['orar', 'arrar'],
		//Put together the string parts with a rule. Dollar sign'$' separates each 
		//command. A number represents what percent chance the part following the 
		//number will appear. An underscore '_' represents a space
		rule: 		'$start$50$middle$end$_$50$title'
	},
	female: {
		start:		['Aer', 'An', 'Ar', 'Ban', 'Bar', 'Ber', 'Beth', 'Bett', 'Cut', 'Dan', 'Dar', 'Dell', 'Der', 'Edr', 'Er', 'Eth', 'Ett', 'Fin', 'Ian', 'Iarr', 'Ill', 'Jed', 'Kan', 'Kar', 'Ker', 'Kurr', 'Kyr', 'Man', 'Mar', 'Mer', 'Mir', 'Tsal', 'Tser', 'Tsir', 'Van', 'Var', 'Yur', 'Yyr'],
		middle:		['al', 'an', 'ar', 'el', 'en', 'ess', 'ian', 'onn', 'or'],
		end:		['a', 'ae', 'aelle', 'ai', 'ea', 'i', 'ia', 'u', 'wen', 'wyn'],
		title:		['Beautiful', 'Kind', 'Fair', 'Lady'],
		illegal: 	['arrar'],
		rule: 		'$10$title$_$start$50$middle$end'
	}
}
