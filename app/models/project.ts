export interface Project {
  id: string;
  title: string;
  description: string;
  ref?: string;
  repository?: string;
  label?: string;
  url?: string;
  date?: string;
  published: boolean;
  isPublic: boolean;
  intro: string;
  views: number;
}
