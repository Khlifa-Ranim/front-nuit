import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RessourcesService } from '../ressources.service';
import { NgForm } from '@angular/forms';
import { Ressources } from '../Ressource.model';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-add-ressources',
  templateUrl: './add-ressources.component.html',
  styleUrls: ['./add-ressources.component.css']
})
export class AddRessourcesComponent implements OnInit {

  titre: string = '';
  description: string = '';
  lien: string = '';
  dateCreaction!: Date;
  RessourceCode: string = '';



  constructor(private ressourcesService: RessourcesService,
    private router: Router) { }

  ngOnInit(): void {
  }

  public onAddRessource(addForm: NgForm): void {
    // Check if the form is valid
    if (!addForm.valid) {
      console.error('Form is not valid');
      alert('Please fill out the form correctly.');

      return;
    }

    const newRessource: Ressources = {
      id: 0,
      titre: this.titre,
      description: this.description,
      lien: this.lien,
      dateCreaction: this.dateCreaction,
      RessourceCode: this.RessourceCode,
    };

    this.ressourcesService.AddRessource(newRessource).subscribe(
      (response: Ressources) => {
        console.log(response);
        // Clear the form after successful submission if needed
        addForm.reset();
        console.log('ressource Adedd !');
        this.router.navigate(['/listRessource']); // or where you want to redirect after update
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  onClose() {
    // You can add any additional logic before navigation if needed
    this.router.navigate(['/Student']);
  }

}
