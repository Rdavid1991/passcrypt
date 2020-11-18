Feature: Agregar contraseña (Generar) flujo fallido
    Scenario: Guardar contraseña con información correcta
        Given Usuario que inicia sesión está en la pantalla de inicio
        When El usuario presiona el botón agregar contraseña
        And Llena la información del formulario con servicio <(Facebook)> usuario <usuario123=>
        And selecciona el tipo de contraseña <solo letras> y la longitud <5>
        And Presiona el botón de generar
        Then El sistema genera una contraseña numérica y de longitud <5>
        And El botón guardar esta desactivado
        And El sistema muestra mensajes en los campos con caracteres inválidos
