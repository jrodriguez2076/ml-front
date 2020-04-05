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
  // submittedRequest: Boolean;
  completedRequest: Boolean = false;
  loading: Boolean= false;
  predictionResult: ApiResult = {status:"200", result:""};


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
    this.loading = true;
    // this.predictionResult = this.predictionService.entityRecognition(this.MLRequestForm.value.text);
    this.foundResults = true;
    this.predictionService.entityRecognition(this.MLRequestForm.value.text).subscribe(
      (res: any) => {
        console.log(res);
        // if (res.status <400) {
        this.completedRequest = true;
        this.loading=false;
        this.foundResults = true;
        console.log(Object.keys(res));
        this.predictionResult.result = res["Entities Found"];
        // }
      }
    );
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
    this.completedRequest = false;
    this.loading = false;
    this.MLRequestForm.reset();
  }

}
