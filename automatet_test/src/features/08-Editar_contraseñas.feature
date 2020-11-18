Feature: Editar contraseña
    Scenario: Validar que se registre la edición de la contraseña
        Given Usuario está en la página de contraseñas y Servicios
        When El usuario presiona el botón de Editar
        And Se cambia la contraseña <Abcd12345!>
        And Presiona el botón de Guardar
        Then El sistema guarda la nueva contraseña
        And Se visualiza la nueva contraseña en el sistema.
