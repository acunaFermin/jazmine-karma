import { usuarioLoggeado } from "./booleanos"



describe('Pruebas de boolleanos', (  ) => {  

    it( 'Debe de retornar true', (  ) => {  

        const resp = usuarioLoggeado();
        
        expect( resp ).toBeTruthy();

    } )

})