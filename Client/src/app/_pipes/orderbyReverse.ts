/**
 * Created by mohaizhou on 2017/7/24.
 */
import { Pipe, PipeTransform  } from '@angular/core';
@Pipe({
  name: 'orderbyReverse'
})
export class ReversePipe implements PipeTransform {
  transform(value) {
    return value.slice().reverse();
  }
}
