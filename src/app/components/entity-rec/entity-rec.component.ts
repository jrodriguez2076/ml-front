import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PredictionService } from 'src/app/Services/prediction.service';
import { ApiResult } from 'src/app/models/DTO/ApiResult';

@Component({
  selector: 'app-entity-rec',
  templateUrl: './entity-rec.component.html',
  styleUrls: ['./entity-rec.component.css']
})
export class EntityRecComponent implements OnInit {
  Title: string = 'Entity recognition';
  MLRequestForm: FormGroup;
  errorMessage: boolean;
  text: string;
  foundResults: Boolean;
  submittedRequest: Boolean;
  predictionResult: ApiResult;


  constructor(
    private predictionService: PredictionService,
  ) {
    this.MLRequestForm = new FormGroup({
      'text': new FormControl(this.text, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onMLRequest() {
    console.log("Sending request")
    if (!this.MLRequestForm.value.text) {
      this.errorMessage = true;
      return
    }
    console.log("passed validation")
    this.submittedRequest = true;
    this.predictionResult = this.predictionService.entityRecognition(this.MLRequestForm.value.text);
    this.foundResults = true;
    // this.predictionService.entityRecognition(this.MLRequestForm.value.text).subscribe(
    //   (res: ApiResult) => {
    //     console.log(ApiResult);
    //   }
    // );
  }

  resetFields(event) {
    event.preventDefault();
    this.MLRequestForm.reset();
  }

  restartForm() {
    event.preventDefault();
    this.submittedRequest = false;
    this.MLRequestForm.reset();
  }

}
