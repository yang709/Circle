export class User {
  // Login info
  _id: string; // Mongodb primary key using uuid at backend
  accountType: string; // Person or organization
  email: string;
  password: string;
  // Basic info
  firstName: string;
  lastName: string;
  nickname?: string;
  gender?: string;
  birthday?: Date;
  // Points
  creditPoints: number;
  scoredTimes: number;
  // creditLevel(5 star) = creditPoints/ scoredTimes.
  circleCoin?: number; // coins user have, main currency
  // Contact info
  phone?: string;
  address?: string;
  note?: string; // should limit length
  // Professional info
  works = [];  // Put work object into the array, including title, job description, address, etc.
  skills = [];
  personalWeb?: string;
  // Private
  // profileToShow
  // Mission info
  acceptedMissions = []; // Store mission _id's here.
  postedMissions = []; // As above
  historyMissions = []; // Put all the finished, expired, deleted mission here.
  maxPosts: number; // Max number of the missions this user can post and active at the same time. By default, it is 5.
  // Token
  token: string;
  // Used to track data consistency
  updateTimeStamp: Date;
  // Interact with others
  chatters = []; // Array to store chat obj (chatter id and message obj) chat with the user.
  contacts = []; // Array to store contacts' id .
  blockedUsers = [];
  notice = [];
  roomId: string;
  roomTitle: string;
  // ext picture links
  avatar?: string;
  myPictures = []; // max 10 now.
  // user stats
  missionsPosted: number;
  missionsAccepted: number;
  missionsFinished: number;
}
