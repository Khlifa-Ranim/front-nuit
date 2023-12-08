import { Component, OnInit } from '@angular/core';
import { Ressources } from '../Ressource.model';
import { RessourcesService } from '../ressources.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'
@Component({
  selector: 'app-update-ressources',
  templateUrl: './update-ressources.component.html',
  styleUrls: ['./update-ressources.component.css']
})
export class UpdateRessourcesComponent implements OnInit {

 
  // public updateProfesseur!: Professeur;
  ressourceForm!: FormGroup;
  ressource!: Ressources;

  constructor(
    private ressourcesService: RessourcesService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ressourceForm = this.formBuilder.group({
      id: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      lien: ['', Validators.required],
      dateCreaction: ['', Validators.required]
    });
  
    this.ressourcesService.getResourceById(this.route.snapshot.params['id']).subscribe(data => {
      this.ressourceForm.patchValue(data);
    });
  }
  

onSubmit() {

  if (this.ressourceForm.valid) {
    // this.ressourcesService.UpdateRessource(this.ressourceForm.value).subscribe(res => {
    //   console.log('cours updated!');
    //   this.router.navigate(['/listRessource']); // or where you want to redirect after update

    // });

    this.ressourcesService.UpdateRessource(this.ressourceForm.value).subscribe(
      response => {
        console.log('Update successful', response);
        this.router.navigate(['/listRessource']); // or where you want to redirect after update
  },
      error => {
        console.error('Update failed', error);
        // handle error response
      }
    );
    
  }
}


onClose() {
  // You can add any additional logic before navigation if needed
  this.router.navigate(['/listRessource']);
}

}
