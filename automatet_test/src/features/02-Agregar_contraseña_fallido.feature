Feature: Agregar contraseña (manualmente) flujo fallido
    Scenario: Guardar contraseña con información correcta
        Given Usuario que inicia sesión está en la pantalla de inicio
        When El usuario presiona el botón agregar contraseña
        And Llena la información del formulario con
            | Servicio   | Usuario     | Contraseña |
            | (Facebook) | Usuario123= | Abcd1234<> |
        Then El botón guardar esta desactivado
        And El sistema muestra mensaje en cada campo, que dice información incorrecta.
