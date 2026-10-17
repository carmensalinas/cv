// Images
import pappasPhoto from "assets/images/bg-pappas.webp";
import softtekPhoto from "assets/images/bg-softtek.webp";
import soaintPhoto from "assets/images/bg-soaint.webp";

// photo, project and tools of each job (texts live in the translation files
// under job<N>Items / job<N>Tools); shared by the web page and the printable CV
const jobDetails = {
  job3: { project: "La Segunda (Argentina)", tools: true },
  job0: { image: soaintPhoto, project: "Pacífico Seguros", tools: true },
  job1: { image: softtekPhoto, project: "Pacífico Seguros", tools: true },
  // the parallel-role note takes the color of the head of accounting entry
  job2: { image: pappasPhoto, noteColor: "primary" },
  job4: {},
  job5: {},
};

export default jobDetails;
