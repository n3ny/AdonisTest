'use strict'

const Model = use('Model')

class Empleado extends Model {

    static get dates () {
        return super.dates.concat(['fecha_nac'])
      }
    

    /*static formatDates (field, value) {
        if (field === 'fecha_nac') {
          return value.format('YYYY-MM-DD')
        }
        return super.formatDates(field, value)
      }

      static castDates (field, value) {
    if (field === 'dob') {
      return `${value.fromNow(true)} old`
    }
    return super.formatDates(field, value)
  }

    */
    
}

module.exports = Empleado
