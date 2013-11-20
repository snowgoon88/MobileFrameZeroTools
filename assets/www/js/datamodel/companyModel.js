function CompanyModel() {
  var self = this;
  
  self.id = null; 
  self.name = null;
  self.dtCreated = null;
  self.dtModified = null;
  self.companyPictureUrl = null;
  self.frames = ko.observableArray();
  
  self.setId = function(pId) {
    self.id = pId;
  };
  
  self.setName = function(pName) {
    self.name = pName;
  };
}