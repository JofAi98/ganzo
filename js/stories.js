// Stories: short listening built from words the course has taught, a little above what you
// can say yet. Listen first without text, then answer three questions. Each line: [italian, english, words].

const S = (tr, en, w = '') => ({
  tr, en,
  words: w ? w.split(';').map((s) => s.trim()).filter(Boolean).map((s) => { const i = s.indexOf('='); return { tr: s.slice(0, i).trim(), en: s.slice(i + 1).trim() }; }) : [],
});
const Q = (q, options, a) => ({ q, options, a });

export const STORIES = [
  {
    id: 's1', level: 10, rank: 'A1', title: 'Un caffè al bar', en: 'A coffee at the bar',
    lines: [
      S('Oggi è una bella giornata.', 'Today is a lovely day.', 'giornata=day'),
      S('{name} è in un bar vicino a casa.', '{name} is in a café near home.'),
      S('Il barista sorride: "Buongiorno! Cosa prende?"', 'The barman smiles: "Good morning! What will you have?"', 'barista=barman; sorride=smiles; prende=you take (polite)'),
      S('"Un cappuccino, per favore."', '"A cappuccino, please."'),
      S('Il cappuccino è caldo e buonissimo.', 'The cappuccino is hot and delicious.'),
      S('Sul telefono c\'è un messaggio: "Dove sei, amore?"', 'There\'s a message on the phone: "Where are you, love?"', 'messaggio=message'),
      S('{name} sorride e scrive: "Sono al bar. Vieni!"', '{name} smiles and writes: "I\'m at the café. Come!"', 'scrive=writes; vieni=come'),
      S('Dieci minuti dopo arriva anche Giosuè.', 'Ten minutes later Giosuè arrives too.', 'arriva=arrives; anche=also, too'),
      S('"Un caffè anche per me, per favore!"', '"A coffee for me too, please!"'),
      S('Restano al bar e parlano per un\'ora.', 'They stay at the café and talk for an hour.', 'restano=they stay; ora=hour'),
    ],
    questions: [
      Q('Where is {name}?', ['At home', 'At a café', 'At work'], 1),
      Q('What does she order?', ['An espresso', 'A water', 'A cappuccino'], 2),
      Q('Who arrives ten minutes later?', ['The barman', 'Giosuè', 'His mother'], 1),
    ],
  },
  {
    id: 's2', level: 12, rank: 'A1', title: 'Il pranzo della domenica', en: 'Sunday lunch',
    lines: [
      S('È domenica. Giosuè e {name} vanno a pranzo dai genitori.', 'It\'s Sunday. Giosuè and {name} go to his parents\' for lunch.', 'domenica=Sunday; pranzo=lunch; dai=to the place of'),
      S('La mamma di Giosuè cucina dalla mattina.', 'Giosuè\'s mum has been cooking since the morning.', 'mattina=morning'),
      S('Sulla tavola ci sono le lasagne, l\'arrosto e l\'insalata.', 'On the table there\'s lasagne, roast and salad.', 'tavola=dining table; insalata=salad'),
      S('Il papà apre una bottiglia di vino rosso.', 'The dad opens a bottle of red wine.', 'apre=opens; bottiglia=bottle; vino=wine; rosso=red'),
      S('"Cin cin! Alla salute!"', '"Cheers! To your health!"'),
      S('{name} assaggia le lasagne: "Mmm, sono buonissime!"', '{name} tastes the lasagne: "Mmm, it\'s delicious!"', 'assaggia=tastes'),
      S('La mamma è contenta e le dà ancora un po\' di lasagne.', 'The mum is pleased and gives her a bit more lasagne.', 'le dà=gives her'),
      S('Dopo il pranzo c\'è il tiramisù.', 'After lunch there\'s tiramisù.', 'tiramisù=tiramisù'),
      S('"Basta, sono piena!" dice {name}.', '"That\'s it, I\'m full!" says {name}.', 'dice=says'),
      S('Ma un pezzo di tiramisù lo mangia lo stesso.', 'But she eats a piece of tiramisù anyway.', 'pezzo=piece; lo stesso=anyway'),
    ],
    questions: [
      Q('Where do they have lunch?', ['At a restaurant', 'At his parents\' home', 'At their home'], 1),
      Q('What does the dad open?', ['A bottle of wine', 'The window', 'A present'], 0),
      Q('What does {name} do after saying she\'s full?', ['She goes home', 'She eats some tiramisù anyway', 'She has a coffee'], 1),
    ],
  },
  {
    id: 's3', level: 14, rank: 'A1', title: 'Dov\'è il telefono?', en: 'Where\'s the phone?',
    lines: [
      S('È mattina e {name} è in ritardo.', 'It\'s morning and {name} is late.'),
      S('Ha un servizio fotografico alle nove.', 'She has a photo shoot at nine.', 'servizio fotografico=photo shoot'),
      S('Ha la macchina fotografica, ha le chiavi, ma non trova il telefono.', 'She has the camera, she has the keys, but she can\'t find the phone.', 'macchina fotografica=camera; trova=finds'),
      S('Non è nella borsa. Non è sul tavolo.', 'It\'s not in the bag. It\'s not on the table.'),
      S('"Giosuè! Hai visto il mio telefono?"', '"Giosuè! Have you seen my phone?"'),
      S('"No, non l\'ho visto. Ti chiamo io."', '"No, I haven\'t seen it. I\'ll call you."', 'l\'ho visto=I\'ve seen it'),
      S('Giosuè chiama. Si sente una canzone in cucina.', 'Giosuè calls. A song can be heard in the kitchen.', 'si sente=you can hear; canzone=song'),
      S('Il telefono è nel frigo, vicino al latte!', 'The phone is in the fridge, next to the milk!'),
      S('{name} ride: "Ho bisogno di un altro caffè."', '{name} laughs: "I need another coffee."', 'ride=laughs; un altro=another'),
      S('Esce di corsa e arriva alle nove in punto.', 'She rushes out and arrives at nine on the dot.', 'esce=goes out; di corsa=in a rush; in punto=on the dot'),
    ],
    questions: [
      Q('Why is {name} in a hurry?', ['She has a photo shoot', 'She has a train to catch', 'She has an exam'], 0),
      Q('Where is the phone?', ['In the bag', 'In the fridge', 'In the car'], 1),
      Q('When does she arrive?', ['Late', 'At nine exactly', 'At ten'], 1),
    ],
  },
  {
    id: 's4', level: 16, rank: 'A1', title: 'Una giornata a Lucca', en: 'A day in Lucca',
    lines: [
      S('Sabato Giosuè e {name} prendono il treno per Lucca.', 'On Saturday Giosuè and {name} take the train to Lucca.', 'prendono=they take'),
      S('Il viaggio è corto: solo mezz\'ora.', 'The journey is short: only half an hour.', 'corto=short; solo=only; mezz\'ora=half an hour'),
      S('Lucca ha delle mura antiche, e sopra le mura si può andare in bicicletta.', 'Lucca has old walls, and you can cycle on top of them.', 'mura=city walls; antiche=old, ancient; sopra=on top of; si può=you can; bicicletta=bicycle'),
      S('Noleggiano due biciclette e fanno tutto il giro.', 'They rent two bikes and ride all the way round.', 'noleggiano=they rent; giro=tour, round'),
      S('{name} fa tante foto: le torri, le piazze, le chiese.', '{name} takes lots of photos: the towers, the squares, the churches.', 'torri=towers; piazze=squares; chiese=churches'),
      S('A pranzo mangiano in una piccola trattoria.', 'For lunch they eat in a small trattoria.', 'trattoria=family restaurant'),
      S('Il cameriere consiglia i tordelli, un piatto tipico di Lucca.', 'The waiter recommends tordelli, a typical Lucca dish.', 'cameriere=waiter; consiglia=recommends; tipico=typical'),
      S('"Sono come i mantı, ma più grandi!" dice {name}.', '"They\'re like mantı, but bigger!" says {name}.', 'come=like; grandi=big'),
      S('La sera tornano a Pisa, stanchi ma felici.', 'In the evening they go back to Pisa, tired but happy.', 'tornano=they go back; stanchi=tired (plural)'),
    ],
    questions: [
      Q('How do they get to Lucca?', ['By car', 'By train', 'By bus'], 1),
      Q('What do they do on the city walls?', ['They have a picnic', 'They ride bikes', 'They run'], 1),
      Q('What are tordelli like, for {name}?', ['Like mantı', 'Like pizza', 'Like baklava'], 0),
    ],
  },
  {
    id: 's5', level: 18, rank: 'A1', title: 'La pasta fatta in casa', en: 'Homemade pasta',
    lines: [
      S('La nonna di Giosuè fa la pasta in casa ogni domenica.', 'Giosuè\'s grandma makes pasta at home every Sunday.', 'ogni=every'),
      S('Oggi insegna a {name}.', 'Today she\'s teaching {name}.', 'insegna=teaches'),
      S('"Ci vogliono solo farina e uova", dice la nonna.', '"All you need is flour and eggs," says grandma.', 'ci vogliono=you need; farina=flour; uova=eggs'),
      S('Mettono la farina sul tavolo e le uova in mezzo.', 'They put the flour on the table and the eggs in the middle.', 'mettono=they put; in mezzo=in the middle'),
      S('{name} impasta per dieci minuti. È difficile!', '{name} kneads for ten minutes. It\'s hard!', 'impasta=kneads'),
      S('"Brava! Le mani sono forti come le mie", ride la nonna.', '"Well done! Your hands are as strong as mine," laughs grandma.', 'mani=hands; forti=strong'),
      S('Poi tagliano le tagliatelle, lunghe e sottili.', 'Then they cut the tagliatelle, long and thin.', 'tagliano=they cut; sottili=thin'),
      S('A tavola tutti dicono: "Buonissime! Chi le ha fatte?"', 'At the table everyone says: "Delicious! Who made them?"', 'chi le ha fatte=who made them'),
      S('La nonna indica {name}: "Lei! Adesso è una di famiglia."', 'Grandma points at {name}: "She did! Now she\'s one of the family."', 'indica=points at; una di famiglia=one of the family'),
    ],
    questions: [
      Q('What do you need for the pasta?', ['Flour and water', 'Flour and eggs', 'Rice and milk'], 1),
      Q('How long does {name} knead?', ['Ten minutes', 'An hour', 'Two minutes'], 0),
      Q('What does grandma say at the end?', ['That {name} is tired', 'That {name} is one of the family', 'That the pasta is too long'], 1),
    ],
  },
  {
    id: 's6', level: 20, rank: 'A1', title: 'Una sera di pioggia', en: 'A rainy evening',
    lines: [
      S('Fuori piove da tutto il giorno.', 'Outside it\'s been raining all day.', 'fuori=outside'),
      S('Giosuè torna dal lavoro tutto bagnato.', 'Giosuè comes home from work soaking wet.', 'bagnato=wet'),
      S('"Mamma mia, che tempo!" dice, e si toglie le scarpe.', '"Goodness, what weather!" he says, and takes off his shoes.', 'si toglie=takes off; scarpe=shoes'),
      S('{name} ha preparato un tè caldo con il miele.', '{name} has made a hot tea with honey.', 'preparato=prepared; miele=honey'),
      S('"Come si dice in turco: buon tè?"', '"How do you say it in Turkish: good tea?"'),
      S('"Afiyet olsun", risponde lei, e ridono.', '"Afiyet olsun", she answers, and they laugh.', 'risponde=answers; ridono=they laugh'),
      S('Si siedono sul divano sotto una coperta.', 'They sit on the sofa under a blanket.', 'si siedono=they sit down; divano=sofa; sotto=under; coperta=blanket'),
      S('Guardano un vecchio film in bianco e nero.', 'They watch an old black and white film.', 'vecchio=old; bianco=white; nero=black'),
      S('Dopo mezz\'ora Giosuè dorme già.', 'After half an hour Giosuè is already asleep.'),
      S('{name} sorride, spegne la TV e ascolta la pioggia.', '{name} smiles, turns off the TV and listens to the rain.', 'spegne=turns off; pioggia=rain'),
      S('Domani, forse, ci sarà il sole.', 'Tomorrow, maybe, there will be sun.', 'forse=maybe; ci sarà=there will be; sole=sun'),
    ],
    questions: [
      Q('How does Giosuè come home?', ['Soaking wet', 'Very happy', 'Late at night'], 0),
      Q('What has {name} made?', ['A coffee', 'A tea with honey', 'Soup'], 1),
      Q('What happens after half an hour?', ['The film ends', 'Giosuè falls asleep', 'It stops raining'], 1),
    ],
  },
];

export const storyById = (id) => STORIES.find((s) => s.id === id);
