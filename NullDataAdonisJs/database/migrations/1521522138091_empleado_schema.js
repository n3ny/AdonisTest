'use strict'

const Schema = use('Schema')

class EmpleadoSchema extends Schema {
  up () {
    this.table('empleados', (table) => {
      // alter table
    })
  }

  down () {
    this.table('empleados', (table) => {
      // reverse alternations
    })
  }
}

module.exports = EmpleadoSchema
