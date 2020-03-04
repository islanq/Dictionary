class Dictionary {

  constructor(dictJSON) {
    this.json = dictJSON;
    this.dict = JSON.parse(this.json);
    this.word = "";
    this.defs = [];
    this.size = this.dict.length;
    this.types = [];
  }
  
  getTypes(){
    if(!this.types.length)
      for(var i = 0; i < this.size; i++)
        this.types.push(this.dict[i].fl);
    return this.types;
  }

  getDefs() {
    if(!this.defs.length)
      for(var i = 0; i < this.size; i++)
        this.defs.push(this.dict[i].shortdef);
    return this.defs;
  }

}