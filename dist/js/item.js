var ItemsDetails = [];

$(document).ready(function(){
    console.log("Hi ready");

    for (var i = 0; i < ITEMS.length; i++) {

        var html = `<tr>
    <td class="text-center">${ITEMS[i].code}</td>
    <td class="text-center">${ITEMS[i].description}</td>
    <td class="text-center">${ITEMS[i].unitPrice}</td>
    <td class="text-center">${ITEMS[i].qtyOnHand}</td>
    <td><div class="icon-delete"></td>
</tr>`;

    $("#itemTable tbody").append(html);
        // $("#cmbItemCode").append('<option value="' + ITEMS[i].code + '">' + ITEMS[i].code + '</option>')
    }

    reset();

    $("#itemTable .icon-delete").off("click");
            $("#itemTable .icon-delete").click(function (eventData) {
                eventData.stopPropagation();
                if (confirm("Are you sure that you want to delete this item?")) {
                    
                    $(this).fadeOut(500, function () {
                        $(this).parents("tr").remove();
                    });
                }
            });
});



$("#addNewItem").click(function () {
    console.log("Hi Item");
    $("#itemCode").val("");
    $("#description").val("");
    $("#unitPrice").val("");
    $("#txtQty").val("");
    $("#description").attr('disabled', false);
    $("#unitPrice").attr('disabled', false);
    $("#txtQty").attr('disabled', false);
    $("#saveItem").prop('disabled',false);

    var lastItemId = $("#itemTable tbody tr:last-child td:first-child").text();
    var itemId = 1;
    if (lastItemId) {
        itemId = parseInt(lastItemId) + 1;
    }
    $("#itemCode").val(itemId);

    $("#description").css("border","1px solid white");
       $("#unitPrice").css("border","1px solid white");
       $("#txtQty").css("border","1px solid white");

});
$("#saveItem").click(function(){

    var itemCode = $("#itemCode").val();
    var description = $("#description").val();
    var unitPrice = $("#unitPrice").val();
    var qty = $("#txtQty").val();

    var descrptn = $("#description").val();
    var up = $("#unitPrice").val();
    var qt = $("#txtQty").val();
        
    var validdes = /^[A-Za-z]+$/;
    var validUnit = /^\d+.?\d*$/;
    var validQt = /^[0-9]+$/;
    var result1 = validdes.test(descrptn);
    var result2 = validUnit.test(up);
    var result3 = validQt.test(qt);

    if (!result1 && !result2 && !result3) {
        alert("Invalid Description");
        alert("Invalid Unit Price");
        alert("Invalid Quantity");
        $("#description").focus();
        $("#description").select();
        pressDes();
        pressUnit();
        pressQty();
        return;
    }

    if (!result1 && !result2) {
        alert("Invalid Description");
        alert("Invalid Unit Price");
        $("#description").focus();
        $("#description").select();
        pressDes();
        pressUnit();
        
        return;
    }

    if (!result1 && !result3) {
        alert("Invalid Description");
        alert("Invalid Quantity");
        $("#description").focus();
        $("#description").select();
        pressDes();
        pressQty();
        return;
    }

    if (!result2 && !result3) {
        
        alert("Invalid Unit Price");
        alert("Invalid Quantity");
        $("#unitPrice").focus();
        $("#unitPrice").select();
        
        pressUnit();
        pressQty();
        return;
    }
   
    if (!result1) {
        alert("Invalid Description");
        $("#description").focus();
        $("#description").select();
        pressDes();
        return;
    }

    if(!result2){
        alert("Invalid Unit Price");
        $("#unitPrice").focus();
        $("#unitPrice").select();
        pressUnit();
        return;
    }

    if(!result3){
        alert("Invalid Quantity");
        $("#txtQty").focus();
        $("#txtQty").select();
        pressQty();
        return;
    }

    var currentRow = isItemExists(itemCode);

    if ($("#saveItem").text().trim() == "Update Item") {
        // Update
        
        $(currentRow).find("td:nth-child(2)").text(description);
        $(currentRow).find("td:nth-child(3)").text(unitPrice);
        $(currentRow).find("td:nth-child(4)").text(qty);
        
        $("#saveItem").html('Save Item');
       
        reset();
        

        return;
    }
    
    var ItemDet = {
        itemCode: itemCode,
        description: description,
        unitPrice: unitPrice,
        qty: qty,
        
    };

    ItemsDetails.push(ItemDet);

    var html = `<tr>
    <td class="text-center">${itemCode}</td>
    <td class="text-center">${description}</td>
    <td class="text-center">${unitPrice}</td>
    <td class="text-center">${qty}</td>
    <td><div class="icon-delete"></td>
</tr>`;

    $("#itemTable tbody").append(html);

for(var i = 0;i < ItemsDetails.length;i++){
    console.log(ItemsDetails[i]);
}

    reset();
    $("#itemTable tbody tr").off("click");
            $("#itemTable tbody tr").click(function () {

                var itemId = $(this).find("td:first-child").text();
                var des = $(this).find("td:nth-child(2)").text();
                var unit = $(this).find("td:nth-child(3)").text();
                var nwQt = $(this).find("td:nth-child(4)").text();
                $("#itemCode").val(itemId);
                $("#description").val(des);
                $("#unitPrice").val(unit);
                $("#txtQty").val(nwQt);
                $("#saveItem").html('Update Item');
                $("#description").attr("disabled", false);
                $("#unitPrice").attr("disabled", false);
                $("#txtQty").attr("disabled", false);

                
    });

    
    $("#itemTable .icon-delete").off("click");
            $("#itemTable .icon-delete").click(function (eventData) {
                eventData.stopPropagation();
                if (confirm("Are you sure that you want to delete this item?")) {
                    
                    $(this).fadeOut(500, function () {
                        $(this).parents("tr").remove();
                    });
                }
            });
});


function pressDes(){
    $("#description").css("border","1px solid red");

    $("#description").keypress(function(){
        $("#description").css("border","1px solid white");
    });
}
function pressUnit(){
    $("#unitPrice").css("border","1px solid red");

    $("#unitPrice").keypress(function(){
        $("#unitPrice").css("border","1px solid white");
    });
}

function pressQty(){
    $("#txtQty").css("border","1px solid red");

    $("#txtQty").keypress(function(){
        $("#txtQty").css("border","1px solid white");
    });
}

function reset(){
    $("#itemCode").val("");
    $("#description").val("");
    $("#unitPrice").val("");
    $("#txtQty").val("");
    
    $("#itemCode").attr('disabled',true);
    $("#description").attr('disabled',true);
    $("#unitPrice").attr('disabled',true);
    $("#txtQty").attr('disabled',true);
    $("#saveItem").prop('disabled',true);
}

function isItemExists(id) {
    var flag = null;
    $("#itemTable tbody tr").each(function () {
        var itemId = $(this).find("td:first-child").text();
        if (itemId == id) {
            flag = this;
            return;
        }
    });
    return flag;
}