
var mongoose = require('mongoose') ;

var db = mongoose.Schema;
var schema = new db ({
   email : {
      type : 'String' ,
      require : 'true'
   },
   bookname : {
      type : 'String' ,
      require : 'true'
   },
   author : {
      type : 'String' ,
      require : 'true'
   }
   
  
});

var booklist = mongoose.model('booklist',schema);
module.exports = booklist;

