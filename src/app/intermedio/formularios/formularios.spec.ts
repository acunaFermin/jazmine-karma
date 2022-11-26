import { FormBuilder } from "@angular/forms";
import { FormularioRegister } from "./formulario"




describe('formularios',() => {
    
    let component: FormularioRegister;

    beforeEach(() => {
        component = new FormularioRegister( new FormBuilder() );
    })

    it('debe crear un formulario con dos campos',() => {
        expect( component.form.contains( 'email' ) )   .toBeTruthy();
        expect( component.form.contains( 'password' ) ).toBeTruthy();
    })

    it('el email debe ser obligatorio', () => {
        const control = component.form.get('email');
        control?.setValue('');

        expect( control?.valid ).toBeFalsy();
    })
    
    it('el email debe ser un correo valido', () => {
        const control = component.form.get('email');
        control?.setValue('fermin@gmail.com');

        expect( control?.valid ).toBeTruthy();
    })
})