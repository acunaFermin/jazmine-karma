import { incrementar } from "./number"




describe('Pruebas de numeros', (  ) => {  

    it('debe de retornar 100 si el numero ingresado es mayor a 100', (  ) => {  

        const res = incrementar( 300 )

        expect( res ).toBe( 100 );

    });

    it('debe de retornar el numero ingresado mas 1 si no es mayor a 100', (  ) => {  

        const num = 50;

        const res = incrementar( num )

        expect( res ).toBe( num + 1 );

    });
    

})