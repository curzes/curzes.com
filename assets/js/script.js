jQuery(document).ready(function ($) {

    console.log("Hello world");

    $.ajax({
        url: 'file://C:/Users/Markus/Desktop/react/website/img.json',
        type: "GET",
        dataType: 'json',
        success: function (data) {
            products = data;
            get_product_result(color, attribute, type, search);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(errorThrown);
        }
    });


});
