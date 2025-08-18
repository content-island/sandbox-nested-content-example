import type { Media } from "@content-island/api-client";

export interface Training {
  id: string;
  language: "en";
  title: string;
  slug: string;
  thumbnail: Media;
  overview: string;
  lessons?: string[]; // Stores the ID of the related entity
}

export interface Lesson {
  id: string;
  language: "en";
  title: string;
  slug: string;
  content: string;
  video: string;
}
