import { createClient } from "@content-island/api-client";
import type { Training, Lesson } from './model';

// Por simplicidad está el token hardcodeado, pero en un proyecto real deberías
// usar variables de entorno o un sistema de gestión de secretos.
// Y llamar a este código desde servidor
const client = createClient({
  accessToken: import.meta.env.VITE_CONTENT_ISLAND_SECRET_TOKEN, // Reemplaza con tu token real
});


export async function getTraining(id: string): Promise<Training> {
  const training = await client.getContent<Training>({ id });
  return training;
}

export async function getLessons(ids: string[]): Promise<Lesson[]> {
  const lessons = await client.getContentList<Lesson>({
    contentType: 'lesson',
    id: { in: ids }
  });
  return lessons;
}
