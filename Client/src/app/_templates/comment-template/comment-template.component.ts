import { Component, OnInit, Input } from '@angular/core';
import { Comment } from '../../_models/index';
import { Router } from '@angular/router';
import { DateDiffService } from '../../_services/index';
import * as moment from 'moment';
@Component({
  selector: 'app-comment-template',
  templateUrl: './comment-template.component.html',
  styleUrls: ['./comment-template.component.css']
})
export class CommentTemplateComponent implements OnInit {
  @Input() comment: Comment;
  duration: string;
  postDate: any;
  constructor( private dateDiffService: DateDiffService ) { }

  ngOnInit() {
    this.dateDiff();
    this.postDate = moment(this.comment.postDate).format('LLL');
  }
  dateDiff() {
    this.duration = this.dateDiffService.dateDiff(new Date(), new Date(this.comment.postDate));
  }
}
