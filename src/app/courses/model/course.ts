
export interface Course {
  id: number;
  seqNo:number;
  url:string;
  iconUrl: string;
  courseListIcon: string;
  description: string;
  longDescription?: string;
  category: string;
  lessonsCount: number;
  promo: boolean;
}
