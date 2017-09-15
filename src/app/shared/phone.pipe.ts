import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(!value) { return '';}

    let temp = value.toString().trim().replace(/^\+/, '');

    if (temp.match(/[^0-9]/)) {
      return value;
    }

    if(temp.length == 10)
    {
      let number = temp.slice(3);
      return "(" + temp.slice(0, 3) + ")" + number.slice(0, 3) + "-" + number.slice(3);
    }

    return null;
  }

}
