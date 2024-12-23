
import {Component,Input} from '@angular/core'
import { Driver } from '../drivers';


@Component({
  selector: 'app-comp',
  imports: [],
  templateUrl: './comp.component.html',
  styleUrl: './comp.component.css'
})
export class CompComponent {
onDrvView() {
  console.log("KLIKNA ME");
}
 @Input()
 vozac:Driver | undefined;
 @Input() 
 indeks:number|undefined;
}