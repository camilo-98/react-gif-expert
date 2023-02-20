import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifts } from "../../src/hooks/useFetchGifts";

jest.mock('../../src/hooks/useFetchGifts');

describe('Pruebas en <GifGrid/>', () => {

    const category = 'Black Metal'
  
    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifts.mockReturnValue({
            images: [],
            isLoading: true
        });
      
        render(<GifGrid category={ category } />);
        
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );

    });

    test('Debe de mostrar items cuando se cargan los gifs', () => {
        
        const gifs = [
            {
                id:'ABC',
                title: 'caitama',
                url: 'https://google.com'
            },
            {
                id:'AaSFASDF',
                title: 'bLACK mETAL',
                url: 'https://youtube.com'
            }
        ]

        useFetchGifts.mockReturnValue({
            images: gifs,
            isLoading: false
        });
        render(<GifGrid category={ category } />);

        expect( screen.getAllByRole('img').length ).toBe(2);

    });
    
    

});
