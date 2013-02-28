This is an advanced string concatenator. It is geared towards creating random names but can be used to create any random string given the correct setup.

To setup a name generator you need to create a javascript object which you then pass into the name generator upon execution.

The object should look as follows:
```js
var nameObj = {
	//Declare some casts
	male: {
		//Declare parts of string
		start: ['Aer', 'An', 'Ar'],
		middle: ['al', 'an', 'ian'],
		end: ['an', 'ath', 'is', 'or'],
		title: ['The Brave'],
		//(optional) Declare illegal combos
		illegal: ['ananan'],
		//Declare a rule that puts the parts together
		//Dollar sign '$' separates each command.
		//A number specifies the chance the next part will appear.
		//An underscore '_'  represents a space.
		rule: '$start$50$middle$end$_$10$title'
	},
	female: {
		start: ['Aer', 'An', 'Ar'],
		middle: ['al', 'en', 'ess'],
		end: ['aella', 'ia', 'wen', 'wyn'],
		title: ['Lady'],
		rule: '$10$title$_$start$50$middle$end'
	}
}
```
Now when you create the name generator you would pass in the name object like this:
```js
var gen = new NameGen(nameObj);
```
Then to get a name you would specify a cast that is in the nameObj like this:
```js
var name = gen.getName('female');
```
That will return a random combination of the string segments you created in the name object.
