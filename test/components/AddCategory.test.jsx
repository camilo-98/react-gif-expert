import { AddCategory } from "../../src/components/AddCategory";
import { fireEvent, render, screen } from "@testing-library/react";

describe('Pruebas en <AddCategory/>', () => {

    test('Debe de cambiar el valor de la caja de texto', () => {
        
        render( <AddCategory onNewCategory={ () => {} } /> );
        //screen.debug();

        const input = screen.getByRole('textbox');
        fireEvent.input( input, { target: {value: 'caitama'} } );

        expect( input.value ).toBe('caitama');

    });

    test('Debe de llamar onNewCategory si el input tiene un valor', () => {
        
        const inputValue = 'caitama';
        //TODO: ?

        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} } );
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        expect( onNewCategory ).toHaveBeenCalledWith( inputValue );

    });

    test('No debe de llamar el newCategory si el input esta vacio', () => {

        const onNewCategory = jest.fn();
      
        render( <AddCategory onNewCategory={ onNewCategory } /> );
        const form = screen.getByRole('form');
        fireEvent.submit( form );
        expect( onNewCategory ).toHaveBeenCalledTimes(0);
        expect( onNewCategory ).not.toHaveBeenCalled();

    });
    
    
    
  
})
