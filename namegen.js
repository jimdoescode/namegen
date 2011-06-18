/*
Copyright (C) 2011 by Jim Saunders

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

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