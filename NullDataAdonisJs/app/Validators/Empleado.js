'use strict'

class Empleado {
  get rules () {
    return {
      nombre:'required',
      apellido_p:'required',
      email: 'required|email|unique:empleados,email',
      fecha_nac:'required',
      calle:'required',
      numero:'required',
      colonia:'required',
      estado:'required',
      pais:'required'
    }
  }
}

module.exports = Empleado
