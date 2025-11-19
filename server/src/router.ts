import express from "express";
import { destinations } from "./destinations";
import { map } from "./map";

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
// (GET) http://localhost:3310/api/destinations
router.get("/api/destinations", (req, res) => {
  res.json(destinations);
});

// ROUTE 2 : Obtenir tout les détails voyages
// (GET) http://localhost:3310/api/detailstravel
router.get("/api/detailstravel", (req, res) => {
  res.json(map); // to do destination into map
});

// ROUTE 1 : Obtenir UNE SEULE destination par son ID
// (GET) http://localhost:3310/api/destinations/1
// (GET) http://localhost:3310/api/destinations/5
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

router.get("/api/detailstravel/:id", (req, res) => {
  const searchedId = Number.parseInt(req.params.id);
  const maps = map.find((m) => m.id === searchedId);

  if (maps) {
    res.json(maps);
  } else {
    res.status(404).json({ message: "trip not found" });
  }
});

export default router;
