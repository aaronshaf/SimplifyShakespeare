$('p').each(function(){
	var x,html = $(this).html();
	var equivalents = [
		['Amen',''],
		['And it came to pass that',''],
		['And it shall come to pass that'],
		['And it shall come to pass'],
		['art','are'],
		['executeth','executed'],
		['liken','make relevant'],
		['asketh','ask'],
		['verily',''],
		['forth',''],
		['thine','your'],
		['Amen.',''],
		['And now,',''],
		['the morrow','tomorrow'],
		['raiseth','raises'],
		['fighteth','fights'],
		['abhorreth','hates'],
		['satisfieth','satifies'],
		['brethren','brothers'],
		['thirsteth','thirsts'],
		['doth','does'],
		['babes','babies'],
		['standeth','stands'],
		['pieces of their gold','gold coins'],
		['vineyard','garden of grapes'],
		['What mean ye?','What do you mean?'],
		['Ye','You'],
		['unto','to'],
		['saith:','says:'],
		['whoso','whoever'],
		['knocketh','knocks'],
		['commandeth','commands'],
		['behold',''],
		['Inasmuch as','if'],
		['concerning them','about them'],
		['cometh','comes'],
		['consecrate','set apart'],
		['delighteth','delights'],
		['fowls','birds'],
		['the fruit of my loins','my kin'],
		['the fruit of his loins','his kin'],
		['the fruit of your loins','your kin'],
		['giveth','gives'],
		['hath','has'],
		['very fine','very nice'],
		['I, Nephi,','I'],
		['assuredly','definitely'],
		['liveth','lives'],
		['did build','built'],
		['did preach','preached'],
		['did construct','constructed'],
		['after the manner of','just like'],
		['had made an end of','stopped'],
		['hast','have'],
		['hearken','pay attention'],
		['thee','you'],
		['bowels','heart'],
		['bewitch','amaze'],
		['bruit','report'],
		['confounded','confused'],
		['comforteth','comforts'],
		['pondereth','thinks about'],
		['liberally','generously'],
		['spake','spoke'],
		['must needs','needs to'],
		['shalt','shall'],
		['seeketh','seeks'],
		['trow','think'],
		['thine','your'],
		['thou','you'],
		['thy','your'],
		['transgression','sin'],
		['nevertheless','still'],
		['transgressed','sinned'],
		['Thus saith the Lord God','This is what the Lord says'],
		['Thus saith the Lord','This is what the Lord says'],
		['saith the Lord','the Lord says'],
		['wherefore','therefore'],
		['upon','on'],
		['smitten','struck'],
		['bidden','instructed'],
		['exceedingly','very'],
		['O then',''],
		['sorroweth','grieves'],
		['bidden','grieves'],
		['slain','killed'],
		['great deep','ocean'],
		['yea,',''],
		['waketh,','wakes'],
		['weary','tired'],
		['Art thou','Are you'],
		['hath','has'],
		['thee','you'],
		['all flesh','all people'],
		['manifest','show'],
		['whence','where'],
		['somewhat concerning','about'],
		['mine','my'],
		['unto','to'],
		['For behold',''],
		['yea',''],
		['utterly','entirely'],
		['wast','was'],
		['writeth','writes'],
		['wilt','will'],
		['mixeth','mixes'],
		['profit','advantage'],
		['ye','you'],
		['thereof',''],
		['save they shall','unless they'],
		['iniquities','sins'],
		['save it were','except it was'],
		['idle people','lazy people'],
		['years had passed away','years had gone by'],
		['thus far','so far'],
		['repent of their','turn from their'],
		['sufficeth me','is enough for me'],
		['contentions','fights'],
		['people of Nephi','Nephites'],
		['I am desirous for','I want the'],
		['And now, behold, ',''],
		['perish','die'],
		['likened to','made relevant to'],
		['for, for','for'],
		['relevant them','them relevant'],
		['beheld','saw'],
		['saidst','said'],
		['and thus','and'],
		['repent','turn'],
		['partaken','taken'],
		['sendeth','sends'],
		['provoketh','provokes'],
		['receiveth','receives'],
		['meet for repentance','fitting for repentance'],
		['manner after which','way'],
		['exceeding','great'],
		['an everlasting','a never-ending'],
		['remission','forgiveness'],
		['iniquity','sin'],
		['do iniquity','sin'],
		['converse','talks'],
		['repenteth','turns'],
		['hardeneth ','hardens'],
		['dieth','dies'],
		['whosoever','whoever'],
		['bar of God','coutroom of God'],
		['lesser portion','smaller part'],
		['even a','a'],
		['greater portion','bigger part'],
		['had a knowledge of','knew'],
		['grant','give'],
		['plainly','clearly'],
		['expound','explain'],
		['cast','throw'],
		['more very','more'],
		['more and more','more'],
		['snare','trap'],
		['concerning','about'],
		['revile','speak negative things about'],
		['mightest','might'],
		['seest','see'],
		['consciousness','awareness'],
		['O you',''],
		['made them known to me','taught me'],
		['See that you',''],
		['but one','one'],
		['all that I have written','all I wrote'],
		['saith','said'],
		['Now',''],
		['sayest','say'],
		['tremble','shake'],
		['temporal','temporary'],
		['astonished','surprised'],
		['both limb and joint','every part of the body'],
		['recollection','memory'],
		[',',''],
		['Now,','']
		
	];
	for(x = 0;x < equivalents.length;x++) {
		html = html.split(" " + equivalents[x][0] + ' ').join(" " + equivalents[x][1] + ' ');
		html = html.split(" " + equivalents[x][0] + '.').join(" " + equivalents[x][1] + '.');
		html = html.split(" " + equivalents[x][0] + ',').join(" " + equivalents[x][1] + ',');
	}

});