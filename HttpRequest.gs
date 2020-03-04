
const FetchAppOptions = {
    contentType: { 
        type: typeof "",
        description: "the content type (defaults to 'application/x-www-form-urlencoded'). Another example of content type is 'application/xml; charset=utf-8'."
        
    },
    headers:  {
        type: typeof {},
        description: "a JavaScript key/value map of HTTP headers for the request."
    },
    method: {
        type: typeof "",
        description: "the HTTP method for the request: get, delete, patch, post, or put. The default is get.",
        values: ["get", "delete", "patch", "post", "put"]
    },
    payload: {
        type: typeof "",
        description: "the payload (that is, the POST body) for the request. Certain HTTP methods (for example, GET) do not accept a payload. It can be a string, a byte array, a blob, or a JavaScript object. A JavaScript object is interpreted as a map of form field names to values, where the values can be either strings or blobs."
    },
    useIntranet: {
        type: typeof true,
        description: "Deprecated. This instructs fetch to resolve the specified URL within the intranet linked to your domain through (deprecated) SDC"
    },
    followRedirects: {
        type: typeof true,
        description: "If false the fetch doesn't automatically follow HTTP redirects; it returns the original HTTP response. The default is true."
    },
    muteHttpExceptions: {
        type: typeof true,
        description: "If true the fetch doesn't throw an exception if the response code indicates failure, and instead returns the HTTPResponse. The default is false."
    },
    escaping:  {
        type: typeof true,
        description: "If false reserved characters in the URL aren't escaped. The default is true"
    },
    
    displayOptionNames: function() {
      for(var name in FetchAppOptions)
        Logger.log(name);
    }
};

function validateRequestOptions(options) {
    for (var option in options) {
        for (var name in FetchAppOptions) {
            if (name == option) {
                if (FetchAppOptions[name]['type'] != typeof options[option]) {
                    throw (`Option: ${name} cannot be of type ${typeof options[option]}
                    ${FetchAppOptions[name]['description']}`);
                    return false;
                }
            }
        }
    }
}

  


function testAllFetchAppOptions(){

  var options = {
    contentType: 'application/x-www-form-urlencoded',
    method: "get",
    payload: {},
    escaping: false
  };
  
  Logger.log(validateRequestOptions(options));
}