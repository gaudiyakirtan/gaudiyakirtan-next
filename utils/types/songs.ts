export interface Song {
  uid: string;
  title: string;
  author: string;
  language: string;
  notes: string[];
  audio: Audio[];
  has_synonyms: boolean;
  has_translations: boolean;
  legend: { [key in keyof Word]: string };
  verses: Verse[];
}

export interface Word {
  w: string; // word
  h: string; // hiphenation
  s: { [language: string]: string }; // word meaning
  o: { [language: string]: string };
}

export type Line = Word[];

export interface Verse {
  lines: Line[];
  translation: { [language: string]: string };
}

export interface Audio {
  uid: string;
  fn: string;
  meta: {
    artist?: string;
  };
}