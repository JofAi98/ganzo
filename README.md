# Ganzo

Speak Italian out loud. Built for Feyza: a native Turkish speaker who reads Italian well but speaks it like a beginner. Speaking first: listen, echo, understand without text, then say it from memory. The interface is in English, and explanations compare Italian with Turkish and English.

Ganzo is a copy of Konuş, Giosuè's Turkish app, rewritten for Italian.

- 12 units, 29 lessons, 13 Build drills (grammar you say out loud), 12 dialogues you play a part in, 6 listening stories
- Lessons set in her life: Giosuè, his family, Pisa and Tuscany, her work as a photographer
- Extra work on what trips up a Turkish speaker: the silent h (ho, hanno) and double letters (sete, sette)
- Themes: 15 A1 topics of 10 words each, nouns with their article. Hear them from English, guess them from Italian; 3 right guesses and a word goes to your vocab
- A sound line under every phrase, written in Turkish letters so it reads like Turkish: ce-**LA**-to, **BA**-nyo, **AN**-no
- Speech checking with the browser's Italian recognition, with sound-level hints. "o" for "ho" and "e" for "è" count as right: they sound the same
- Fast start: double XP for the first week, so the early levels open quickly without skipping anything
- Levels and ranks: practice earns XP, levels open content step by step, rank exams follow the European levels (A1 to C2)
- Record yourself and play it right after the native voice
- Spaced review (FSRS) so each word comes back right before you'd forget it
- Vocab saves automatically; add your own phrases with the Claude app
- Works offline, installs on the iPhone home screen, updates itself
- Free: GitHub Pages hosting, Firebase free plan for sync

## Run it on your Mac

```bash
python3 -m http.server 5179
```

Open http://localhost:5179 in Chrome or Safari. The microphone works on localhost and on https. While `js/firebase-config.js` is empty, the app runs on this device only, with no sign-in.

## Put it online (GitHub Pages, free)

The app lives in the public repo JofAi98/ganzo, served from `main` at `/`:
`https://jofai98.github.io/ganzo/`. Every `git push` updates it; the app picks up the new version the next time it's opened. Bump `CACHE` in `sw.js` on every release.

## Sync and security (Firebase, free)

Ganzo has its own Firebase project on the free Spark plan, separate from Konuş. In short:

- The app opens only after signing in with Feyza's account (`ownerUid` in `js/firebase-config.js`). There is no sign-up; anyone else sees only the sign-in screen.
- Two-step sign-in: password plus a 6-digit code from Proton Pass (TOTP). Set it up in Settings → Account and security.
- `firestore.rules` lets only her account read or write anything.
- The page may only load scripts from itself and Firebase (Content Security Policy), asks search engines not to index it, and keeps the Firebase sign-in code cached so it opens offline.
- Firebase side: Identity Platform (free), sign-up and account deletion turned off, TOTP enabled, the API key restricted to the app's address.

The Firebase config is not a secret: it only identifies the project. The sign-in, `ownerUid` and the rules are what keep the data private.

## Voices

The course is recorded with Elsa, a native Italian Microsoft neural voice. Isabella, Diego and Giuseppe have the sample sentences in Settings. Anything without a recording, like phrases you add yourself, uses the device's Italian voice.

After adding lessons, record the new phrases (existing files are kept):

```bash
pip install edge-tts
node tools/audio-texts.mjs | python3 tools/make-audio.py elsa
```

To record the whole course in another voice, use its id from `js/voices.js` (for example `isabella`), then set `full: true` for it there.

## The sound line

`js/pron.js` computes it from the spelling: syllables (double letters split, pal-la), stress (second-to-last by default, a written accent wins, -issimo and -abile go one further back, and the `STRESS` list holds the rest, like tavolo and parlano), and a respelling in Turkish letters (c, ç, ş, y, ny, ly, ts, dz; a silent h disappears). Words the rules get wrong go in `OVR`, mostly a stressed i or u next to another vowel (mi-o, far-ma-ci-a). Elided words keep the stress of the word after the apostrophe: l'autobus is **LAU**-to-bus.

## Levels and ranks

Practice earns XP (a lesson or drill 30, a dialogue 25, a story 20, each review 2, each sentence said out loud 1 or 2, plus 10 for the first practice of the day), doubled during the first 7 days. Only practice at your current rank counts: lower-rank material stays open but earns nothing. Every level costs 150 XP, and each rank holds 30 levels (A1 is 1 to 30, A2 is 31 to 60...). The last level of a rank is its cap, where its exam opens.

Inside A1, each item on the path has a level that opens it; stories open at 10, no-hints role-play at 15, the practice exam at 20, native speed at 25. The A1 exam opens at level 30 (20 questions, pass at 80%, one try a day). Passing stores `rank:A2` in progress, which opens everything marked A2.

The streak is weekly. A day counts once it earns 30 XP; a week (Monday to Sunday) counts once 3 of its days do. `WEEK_GOAL` and `DAY_XP` are in `js/store.js`.

Hunter ranks sit on top of the European levels: F (tutorial), E (A1), E+ (A1+, level 20), D (A2), and so on to S (C2). The tutorial is the three Sounds lessons, the first Build drill and the first dialogue.

## Files

| File | What it does |
|---|---|
| `js/course.js` | All lessons. The Italian text is in the field `tr` (target) in every content file. |
| `js/drills.js` | Build drills: a grammar pattern and sentences to build from English |
| `js/dialogues.js` | Talk: short scenes, her lines marked `you` |
| `js/stories.js` | Listening stories with questions |
| `js/themes.js` | Themes and their words, in the order they open |
| `js/levels.js` | XP, levels, ranks, the path and what each level opens |
| `js/pron.js` | Syllables, stress and the sound line |
| `js/speech.js` | Recorded and device voices, speech checking, recording |
| `js/voices.js` | The voice list, sample sentences, audio file names |
| `audio/` | Recorded mp3s per voice; `tools/` records them |
| `js/srs.js` | Review scheduling (FSRS v4.5) |
| `js/store.js` | Saves everything on the device |
| `js/sync.js` | Syncs with Firebase when configured |
| `sw.js` | Offline support; always fetches the newest version first |
