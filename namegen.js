function NameGen(obj)
{
	this.obj = obj;
	//Creates a random integer between 0 and max
	function randInt(max){return Math.floor(Math.random()*max);}
	function parseRule(rule){return rule.substr(1).split('$');}//substr removes the initial '$'
	function trim(str){return str.replace(/^\s+|\s+$/g,"");}
	function badName(name, illegal)
	{
		if(illegal)
		{
			var count = illegal.length;
			for(var i=0; i < count; i++)
				if(name.indexOf(illegal[i]) > -1)return true;
		}
		return false;
	}
	
	NameGen.prototype.getName = function(cast)
	{
		var structure = this.obj[cast.toLowerCase()];
		var rule = parseRule(structure.rule);
		var ruleCount = rule.length;
		var name;
		do
		{
			name = '';
			for(var i=0; i < ruleCount; i++)
			{
				var percent = parseInt(rule[i]);
				if(isNaN(percent))
				{
					if(rule[i] == '_')name += ' ';
					else
					{
						var segCount = structure[rule[i]].length;
						name += structure[rule[i]][randInt(segCount)];
					}
				}
				else if(randInt(100) > percent && i < (ruleCount-1))i++;
			}
		}
		while(badName(name.toLowerCase(), structure.illegal));
		return trim(name);
	}
	NameGen.prototype.setNameObj = function(obj){this.obj = obj;}
}