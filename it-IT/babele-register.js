const skillDict = {
	'Shooting' : 'Sparare',
	'Fighting' : 'Combattere'
}

function parseSkill(value){
	if(skillDict[value] !== null) {
		return skillDict[value];
	}
	else return value;
}

function parseHindrance(value){
	return "Hello world!";
	//Parse the translated compendiums to find a match
	let item = {};
	item['_id'] = value;
	let pack = game.packs.find(pack => pack.translated && pack.hasTranslation(item));
	if(pack) {
		return pack.translate(item, true).name;
	}
	//Otherwise return current value
	return value;
}


Hooks.once('init', () => {

	if(typeof Babele !== 'undefined') {
		
		Babele.get().register({
			module: 'swade-it',
			lang: 'it',
			dir: 'compendium'
		});

		Babele.get().registerConverters({
			"translateSkill": (value) => parseSkill(value),
			"translateHindrance": (value) => parseHindrance(value)
		});
	}
});