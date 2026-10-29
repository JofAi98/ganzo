// The sound line: syllables, stress and an easy respelling, computed from the written word.
// The respelling uses Turkish letters (c = "gi" of giorno, ç = "ci" of ciao, ş = "sci" of
// scena, y = "i" of ieri), so a Turkish speaker can read it aloud as if it were Turkish.

export const lower = (s) => String(s).toLocaleLowerCase('it');
// Turkish capitals keep the dot on i: the stressed "mi" shows as Mİ, not MI (which reads "mı").
export const upper = (s) => String(s).toLocaleUpperCase('tr');
export const clean = (w) => lower(w).replace(/[^a-zàèéìíòóùúı]/g, ''); // ı: Turkish words like mantı

const ACCENT = { à: 'a', è: 'e', é: 'e', ì: 'i', í: 'i', ò: 'o', ó: 'o', ù: 'u', ú: 'u' };
const plain = (c) => ACCENT[c] || c;
const isV = (c) => !!c && 'aeiouàèéìíòóùú'.includes(c);
const isStrong = (c) => !!c && 'aeoàèéìíòóùú'.includes(c); // a, e, o, and any accented vowel
const FRONT = (c) => !!c && 'eiéèìí'.includes(c);

// Words whose stress is not on the second-to-last syllable (index from the start).
// Written accents (città, perché) and -issimo are handled by rule, not listed here.
export const STRESS = {
  tavolo: 0, parlano: 0, abitano: 0, vivono: 0, vengono: 0, prendono: 0, mangiano: 0, scrivono: 0,
  lavorano: 1, chiamano: 0, aspettano: 1, guardano: 0, piacciono: 0, sabato: 0, domenica: 1,
  musica: 0, numero: 0, telefono: 1, telefonano: 1, simpatico: 1, simpatica: 1, fantastico: 1,
  fantastica: 1, magnifico: 1, magnifica: 1, macchina: 0, camera: 0, ottimo: 0, ottima: 0,
  facile: 0, difficile: 1, utile: 0, piccolo: 0, piccola: 0, piccoli: 0, piccole: 0, medico: 0,
  zucchero: 0, autobus: 0, aereo: 1, ultimo: 0, ultima: 0, subito: 0, essere: 0, prendere: 0,
  vivere: 0, scrivere: 0, leggere: 0, chiudere: 0, mettere: 0, ridere: 0, credere: 0, vendere: 0,
  conoscere: 1, rispondere: 1, chiedere: 0, perdere: 0, correre: 0, piangere: 0, scegliere: 0,
  spendere: 0, smettere: 0, ripetere: 1, ricevere: 1, succedere: 1, decidere: 1, permettere: 1,
  dimmelo: 0, chiamami: 0, chiamala: 0, scrivimi: 0, aspettami: 1, ascoltami: 1, guardami: 0,
  baciami: 0, lasciami: 0, abbracciami: 1, portami: 0, svegliati: 0, sbrigati: 0, siediti: 0,
  fermati: 0, calmati: 0, alzati: 0, parlami: 0, andiamoci: 1,
  compito: 0, compiti: 0, cenere: 0, pecora: 0, gomito: 0, polvere: 0, lacrime: 0, lacrima: 0,
  agile: 0, isola: 0, epoca: 0, angolo: 0, popolo: 0, regola: 0, tavola: 0, favola: 0, camice: 0,
  tessera: 0, tredici: 0, undici: 0, dodici: 0, quattordici: 1, quindici: 0, sedici: 0,
  pentola: 0, scatola: 0, fragola: 0, nuvola: 0, gondola: 0, napoli: 0, genova: 0,
  cosimo: 0, tipico: 0, tipica: 0, pratico: 0, pratica: 0, classico: 0, comodo: 0,
  comoda: 0, umido: 0, timido: 0, timida: 0, stupido: 0, stupida: 0, lucido: 0, rapido: 0,
  stomaco: 0, monaco: 0, portatile: 1, mobile: 0, celebre: 0, vescovo: 0, ospite: 0, ospiti: 0,
  suocera: 0, suocero: 0, genero: 0, giovane: 0, giovani: 0, anima: 0,
  pagina: 0, origine: 1, ordine: 0, immagine: 1, margine: 0, termine: 0, pettine: 0,
  dicono: 0, escono: 0, giocano: 0, ballano: 0, cantano: 0, cucinano: 1,
  arrivano: 1, partono: 0, dormono: 0, finiscono: 1, capiscono: 1, preferiscono: 2, puliscono: 1,
  possono: 0, vogliono: 0, devono: 0,
};

// Little words that lean on the next word and carry no stress: articles, prepositions,
// "and", "or", "not", and the short object pronouns.
export const CLITICS = new Set([
  'il', 'lo', 'la', 'i', 'gli', 'le', 'un', 'di', 'a', 'da', 'in', 'con', 'su', 'per', 'tra', 'fra',
  'e', 'o', 'ma', 'se', 'che', 'non', 'mi', 'ti', 'ci', 'vi', 'si', 'ne', 'del', 'al', 'dal', 'nel',
  'sul', 'col', 'dei', 'ai', 'dai', 'nei', 'sui', 'li',
]);

// Words the rules get wrong: syllables with the stressed one in capitals, and, for names,
// how it sounds. Mostly stressed i or u next to another vowel (mi-o, far-ma-ci-a, pa-u-ra).
const OVR = {
  io: 'I-o', mio: 'MI-o', mia: 'MI-a', mie: 'MI-e', tuo: 'TU-o', tua: 'TU-a', tue: 'TU-e', suo: 'SU-o',
  sua: 'SU-a', sue: 'SU-e', zio: 'ZI-o', zia: 'ZI-a', zii: 'ZI-i', zie: 'ZI-e', via: 'VI-a', dio: 'DI-o',
  addio: 'ad-DI-o', paura: 'pa-U-ra', farmacia: 'far-ma-CI-a', pizzeria: 'piz-ze-RI-a',
  gelateria: 'ge-la-te-RI-a', trattoria: 'trat-to-RI-a', libreria: 'li-bre-RI-a', polizia: 'po-li-ZI-a',
  maria: 'ma-RI-a', lucia: 'lu-CI-a', bugia: 'bu-GI-a', energia: 'e-ner-GI-a', magia: 'ma-GI-a',
  allergia: 'al-ler-GI-a', fantasia: 'fan-ta-SI-a', fotografia: 'fo-to-gra-FI-a', geografia: 'ge-o-gra-FI-a',
  filosofia: 'fi-lo-so-FI-a', poesia: 'po-e-SI-a', gelosia: 'ge-lo-SI-a', compagnia: 'com-pa-GNI-a',
  macelleria: 'ma-cel-le-RI-a', pasticceria: 'pa-stic-ce-RI-a', osteria: 'o-ste-RI-a', sciare: 'sci-A-re',
  scia: 'SCI-a', psicologia: 'psi-co-lo-GI-a', biologia: 'bio-lo-GI-a', nostalgia: 'no-stal-GI-a',
  allegria: 'al-le-GRI-a', armonia: 'ar-mo-NI-a', galleria: 'gal-le-RI-a', profumeria: 'pro-fu-me-RI-a',
  avvia: 'av-VI-a', invia: 'in-VI-a', sciopero: 'SCIO-pe-ro', computer: ['com-PIU-ter', 'kom-pyu-ter'],
  feyza: ['FEY-za', 'fey-za'], giosuè: ['gio-su-È', 'co-zu-e'], pisa: ['PI-sa', 'pi-za'],
  weekend: ['week-END', 'uik-end'], mantı: ['MAN-tı', 'man-tı'], yolculuk: ['yol-cu-LUK', 'yol-cu-luk'], riunione: 'ri-u-NIO-ne', tv: ['ti-VÙ', 'ti-vu'], olsun: ['OL-sun', 'ol-sun'], afiyet: ['a-fi-YET', 'a-fi-yet'], ok: ['o-KAY', 'o-key'], wifi: ['WAI-fai', 'vay-fay'],
};

// Words where z sounds "dz" rather than "ts".
const DZ = new Set(['zero', 'zona', 'zaino', 'zanzara', 'mezzo', 'mezza', 'mezzanotte', 'mezzogiorno', 'mezzora',
  'azzurro', 'azzurra', 'pranzo', 'romanzo', 'zenzero', 'organizzare', 'organizziamo', 'realizzare']);

/* ---------- Syllables ---------- */

// Split a clean word into units: a vowel, or a consonant sound (which may be several letters).
// ci, gi, sci and gli before a vowel are one unit: their i is only spelling.
function units(w) {
  const out = [];
  for (let i = 0; i < w.length;) {
    const c = w[i], n = w[i + 1], n2 = w[i + 2];
    if (isV(c) || c === 'y') { out.push({ t: c, v: true }); i++; continue; }
    if (c === 's' && n === 'c' && n2 === 'h') { out.push({ t: 's' }, { t: 'ch' }); i += 3; continue; }
    if (c === 's' && n === 'c' && n2 === 'i' && isV(w[i + 3])) { out.push({ t: 'sci' }); i += 3; continue; }
    if (c === 's' && n === 'c' && FRONT(n2)) { out.push({ t: 'sc' }); i += 2; continue; }
    if ((c === 'c' || c === 'g') && n === 'h') { out.push({ t: c + 'h' }); i += 2; continue; }
    if ((c === 'c' || c === 'g') && n === 'i' && isV(n2)) { out.push({ t: c + 'i' }); i += 2; continue; }
    if (c === 'g' && n === 'n') { out.push({ t: 'gn' }); i += 2; continue; }
    if (c === 'g' && n === 'l' && n2 === 'i') {
      if (isV(w[i + 3])) { out.push({ t: 'gli' }); i += 3; } else { out.push({ t: 'gl' }); i += 2; }
      continue;
    }
    if ((c === 'q' || c === 'g') && n === 'u' && isV(n2)) { out.push({ t: c + 'u' }); i += 2; continue; }
    out.push({ t: c }); i++;
  }
  return out;
}

// Which vowels carry a syllable. a, e, o and accented vowels always do; an unaccented i or u
// next to one of them glides onto it (pia-no, buo-no, mai). In "iu" and "ui" the u carries it.
function nuclei(us) {
  const v = us.map((u) => (u.v ? u.t : ''));
  return us.map((u, k) => {
    if (!u.v) return false;
    if (isStrong(u.t)) return true;
    if (isStrong(v[k - 1]) || isStrong(v[k + 1])) return false;
    if ((u.t === 'i' || u.t === 'y') && (v[k + 1] === 'u')) return false;
    if (u.t === 'i' && v[k - 1] === 'u') return false;
    return true;
  });
}

const LIQUID = new Set(['l', 'r']);
const STOP = new Set(['b', 'c', 'd', 'f', 'g', 'p', 't', 'v', 'ch', 'gh', 'k']);
const head = (t) => t[0];

// Split the consonants between two vowels: how many go with the next syllable.
function onsetSize(cons) {
  const n = cons.length;
  if (n <= 1) return n;
  const [a, b] = cons;
  if (n === 2) {
    if (head(a.t) === head(b.t) || (a.t === 'c' && b.t.startsWith('q'))) return 1; // pal-la, ac-qua, fac-cia
    if (STOP.has(a.t) && LIQUID.has(b.t)) return 2; // ma-dre, li-bro
    return 1; // al-to, pas-ta, rit-mo
  }
  // Three or more: the last two stay together when they can start a syllable (con-tro, fi-nes-tra).
  const y = cons[n - 2], z = cons[n - 1];
  return STOP.has(y.t) && LIQUID.has(z.t) ? 2 : 1;
}

export function syllables(word) {
  const w = clean(word);
  if (!w) return [];
  const o = OVR[w];
  if (o) return lower([].concat(o)[0]).split('-');
  const us = units(w);
  const nu = nuclei(us);
  const idx = nu.map((x, k) => (x ? k : -1)).filter((k) => k >= 0);
  if (idx.length <= 1) return [w];
  const cuts = [];
  for (let k = 0; k < idx.length - 1; k++) {
    const between = us.slice(idx[k] + 1, idx[k + 1]);
    const cons = between.filter((u) => !u.v);
    if (!cons.length) {
      // Only vowels between: the glides go with the next syllable (no-ia, a-iu-to).
      cuts.push(idx[k] + 1);
      continue;
    }
    const lastCons = idx[k] + between.length - [...between].reverse().findIndex((u) => !u.v);
    cuts.push(lastCons + 1 - onsetSize(cons));
  }
  const out = [];
  let start = 0;
  for (const c of cuts) { out.push(us.slice(start, c).map((u) => u.t).join('')); start = c; }
  out.push(us.slice(start).map((u) => u.t).join(''));
  return out;
}

export function stressIndex(word, syl = syllables(word)) {
  // An elided word (l'autobus, dell'invito) keeps the stress of the word after the apostrophe.
  const base = lower(word).split(/['’]/).pop();
  if (base !== lower(word) && clean(base) && clean(base) !== clean(word)) {
    const b = clean(base), bs = syllables(b), i = stressIndex(b, bs);
    return i < 0 ? i : i + syl.length - bs.length;
  }
  const w = clean(word);
  const o = OVR[w];
  if (o) return [].concat(o)[0].split('-').findIndex((s) => s !== lower(s));
  if (syl.length === 1) return CLITICS.has(w) ? -1 : 0;
  const acc = syl.map((s) => /[àèéìíòóùú]/.test(s));
  if (acc.includes(true)) return acc.lastIndexOf(true);
  if (w in STRESS) return Math.min(STRESS[w], syl.length - 1);
  if (/issim[oaie]$/.test(w) || /[ai]bil[ei]$/.test(w)) return Math.max(0, syl.length - 3);
  return syl.length - 2;
}

/* ---------- Respelling ---------- */

// One syllable in Turkish letters. "next" is the following syllable, for double letters
// and for an s that buzzes before a voiced consonant.
function respellSyl(s, next, dz) {
  // The u of qu and gu (before a vowel) only glides: quan-do, gu-ar-da-re is "guar".
  const glideU = (k) => s[k] === 'u' && (s[k - 1] === 'q' || (s[k - 1] === 'g' && isV(s[k + 1])));
  const vs = [...s].filter((c, k) => isV(c) && !glideU(k));
  // The vowel that carries the syllable; the others in it are glides.
  let nuc = vs.findIndex(isStrong);
  if (nuc < 0) nuc = vs.length === 2 && vs[1] === 'u' ? 1 : vs.length === 2 && vs[0] === 'u' && vs[1] === 'i' ? 0 : vs.length - 1;
  let out = '', vi = 0;
  const at = (k) => (k < s.length ? s[k] : next[k - s.length] || '');
  for (let k = 0; k < s.length; k++) {
    const c = s[k], n = at(k + 1), n2 = at(k + 2);
    const silentI = () => { if (s[k + 1] === 'i' && isV(s[k + 2])) { k++; vi++; } };
    if (isV(c)) { out += vi++ === nuc ? plain(c) : c === 'i' ? 'y' : plain(c); continue; }
    switch (c) {
      case 'c':
        if (n === 'h') { out += 'k'; k++; }
        else if (FRONT(n)) { out += 'ç'; silentI(); }
        else if (k === s.length - 1 && next[0] === 'c' && FRONT(next[1])) out += 't'; // fac-cia
        else out += 'k';
        break;
      case 'g':
        if (n === 'h') { out += 'g'; k++; }
        else if (n === 'n') { out += 'ny'; k++; }
        else if (n === 'l' && n2 === 'i') { out += isV(at(k + 3)) && k + 3 < s.length ? 'ly' : 'l'; k += isV(at(k + 3)) && k + 3 < s.length ? 2 : 1; if (s[k] === 'i') vi++; }
        else if (FRONT(n)) { out += 'c'; silentI(); }
        else if (k === s.length - 1 && next[0] === 'g' && FRONT(next[1])) out += 'd'; // og-gi
        else if (glideU(k + 1)) { out += 'gu'; k++; }
        else out += 'g';
        break;
      case 's':
        if (n === 'c' && FRONT(n2)) { out += 'ş'; k++; silentI(); }
        else out += 'bdglmnrv'.includes(n) && n ? 'z' : 's';
        break;
      case 'q': out += s[k + 1] === 'u' ? 'ku' : 'k'; if (s[k + 1] === 'u') k++; break;
      case 'z': out += k === s.length - 1 && next[0] === 'z' ? (dz ? 'd' : 't') : dz ? 'dz' : 'ts'; break;
      case 'h': break;
      case 'j': out += 'y'; break;
      case 'w': out += 'v'; break;
      case 'x': out += 'ks'; break;
      case 'y': out += vi++ === nuc ? 'i' : 'y'; break;
      default: out += c;
    }
  }
  return out;
}

export function respellWord(word) {
  const w = clean(word);
  const syl = syllables(w);
  const o = OVR[w];
  const say = Array.isArray(o) ? o[1].split('-') : syl.map((s, i) => respellSyl(s, syl[i + 1] || '', DZ.has(w)));
  return { word: w, syl, say, stress: stressIndex(word, syl) };
}

export function respellText(text) {
  return tokens(text).map((t) => {
    const r = respellWord(t);
    return r.say.map((s, i) => (i === r.stress ? upper(s) : s)).join('-');
  }).join(' ');
}

// Words in a sentence. An elided word stays joined to the next one, as it is said:
// l'amico is one word, la-MI-co.
export const tokens = (text) => String(text).split(/\s+/).map((t) => t.replace(/^[^\p{L}]+|[^\p{L}]+$/gu, '')).filter((t) => clean(t));

/* ---------- The sounds that trip up a Turkish speaker ---------- */

export const SOUNDS = [
  { k: 'c', say: 'ç · k', ex: 'cena', exEn: 'dinner', tip: 'Before e and i, c is Turkish ç: cena is "çena", ciao is "çao". Everywhere else it is k: casa, cosa, cuore.' },
  { k: 'g', say: 'c · g', ex: 'gelato', exEn: 'ice cream', tip: 'Before e and i, g is Turkish c: gelato is "celato", giorno is "corno". Everywhere else it is a plain g: gatto, gonna.' },
  { k: 'ch', say: 'k · g', ex: 'chiave', exEn: 'key', tip: 'ch is always k and gh always g, never ç or c: che is "ke", chi is "ki", spaghetti is "spagetti". The h only keeps the c and g hard.' },
  { k: 'sc', say: 'ş · sk', ex: 'pesce', exEn: 'fish', tip: 'Before e and i, sc is Turkish ş: pesce is "peşe", lascia is "laşa". Before a, o and u it is sk: scuola, scusa.' },
  { k: 'gn', say: 'ny', ex: 'bagno', exEn: 'bathroom', tip: 'One sound, like Turkish "ny" said together. bagno sounds almost like Turkish banyo, and means the same.' },
  { k: 'gli', say: 'ly', ex: 'figlio', exEn: 'son', tip: 'A soft l with the tongue flat on the palate, then a quick y: figlio is "filyo", famiglia is "familya". There is no g in it.' },
  { k: 'z', say: 'ts · dz', ex: 'pizza', exEn: 'pizza', tip: 'Never the Turkish z. Usually "ts", as in pizza and grazie; in some words "dz", as in zero and mezzo. The sound line shows which.' },
  { k: 'h', say: 'silent', ex: 'hanno', exEn: 'they have', tip: 'Always silent. Turkish breathes every h; Italian never does. ho sounds exactly like o, hai like ai, hanno like anno. The h is only spelling: it tells ho (I have) from o (or).' },
  { k: '2x', say: 'tt, ll…', ex: 'palla', exEn: 'ball', tip: 'Hold a double letter longer, as in Turkish anne, dikkat or Allah. It changes the word: pala is a shovel, palla a ball; caro is dear, carro a cart; nono is ninth, nonno grandpa. With cc, gg and zz, stop briefly before the sound: pizza is "pit-tsa".' },
  { k: 'qu', say: 'ku', ex: 'quando', exEn: 'when', tip: 'qu is "ku" glided into the next vowel: quando is "kuando", questo is "kuesto". Never a v.' },
  { k: 's', say: 's · z', ex: 'sbaglio', exEn: 'mistake', tip: 'Before b, d, g, l, m, n, r and v, s buzzes like Turkish z: sbaglio is "zbalyo". Start straight on the s: studio, scusa, sport, never "istudio".' },
  { k: 'r', say: 'r', ex: 'parlare', exEn: 'to speak', tip: 'Always a clear tap of the tongue, also at the end of a syllable. Turkish softens a final r (bir, var); Italian never does: per, parlare, amor. Double rr is a short roll: carro, terra.' },
  { k: 'è', say: 'e · è', ex: 'è', exEn: 'is', tip: 'Italian has a closed e, like Turkish e in "ev", and an open è, with the mouth wider. "è" (is) is open and stressed; "e" (and) is closed and unstressed. The same goes for o and ò.' },
];

// The sounds worth a note on a word's own page, found from its spelling.
const WATCH = [
  ['c', /(^|[^sc])c[eéèiì]/], ['g', /(^|[^g])g[eéèiì]/], ['ch', /[cg]h/], ['sc', /sc[eéèiì]/],
  ['gn', /gn/], ['gli', /gli/], ['z', /z/], ['h', /(^|[^cg])h/], ['qu', /qu/], ['s', /s[bdglmnrv]/],
];

export function soundTips(word) {
  const w = clean(word);
  const tips = WATCH.filter(([, re]) => re.test(w)).map(([k]) => SOUNDS.find((s) => s.k === k));
  const doubled = [...w].some((c, i) => i > 0 && (c === w[i - 1] || (c === 'q' && w[i - 1] === 'c')) && !isV(c));
  if (doubled) tips.push(SOUNDS.find((s) => s.k === '2x'));
  return tips;
}
