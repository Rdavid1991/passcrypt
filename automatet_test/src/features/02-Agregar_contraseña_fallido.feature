Feature: Agregar contraseña (manualmente) flujo fallido
    Scenario: Guardar contraseña con información correcta
        Given El usuario presiona el botón agregar contraseña
        When Llena la información del formulario con
            | Servicio   | Usuario     | Contraseña |
            | (Facebook) | Usuario123= | Abcd1234<> |
        Then El botón guardar esta desactivado y muestra mensaje en cada campo "caracter invalido"