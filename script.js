var custom_pochi_exchange_rate  =  1.43;
var custom_pochi_price_length;
var custom_pochi_price_label;
var custom_pochi_current_value;
var custom_pochi_previous_value;
var custom_pochi_del_label; //this is a condiional del value.... some taobao sites has the original prices but it doesn't show. <del class=​"g_price g_price-original">​189.00​</del>​
var custom_pochi_del_length;
var custom_pochi_del_current_value;
var custom_pochi_del_previous_value;
//alert(custom_pochi_price_length);

if(document.getElementsByClassName("g_price").length != 0)
{
  custom_pochi_price_length  =  document.getElementsByClassName("g_price").length;
  custom_pochi_price_label  =  document.getElementsByClassName("g_price");
  custom_pochi_del_label  =  document.getElementsByTagName("del");
  custom_pochi_del_length = document.getElementsByTagName("del").length;
  
  if(!custom_pochi_del_label)
  {
    for(var j = 0;j<custom_pochi_del_length;j++)
    { 
      custom_pochi_current_value = custom_pochi_del_label[j].innerHTML;
      custom_pochi_previous_value = custom_pochi_current_value;
      custom_pochi_current_value = Math.round((custom_pochi_current_value*100/custom_pochi_exchange_rate))/100;
      console.log(custom_pochi_current_value);
      custom_pochi_del_label[j].innerHTML =  '<font size="3">'+ custom_pochi_current_value + '</font>' + '<font size="1">(&yen' + custom_pochi_previous_value + ')</font>';
    }
  }
  
  if(!document.getElementsByClassName("g_price")[i].getElementsByTagName("span"))
  {
    for(var i = 0;i<custom_pochi_price_length;i++){
        if(document.getElementsByClassName("g_price")[i].getElementsByTagName("span")[0].innerHTML != '<font size="1">RM</font>')
        {
          if(custom_pochi_price_label[i].getElementsByTagName("strong")[0] === 'undefined')
          {
            console.log("Case: <del .... > This is for original price");
          }
          else
          {
            custom_pochi_current_value = custom_pochi_price_label[i].getElementsByTagName("strong")[0].innerHTML;
            custom_pochi_previous_value = custom_pochi_current_value;
            custom_pochi_current_value = Math.round((custom_pochi_current_value*100/custom_pochi_exchange_rate))/100;
            console.log(custom_pochi_current_value);
            custom_pochi_price_label[i].getElementsByTagName("strong")[0].innerHTML =  '<font size="3">'+ custom_pochi_current_value + '</font>' + '<font size="1">(&yen' + custom_pochi_previous_value + ')</font>';
            document.getElementsByClassName("g_price")[i].getElementsByTagName("span")[0].innerHTML = '<font size="1">RM</font>';
          }
        }
    }
  }
}

else if(document.getElementsByClassName("cprice-area").length != 0)
{
  custom_pochi_price_length  =  document.getElementsByClassName("cprice-area").length;
  custom_pochi_price_label  =  document.getElementsByClassName("cprice-area");
  for(var i = 0;i<custom_pochi_price_length;i++){
      if(document.getElementsByClassName("cprice-area")[i].getElementsByClassName("symbol")[0].innerHTML != '<font size="1">RM</font>')
      {
          custom_pochi_current_value = custom_pochi_price_label[i].getElementsByClassName("c-price")[0].innerHTML;
          custom_pochi_previous_value = custom_pochi_current_value;
          custom_pochi_current_value = Math.round((custom_pochi_current_value*100/custom_pochi_exchange_rate))/100;
          console.log(custom_pochi_current_value);
          custom_pochi_price_label[i].getElementsByClassName("c-price")[0].innerHTML =  '<font size="3">'+ custom_pochi_current_value + '</font>' + '<font size="1">(&yen' + custom_pochi_previous_value + ')</font>';
          document.getElementsByClassName("cprice-area")[i].getElementsByClassName("symbol")[0].innerHTML = '<font size="1">RM</font>';
      }
  }
}
}
