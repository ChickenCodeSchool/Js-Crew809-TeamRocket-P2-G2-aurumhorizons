import express from "express";
import { destinations } from "./destinations";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

router.get("/", (req, res) => {
  res.send("Welcome to the Aurum Horizons API!");
});

// ROUTE 1 : Obtenir TOUTES les destinations
// (GET) http://localhost:3000/api/destinations
router.get("/api/destinations", (req, res) => {
  res.json(destinations);
});

// ROUTE 2 : Obtenir UNE SEULE destination par son ID
// (GET) http://localhost:3000/api/destinations/1
// (GET) http://localhost:3000/api/destinations/5
router.get("/api/destinations/:id", (req, res) => {
  const searchedId = Number.parseInt(req.params.id);
  const destination = destinations.find((d) => d.id === searchedId);

  if (destination) {
    res.json(destination);
  } else {
    // Si l'ID n'existe pas
    res.status(404).json({ message: "Destination not found" });
  }
});
// ROUTE 3 : Obtenir UNE destination par son nom
// (GET) http://localhost:3000/api/destinations/name/Egypt
router.get("/api/destinations/name/:name", (req, res) => {
  const destination = destinations.find(
    (d) => d.name.toLowerCase() === req.params.name.toLowerCase()
  );
  
  if (destination) {
    res.json(destination);
  } else {
    res.status(404).json({ message: "Destination not found" });
  }
});

export default router;
