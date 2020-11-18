Feature: Agregar contraseña (manualmente) flujo satisfactorio

	Scenario: Guardar contraseña con información correcta
		Given Usuario presiona el botón agregar contraseña
		When Llena la información del formulario con
			| Servicio | Usuario    | Contraseña |
			| Facebook | Usuario123 | Abcd1234   |
		Then Presiona el botón guardar y se puede visualizar a información en pantalla

