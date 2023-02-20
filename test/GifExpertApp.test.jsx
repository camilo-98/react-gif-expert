import { render, screen, fireEvent } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Pruebas en <GifExpertApp />', () => {
  


    test('Debe evaluar una categoria repetida', () => {

        const categorias = ["Black Metal"];

        const cat = 'Black Metal';

        render( <GifExpertApp/> );

        expect( cat ).not.toBe();
      
    })
    

})
