
var mongoose = require('mongoose') ;

var db = mongoose.Schema;
var schema = new db ({
   bookname : {
      type : 'String' ,
      require : 'true'
   },
   author : {
      type : 'String' ,
      require : 'true'
   }
   
  
});

var booklist = mongoose.model('allbooks',schema);
module.exports = booklist;

