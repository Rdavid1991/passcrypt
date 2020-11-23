Feature: Editar contraseña
    Scenario: Validar que se registre la edición de la contraseña
        Given El usuario presiona el botón de Editar
        When Se cambia la contraseña "Abcd12345"
        Then Presiona el botón de Guardar
        Then Se visualiza la nueva contraseña en el sistema