'use strict'

const Empleado=use('App/Models/Empleado')
const {validate}=use('Validator')
class EmpleadoController {

    async registrarEmpleado({view}){
        return view.render('nuevoempleado')
    }

    async insertarEmpleado({request, response, session}){
        
        const regla= {
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
      const validador=await validate(request.all(),regla)

      if(validador.fails()){
      session.withErrors(validador.messages()).flashAll()
      return response.redirect('back')
      }
        
        const empleado=new Empleado()
        empleado.nombre=request.input('nombre')
        empleado.apellido_p=request.input('apellido_p')
        empleado.apellido_m=request.input('apellido_m')
        empleado.email=request.input('email')
        empleado.fecha_nac=request.input('fecha_nac')
        empleado.calle=request.input('calle')
        empleado.numero=request.input('numero')
        empleado.colonia=request.input('colonia')
        empleado.estado=request.input('estado')
        empleado.pais=request.input('pais')

        await empleado.save()

        session.flash({notification:'El empleado ha sido registrado satisfactoriamente!!!'})
        return response.redirect('nuevoempleado')

    }

    async listarEmpleados({view}){
        const lista=await Empleado.all()
        return view.render('listadoEmpleados',{lista:lista.toJSON()})
    }

    async mostrarUbicacion({params,view}){

        const empleado=await Empleado.find(params.id)
        return view.render('googlemaps', {empleado:empleado})
    }

    async verDetalles({params,view}){

        const empleado=await Empleado.find(params.id)
        return view.render('detallesEmpleado', {empleado:empleado})
    }

    async editarEmpleado({params,view}){

        const empleado=await Empleado.find(params.id)
        return view.render('editarEmpleado', {empleado:empleado})
    }


    async eliminarEmpleado({params,view}){

        const empleado=await Empleado.find(params.id)
        await empleado.delete()
        const lista=await Empleado.all()
        return view.render('listadoEmpleados',{lista:lista.toJSON()})
    }

    async guardarEdicionEmpleado({request, response, session, params, view}){
        
        const regla= {
            nombre:'required',
            apellido_p:'required',
            email: 'required',
            fecha_nac:'required',
            calle:'required',
            numero:'required',
            colonia:'required',
            estado:'required',
            pais:'required'
          }
      const validador=await validate(request.all(),regla)

      if(validador.fails()){
      session.withErrors(validador.messages()).flashAll()
      return response.redirect('back')
      }
        
        const empleado=await Empleado.find(params.id)
        empleado.nombre=request.input('nombre')
        empleado.apellido_p=request.input('apellido_p')
        empleado.apellido_m=request.input('apellido_m')
        empleado.email=request.input('email')
        empleado.fecha_nac=request.input('fecha_nac')
        empleado.calle=request.input('calle')
        empleado.numero=request.input('numero')
        empleado.colonia=request.input('colonia')
        empleado.estado=request.input('estado')
        empleado.pais=request.input('pais')

        await empleado.save()
        const lista=await Empleado.all()
        //session.flash({notification:'El empleado ha sido editado satisfactoriamente!!!'})
        return view.render('listadoEmpleados',{lista:lista.toJSON()})


    }

    
}

module.exports = EmpleadoController

