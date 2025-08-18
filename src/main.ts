import "./style.css";
import type { Lesson } from './model';
import { getTraining, getLessons } from "./api";

const showLessons = (lessons: Lesson[]) => {
  const appContainer = document.getElementById("app");
  if (appContainer) {
    const lessonsList = lessons.map(lesson => `<li>${lesson.title}</li>`).join('');
    appContainer.innerHTML += `<h2>Lessons:</h2><ul>${lessonsList}</ul>`;
  } else {
    console.error("App container not found");
  }
}

async function main() {
  const training = await getTraining("6882199268fb58095585e4be");
  const lessons = training.lessons ? await getLessons(training.lessons) : [];

  const appContainer = document.getElementById("app");

  if (appContainer) {
    appContainer.innerHTML = `<h1>${training.title}</h1>`;
    showLessons(lessons);
  } else {
    console.error("App container not found");
  }
}

main();
