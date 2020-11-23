Feature: Agregar contraseña (Generar) flujo fallido
    Scenario: Guardar contraseña con información correcta
       Given El usuario presiona el botón generar contraseña
        When Llena la información del formulario con servicio "(Facebook)" usuario ">usuario=123"
        Then Selecciona el tipo de contraseña y la longitud
        Then Presiona el botón de generar
        Then El sistema genera una contraseña
        Then El botón guardar esta desactivado
        Then El sistema muestra mensajes "caracter invalido" en los campos con caracteres inválidos
