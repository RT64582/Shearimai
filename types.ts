export interface Course {
  id: string;
  title: string;
  duration: string;
  audience: string;
  description: string[];
  price: string;
  category: 'foundation' | 'practical' | 'advanced' | 'professional';
}

export interface WikiTerm {
  id: string;
  slug: string;
  hebrewName: string;
  englishName: string;
  shortDescription: string;
  longDescription: string;
  example: string;
  relatedTerms: string[];
  category: 'foundation' | 'technical' | 'tools' | 'advanced' | 'practice';
  videoUrl?: string;
  imageUrl?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: 'studies' | 'tech' | 'college';
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  summary: string;
  imageUrl: string;
}