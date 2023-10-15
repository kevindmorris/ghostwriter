import { SuggestionsObject } from "../../common/types";
import _BaseApi from "./_BaseApi";

export default class SuggestionsApi {
  baseApi() {
    return new _BaseApi();
  }

  async getSuggestions(q: string): Promise<SuggestionsObject[]> {
    let response = await this.baseApi().axios.get(
      this.baseApi().base + "/sug",
      {
        params: {
          s: q,
        },
      }
    );

    return response.data;
  }
}
