import { Jugador } from "./clases"





describe('Pruebas de clase', (  ) => {  
    
    let jugador = new Jugador();
    
    //ciclos de vida de las pruebas
    beforeAll  ( () => console.log('beforeAll') );
    
    beforeEach ( () => {
        console.log('beforeEach');
        // jugador.hp = 100;
        
        //otra forma de reslverlo seria inicializando
        //el jugador en todas sus propiedades
        jugador = new Jugador();
    });
    
    afterAll   ( () => console.log('afterAll') );
    
    afterEach  ( () => console.log('afterEach') );
    
    it('debe de retornar 80 de hp si recibe 20 de danio', () => {
        
        const resp = jugador.recibeDanio(20);
        
        expect( resp ).toBe(80);
    })
    
    it('debe de retornar 50 de hp si recibe 50 de danio', () => {
        
        const resp = jugador.recibeDanio(50);

        expect( resp ).toBe(50);
    })
    
    it('debe de retornar 0 de hp si recibe mas de 100 de danio', () => {
        
        const resp = jugador.recibeDanio(101);

        expect( resp ).toBe(0);
    })

})