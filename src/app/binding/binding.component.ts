import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styles: [
  ]
})
export class BindingComponent implements OnInit {
  titre : string ="Interpolation";
  status : boolean = false;
  nom : string ="Taha Lammouchi";

  constructor() { }

  ngOnInit(): void {
  }

  changerTitre(){
    this.titre = "Neeeeeewww !!!! ";
  }


}
