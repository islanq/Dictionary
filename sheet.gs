function getSheet(){
  return SpreadsheetApp.openById(Property.get("sheet_id"));
}


function appendWord(word) {
  getSheet().getSheetByName("Data").appendRow([word]);
}