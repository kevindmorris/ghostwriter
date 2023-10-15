import { DictionaryObject } from "../../common/types";
import _BaseApi from "./_BaseApi";

export default class DictionaryApi {
  baseApi() {
    return new _BaseApi();
  }

  async getWord(q: string): Promise<DictionaryObject[]> {
    let response = await this.baseApi().axios.get(
      "https://api.dictionaryapi.dev/api/v2/entries/en/" + q,
      {}
    );

    return response.data;
  }
}
