import DictionaryApi from "./apis/DictionaryApi";
import SuggestionsApi from "./apis/SuggestionsApi";

export class Api {}
export interface Api extends DictionaryApi, SuggestionsApi {}

function applyMixins(derivedCtor: any, constructors: any[]) {
  constructors.forEach((baseCtor) => {
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      Object.defineProperty(
        derivedCtor.prototype,
        name,
        Object.getOwnPropertyDescriptor(baseCtor.prototype, name) ||
          Object.create(null)
      );
    });
  });
}

applyMixins(Api, [DictionaryApi, SuggestionsApi]);
