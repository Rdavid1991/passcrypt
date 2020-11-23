Feature: Agregar contraseña (Generar) flujo satisfactorio
    Scenario: Guardar contraseña con información correcta
        Given El usuario presiona el botón generar contraseña
        When Llena la información del formulario con servicio "Facebook" usuario "usuario123"
        Then Selecciona el tipo de contraseña y la longitud
        Then Presiona el botón de generar
        Then El sistema genera una contraseña
        Then presiona el botón guardar
        Then la información se puede visualizar en la tabla
