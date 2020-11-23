Feature: Agregar contraseña (manualmente) flujo satisfactorio

	Scenario: Guardar contraseña con información correcta
		Given Usuario presiona el botón agregar contraseña
		When Llena la información del formulario y presiona el botón guardar
			| Servicio | Usuario    | Contraseña |
			| Facebook | Usuario123 | Abcd1234   |
		Then Se puede visualizar a información en pantalla

