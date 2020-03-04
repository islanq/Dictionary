class RequestManager {

  constructor() {
    this.url = '';
    this.domain = '';
    this.endpoint = '';
    this.payload = {};
    this.params = {};
    this.options = {
      muteHttpExceptions: true
    };
    this.resp = null;
  }

  addEndpoint(endpoint) {
    var ep = endpoint.replace(/\/?wp-json\/?/g, '');
    this.endpoint = trimSlashes(ep);
    return this;
  }

  addOption(key, val) {
    if (typeof key === 'object' &&
      typeof val === 'undefined') {
      this.options.addAll(key);
    } else {
      this.options[key] = val;
    }
    return this;
  }

  addPayload(key, val) {
    if (typeof key === 'object' &&
      typeof val === 'undefined') {
      this.payload.addAll(key);
    } else {
      this.payload[key] = val;
    }
    return this;
  }

  addParams(key, val) {
    if (typeof key === 'object' &&
      typeof val === 'undefined') {
      this.params.addAll(key);
    } else {
      this.params[key] = val;
    }
    return this;
  }

  setParams(params) {
    this.addParams = params;
    return this;
  }

  resetOptions() {
    this.options = {
      muteHttpExceptions: true
    };
    return this;
  }

  hasParams() {
    return this.params.keys().length > 0;
  }

  hasPayload() {
    return ((this.payload.keys().length > 0) ||
      (this.options.hasKey('payload') &&
        this.options.payload.keys().length > 0));
  }

  resetEndpoint() {
    this.endpoint = null;
    return this;
  }

  resetParams() {
    this.params = {};
    return this;
  }

  resetPayload() {
    this.payload = {};
    return this;
  }

  resetAll() {
    this.resetOptions()
      .resetParams()
      .resetEndpoint()
      .resetPayload();
  }

  setUrl(url) {
    this.url = trimSlashes(url);
    return this;
  }

  setDomain(domain) {
    this.domain = domain;
    this.url = domain;
    return this;
  }

  setPayload(payload) {
    this.options['payload'] = payload;
    return this;
  }

  prepareUrl() {
    return this.url + '/' + this.endpoint + buildParamString(this.params);
  }

  getPreparedUrl() {
    var url = this.prepareUrl();
    console.log(`Prepared URL: ${url}`);
    return url;
  }

  simulateSubmitRequest() {

    console.info(`SimulateD WooCommerce Request Made\n
  endpoint: ${this.endpoint}\n
  data:\n ${JSON.stringify(this.options)}`);
    return simulateRequest(this.getPreparedUrl(), this.options);
  }

  /**
   *
   *
   * @returns {GoogleAppsScript.URL_Fetch.HTTPResponse}
   * @memberof RequestManager
   */
  submitRequest() {

    console.log(`WooCommerce Request Made\n
                 endpoint: ${this.endpoint}\n
                 data:\n ${this.options}`);

    this.resp = UrlFetchApp.fetch(this.getPreparedUrl(), this.options);
    this.resetAll();

    return this.resp;
  }
}

function simulateRequest(url, options) {
  return {
    url: url,
    options: options
  };
}

function hasParams() {
  return RequestMan.params.keys().length != 0;
}

function isValidOption(x) {
  for (var i in validOptions)
    if (validOptions[i] == x)
      return true;
  return false;
}

function isValidParamOption(x) {
  var paramKeys = x.keys();
  for (var i in paramKeys)
    if (!isValidOption(paramKeys[i]))
      return false;
  return true;
}