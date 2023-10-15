import axios, { AxiosRequestConfig } from "axios";

export class Axios {
  _axios;

  constructor() {
    this._axios = axios.create({});
  }

  get(a0: string, a1?: AxiosRequestConfig<any>) {
    return this._axios.get(a0, a1);
  }
}
