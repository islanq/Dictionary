var base_url = 'https://www.dictionaryapi.com/api/v3/references/collegiate/json/';

function doGet(e) {
  var endpoints = Property.get("endpoints").parse();
  Logger.log(`dev: ${endpoints.dev}\npub: ${endpoints.pub}`);

  return HtmlService.createTemplateFromFile("page").evaluate();
  
}

function include(name) {
  return HtmlService.createHtmlOutputFromFile(name).getContent();
}

function userClicked(name){
  var _name = name == null ? Session.getActiveUser() : name;
  
  Logger.log(`User: ${_name} clicked the button`);
}

function submitRequest(word) {
  var key = PropertiesService.getScriptProperties().getProperty("dictionary_api");
  return UrlFetchApp.fetch(base_url + word + '?key=' + key);
}

function myFunction() {
  
  
  
  
 // Logger.log(DriveApp.createFile(word + ".json", JSON.stringify(json)).getId());
 
  var dict = new Dictionary(resp);
  //Logger.log(dict.getTypes());
  Logger.log(dict.getDefs());
  
  //var def = json[0].def[0].sseq[0][0][1].dt[0][1];
  //Logger.log(def);
  //DriveApp.createFile("dictionary.json", JSON.stringify(json));
  //Logger.log(json);
  
  /*
  var def = json[0].def;
  var syn = json[0].syns;
  var etm = json[0].et;
  getTypeOf(def);
  getTypeOf(syn);
  getTypeOf(etm);
  
  var def1 = def[0].sseq[0][0][1].dt[0][1]
  var defShort = json[0]['shortdef'];
  Logger.log(defShort);
  for (var i = 0; i < defShort.length; i++){
  //  Logger.log(defShort[i]);
  }
  */
  
}



