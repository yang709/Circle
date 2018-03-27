export class Comment {
  _id: string;
  posterId: string;
  posterNickname: string; // Temp use, should posterId to get poster info from backend.
  missionId: string;
  postDate: Date;
  content: string;
  activity: boolean; // active or inactive(deleted)
}
