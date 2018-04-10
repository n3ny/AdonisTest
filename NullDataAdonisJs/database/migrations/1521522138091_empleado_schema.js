'use strict'

const Schema = use('Schema')

class EmpleadoSchema extends Schema {
  up () {
    this.create('empleados', (table) => {
      table.increments()
      table.string('nombre', 50).notNullable()
      table.string('apellido_p', 50).notNullable()
      table.string('apellido_m', 50)
      table.date('fecha_nac', 80).notNullable()
      table.string('email', 254).notNullable().unique()
      table.string('calle', 60).notNullable()
      table.string('numero', 50).notNullable()
      table.string('colonia', 254).notNullable()
      table.string('estado', 60).notNullable()
      table.string('pais', 80).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('empleados')
  }
}

module.exports = EmpleadoSchema