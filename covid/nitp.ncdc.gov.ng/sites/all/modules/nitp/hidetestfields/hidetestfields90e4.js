(function($){Drupal.behaviors.hidetestfieldsCopyFieldValue={attach:function(context,settings){function is_less_than_11(date_field_value){var[day,month,year]=date_field_value.split(" ")
var current_year=new Date().getFullYear()
var diff=current_year-year;return diff<10}
function is_diplomat(){var diplomatic=$("input[name='field_diplomatic_passport[und]']:checked").val()
return diplomatic==1}
var pdisc_field="#edit-field-pdisc2-und";var date_field='#edit-field-date-of-birth-und-0-value-datepicker-popup-0';$(date_field,context).on('change',function(){var is_child=is_less_than_11($(this).val())
if(is_child){$(pdisc_field).val(2)
$(".group-preboarding").hide();$(".group-postboarding").hide();}else{$(pdisc_field).val(1)
$(".group-preboarding").show();$(".group-postboarding").show();}});var arrival_date='#edit-field-arrival-date2-und-0-value-datepicker-popup-0';$(arrival_date,context).on('change',function(){arrival_date_val=$(arrival_date).val();var[day,month,year]=arrival_date_val.split(" ")
var today=new Date().getDate()
var tomorrow=new Date().getDate()+1
var nexttomorrow=new Date().getDate()+2
if(day==tomorrow||day==today){$("#edit-field-mode-of-payment select").val("2")
$("#edit-field-mode-of-payment select option:contains('Bank Transfer')").attr("disabled",true)}else{$("#edit-field-mode-of-payment select option:contains('Bank Transfer')").removeAttr("disabled")}})
$("#edit-preview",context).once().on("click",function(event){var is_filled=[];$(".group-preboarding .form-text:visible, .group-postboarding .form-text:visible, .group-preboarding .form-file:visible, .group-postboarding .form-file:visible").each(function(){var val=$(this).val()?true:false;is_filled.push(val)})
$(".group-preboarding input:radio:visible, .group-postboarding input:radio:visible").each(function(){var name=$(this).attr('name');if($(`input:radio[name='${name}']:checked`).length){is_filled.push(true)}else{is_filled.push(false);}});$(".group-preboarding select:visible, .group-postboarding select:visible").each(function(){var val=$(this).val();if(val==='_none'){is_filled.push(false)}else{is_filled.push(true)}})
var is_child=is_less_than_11($(date_field).val())
if(!is_child&&!is_filled.every(e=>e===true)){event.preventDefault();$([document.documentElement,document.body]).animate({scrollTop:$("#ui-accordion-1-panel-7").offset().top},2000);}})}};})(jQuery);