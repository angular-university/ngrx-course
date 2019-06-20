
export interface Course {
  id: number;
  seqNo:number;
  iconUrl: string;
  courseListIcon: string;
  titles: {
    description: string;
    longDescription?: string;
  },
  category: string;
  lessonsCount: number;
  promo: boolean;
}
