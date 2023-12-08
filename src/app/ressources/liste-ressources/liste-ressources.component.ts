import { Component, OnInit } from '@angular/core';
import { RessourcesService } from '../ressources.service';
import { Router } from '@angular/router';
import { Ressources } from '../Ressource.model';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-liste-ressources',
  templateUrl: './liste-ressources.component.html',
  styleUrls: ['./liste-ressources.component.css']
})
export class ListeRessourcesComponent implements OnInit {

  public ressource !: Ressources[];
  selectedRessourcesId!: number;
  selectedRessources!: Ressources;
  constructor(
    private ressourcesService: RessourcesService,
    private router: Router,
    private dialog: MatDialog,
    ) {

  }

  ngOnInit(): void {
    this.getRessources();

  }

  public getRessources(): void {
    this.ressourcesService.getRessource().subscribe(
      (response: Ressources[]) => {
        this.ressource = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message)
      }
    )
  }


  onDeleteRessources(RessourceId: number): void {
 

    
        this.selectedRessourcesId = RessourceId;
        this.ressourcesService.DeleteRessource(RessourceId).subscribe(
          () => {
            console.log('Ressource deleted!');
            this.getRessources(); // Refresh the list of professeurs
          },
          (error: HttpErrorResponse) => {
            console.error('Error deleting Ressource:', error.message);
          }
        );
      }
      editRessources(ressource: Ressources): void {
        this.router.navigate(['/editRessource', ressource.id]); // Assuming you have route setup for editProfesseur with id as a param
      }
      
      // deleteProfesseur(professeur: Professeur): void {
      //   this.router.navigate(['/deleteProfesseur', professeur.id]); // Assuming you have route setup for editProfesseur with id as a param
      // }
    
  }
