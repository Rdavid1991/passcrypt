Feature: Manejo de servicios 

   Scenario: puede registrar
   
      Given Un usuario que inicia sesion 'usuario' y 'contraseña'

      When abre el modal y llena el formulario con la siguiente informacion
                  |Servicio1|Usuario1|Contraseña1|
                  |Servicio2|Usuario2|Contraseña2|

      And Preciona el boton guardar

      Then La aplicacion guarda la informacion