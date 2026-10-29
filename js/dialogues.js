// Talk: short real conversations. Listen to the whole scene, then play your part.
// Each line: [who, italian, english, words]. "you" lines are the ones you say.
// The other speakers may go a little beyond A1: you understand more than you can say yet.

const L = (who, tr, en, w = '') => ({
  who, tr, en,
  words: w ? w.split(';').map((s) => s.trim()).filter(Boolean).map((s) => { const i = s.indexOf('='); return { tr: s.slice(0, i).trim(), en: s.slice(i + 1).trim() }; }) : [],
});

export const WHO = { you: 'You', gio: 'Giosuè', mom: 'His mother', dad: 'His father', waiter: 'Waiter', man: 'Passer-by', seller: 'Shop assistant', friend: 'His friend' };

export const DIALOGUES = [
  {
    id: 'dl1', level: 1, rank: 'A1', title: 'Evening video call', scene: 'Giosuè calls you in the evening. Answer in Italian.',
    lines: [
      L('gio', 'Ciao, amore!', 'Hi, love!'),
      L('you', 'Ciao! Come stai?', 'Hi! How are you?'),
      L('gio', 'Bene, e tu?', 'Fine, and you?'),
      L('you', 'Sto bene, grazie.', 'I\'m fine, thanks.'),
      L('gio', 'Stai studiando l\'italiano?', 'Are you studying Italian?', 'stai studiando=you are studying'),
      L('you', 'Sì! Un po\'.', 'Yes! A little.'),
      L('gio', 'Brava!', 'Well done!', 'brava=well done (to a woman)'),
      L('you', 'Grazie, amore.', 'Thanks, love.'),
      L('gio', 'Ci vediamo domani!', 'See you tomorrow!'),
      L('you', 'A domani. Buonanotte!', 'See you tomorrow. Good night!'),
    ],
  },
  {
    id: 'dl2', level: 2, rank: 'A1', title: 'At the door', scene: 'You arrive at his parents\' home for the first time.',
    lines: [
      L('mom', 'Ciao! Benvenuta! Tu sei {name}, vero?', 'Hello! Welcome! You\'re {name}, right?', 'vero=true, right'),
      L('you', 'Sì! Buonasera, signora.', 'Yes! Good evening, madam.'),
      L('mom', 'Ma che signora! Chiamami Anna.', 'Oh, don\'t call me madam! Call me Anna.', 'chiamami=call me'),
      L('you', 'Piacere, Anna.', 'Nice to meet you, Anna.'),
      L('dad', 'Buonasera! Io sono Marco, il papà di Giosuè.', 'Good evening! I\'m Marco, Giosuè\'s dad.', 'papà=dad'),
      L('you', 'Piacere di conoscerla.', 'Nice to meet you.'),
      L('dad', 'Ma dammi del tu! Parli già italiano?', 'Call me tu! Do you speak Italian already?', 'dammi del tu=call me tu; già=already'),
      L('you', 'Un po\'. Sto imparando.', 'A little. I\'m learning.', 'sto imparando=I\'m learning'),
      L('mom', 'Brava! Entra, entra.', 'Good for you! Come in, come in.', 'entra=come in'),
      L('you', 'Grazie dell\'invito.', 'Thank you for inviting me.'),
    ],
  },
  {
    id: 'dl3', level: 4, rank: 'A1', title: 'Sunday lunch', scene: 'His mother has cooked for everyone.',
    lines: [
      L('mom', 'Ecco le lasagne. Buon appetito!', 'Here\'s the lasagne. Enjoy!', 'ecco=here is, here are'),
      L('you', 'Grazie! Buon appetito.', 'Thank you! Enjoy your meal.'),
      L('mom', 'Allora, ti piacciono?', 'So, do you like it?'),
      L('you', 'Sono buonissime!', 'It\'s delicious!', 'buonissime=very good (feminine plural)'),
      L('mom', 'Ne vuoi ancora un po\'?', 'Would you like a bit more?', 'ne=of it'),
      L('you', 'Sì, grazie. Ancora un po\'.', 'Yes, thanks. A little more.'),
      L('dad', 'Mangia, mangia! Dopo c\'è anche l\'arrosto.', 'Eat, eat! After this there\'s a roast too.', 'anche=also; arrosto=roast'),
      L('you', 'Mamma mia! Sono già piena.', 'Oh my goodness! I\'m already full.'),
    ],
  },
  {
    id: 'dl4', level: 5, rank: 'A1', title: 'Help me understand', scene: 'His father talks fast. You don\'t catch it the first time.',
    lines: [
      L('dad', 'Allora, com\'è andato il viaggio da Istanbul l\'ultima volta?', 'So, how did the trip from Istanbul go last time?', 'viaggio=trip; ultima volta=last time'),
      L('you', 'Scusa, non ho capito.', 'Sorry, I didn\'t understand.'),
      L('dad', 'Il viaggio. È andato bene?', 'The trip. Did it go well?'),
      L('you', 'Puoi parlare più piano?', 'Can you speak more slowly?'),
      L('dad', 'Certo! Il... viaggio... è andato... bene?', 'Of course! Did... the trip... go... well?'),
      L('you', 'Ah, sì! È andato bene, grazie.', 'Oh, yes! It went well, thanks.'),
      L('dad', 'Bene! Cosa vuol dire "yolculuk" in turco?', 'Good! What does "yolculuk" mean in Turkish?'),
      L('you', 'Vuol dire "viaggio".', 'It means "viaggio".'),
      L('dad', 'Allora impariamo tutti e due!', 'So we\'re both learning!', 'impariamo=we learn; tutti e due=both'),
    ],
  },
  {
    id: 'dl5', level: 7, rank: 'A1', title: 'At the bar', scene: 'Morning in Pisa. You order for both of you, then pay.',
    lines: [
      L('waiter', 'Buongiorno! Prego, ditemi.', 'Good morning! Go ahead, what would you like?', 'ditemi=tell me (to you two)'),
      L('you', 'Buongiorno! Due cappuccini, per favore.', 'Good morning! Two cappuccinos, please.', 'cappuccini=cappuccinos'),
      L('waiter', 'Qualcos\'altro? Un cornetto?', 'Anything else? A croissant?', 'qualcos\'altro=anything else'),
      L('you', 'Sì, un cornetto alla crema.', 'Yes, a custard croissant.', 'alla crema=with custard'),
      L('gio', 'E per me uno vuoto.', 'And a plain one for me.', 'vuoto=empty, plain'),
      L('waiter', 'Ecco a voi.', 'Here you are.'),
      L('you', 'Quant\'è?', 'How much is it?'),
      L('waiter', 'Sono cinque euro e sessanta.', 'That\'s five euros sixty.', 'sessanta=sixty'),
      L('you', 'Posso pagare con la carta?', 'Can I pay by card?'),
      L('waiter', 'Certo. Grazie, buona giornata!', 'Of course. Thank you, have a nice day!', 'buona giornata=have a nice day'),
    ],
  },
  {
    id: 'dl6', level: 9, rank: 'A1', title: 'Where are you?', scene: 'Giosuè calls you on his way home from work.',
    lines: [
      L('gio', 'Pronto, amore? Dove sei?', 'Hello, love? Where are you?', 'pronto=hello (on the phone) / ready'),
      L('you', 'Sono a casa. E tu?', 'I\'m at home. And you?'),
      L('gio', 'Sono in macchina, c\'è un sacco di traffico.', 'I\'m in the car, there\'s loads of traffic.', 'un sacco di=loads of; traffico=traffic'),
      L('you', 'Quando arrivi?', 'When will you get here?', 'arrivi=you arrive'),
      L('gio', 'Fra venti minuti, più o meno. Hai fame?', 'In twenty minutes, more or less. Are you hungry?', 'fra=in (time); minuti=minutes'),
      L('you', 'Sì, ho fame! Compri il pane?', 'Yes, I\'m hungry! Can you buy bread?', 'compri=you buy'),
      L('gio', 'Va bene. Altro?', 'Okay. Anything else?'),
      L('you', 'No, basta così. A dopo!', 'No, that\'s all. See you soon!', 'a dopo=see you later'),
    ],
  },
  {
    id: 'dl7', level: 11, rank: 'A1', title: 'Asking the way', scene: 'You\'re in Pisa, looking for Piazza dei Miracoli and the tower.',
    lines: [
      L('you', 'Scusi, dov\'è Piazza dei Miracoli?', 'Excuse me, where is Piazza dei Miracoli?', 'piazza=square'),
      L('man', 'È vicino. Vada sempre dritto, poi giri a destra al semaforo.', 'It\'s close. Go straight on, then turn right at the traffic lights.', 'vada=go (polite); giri=turn (polite); semaforo=traffic lights'),
      L('you', 'Sempre dritto, poi a destra?', 'Straight on, then right?'),
      L('man', 'Esatto. Poi vede subito la torre.', 'Exactly. Then you\'ll see the tower straight away.', 'esatto=exactly; vede=you see; torre=tower'),
      L('you', 'È lontano a piedi?', 'Is it far on foot?', 'a piedi=on foot'),
      L('man', 'No, dieci minuti a piedi.', 'No, ten minutes on foot.'),
      L('you', 'Grazie mille!', 'Thanks a lot!'),
      L('man', 'Di niente. Buona passeggiata!', 'You\'re welcome. Enjoy your walk!', 'di niente=you\'re welcome'),
    ],
  },
  {
    id: 'dl8', level: 13, rank: 'A1', title: 'How was your day?', scene: 'Evening. You both talk about the day.',
    lines: [
      L('gio', 'Allora, com\'è andata oggi?', 'So, how did today go?'),
      L('you', 'Bene! Ho lavorato tanto.', 'Well! I worked a lot.'),
      L('gio', 'Hai fatto le foto per il ristorante?', 'Did you take the photos for the restaurant?', 'foto=photos; ristorante=restaurant'),
      L('you', 'Sì, sono venute benissimo.', 'Yes, they came out really well.', 'sono venute=they came out'),
      L('gio', 'Brava! Io invece ho avuto una giornata pesante.', 'Well done! I had a heavy day, on the other hand.', 'invece=instead, on the other hand; pesante=heavy'),
      L('you', 'Mi dispiace. Sei stanco?', 'I\'m sorry. Are you tired?', 'mi dispiace=I\'m sorry'),
      L('gio', 'Un po\'. Ordiniamo una pizza?', 'A bit. Shall we order a pizza?', 'ordiniamo=we order'),
      L('you', 'Che bella idea!', 'What a great idea!'),
      L('gio', 'Margherita come sempre?', 'Margherita as always?'),
      L('you', 'No, oggi voglio la diavola!', 'No, today I want the spicy one!', 'diavola=spicy salami pizza'),
    ],
  },
  {
    id: 'dl9', level: 15, rank: 'A1', title: 'Weekend plans', scene: 'You\'re deciding what to do on Saturday.',
    lines: [
      L('gio', 'Cosa facciamo sabato?', 'What shall we do on Saturday?'),
      L('you', 'Andiamo al mare?', 'Shall we go to the seaside?'),
      L('gio', 'Dicono che piove. Magari andiamo a Lucca?', 'They say it\'ll rain. Maybe we go to Lucca?', 'dicono=they say'),
      L('you', 'Sì, mi piace Lucca. Andiamo in treno?', 'Yes, I like Lucca. Shall we go by train?', 'in treno=by train'),
      L('gio', 'In treno, così non dobbiamo parcheggiare.', 'By train, so we don\'t have to park.', 'dobbiamo=we must; parcheggiare=to park'),
      L('you', 'A che ora partiamo?', 'What time do we leave?', 'partiamo=we leave'),
      L('gio', 'Verso le dieci. Ti va bene?', 'Around ten. Does that work for you?', 'verso=around, towards; ti va bene=does it suit you'),
      L('you', 'Perfetto! E la sera?', 'Perfect! And in the evening?', 'perfetto=perfect'),
      L('gio', 'La sera ceniamo da Luca e Sara.', 'In the evening we\'re having dinner at Luca and Sara\'s.'),
      L('you', 'Non vedo l\'ora!', 'I can\'t wait!'),
    ],
  },
  {
    id: 'dl10', level: 17, rank: 'A1', title: 'At the market', scene: 'Saturday market. Buying fruit and vegetables.',
    lines: [
      L('seller', 'Buongiorno, signorina! Cosa le do?', 'Good morning, miss! What can I get you?', 'signorina=miss; le do=I give you'),
      L('you', 'Buongiorno. Un chilo di pomodori, per favore.', 'Good morning. A kilo of tomatoes, please.', 'chilo=kilo; pomodori=tomatoes'),
      L('seller', 'Questi sono buonissimi, di stagione. Altro?', 'These are lovely, in season. Anything else?', 'di stagione=in season'),
      L('you', 'Sì, delle fragole. Quanto costano?', 'Yes, some strawberries. How much are they?', 'fragole=strawberries; costano=they cost'),
      L('seller', 'Tre euro al cestino.', 'Three euros a punnet.', 'cestino=small basket, punnet'),
      L('you', 'Ne prendo due.', 'I\'ll take two.', 'ne=of them; prendo=I take'),
      L('seller', 'Ecco. Sono nove euro in tutto.', 'Here you are. That\'s nine euros altogether.', 'in tutto=altogether'),
      L('you', 'Ecco a lei. Grazie, buona giornata!', 'Here you are. Thanks, have a nice day!'),
      L('seller', 'Grazie a lei! Arrivederci!', 'Thank you! Goodbye!'),
    ],
  },
  {
    id: 'dl11', level: 19, rank: 'A1', title: 'Meeting his friend', scene: 'His best friend Luca joins you for an aperitivo.',
    lines: [
      L('friend', 'Ciao! Tu devi essere {name}. Io sono Luca.', 'Hi! You must be {name}. I\'m Luca.'),
      L('you', 'Ciao Luca, piacere! Giosuè parla sempre di te.', 'Hi Luca, nice to meet you! Giosuè always talks about you.'),
      L('friend', 'Spero bene! Da quanto tempo sei in Italia?', 'Good things, I hope! How long have you been in Italy?', 'spero=I hope; da quanto tempo=for how long'),
      L('you', 'Da un po\'. Mi piace tanto.', 'For a while. I really like it.'),
      L('friend', 'E l\'italiano? Mi sembra che lo parli bene!', 'And Italian? It seems to me you speak it well!', 'mi sembra=it seems to me'),
      L('you', 'Grazie! Ma faccio ancora tanti errori.', 'Thanks! But I still make lots of mistakes.', 'errori=mistakes'),
      L('friend', 'Figurati, anche noi! Cosa bevi?', 'Don\'t worry, so do we! What are you drinking?', 'bevi=you drink'),
      L('you', 'Uno spritz, per favore.', 'A spritz, please.'),
      L('friend', 'Perfetto. Cin cin!', 'Perfect. Cheers!'),
    ],
  },
  {
    id: 'dl12', level: 20, rank: 'A1', title: 'Saying goodbye', scene: 'Leaving his parents\' home at the end of the evening.',
    lines: [
      L('you', 'Grazie di tutto. È stata una bellissima serata.', 'Thank you for everything. It was a lovely evening.', 'serata=evening'),
      L('mom', 'Grazie a te, cara! Torna presto, eh!', 'Thank you, dear! Come back soon, okay!', 'cara=dear (woman); torna=come back'),
      L('you', 'Certo! La prossima volta cucino io.', 'Of course! Next time I\'ll cook.', 'prossima volta=next time'),
      L('dad', 'Davvero? Un piatto turco?', 'Really? A Turkish dish?', 'piatto=dish, plate'),
      L('you', 'Sì, i mantı. Vi piaceranno!', 'Yes, mantı. You\'ll love them!', 'vi piaceranno=you will like them'),
      L('mom', 'Non vediamo l\'ora! Buonanotte, ragazzi.', 'We can\'t wait! Good night, you two.', 'ragazzi=guys, kids'),
      L('you', 'Buonanotte! Un abbraccio.', 'Good night! A hug.', 'abbraccio=hug'),
      L('dad', 'Ciao, a presto!', 'Bye, see you soon!'),
    ],
  },
];

export const dialogueById = (id) => DIALOGUES.find((d) => d.id === id);
