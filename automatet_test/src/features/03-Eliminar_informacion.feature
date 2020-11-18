Feature: Validar que se puede eliminar información.
    Scenario: Eliminar información con opción si
        Given que el usuario se encuentra en la página de contraseñas y servicios.
        When visualiza la opción para eliminar información.
        And presiona el botón eliminar.
        Then el sistema despliega un pop-up de confirmación para eliminar la información.
        And el usuario presiona la opción si, el sistema procede a eliminar la información.
