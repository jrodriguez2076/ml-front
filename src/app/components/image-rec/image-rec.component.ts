import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PredictionService } from 'src/app/Services/prediction.service';
import { ApiResult } from 'src/app/models/DTO/ApiResult';

@Component({
  selector: 'app-image-rec',
  templateUrl: './image-rec.component.html',
  styleUrls: ['./image-rec.component.css'],
  providers: [PredictionService]
})
export class ImageRecComponent implements OnInit {

  Title: string = 'Image Recognition';
  MLRequestForm: FormGroup;
  errorMessage: boolean;
  imageUrl: string;
  foundResults: Boolean;
  // submittedRequest: Boolean;
  completedRequest: Boolean = false;
  loading: Boolean = false;
  predictionResult: ApiResult = { status: "200", result: [] };


  constructor(
    private predictionService: PredictionService,
  ) {
    this.MLRequestForm = new FormGroup({
      'imageUrl': new FormControl(this.imageUrl, [Validators.required]),
    });
  }

  ngOnInit(): void {
  }

  onMLRequest() {
    console.log("Sending request")
    if (!this.MLRequestForm.value.imageUrl) {
      this.errorMessage = true;
      return
    }
    console.log("passed validation")
    this.loading = true;
    this.predictionService.imageRecognition(this.MLRequestForm.value.imageUrl).subscribe(
      (res: any) => {
        console.log(res);
        // if (res.status <400) {
        this.completedRequest = true;
        this.loading = false;
        this.foundResults = true;
        let predictKeys = Object.keys(res.Prediction);
        console.log(predictKeys);
        let predictScores = []
        predictKeys.forEach((value,index) => {
          console.log(value)
          this.predictionResult.result.push({name: value, score: res.Prediction[value]})
          // predictScores.push(res.Prediction[value]);

        })
        console.log(this.predictionResult.result)
        // this.predictionResult.result = res.Prediction;
        // }
      }
    );
    // this.predictionResult = this.predictionService.imageRecognition(this.MLRequestForm.value.imageUrl);
    // this.foundResults = true;
    // this.predictionService.entityRecognition(this.MLRequestForm.value.imageUrl).subscribe(
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
