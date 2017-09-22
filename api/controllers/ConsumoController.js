/**
 * ConsumoController
 *
 * @description :: Server-side logic for managing consumoes
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
 var java = require("java");
 java.classpath.push(sails.config.appPath + "/libs_java/log4j-1.2.9.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/commons.collections-3.2.1.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/commons-beanutils-1.7.0.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/commons-lang-2.4.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/commons-logging-1.1.1.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/ezmorph-1.0.6.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/jersey-client-1.2.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/jersey-core-1.2.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/json-lib-2.3-jdk13.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/jsr311-api-1.1.1.jar");
 java.classpath.push(sails.config.appPath + "/libs_java/OrgSistemasSecurity.jar");

module.exports = {
	index: function(req, res) {
	var OrgSistemasWebServiceClient = java.import("co.edu.udea.wsClient.OrgSistemasWebServiceClient");
        var clientWS = new OrgSistemasWebServiceClient(true);
	console.log(clientWS);
	function consultarFacultad(codigo){
		//"452624219667108910919947"
		
		clientWS.addParamSync("facultad",codigo);
		console.log("--------------------------aca-----------------", clientWS, codigo);
		var listaFacu = null;
		listaFacu = clientWS.obtenerStringSync("consultafacultadesmares","6aaa5e631067cdda423396987f54f9df96625150");
		console.log(listaFacu);
		return listaFacu;
	}
	var user = consultarFacultad("");
	res.view({
    		'usuario': user
    	});
           //var fc="";
           //clientWS.addParamSync("facultad", "");
           //console.log("El clienteWs ---> ",a);
           //var user = clientWS.obtenerStringSync("consultafacultadesmares", "6aaa5e631067cdda423396987f54f9df96625150");
	   //var user= 'Maria Isabel';
	   //console.log('USER ---> ',user);
		
  }
};
