import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'descFormatter'
})
export class DescFormatterPipe implements PipeTransform {

  transform(description: string): string {
    let rawString = String.raw`${description}`;
    let newDescription = rawString.replace(/\n/g, '<br>');
    
    return newDescription;
  }

}
