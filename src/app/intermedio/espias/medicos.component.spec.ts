import { of, throwError } from 'rxjs';
import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';


describe('MedicosComponent', () => {

    let componente: MedicosComponent;
    const servicio = new MedicosService( null );

    beforeEach( () => {
        componente = new MedicosComponent( servicio )
    });


    it('Init: debe de cargar los medicos', () => {

        spyOn( servicio, 'getMedicos' ).and.callFake( () => {

            return of( ['m1','m2'] );
        })

        componente.ngOnInit();

        expect( componente.medicos.length ).toBeGreaterThan( 0 );
   
    });

    it('Debe de llamar al servidor ara agregar un medico', () => {

        const espia = spyOn( servicio, 'agregarMedico' ).and.callFake( medico => {
            return of()
        })

        componente.agregarMedico();

        expect( espia ).toHaveBeenCalled();

    });
    
    it('Debe agregar un nuevo medico al arreglo de medicos', () => {

        const medico = { id:1, nombre: 'Carlos' }

        spyOn( servicio, 'agregarMedico' ).and
            .returnValue( of( medico ) )

        componente.agregarMedico();

        expect( componente.medicos.indexOf( medico ) ).toBeGreaterThanOrEqual( 0 )

    });
    
    it('Si falla la adicion, la propiedad mensaje error debe ser igual al error de servicio', () => {

        const miError = 'no se puedo agregar el medico';

        spyOn( servicio, 'agregarMedico' ).and
            .returnValue( throwError(miError) );

        componente.agregarMedico();

        expect( componente.mensajeError ).toBe( miError );

    });

    it('debe de llamar al servidor para borrar un medico', () => {

        spyOn( window, 'confirm' ).and.returnValue(true)

        const espia = spyOn( servicio, 'borrarMedico' ).and
            .returnValue( of() );
        
        componente.borrarMedico('1');

        expect( espia ).toHaveBeenCalledWith('1');

    });

    it('NO debe de llamar al servidor para borrar un medico', () => {

        spyOn( window, 'confirm' ).and.returnValue(false)

        const espia = spyOn( servicio, 'borrarMedico' ).and
            .returnValue( of() );
        
        componente.borrarMedico('1');

        expect( espia ).not.toHaveBeenCalledWith('1');

    })




});
