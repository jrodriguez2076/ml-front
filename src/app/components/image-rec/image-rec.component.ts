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
    this.predictionService.entityRecognition(this.MLRequestForm.value.imageUrl).subscribe(
      (res: ApiResult) => {
        console.log(ApiResult);
      }
    );
  }

  resetFields(event) {
    event.preventDefault();
    this.MLRequestForm.reset();
  }


}
