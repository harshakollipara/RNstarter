export default class RestApiClientManager {
  public constructor() {}

  /**
   * @param URL
   * @param params
   * @param headers
   */
  public invokePOSTRequest<T>(
    URL: string,
    params: any,
    headers: any,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      params = this.prepareParams(params, null);
      if (headers == null) {
        headers = {};
      }
      headers['Accept'] = 'application/json';
      headers['Content-Type'] = 'application/json';
      fetch(URL, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(params),
      })
        .then(response => {
          var respJSON: any = response;
          try {
            respJSON = response.json();
          } catch (ex) {}
          resolve(respJSON);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   *
   * @param URL
   * @param params
   * @param headers
   */
  public invokeGetRequest<T>(
    URL: string,
    params: any,
    headers: any,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      params = this.prepareParams(params, null);
      if (headers == null) {
        headers = {};
      }
      headers['Accept'] = 'application/json';
      headers['Content-Type'] = 'application/json';
      fetch(URL, {
        method: 'GET',
        headers: headers,
      })
        .then(response => {
          var respJSON: any = response;
          try {
            respJSON = response.json();
          } catch (ex) {}
          resolve(respJSON);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   *
   * @param URL
   * @param params
   * @param headers
   */
  public invokePutRequest<T>(
    URL: string,
    params: any,
    headers: any,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      params = this.prepareParams(params, null);
      if (headers == null) {
        headers = {};
      }
      headers['Accept'] = 'application/json';
      headers['Content-Type'] = 'application/json';
      fetch(URL, {
        method: 'PUT',
        headers: headers,
      })
        .then(response => {
          var respJSON: any = response;
          try {
            respJSON = response.json();
          } catch (ex) {}
          resolve(respJSON);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   *
   * @param URL
   * @param params
   * @param headers
   */
  public invokeDeleteRequest<T>(
    URL: string,
    params: any,
    _headers: any,
  ): Promise<T> {
    return new Promise((resolve, reject) => {
      params = this.prepareParams(params, null);

      fetch(URL, {
        method: 'DELETE',
      })
        .then(response => {
          var respJSON: any = response;
          try {
            respJSON = response.json();
          } catch (ex) {}
          resolve(respJSON);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  /**
   *
   * @param params
   * @param contextValues
   */
  private prepareParams(params: any, contextValues: any) {
    // eslint-disable-next-line curly
    if (contextValues == null) return params;

    for (var elem in params) {
      contextValues[elem] = params[elem];
    }
    return contextValues;
  }
}
