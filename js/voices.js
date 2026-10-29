// The voices you can choose from in Settings, and how a phrase finds its audio file.
// Recorded voices are Microsoft neural voices, saved once as mp3 files in audio/<id>/.
import { lower } from './pron.js';

export const VOICES = [
  { id: 'elsa', name: 'Elsa', native: true, full: true, about: 'Italian, female. Calm and clear.' },
  { id: 'isabella', name: 'Isabella', native: true, full: false, about: 'Italian, female. Warm and lively.' },
  { id: 'diego', name: 'Diego', native: true, full: false, about: 'Italian, male. Friendly, a little slower.' },
  { id: 'giuseppe', name: 'Giuseppe', native: true, full: false, about: 'Italian, male. Multilingual voice, relaxed.' },
];
// The voice the app starts with, and the one the whole course is recorded in.
export const DEFAULT_VOICE = 'elsa';

// Sentences every voice has, so you can compare them side by side.
export const SAMPLES = [
  'Ciao, come stai?',
  'Ti amo tantissimo.',
  'Grazie, è buonissimo!',
  'Puoi parlare più piano?',
  'Ho fame. Hanno già mangiato?',
];

export const audioKey = (text) => lower(text).replace(/[’'`]/g, '').replace(/[^\p{L}\p{N}\s]/gu, ' ').replace(/\s+/g, ' ').trim();

// FNV-1a over the UTF-8 bytes: a short, stable file name for each phrase.
export function audioHash(text) {
  let h = 0x811c9dc5;
  for (const b of new TextEncoder().encode(audioKey(text))) { h ^= b; h = Math.imul(h, 0x01000193) >>> 0; }
  return h.toString(16).padStart(8, '0');
}
