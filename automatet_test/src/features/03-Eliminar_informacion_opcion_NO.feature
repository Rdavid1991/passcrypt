Feature: Validar que no se puede eliminar información.
    Scenario: Eliminar información con opción no.
        Given visualiza la opción para eliminar información
        When  presiona el botón eliminar
        Then presiona no y la informacion no se elimina