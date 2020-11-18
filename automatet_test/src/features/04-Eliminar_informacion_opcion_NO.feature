Feature: Validar que no se puede eliminar información.
    Scenario: Eliminar información con opción no.
        Given que el usuario se encuentra en la página de contraseñas y servicios
        When visualiza la opción para eliminar información.
        And presiona el botón eliminar.
        Then el sistema despliega un pop-up de confirmación para eliminar la información.
        And el usuario presiona la opción no, el sistema cerra el pop-up.
