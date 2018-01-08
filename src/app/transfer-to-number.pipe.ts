import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transferToNumber'
})
export class TransferToNumberPipe implements PipeTransform {

  transform(value: string, args?: any) {
    if (!value)
      return null;
    let val = parseFloat(value);
    return val;
  }

}
