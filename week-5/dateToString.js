// taken function from http://qaru.site/questions/821/how-do-i-get-the-current-date-in-javascript
module.exports = function () {
  this.dateToString = function (today) {
    today = new Date ();
    var dd = String (today.getDate ()).padStart (2, '0');
    var mm = String (today.getMonth () + 1).padStart (2, '0'); //January is 0!
    var yyyy = today.getFullYear ();
    return dd + '.' + mm + '.' + yyyy;
  };
};
