
import $ from 'jquery';

function display() {
    var obj = {};
    obj.userName = $("#userName").val();
    obj.password = $("#password").val();
   var obj = JSON.stringify(obj);
    $.ajax({
        type: "POST",
        url: "http://localhost:49980/api/Authentication/ValidateUser",
        data: obj,
        crossDomain: true,
        contentType: "application/json; charset=utf-8", 
        dataType: 'json',
        success: function (data) {
            console.log(data);
        },
        error: function () {
            alert("error");
        }
    });
    

    
//$.post( "http://localhost:49980/api/Authentication/ValidateUser", { "userName": "this.userName", "password": "this.password"} );
     console.log(obj);


}


$( document ).ready(function() {
  // Handler for .ready() called.
    $("#btnLoginSubmit").click(display);
    $("#searchIcon").click()
});
















