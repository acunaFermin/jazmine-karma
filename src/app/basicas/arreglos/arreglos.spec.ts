import { obtenerRobotos } from "./arreglos"





describe('Pruebas de arreglos', () => {
    
    it('debe de retornar al menos 3 robots', (  ) => { 

        const res = obtenerRobotos();

        expect( res.length ).toBeGreaterThanOrEqual(3);

    });
    
    it('Debe existir megaman y ultron', (  ) => { 

        const res = obtenerRobotos();

        expect( res ).toContain('Megaman');
        expect( res ).toContain('Ultron');

    });
})
