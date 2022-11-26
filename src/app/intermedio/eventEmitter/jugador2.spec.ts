import { Jugador2 } from "./jugador2"


describe('jugad2 emiter', () => {

    let jugador: Jugador2;

    beforeEach( () => jugador = new Jugador2() );

    it('Debe emitir un evento cuando recibe danio', () => {

        let nuevoHp = 0;

        jugador.hpCambia.subscribe((hp) => {
            nuevoHp = hp;
        })

        jugador.recibeDanio( 1000 );

        expect( nuevoHp ).toBe( 0 );
    })
   
    it('Debe emitir un evento cuando recibe danio y sobrevvir si es menos de 100', () => {

        let nuevoHp = 0;

        //aunque la subscripcion es asincrona, el expect
        //espera a que se resuelva
        jugador.hpCambia.subscribe((hp) => {
            nuevoHp = hp;
        })

        jugador.recibeDanio( 50 );

        expect( nuevoHp ).toBe( 50 );
    })

})