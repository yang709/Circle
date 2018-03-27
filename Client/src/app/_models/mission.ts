import { User, Comment } from './index';

export class Mission {
  // ids
  _id: string; // mission's uuid
  // Used to track data consistency
  updateTimeStamp: Date;
  posterId: string;     // poster's uuid
  posterNickname: string; // for temp use, should just record posterId
  // poster: User;     // will be buggy since JSON cannot handle circular structure
  candidates = [];       // acceptors' uuids
  acceptors = [];        // one mission might be  able to be accepted by multiple users
  maxAcceptor: number; // max number of allowed acceptors
  minAcceptor: number; // min number of allowed acceptors
  // mission info
  title: string;
  location: string;
  payment: number;
  postDate: Date;
  startDate: Date;
  endDate: Date;
  description: string;
  tags = [];
  urgency: boolean;
  applyNotes = []; // Key is user_id. Value is their note sent to the poster.
  // mission activation status
  status: number;
  // 0. REQUESTING (wait for poster to confirm acceptor),
  // 1. ONGOING (working in progress),
  // 2. FINISHED (acceptor confirm finished),
  // 3. CASE CLOSED (poster confirm mission accomplished),
  // 4 .FAILED (acceptor(s) do not confirm before due date),
  // 5. NO CONFIRM (acceptor confirmed but poster did not confirm),
  // 6. EXPIRED (no one accept before the due date).
  // 233. DELETED (Mission is Deleted)
  // comments
  comments: Comment[] = [];
}

