import { getGifs } from "../../src/helpers/GetGifs"


describe('Pruebas en GetGif', () => {

    test('Debe retornar un arreglo de gifs', async() => {

        const gifs = await getGifs('Motohead');

        expect( gifs.length ).toBeGreaterThan( 0 );
        expect( gifs[0] ).toEqual({
            id: expect.any(String),
            title: expect.any(String),
            url: expect.any(String)
        });
      
    })
    
  
})
