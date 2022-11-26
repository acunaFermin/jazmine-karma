
// describe('');
// it();

import { mensaje } from "./string";



describe( 'Pruebas de strings', () => {  
    
    it( 'Debe regresar un string', () => {

        const respuestas = mensaje( 'Fermin' );

        expect( typeof respuestas ).toBe('string');

    });
    
    it( 'Debe retornar un saludo con el nombre enviado', () => {

        const nombre = 'juan'
        const respuestas = mensaje( nombre );

        expect( respuestas ).toContain( nombre );

    });
});