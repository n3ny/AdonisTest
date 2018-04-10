'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

const Route = use('Route')

Route.on('/').render('welcome')

Route.get('/listadoEmpleados','EmpleadoController.listarEmpleados')
Route.get('/nuevoEmpleado','EmpleadoController.registrarEmpleado')
Route.post('/guardarEmpleado','EmpleadoController.insertarEmpleado')
Route.get('/maps/:id','EmpleadoController.mostrarUbicacion')
Route.get('/detalles/:id','EmpleadoController.verDetalles')
Route.get('/eliminar/:id','EmpleadoController.eliminarEmpleado')
Route.get('/editar/:id','EmpleadoController.editarEmpleado')
Route.post('/guardarCambios/:id','EmpleadoController.guardarEdicionEmpleado')

