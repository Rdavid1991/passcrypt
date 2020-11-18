Feature: Validación de campos para crear contraseña
    Scenario: Validar que los campos no acepten caracteres inválidos.
        Given que el usuario se encuentra en la ventana para añadir la información sobre la contraseña.
        When comienza a llenar los campos con la siguiente información.
            | Servicio     | Usuario    | Contraseña          |
            | Ñæøååæåå1321 | Øawe2@dsad | Øæ.-,-,--321        |
            | 3”rewre”3213 | Rdavid1997 | Nacidoparasoldar123 |

        Then los campos se remarcan en rojo, con un texto que dice caracteres inválidos
        And se bloquea el botón para guardar.
