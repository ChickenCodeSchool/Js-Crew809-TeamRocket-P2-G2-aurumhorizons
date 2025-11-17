// import "./Technique.css";
// import { type SetStateAction, useState } from "react";

// // biome-ignore lint/suspicious/noExplicitAny: <explanation>
// function Technique(props: any) {
//   const [jour, setJour] = useState(null);
//   const handleMarkerClick = (jour: SetStateAction<null>) => {
//     setJour(jour);
//   };
//   const mesEtapes = [
//     {
//       jour: 1,
//       nom: "tour eiffel ",
//       coords: [48.85846889364759, 2.294449110622364],
//       description: "tour eiffel",
//     },
//     {
//       jour: 2,
//       nom: "Hôtel des Invalides",
//       coords: [48.856747103755346, 2.3127433982684455],
//       description: "Hôtel des Invalides",
//     },
//     {
//       jour: 3,
//       nom: "Place de la Concorde",
//       coords: [48.86619850874905, 2.321138690402695],
//       description: "Place de la Concorde",
//     },
//     {
//       jour: 4,
//       nom: "arc de triomphe",
//       coords: [48.873949692504596, 2.2949273019737793],
//       description: "arc de triomph",
//     },
//     {
//       jour: 5,
//       nom: "musée du louvre",
//       coords: [48.86136871746693, 2.3374291258337134],
//       description: "musée du louvre",
//     },
//     {
//       jour: 6,
//       nom: "Cathédrale Notre-Dame de Paris",
//       coords: [48.85391183231661, 2.352383470668765],
//       description: "Cathédrale Notre-Dame de Paris",
//     },
//   ];
//   return (
//     <>
//       <Map etapes={mesEtapes} onMarkerClick={handleMarkerClick} jour={jour} />
//     </>
//   );
// }

// export default Technique;
