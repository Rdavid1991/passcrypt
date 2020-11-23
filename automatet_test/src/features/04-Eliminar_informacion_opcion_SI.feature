Feature: Validar que se puede eliminar información.
    Scenario: Eliminar información con opción si
       Given visualiza la opción para eliminar información
        When presiona el botón eliminar
        Then presiona si y la informacion no se elimina
