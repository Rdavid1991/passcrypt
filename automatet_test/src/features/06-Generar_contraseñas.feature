Feature: Agregar contraseña (Generar) flujo satisfactorio
    Scenario: Guardar contraseña con información correcta
        Given Usuario que inicia sesión está en la pantalla de inicio
        When El usuario presiona el botón generar contraseña
        And Llena la información del formulario con servicio <Facebook> usuario <usuario123>
        And selecciona el tipo de contraseña <solo letras> y la longitud <5>
        And Presiona el botón de generar
        Then El sistema genera una contraseña numérica y de longitud <5>
        And presiona el botón guardar
        And El sistema guarda la información en base de datos
        And la información se puede visualizar en la tabla
