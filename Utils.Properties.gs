/*

  getDocumentProperties()	Properties	Gets a property store (for this script only) that all users can access within the open document, spreadsheet, or form.
  getScriptProperties()     Properties	Gets a property store that all users can access, but only within this script.
  getUserProperties()	    Properties	Gets a property store that only the current user can access, and only within this script.

*/

class Property {
  static get(key) {
    return PropertiesService.getScriptProperties().getProperty(key);
  }
  
  static set(key, value) {
    var val = typeof value == "object" ? JSON.stringify(value) : value;
    PropertiesService.getScriptProperties().setProperty(key, val);
  }

  static exist(key) {
    return Property.get(key) != null;
  }
  
  static delete(key) {
    return PropertiesService.getScriptProperties().deleteProperty(key);
  }
}


