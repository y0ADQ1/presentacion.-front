import { Component, forwardRef, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-input',
  standalone: true,
  // esto es para que el componente tenga sus propios modulos
  imports: [CommonModule],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.scss',
  providers: [
    {
      // se le inyecta el NG_VALUE_ACCESSOR para que Angular
      // sepa que este componente es un ControlValueAccessor
      // es comoo un tipo token que Angular usa para identificar
      // los componentes que implementan ControlValueAccessor
      provide: NG_VALUE_ACCESSOR,
      // se le dice a Angular que este componente
      // es un ControlValueAccessor
      // se usa forwardRef por que en TypeScript, el decorador @Component({...})
      // se evalúa antes de que la clase esté totalmente definida
      useExisting: forwardRef(() => CustomInputComponent),

      // esto es para decirle a angular que este componente
      // lo agregue a su lista de adaptadores
      // para que no cree una nueva instancia cada vez que se use
      // y que se pueda usar en formularios reactivos
      multi: true,
    },
  ],
})
// la forma antigua de declarar un módulo compartido en Angular
// import { NgModule } from '@angular/core';
// @NgModule({
//   declarations: [MyComponent, OtroComponent],
//   imports:      [CommonModule, FormsModule],
//   providers:    [MiServicio],
//   exports:      [MyComponent]
// })
// export class SharedModule {}




// SE TIENE QUE IMPLEMENTAR EL INTERFACE ControlValueAccessor
// PARA QUE EL COMPONENTE PUEDA SER USADO COMO UN CONTROL DE FORMULARIO
export class CustomInputComponent implements ControlValueAccessor {
  value = signal<string>('');
  disabled = signal<boolean>(false);
  placeholder = input<string>('');

  private onChange: (value: string) => void = () => {};
  public onTouched: () => void = () => {};

  onInput(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.value.set(value);
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value.set(value);
  }

  registerOnChange(fn: (value: string) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled.set(isDisabled);
  }
}
