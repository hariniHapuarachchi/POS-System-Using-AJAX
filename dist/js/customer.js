var CustomersDetails = [];
var customerDet = {};
var i=-1;
$(document).ready(function(){
    
    reset();
    for (var i = 0; i < CUSTOMERS.length; i++) {
        var html = `<tr>
        <td class="text-center">${CUSTOMERS[i].id}</td>
        <td class="text-center">${CUSTOMERS[i].name}</td>
        <td class="text-center">${CUSTOMERS[i].address}</td>
        <td><div class="icon-delete"></td>
    </tr>`;
    
        $("#customerTable tbody").append(html);
        $("#cmbCustomerID").append('<option value="' + CUSTOMERS[i].id + '">' + CUSTOMERS[i].id + '</option>')
    }

    $("#customerTable .icon-delete").off("click");
    $("#customerTable .icon-delete").click(function (eventData) {
        eventData.stopPropagation();
        if (confirm("Are you sure that you want to delete this item?")) {
            
            $(this).fadeOut(500, function () {
                $(this).parents("tr").remove();
            });
        }
    });
});


$("#addNewCus").click(function () {
    console.log("HII");
    $("#customerID").val("");
    $("#customerName").val("");
    $("#customerAdd").val("");
    $("#customerName").prop('disabled', false);
    $("#customerAdd").prop('disabled', false); 
    $("#saveCustomer").prop('disabled',false); 

    var lastCusId = $("#customerTable tbody tr:last-child td:first-child").text();
    console.log(lastCusId);
    var cusId = 1;
    if (lastCusId){
        cusId = parseInt(lastCusId) + 1;
    }

    $("#customerID").val(cusId);
       console.log("HII"); 
       $("#customerName").css("border","1px solid white");
       $("#customerAdd").css("border","1px solid white");
      
});


$("#saveCustomer").click(function(){
    console.log("save");
    var customerID = $("#customerID").val();
    var customerName = $("#customerName").val();
    var customerAdd = $("#customerAdd").val();
    
    var validNameAdd = /^[A-Za-z]+$/;
    var result1 = validNameAdd.test(customerName);
    var result2 = validNameAdd.test(customerAdd);

    if (!result1 && !result2) {
        alert("Invalid Customer Name");
        alert("Invalid Customer Address");
        $("#customerName").css("border","1px solid red");
        $("#customerAdd").css("border","1px solid red");
        $("#customerName").focus();
        $("#customerName").select();
        pressName();
        pressAddress();
        return;
    }

    if (!result1) {
        alert("Invalid Customer Name");
        $("#customerName").css("border","1px solid red");
        $("#customerName").focus();
        $("#customerName").select();
        pressName();
        return;
    }

    if(!result2){
        alert("Invalid Customer Address");
        $("#customerAdd").css("border","1px solid red");
        $("#customerAdd").focus();
        $("#customerAdd").select();
        pressAddress();
        return;
    }
    
    console.log("check");
    

    

    var currentRow = isItemExists(customerID);

    if ($("#saveCustomer").text().trim() == "Update Customer") {
        // Update
        $(currentRow).find("td:nth-child(2)").text(customerName);
        $(currentRow).find("td:nth-child(3)").text(customerAdd);
        
        $("#saveCustomer").html('Save Customer');
       
        // CustomersDetails[currentRow.i][customerDet.customerName] = ("#customerName").val();
        
        reset();
        

        return;
    }

    
        customerDet.customerID = customerID,
        customerDet.customerName = customerName,
        customerDet.customerAdd = customerAdd,
        
    

    CustomersDetails.push(customerDet);

    // console.log(CustomersDetails[0][customerDet.customerID]);

    var html = `<tr>
    <td class="text-center">${customerID}</td>
    <td class="text-center">${customerName}</td>
    <td class="text-center">${customerAdd}</td>
    <td><div class="icon-delete"></td>
</tr>`;

    $("#customerTable tbody").append(html);

for(var i = 0;i < CustomersDetails.length;i++){
    console.log(CustomersDetails[i]);
}

    reset();
    $("#customerTable tbody tr").off("click");
            $("#customerTable tbody tr").click(function () {

                var cid = $(this).find("td:first-child").text();
                var cname = $(this).find("td:nth-child(2)").text();
                var cadd = $(this).find("td:nth-child(3)").text();
                $("#customerID").val(cid);
                $("#customerName").val(cname);
                $("#customerAdd").val(cadd);
                $("#saveCustomer").html('Update Customer');
                $("#customerName").prop("disabled", false);
                $("#customerAdd").prop("disabled", false);

                
    });


    $("#customerTable .icon-delete").off("click");
            $("#customerTable .icon-delete").click(function (eventData) {
                eventData.stopPropagation();
                if (confirm("Are you sure that you want to delete this item?")) {
                    
                    $(this).fadeOut(500, function () {
                        $(this).parents("tr").remove();
                    });
                }
            });
});


function pressName(){
    $("#customerName").css("border","1px solid red");

    $("#customerName").keypress(function(){
        $("#customerName").css("border","1px solid white");
    });

}
function pressAddress(){
    $("#customerAdd").css("border","1px solid red");

    $("#customerAdd").keypress(function(){
        $("#customerAdd").css("border","1px solid white");
    });
}

function reset(){
    $("#customerID").val("");
    $("#customerName").val("");
    $("#customerAdd").val("");
    
    $("#customerID").prop('disabled',true);
    $("#customerName").prop('disabled',true);
    $("#customerAdd").prop('disabled',true);
    $("#saveCustomer").prop('disabled',true);
}

function isItemExists(id) {
    var flag = null;
    var i = -1;
    $("#customerTable tbody tr").each(function () {
        var cId = $(this).find("td:first-child").text();
        if (cId == id) {
            i = i + 1;
            console.log("I:"+i);
            flag = this;
            return;
        }
    });
    return flag;
}           