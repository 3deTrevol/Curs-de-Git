function enviareCorreu() {

var Badacli02 = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
var ss=SpreadsheetApp.getActiveSpreadsheet().getSheetByName("badacli02");

var bol =ss.getRange(2,1).getValue();
var Nomre =ss.getRange(2,2).getValue();
var Producto =ss.getRange(2,3).getValue();
var Fecha =ss.getRange(2,4).getValue();
var Valor =ss.getRange(2,5).getValue();
var Tipo_pago =ss.getRange(2,6).getValue();

var asunto ="Bon dia "+Nomre+" com vas a la feina? "+Producto

Logger.log(bol)
Logger.log(asunto)


//GmailApp.sendEmail(bol,asunto,mensaje)

}
