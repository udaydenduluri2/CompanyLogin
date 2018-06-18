global._babelPolyfill = false;
import $ from 'jquery';
//global.jQuery = require('jquery');
//import  autocomplete from  'jquery-autocomplete';
function search() {
    var obj = { };
    $.ajax({
        url: "http://localhost:49980/api/Authentication/Search?searchTerm=Test",
        type: "GET",
        data: {Name, Description, ImageId, Price}
    
        
    }) 
}

//$( function() {
//    var IDs = [
//        "TestImage1",
//        "TestImage2",
//        "TestImage3"
//        ];
//    $("#searchItem").autocomplete({
//        source: IDs
//    });
//
//});
    



function displayWithAjax() {
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
            if(data.ValidUser === true && data.Reason === "Validated"){
            window.location.href = "/myPage.html"
            }
            else {
                $("#errorMsgText").text("Invalid user name or password");
            }    
            
        },
        error: function () {
            alert("error");
           
        }
    });
}
    