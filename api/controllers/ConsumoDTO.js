/**
 * ConsumoDTO.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = class pruebaDTO{
	var codigo;
	var nombre;
	
	function getCodigo(){
		return codigo;
	}
	function getNombre(){
                return nombre;
        }
	fuction setCodigo(cod){
		codigo=cod;
	}
	fuction setNombre(nom){
                nombre=nom;
        }

}
