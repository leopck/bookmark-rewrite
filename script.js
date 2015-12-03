var custom_pochi_exchange_rate  =  1.43;
var custom_pochi_price_length  =  document.getElementsByClassName("g_price").length;
var custom_pochi_price_label  =  document.getElementsByClassName("g_price");
var custom_pochi_current_value;
var custom_pochi_previous_value;
//alert(custom_pochi_price_length);

for(var i = 0;i<custom_pochi_price_length;i++){
    if(document.getElementsByClassName("g_price")[i].getElementsByTagName("span")[0].innerHTML != '<font size="1">RM</font>')
    {
        custom_pochi_current_value = custom_pochi_price_label[i].getElementsByTagName("strong")[0].innerHTML;
        custom_pochi_previous_value = custom_pochi_current_value;
        custom_pochi_current_value = Math.round((custom_pochi_current_value*100/custom_pochi_exchange_rate))/100;
        console.log(custom_pochi_current_value);
        custom_pochi_price_label[i].getElementsByTagName("strong")[0].innerHTML =  '<font size="3">'+ custom_pochi_current_value + '</font>' + '<font size="1">(&yen' + custom_pochi_previous_value + ')</font>';
        document.getElementsByClassName("g_price")[i].getElementsByTagName("span")[0].innerHTML = '<font size="1">RM</font>';
    }
}