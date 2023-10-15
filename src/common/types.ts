export interface SuggestionsObject {
  word: string;
  score: number;
}

export interface DictionaryObject {
  word: string;
  phonetics: {
    text?: string;
    audio?: string;
    sourceUrl?: string;
    license?: {
      name?: string;
      url?: string;
    };
  }[];
  meanings: {
    partOfSpeech: string;
    definitions: [
      {
        definition: string;
        synonyms: string[];
        antonyms: string[];
      }
    ];
    synonyms: string[];
    antonyms: string[];
  }[];
  license: {
    name: string;
    url: string;
  };
  sourceUrls: string[];
}
