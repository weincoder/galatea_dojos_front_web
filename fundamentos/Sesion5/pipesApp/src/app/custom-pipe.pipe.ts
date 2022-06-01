import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe'
})
export class CustomPipePipe implements PipeTransform {

  transform(strList: Array<String>, ...args: unknown[]): unknown {
    return strList.join(' ');
  }

}
