// The course. Each item: p(italian, english, words, note).
// The Italian text lives in the field "tr" (target), here and in every content file.
// level: the level that opens a unit (or a single lesson, when the lesson sets its own).
// words: "italian=meaning; italian=meaning". {name} becomes your name.
import { clean } from './pron.js';

export const p = (tr, en, w = '', note = '') => ({
  tr, en, note,
  words: w ? w.split(';').map((s) => s.trim()).filter(Boolean).map((s) => {
    const i = s.indexOf('=');
    return { tr: s.slice(0, i).trim(), en: s.slice(i + 1).trim() };
  }) : [],
});

export const UNITS = [
  {
    id: 'u0', level: 1, title: 'Sounds', blurb: 'Italian is said the way it is written, once you know a few letter groups. These three lessons cover the ones that differ from Turkish.',
    lessons: [
      { id: 'u0l1', title: 'C, G and SC', goal: 'Turkish ç, c and ş, spelled the Italian way', items: [
        p('ciao', 'hi; bye', '', 'c before i or e is Turkish ç: "çao". The i is only spelling.'),
        p('cena', 'dinner', '', 'ce is "çe": çena.'),
        p('casa', 'home, house', '', 'Before a, o and u, c is k: kasa.'),
        p('che', 'what; that', '', 'ch is always k: "ke". Never ç.'),
        p('gelato', 'ice cream', '', 'g before e or i is Turkish c: celato.'),
        p('giorno', 'day', '', 'gi before a vowel is just c: corno.'),
        p('pesce', 'fish', '', 'sc before e or i is ş: peşe.'),
      ] },
      { id: 'u0l2', title: 'H and double letters', goal: 'A letter you never say, and letters you hold', items: [
        p('ho', 'I have', '', 'h is always silent. ho sounds exactly like o (or).'),
        p('hanno', 'they have', '', 'Exactly the same sound as anno (year). Only the spelling differs.'),
        p('anno', 'year', '', 'Hold the double n, as in Turkish anne.'),
        p('palla', 'ball', '', 'Hold the l, as in Turkish Allah. pala, with one l, is a shovel.'),
        p('notte', 'night', '', 'Stop on the t for a moment: not-te.'),
        p('nonno', 'grandpa', '', 'nono, with one n, means ninth.'),
        p('sette', 'seven', '', 'sete, with one t, means thirst. Ho sete: I\'m thirsty.'),
      ] },
      { id: 'u0l3', title: 'GN, GLI, Z and stress', goal: 'The last new sounds, and where the voice goes up', items: [
        p('bagno', 'bathroom', '', 'gn is "ny": it sounds like Turkish banyo, and means the same.'),
        p('famiglia', 'family', '', 'gli is a soft "ly", with no g in it: familya.'),
        p('pizza', 'pizza', '', 'z is never the Turkish z. Here it is "ts", and double: pit-tsa.'),
        p('grazie', 'thank you', '', 'z again: gra-tsye. The stress is on the first syllable.'),
        p('ragazza', 'girl; girlfriend', '', 'Most words stress the second-to-last syllable, not the last as in Turkish: ra-GAT-tsa.'),
        p('città', 'city, town', '', 'A written accent always marks the stress, on the last vowel: çit-TA.'),
        p('perché', 'why; because', '', 'é is a closed e, as in Turkish "ev". Stress at the end: per-KE.'),
      ] },
    ],
  },
  {
    id: 'u1', topic: 'Greetings', level: 1, title: 'Hello', blurb: 'The first things you\'ll say to him, and to everyone he knows.',
    lessons: [
      { id: 'u1l1', title: 'Hi, how are you?', goal: 'Start any conversation', items: [
        p('Ciao!', 'Hi! / Bye!', 'ciao=hi, bye', 'For hello and goodbye, with friends and family. Like Turkish "selam", but also for leaving.'),
        p('Buongiorno!', 'Good morning! / Hello!', 'buongiorno=good morning; buono=good; giorno=day', 'Polite, until early afternoon. Use it in shops and with his parents.'),
        p('Come stai?', 'How are you?', 'come=how; stai=you are', 'To a friend or to him. To his parents, at first: Come sta?'),
        p('Sto bene, e tu?', 'I\'m fine, and you?', 'sto=I am, I\'m doing; bene=well; e=and; tu=you'),
        p('Anch\'io sto bene.', 'I\'m fine too.', 'anch\'io=me too; io=I'),
        p('Benissimo!', 'Really well!', 'benissimo=very well'),
        p('Non c\'è male.', 'Not bad.', 'non=not; male=bad, badly', 'Literally "there\'s no bad". Like Turkish "fena değil".'),
      ] },
      { id: 'u1l2', title: 'Yes, no, thanks', goal: 'The words you need every minute', items: [
        p('Sì.', 'Yes.', 'sì=yes', 'With the accent. si without one means "oneself".'),
        p('No.', 'No.', 'no=no'),
        p('Va bene.', 'Okay.', 'va=goes; bene=well', 'Literally "it goes well". Your Turkish "tamam": you\'ll hear it all day.'),
        p('Grazie mille.', 'Thanks a lot.', 'grazie=thank you; mille=a thousand'),
        p('Prego.', 'You\'re welcome.', 'prego=you\'re welcome / go ahead', 'Also what a waiter says to mean "go ahead, what would you like?"'),
        p('Per favore.', 'Please.', 'per=for; favore=favour'),
        p('Scusa!', 'Sorry! / Excuse me!', 'scusa=sorry (to a friend)', 'To someone you call Lei, like a stranger: Scusi!'),
      ] },
      { id: 'u1l3', title: 'Good evening, good night', goal: 'Greetings for every time of day', items: [
        p('Buonasera!', 'Good evening!', 'buonasera=good evening; sera=evening', 'From mid-afternoon on. In Tuscany you\'ll hear it from about four.'),
        p('Buonanotte.', 'Good night.', 'notte=night'),
        p('Sogni d\'oro.', 'Sweet dreams.', 'sogni=dreams; oro=gold', 'Literally "golden dreams".'),
        p('A domani!', 'See you tomorrow!', 'a=to, at; domani=tomorrow'),
        p('Ci vediamo!', 'See you!', 'ci vediamo=we\'ll see each other', 'Like Turkish "görüşürüz": the same "each other" idea.'),
        p('A presto!', 'See you soon!', 'presto=soon, early'),
        p('Arrivederci.', 'Goodbye.', 'arrivederci=goodbye (polite)', 'Polite: to his parents at first, and in shops.'),
      ] },
    ],
  },
  {
    id: 'u2', level: 2, title: 'About me', blurb: 'Your name, where you\'re from, what you do, and how to ask for help when you get lost.',
    lessons: [
      { id: 'u2l1', title: 'My name is...', goal: 'Introduce yourself', items: [
        p('Mi chiamo {name}.', 'My name is {name}.', 'mi chiamo=I\'m called; chiamo=I call', 'Literally "I call myself {name}".'),
        p('Come ti chiami?', 'What\'s your name?', 'ti chiami=you\'re called'),
        p('Piacere!', 'Nice to meet you!', 'piacere=pleasure', 'Said with a handshake, or two kisses among friends.'),
        p('Piacere mio.', 'The pleasure is mine.', 'mio=my, mine'),
        p('Sono turca.', 'I\'m Turkish.', 'sono=I am; turca=Turkish (woman)', 'A man says turco. Adjectives change with who they describe: you are turca, Giosuè is italiano.'),
        p('Lui è italiano.', 'He\'s Italian.', 'lui=he; è=is; italiano=Italian (man)', 'è with an accent is "is". e without one is "and".'),
      ] },
      { id: 'u2l2', title: 'Where I\'m from', goal: 'Talk about Turkey, Pisa and your work', items: [
        p('Di dove sei?', 'Where are you from?', 'di=of, from; dove=where; sei=you are'),
        p('Vengo dalla Turchia.', 'I come from Turkey.', 'vengo=I come; dalla=from the; Turchia=Turkey'),
        p('Abito a Pisa.', 'I live in Pisa.', 'abito=I live; a=in, to (with towns)', 'With a town, a: a Pisa, a Roma. With a country, in: in Italia.'),
        p('Studio l\'italiano.', 'I\'m studying Italian.', 'studio=I study; italiano=Italian (language)'),
        p('Parlo un po\' di italiano.', 'I speak a little Italian.', 'parlo=I speak; un po\'=a little'),
        p('Faccio la fotografa.', 'I\'m a photographer.', 'faccio=I do, I make; fotografa=photographer (woman)', 'Italians say "I do the photographer" for a job. A man would be il fotografo.'),
      ] },
      { id: 'u2l3', title: 'Help me understand', goal: 'Stay in the conversation when you\'re lost', items: [
        p('Non ho capito.', 'I didn\'t understand.', 'ho capito=I understood; capito=understood', 'Your most useful sentence for months. Say it without fear, and say ho as plain o.'),
        p('Puoi ripetere?', 'Can you say it again?', 'puoi=you can; ripetere=to repeat'),
        p('Più piano, per favore.', 'Slower, please.', 'più=more; piano=slowly, softly'),
        p('Ho capito.', 'I understand. / Got it.'),
        p('Cosa vuol dire?', 'What does it mean?', 'cosa=what; vuol dire=it means'),
        p('Come si dice in italiano?', 'How do you say it in Italian?', 'si dice=one says, you say'),
        p('Come si scrive?', 'How do you spell it?', 'si scrive=one writes'),
      ] },
    ],
  },
  {
    id: 'u3', topic: 'Family', level: 3, title: 'At his family\'s table', blurb: 'Meeting his parents, eating together, and the phrases that make an Italian mother happy.',
    lessons: [
      { id: 'u3l1', title: 'Meeting his family', goal: 'Arrive and say the right thing', items: [
        p('Buonasera, signora.', 'Good evening, madam.', 'signora=madam, Mrs', 'Use Lei, the polite you, with his parents until they say "dammi del tu" (call me tu).'),
        p('Piacere di conoscerla.', 'Nice to meet you. (polite)', 'conoscerla=to meet you (polite)'),
        p('Come sta?', 'How are you? (polite)', 'sta=you are (polite) / he or she is', 'Polite Lei uses the "he, she" form of the verb. Turkish uses "siz" for the same respect.'),
        p('Che bella casa!', 'What a lovely house!', 'che=what (a); bella=beautiful'),
        p('Grazie dell\'invito.', 'Thank you for inviting me.', 'invito=invitation; dell\'=of the'),
        p('Questo è per lei.', 'This is for you. (polite)', 'questo=this; per=for; lei=you (polite) / she'),
      ] },
      { id: 'u3l2', title: 'Eating together', goal: 'Get through a whole Italian lunch', items: [
        p('Buon appetito!', 'Enjoy your meal!', 'buon=good; appetito=appetite', 'Your "afiyet olsun", said as everyone starts eating.'),
        p('È buonissimo!', 'It\'s delicious!', 'buonissimo=very good, delicious'),
        p('Ancora un po\', per favore.', 'A little more, please.', 'ancora=more, again, still'),
        p('Basta così, grazie.', 'That\'s enough, thanks.', 'basta=enough; così=like this, so'),
        p('Sono piena!', 'I\'m full!', 'piena=full (woman)', 'There will always be a second course. Pace yourself.'),
        p('Mi passi il sale?', 'Can you pass me the salt?', 'mi passi=you pass me; sale=salt'),
        p('Cin cin!', 'Cheers!', 'cin cin=cheers', 'Your "şerefe". Look people in the eye.'),
      ] },
      { id: 'u3l3', title: 'Small talk with his parents', goal: 'Say something kind and true', items: [
        p('Lei cucina benissimo.', 'You cook really well. (polite)', 'cucina=cooks / kitchen'),
        p('Mi piace molto Pisa.', 'I really like Pisa.', 'mi piace=I like; molto=a lot, very', 'Literally "Pisa pleases me", like Turkish "hoşuma gidiyor".'),
        p('Giosuè parla sempre di voi.', 'Giosuè always talks about you.', 'parla=talks; sempre=always; voi=you (more than one)'),
        p('Ha ragione.', 'You\'re right. (polite)', 'ha=has; ragione=reason', 'Literally "you have reason". The h is silent: a ragione.'),
        p('Che lavoro fa?', 'What\'s your job? (polite)', 'lavoro=work, job; fa=you do (polite)'),
        p('Sono contenta di essere qui.', 'I\'m glad to be here.', 'contenta=glad (woman); essere=to be; qui=here'),
      ] },
    ],
  },
  {
    id: 'u4', topic: 'Love', level: 4, title: 'Love', blurb: 'The words for him.',
    lessons: [
      { id: 'u4l1', title: 'Sweet words', goal: 'Say what you feel', items: [
        p('Ti amo.', 'I love you.', 'ti=you; amo=I love', 'Strong, for a partner. For family and friends: Ti voglio bene.'),
        p('Ti voglio bene.', 'I love you. (warm, for anyone)', 'voglio=I want; bene=well, good'),
        p('Amore mio.', 'My love.', 'amore=love'),
        p('Mi manchi.', 'I miss you.', 'mi manchi=you are missing to me', 'Back to front: literally "you are missing to me". Turkish "seni özledim", turned round.'),
        p('Sei bellissimo.', 'You\'re so handsome.', 'sei=you are; bellissimo=very handsome (man)', 'To a woman: bellissima.'),
        p('Sei il mio tesoro.', 'You\'re my treasure.', 'tesoro=treasure, darling'),
        p('Un bacio!', 'A kiss!', 'bacio=kiss', 'The end of every message.'),
      ] },
      { id: 'u4l2', title: 'Every day together', goal: 'Talk through an ordinary day', items: [
        p('Buongiorno, amore!', 'Good morning, love!'),
        p('Hai dormito bene?', 'Did you sleep well?', 'hai dormito=you slept; dormito=slept', 'hai sounds like ai: the h is silent.'),
        p('Cosa facciamo oggi?', 'What shall we do today?', 'facciamo=we do; oggi=today'),
        p('Hai fame?', 'Are you hungry?', 'fame=hunger', 'Literally "do you have hunger?". Italian uses avere where Turkish says "acıktın mı".'),
        p('Ho sonno.', 'I\'m sleepy.', 'sonno=sleepiness, sleep', 'Double n: sonno is sleep, sono is I am. Hold the n.'),
        p('Torno alle sette.', 'I\'ll be back at seven.', 'torno=I come back; alle=at (a time)'),
        p('Ti aspetto.', 'I\'ll wait for you.', 'aspetto=I wait'),
      ] },
    ],
  },
  {
    id: 'u5', level: 6, title: 'Wants and needs', blurb: 'Hungry, tired, thirsty, lost: say it.',
    lessons: [
      { id: 'u5l1', title: 'I want, I need', goal: 'Ask for what you need', items: [
        p('Vorrei un caffè.', 'I\'d like a coffee.', 'vorrei=I\'d like; caffè=coffee', 'Vorrei is the polite "I want". At a bar, always vorrei.'),
        p('Voglio andare a casa.', 'I want to go home.', 'voglio=I want; andare=to go; a casa=home, at home'),
        p('Ho bisogno di aiuto.', 'I need help.', 'ho bisogno di=I need; aiuto=help'),
        p('Ho sete.', 'I\'m thirsty.', 'sete=thirst', 'One t: sete is thirst, sette is seven.'),
        p('Ho freddo.', 'I\'m cold.', 'freddo=cold'),
        p('Ho caldo.', 'I\'m hot.', 'caldo=hot, heat'),
        p('Sono stanca.', 'I\'m tired.', 'stanca=tired (woman)', 'Some feelings take avere (ho fame, ho sete), others essere (sono stanca). Learn them in pairs.'),
        p('Mi serve una penna.', 'I need a pen.', 'mi serve=I need; penna=pen'),
      ] },
      { id: 'u5l2', title: 'There is, there isn\'t', goal: 'C\'è and ci sono: two phrases that do a lot', items: [
        p('C\'è un problema.', 'There\'s a problem.', 'c\'è=there is; problema=problem', 'problema is masculine, even though it ends in -a.'),
        p('Non c\'è tempo.', 'There\'s no time.', 'tempo=time / weather'),
        p('Ci sono due bar qui.', 'There are two cafés here.', 'ci sono=there are; bar=café, bar; qui=here', 'Turkish "var" covers both: c\'è for one thing, ci sono for more.'),
        p('C\'è il wifi?', 'Is there wifi?', 'wifi=wifi'),
        p('Non c\'è latte.', 'There\'s no milk.', 'latte=milk'),
        p('Cosa c\'è?', 'What\'s up? / What\'s wrong?'),
        p('C\'è posto?', 'Is there room?', 'posto=place, seat, room'),
      ] },
    ],
  },
  {
    id: 'u6', level: 8, title: 'Questions', blurb: 'Who, what, where, when, why, how.',
    lessons: [
      { id: 'u6l1', title: 'Question words', goal: 'The seven words that open any question', items: [
        p('Chi è?', 'Who is it?', 'chi=who', 'chi is "ki", never "çi".'),
        p('Che cos\'è?', 'What is it?', 'che cosa=what; cos\'è=what is'),
        p('Dov\'è?', 'Where is it?', 'dove=where; dov\'è=where is'),
        p('Quando?', 'When?', 'quando=when'),
        p('Perché?', 'Why?', 'perché=why / because', 'The same word answers: Perché sì! Because!'),
        p('Come?', 'How? / Sorry, what?', 'come=how / like'),
        p('Quanto costa?', 'How much is it?', 'quanto=how much; costa=it costs'),
      ] },
      { id: 'u6l2', title: 'Useful questions', goal: 'Questions you will ask every day', items: [
        p('Dov\'è il bagno?', 'Where\'s the bathroom?', 'bagno=bathroom'),
        p('Che ore sono?', 'What time is it?', 'ore=hours', 'Literally "what hours are they?"'),
        p('Posso?', 'May I?', 'posso=I can, may I'),
        p('Mi aiuti?', 'Can you help me?', 'aiuti=you help'),
        p('Cosa vuoi?', 'What do you want?', 'vuoi=you want'),
        p('Dove andiamo?', 'Where are we going?', 'andiamo=we go / let\'s go'),
      ] },
    ],
  },
  {
    id: 'u7', topic: 'Numbers and time', level: 10, title: 'Numbers', blurb: 'Counting, prices, ages and the weather.',
    lessons: [
      { id: 'u7l1', title: 'One to five', goal: 'Count to five', items: [
        p('uno', 'one', '', 'Before a word: un caffè, una pizza.'), p('due', 'two'), p('tre', 'three'),
        p('quattro', 'four', '', 'Double t: kuat-tro.'), p('cinque', 'five', '', 'çin-kue: c before i is ç, qu is ku.'),
        p('Uno, due, tre, via!', 'One, two, three, go!', 'via=go / street, away'),
      ] },
      { id: 'u7l2', title: 'Six to ten', goal: 'Count to ten', items: [
        p('sei', 'six', '', 'Also "you are": Sei stanco? Are you tired?'), p('sette', 'seven', '', 'Hold the t. sete is thirst.'),
        p('otto', 'eight'), p('nove', 'nine'), p('dieci', 'ten', '', 'dye-çi.'),
        p('Ho dieci euro.', 'I have ten euros.', 'euro=euro'),
      ] },
      { id: 'u7l3', title: 'Big numbers', goal: 'Prices and ages', items: [
        p('venti', 'twenty'), p('trenta', 'thirty'), p('cento', 'a hundred', '', 'çento.'), p('mille', 'a thousand'),
        p('Quanti anni hai?', 'How old are you?', 'quanti=how many; anni=years', 'Literally "how many years do you have?". Say anni with a long n: ani is not a word.'),
        p('Costa venti euro.', 'It costs twenty euros.'),
      ] },
      { id: 'u7l4', title: 'Today, later, the weather', goal: 'Time words and small talk about the weather', items: [
        p('oggi', 'today', '', 'od-ci: the double g is a held c.'),
        p('domani', 'tomorrow'),
        p('ieri', 'yesterday', '', 'ye-ri.'),
        p('adesso', 'now'),
        p('dopo', 'later, after'),
        p('Che tempo fa?', 'What\'s the weather like?', 'tempo=weather / time; fa=it makes'),
        p('Fa caldo.', 'It\'s hot.', 'caldo=hot', 'The weather "makes": fa caldo, fa freddo. Turkish says "hava sıcak".'),
        p('Piove.', 'It\'s raining.', 'piove=it rains'),
      ] },
    ],
  },
  {
    id: 'u8', topic: 'City', level: 12, title: 'Out and about', blurb: 'Bars, shops and finding your way.',
    lessons: [
      { id: 'u8l1', title: 'At the bar', goal: 'Order, pay, and leave like a local', items: [
        p('Un caffè, per favore.', 'An espresso, please.', 'caffè=coffee, espresso', 'In Italy "un caffè" is an espresso, drunk standing at the bar.'),
        p('Un cappuccino e un cornetto.', 'A cappuccino and a croissant.', 'cornetto=croissant', 'Cappuccino is for the morning. After lunch, people will notice.'),
        p('Quant\'è?', 'How much is it? (to pay)', 'quant\'è=how much is it'),
        p('Posso pagare con la carta?', 'Can I pay by card?', 'pagare=to pay; carta=card / paper'),
        p('Lo scontrino, grazie.', 'The receipt, thanks.', 'scontrino=receipt'),
        p('Tenga il resto.', 'Keep the change.', 'tenga=keep (polite); resto=change, the rest'),
      ] },
      { id: 'u8l2', title: 'Getting around', goal: 'Ask the way and follow the answer', items: [
        p('Scusi, dov\'è la stazione?', 'Excuse me, where\'s the station?', 'scusi=excuse me (polite); stazione=station'),
        p('Sempre dritto.', 'Straight on.', 'sempre=always; dritto=straight'),
        p('A destra.', 'On the right.', 'destra=right'),
        p('A sinistra.', 'On the left.', 'sinistra=left'),
        p('È lontano?', 'Is it far?', 'lontano=far'),
        p('È qui vicino.', 'It\'s near here.', 'vicino=near'),
        p('Un biglietto per Firenze, per favore.', 'A ticket to Florence, please.', 'biglietto=ticket; Firenze=Florence'),
      ] },
    ],
  },
  {
    id: 'u9', level: 14, title: 'Yesterday', blurb: 'The passato prossimo: ho or sono, then the past form of the verb. With sono, the ending agrees with you: sono andata.',
    lessons: [
      { id: 'u9l1', title: 'What did you do?', goal: 'Tell him about your day', items: [
        p('Cosa hai fatto oggi?', 'What did you do today?', 'hai fatto=you did; fatto=done'),
        p('Ho lavorato tutto il giorno.', 'I worked all day.', 'ho lavorato=I worked; tutto=all, whole'),
        p('Sono andata al mare.', 'I went to the seaside.', 'sono andata=I went (woman); al=to the; mare=sea', 'Verbs of going and coming take essere, and the ending agrees with you: andata. Giosuè says andato.'),
        p('Abbiamo mangiato la pizza.', 'We had pizza.', 'abbiamo=we have; mangiato=eaten'),
        p('Ho visto un film.', 'I watched a film.', 'visto=seen; film=film'),
        p('Non ho dormito bene.', 'I didn\'t sleep well.'),
        p('Ieri sera siamo usciti.', 'Last night we went out.', 'ieri sera=last night; siamo usciti=we went out'),
      ] },
    ],
  },
  {
    id: 'u10', level: 17, title: 'Plans', blurb: 'Tonight, tomorrow and the weekend.',
    lessons: [
      { id: 'u10l1', title: 'What shall we do?', goal: 'Make plans together', items: [
        p('Cosa facciamo stasera?', 'What shall we do tonight?', 'stasera=this evening, tonight'),
        p('Andiamo al cinema?', 'Shall we go to the cinema?', 'cinema=cinema'),
        p('Domani vado a Firenze.', 'Tomorrow I\'m going to Florence.', 'vado=I go', 'Italian often uses the present for plans, as English does with "I\'m going".'),
        p('Sabato restiamo a casa.', 'On Saturday we\'re staying in.', 'sabato=Saturday; restiamo=we stay'),
        p('Che bella idea!', 'What a great idea!', 'idea=idea'),
        p('Ci vediamo alle otto.', 'See you at eight.'),
        p('Non vedo l\'ora!', 'I can\'t wait!', 'non vedo l\'ora=I can\'t wait', 'Literally "I don\'t see the hour".'),
      ] },
    ],
  },
  {
    id: 'u11', level: 5, title: 'Sound natural', blurb: 'The little words Italians fill every sentence with, and the set phrases for every moment of life.',
    lessons: [
      { id: 'u11l1', level: 5, title: 'Thinking out loud', goal: 'Fill the pauses like an Italian', items: [
        p('Allora...', 'So... / Well then...', 'allora=so, then', 'The way to start almost anything. Like Turkish "şimdi...".'),
        p('Cioè...', 'I mean...', 'cioè=that is, I mean', 'To correct or explain yourself. Like "yani".'),
        p('Dai!', 'Come on!', 'dai=come on', 'Like Turkish "hadi". Also "no way!" when surprised.'),
        p('Boh.', 'Dunno.', 'boh=dunno', 'With a shrug. The h is silent: just "bo".'),
        p('Magari!', 'I wish! / Maybe.', 'magari=I wish / maybe', 'Alone it is "if only!". In a sentence, "maybe": magari domani.'),
        p('Insomma...', 'So-so. / In short...', 'insomma=so-so / in short'),
        p('Tipo...', 'Like...', 'tipo=like, kind of', 'Young people put it everywhere, as English uses "like".'),
        p('Beh...', 'Well...', 'beh=well'),
      ] },
      { id: 'u11l2', level: 7, title: 'Reactions', goal: 'Answer with feeling', items: [
        p('Davvero?', 'Really?', 'davvero=really'),
        p('Che bello!', 'How lovely!', 'bello=beautiful, lovely'),
        p('Che peccato!', 'What a pity!', 'peccato=pity / sin'),
        p('Ma dai!', 'No way! / Come on!', 'ma=but'),
        p('Certo.', 'Of course.', 'certo=sure, of course'),
        p('Figurati!', 'Don\'t mention it! / Not at all!', 'figurati=imagine', 'The warm answer to grazie or scusa.'),
        p('Mamma mia!', 'Oh my goodness!', 'mamma=mum'),
        p('Accidenti!', 'Damn! / Oh no!', 'accidenti=damn'),
        p('Non importa.', 'Never mind.', 'importa=it matters'),
      ] },
      { id: 'u11l3', level: 9, title: 'Words for every moment', goal: 'The set phrases Italians expect', items: [
        p('Auguri!', 'Best wishes!', 'auguri=wishes', 'For birthdays, holidays, a new job: any good news.'),
        p('Buon compleanno!', 'Happy birthday!', 'compleanno=birthday'),
        p('Salute!', 'Bless you! / Cheers!', 'salute=health', 'After a sneeze, or raising a glass.'),
        p('In bocca al lupo!', 'Good luck!', 'bocca=mouth; lupo=wolf', 'Literally "into the wolf\'s mouth". Never answer grazie: answer Crepi!'),
        p('Crepi!', 'Thanks! (the answer to In bocca al lupo)', 'crepi=may it die', 'Literally "may the wolf die".'),
        p('Buon viaggio!', 'Have a good trip!', 'viaggio=journey, trip'),
        p('Buone feste!', 'Happy holidays!', 'feste=holidays, parties'),
        p('Condoglianze.', 'My condolences.', 'condoglianze=condolences', 'Said after a death. Like "başınız sağ olsun".'),
        p('Benvenuta!', 'Welcome! (to a woman)', 'benvenuta=welcome (woman)', 'To a man: benvenuto. To a group: benvenuti.'),
        p('Che fortuna!', 'How lucky!', 'fortuna=luck'),
      ] },
    ],
  },
];

export const LESSONS = UNITS.flatMap((u) => u.lessons.map((l) => ({ ...l, level: l.level ?? u.level, rank: 'A1', unit: u })));
export const lessonById = (id) => LESSONS.find((l) => l.id === id);

// Every word the course teaches, with its meaning, first meaning wins.
export const COURSE_WORDS = (() => {
  const map = new Map();
  for (const l of LESSONS) {
    for (const it of l.items) {
      if (!it.tr.includes(' ') && !it.tr.includes('{')) {
        const k = clean(it.tr);
        if (!map.has(k)) map.set(k, { tr: it.tr.replace(/[.!?,]/g, ''), en: it.en.replace(/[.!?]$/, '') });
      }
      for (const w of it.words) {
        const k = clean(w.tr);
        if (!map.has(k)) map.set(k, { tr: w.tr, en: w.en });
      }
    }
  }
  return [...map.values()];
})();
