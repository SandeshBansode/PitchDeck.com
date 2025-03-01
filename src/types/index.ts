export interface ContentItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
}

export interface StartupDetails extends ContentItem {
  founded: string;
  location: string;
  employees: number;
  funding: number;
  revenue: number;
  growth: number;
  metrics: {
    users: MetricData[];
    revenue: MetricData[];
    engagement: MetricData[];
  };
}

export interface MetricData {
  date: string;
  value: number;
}

export interface Course extends ContentItem {
  duration: string;
  level: string;
  instructor: string;
  rating: number;
  students: number;
}