// Themes: ten words at a time around one topic. Hear them from English, then guess them from Italian.
// Three right guesses and a word goes to your vocab. Finish a theme to open the next one.
// Each word: "italian=english" with an optional "| note". Nouns carry their article,
// because in Italian the gender is part of the word.

const T = (id, title, tr, rank, words) => ({
  id, title, tr, rank,
  words: words.map((w) => {
    const [pair, note = ''] = w.split('|').map((s) => s.trim());
    const i = pair.indexOf('=');
    return { tr: pair.slice(0, i).trim(), en: pair.slice(i + 1).trim(), note };
  }),
});

export const NEED = 3;

export const THEMES = [
  T('greetings', 'Greetings', 'Saluti', 'A1', [
    'ciao=hi, bye', 'buongiorno=good morning', 'buonasera=good evening', 'buonanotte=good night', 'arrivederci=goodbye (polite)',
    'benvenuta=welcome (to a woman)', 'a presto=see you soon', 'grazie=thank you', 'prego=you\'re welcome', 'per favore=please',
  ]),
  T('family', 'Family', 'Famiglia', 'A1', [
    'la madre=mother', 'il padre=father', 'il fratello=brother', 'la sorella=sister', 'il nonno=grandpa',
    'la nonna=grandma', 'lo zio=uncle', 'la zia=aunt', 'il cugino=cousin (man)', 'i genitori=parents',
  ]),
  T('food', 'Food and drink', 'Cibo e bevande', 'A1', [
    'il pane=bread', 'l\'acqua=water', 'il vino=wine', 'il caffè=coffee', 'il formaggio=cheese',
    'la carne=meat', 'il pollo=chicken', 'il pesce=fish', 'la verdura=vegetables', 'la frutta=fruit',
  ]),
  T('home', 'Home', 'Casa', 'A1', [
    'la casa=house, home', 'la camera=bedroom', 'la cucina=kitchen', 'il bagno=bathroom', 'il letto=bed',
    'il tavolo=table', 'la sedia=chair', 'la porta=door', 'la finestra=window', 'la chiave=key',
  ]),
  T('love', 'Love', 'Amore', 'A1', [
    'l\'amore=love', 'il fidanzato=boyfriend', 'la fidanzata=girlfriend', 'amare=to love', 'il bacio=kiss',
    'l\'abbraccio=hug', 'il cuore=heart', 'mancare=to be missed', 'insieme=together', 'per sempre=forever',
  ]),
  T('time', 'Time', 'Le ore e i giorni', 'A1', [
    'oggi=today', 'domani=tomorrow', 'ieri=yesterday', 'adesso=now', 'dopo=later',
    'la mattina=morning', 'la sera=evening', 'la notte=night', 'la settimana=week', 'l\'ora=hour',
  ]),
  T('weather', 'Weather', 'Il tempo', 'A1', [
    'il sole=sun', 'la pioggia=rain', 'la neve=snow', 'il vento=wind', 'la nuvola=cloud',
    'caldo=hot', 'freddo=cold', 'l\'estate=summer', 'l\'inverno=winter', 'l\'ombrello=umbrella',
  ]),
  T('city', 'City', 'Città', 'A1', [
    'la città=city', 'la strada=street, road', 'la piazza=square', 'l\'autobus=bus', 'il treno=train',
    'la stazione=station', 'l\'aeroporto=airport', 'l\'albergo=hotel', 'la farmacia=pharmacy', 'l\'ospedale=hospital',
  ]),
  T('shopping', 'Shopping', 'Fare spese', 'A1', [
    'i soldi=money', 'il prezzo=price', 'economico=cheap', 'caro=expensive', 'lo sconto=discount',
    'la carta=card', 'in contanti=in cash', 'lo scontrino=receipt', 'la borsa=bag', 'comprare=to buy',
  ]),
  T('feelings', 'Feelings', 'Emozioni', 'A1', [
    'felice=happy', 'triste=sad', 'stanca=tired (woman)', 'arrabbiata=angry (woman)', 'emozionata=excited (woman)',
    'la paura=fear', 'malata=ill (woman)', 'la fame=hunger', 'la sete=thirst', 'tranquilla=calm (woman)',
  ]),
  T('body', 'Body and health', 'Corpo e salute', 'A1', [
    'la testa=head', 'gli occhi=eyes', 'la bocca=mouth', 'la mano=hand', 'il piede=foot',
    'il braccio=arm', 'la gamba=leg', 'il dente=tooth', 'la pancia=belly', 'il mal di testa=headache',
  ]),
  T('sports', 'Sports and free time', 'Sport e tempo libero', 'A1', [
    'lo sport=sport', 'il calcio=football', 'la partita=match', 'nuotare=to swim', 'correre=to run',
    'la passeggiata=walk', 'il gioco=game', 'la musica=music', 'il film=film', 'il libro=book',
  ]),
  T('clothes', 'Clothes and colours', 'Vestiti e colori', 'A1', [
    'rosso=red', 'blu=blue', 'verde=green', 'giallo=yellow', 'nero=black',
    'bianco=white', 'la camicia=shirt', 'i pantaloni=trousers', 'il vestito=dress', 'le scarpe=shoes',
  ]),
  T('work', 'Work and study', 'Lavoro e studio', 'A1', [
    'il lavoro=work, job', 'l\'ufficio=office', 'il capo=boss', 'la riunione=meeting', 'la scuola=school',
    'l\'insegnante=teacher', 'lo studente=student', 'la lezione=lesson', 'l\'esame=exam', 'la macchina fotografica=camera',
  ]),
  T('nature', 'Nature and animals', 'Natura e animali', 'A1', [
    'il gatto=cat', 'il cane=dog', 'l\'uccello=bird', 'l\'albero=tree', 'il fiore=flower',
    'il mare=sea', 'la montagna=mountain', 'il lago=lake', 'il bosco=wood, forest', 'la spiaggia=beach',
  ]),
];

export const themeById = (id) => THEMES.find((t) => t.id === id);
export const wordKey = (theme, w) => `${theme.id}:${w.tr}`;
