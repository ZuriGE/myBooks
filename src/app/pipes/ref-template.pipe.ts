import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'refTemplate'
})
export class RefTemplatePipe implements PipeTransform {

  transform(value: number): string {
    let result:string;
    let valueStr = value.toString()
    while (valueStr.length < 6) valueStr = "0" + valueStr;
    result = "Ref-"+valueStr;
    return result;
  }

}
