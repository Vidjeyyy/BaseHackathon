import Agen1 from "../assets/Agen/1.jpg";
import Agen2 from "../assets/Agen/2.jpg";
import Agen3 from "../assets/Agen/3.jpg";
import Biarritz1 from "../assets/Biarritz/1.jpg";
import Biarritz2 from "../assets/Biarritz/2.jpg";
import Biarritz3 from "../assets/Biarritz/3.jpg";
import Gourette1 from "../assets/Gourette/1.jpg";
import Gourette2 from "../assets/Gourette/2.jpg";
import Gourette3 from "../assets/Gourette/3.jpg";
import Hostens1 from "../assets/Hostens/1.jpeg";
import Hostens2 from "../assets/Hostens/2.jpeg";
import Hostens3 from "../assets/Hostens/3.jpg";
import Laruns1 from "../assets/Laruns/1.jpg";
import Laruns2 from "../assets/Laruns/2.jpg";
import Laruns3 from "../assets/Laruns/3.jpg";
import Pau1 from "../assets/Pau/1.jpg";
import Pau2 from "../assets/Pau/2.jpg";
import Pau3 from "../assets/Pau/3.jpg";
import Bdx1 from "../assets/bdx/1.jpg";
import Bdx2 from "../assets/bdx/2.jpg";
import Bdx3 from "../assets/bdx/3.jpg";
import Hossegor1 from "../assets/hossgore/1.jpg";
import Hossegor2 from "../assets/hossgore/2.jpg";
import Hossegor3 from "../assets/hossgore/3.jpg";
import Messange1 from "../assets/messanges/1.jpg";
import Messange2 from "../assets/messanges/2.jpg";
import Messange3 from "../assets/messanges/3.jpg";
import Marsan1 from "../assets/mont de marsan/1.jpg";
import Marsan2 from "../assets/mont de marsan/2.jpg";
import Marsan3 from "../assets/mont de marsan/3.jpg";

export const dataBase = [
  {
    id: 1,
    img1: Bdx1,
    img2: Bdx2,
    img3: Bdx3,
    name: "Bordeaux",
    coordonnees: { lat: 44.837614504104465, lng: -0.579185013363845 },
    description:
      "Bordeaux, au cœur de la région viticole, est une ville portuaire située sur la Garonne, dans le sud-ouest de la France. Elle est réputée pour la cathédrale gothique de Saint-André, ses manoirs construits aux XVIIIe et XIXe siècles, ainsi que ses musées d'art comme le musée des Beaux-Arts de Bordeaux. Les jardins publics suivent les courbes des quais qui longent le fleuve. La place de la Bourse, au centre de laquelle trône la fontaine des Trois Grâces, se reflète dans le miroir d'eau.",
    enfants: true,
    ambiance: "detente",
    environnement: "ville",
    budget: "abordable",
  },
  {
    id: 2,
    img1: Marsan1,
    img2: Marsan2,
    img3: Marsan3,
    name: "Mont de Marsan",
    coordonnees: { lat: 43.89347256941558, lng: -0.4978544156884237 },
    description:
      "Mont-de-Marsan est une commune du sud-ouest de la France, préfecture des Landes, en région Nouvelle-Aquitaine. Fondée au Moyen Âge autour de ses trois rivières sur la voie de Vézelay du chemin de Compostelle, Mont-de-Marsan était la principale ville fortifiée des Landes.",
    enfants: true,
    ambiance: "detente",
    environnement: "campagne",
    budget: "abordable",
  },
  {
    id: 3,
    img1: Messange1,
    img2: Messange2,
    img3: Messange3,
    name: "Messange",
    coordonnees: { lat: 43.81437838602471, lng: -1.3769926420197578 },
    description:
      "Messanges est une commune française située dans le département des Landes en région Nouvelle-Aquitaine. Le gentilé est Messangeot. Le climat qui caractérise la commune est qualifié, en 2010, de « climat océanique franc », selon la typologie des climats de la France qui compte alors huit grands types de climats en métropole3. En 2020, la commune ressort du type « climat océanique » dans la classification établie par Météo-France, qui ne compte désormais, en première approche, que cinq grands types de climats en métropole",
    enfants: true,
    ambiance: "sport",
    environnement: "plage",
    budget: "abordable",
  },
  {
    id: 4,
    img1: Hossegor1,
    img2: Hossegor2,
    img3: Hossegor3,
    name: "Hossegor",
    coordonnees: { lat: 43.664954733523466, lng: -1.3989637909898074 },
    description:
      "Soorts-Hossegor est une commune française située dans le département des Landes en région Nouvelle-Aquitaine. Elle est réputée pour ses spots de surf, tels que la Gravière. Le gentilé est Hossegorien.",
    enfants: true,
    ambiance: "detente",

    environnement: "plage",

    budget: "cher",
  },
  {
    id: 5,
    img1: Biarritz1,
    img2: Biarritz2,
    img3: Biarritz3,
    name: "Biarritz",
    coordonnees: { lat: 43.48315465883768, lng: -1.5576708859206716 },
    description:
      "Biarritz, élégante ville balnéaire de la côte basque, dans le sud-ouest de la France, est une destination populaire depuis que les têtes couronnées de toute l'Europe l'ont choisie comme lieu de villégiature dans les années 1800. L'endroit est également prisé des surfeurs pour ses grandes plages et ses écoles de surf. Le rocher de la Vierge, emblème de Biarritz, est un affleurement rocheux surmonté d'une statue de la Vierge Marie.",
    enfants: false,
    ambiance: "detente",

    environnement: "plage",

    budget: "cher",
  },
  {
    id: 6,
    img1: Gourette1,
    img2: Gourette2,
    img3: Gourette3,
    name: "Gourette",
    coordonnees: { lat: 42.95927408783069, lng: -0.3301367813182192 },
    description:
      "Gourette est une station de sports d'hiver des Pyrénées françaises, située, à 1 400 mètres d'altitude, dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Elle fait partie de la commune des Eaux-Bonnes.",
    enfants: true,
    ambiance: "detente",

    environnement: "montagne",
    budget: "cher",
  },
  {
    id: 7,
    img1: Agen1,
    img2: Agen2,
    img3: Agen3,
    name: "Agen",
    coordonnees: { lat: 44.203007881009015, lng: 0.615433540959982 },
    description:
      "Agen est une commune du Sud-Ouest de la France, préfecture du département de Lot-et-Garonne, en région Nouvelle-Aquitaine. Avec ses 32 602 habitants en 2019, elle est la 246ᵉ commune de France par sa population. La ville est le siège de l'agglomération d'Agen, structure intercommunale regroupant 101 365 habitants.",
    enfants: true,
    ambiance: "detente",
    environnement: "ville",

    budget: "abordable",
  },
  {
    id: 8,
    img1: Pau1,
    img2: Pau2,
    img3: Pau3,
    name: "Pau",
    coordonnees: { lat: 43.29552541671863, lng: -0.3704189380286433 },
    description:
      "Pau est une ville située dans le sud-ouest de la France, le long de l'arête nord des Pyrénées, à environ 85 km de la frontière espagnole. En arpentant le boulevard des Pyrénées, dans le centre-ville, les piétons pourront admirer la campagne et profiter d'un panorama sur les montagnes par temps clair. Le boulevard mène au château de Pau, lieu de naissance de Henri IV, roi de France et de Navarre. Il expose aujourd'hui des tapisseries, du mobilier et des œuvres d'art de l'époque.",
    enfants: true,
    ambiance: "detente",
    environnement: "montagne",

    budget: "abordable",
  },
  {
    id: 9,
    img1: Hostens1,
    img2: Hostens2,
    img3: Hostens3,
    name: "Hostens",
    coordonnees: { lat: 44.49336934645492, lng: -0.6389328256756519 },
    description:
      "Hostens est une commune du Sud-Ouest de la France, située dans le département de la Gironde, en région Nouvelle-Aquitaine.",
    enfants: true,
    ambiance: "detente",

    environnement: "foret",

    budget: "abordable",
  },
  {
    id: 10,
    img1: Laruns1,
    img2: Laruns2,
    img3: Laruns3,
    name: "Laruns",
    coordonnees: { lat: 42.99076945287421, lng: -0.42631291280662154 },
    description:
      "Laruns est une commune française, située dans le département des Pyrénées-Atlantiques en région Nouvelle-Aquitaine. Le gentilé est Larunsois.",
    enfants: true,
    ambiance: "detente",

    environnement: "montagne",

    budget: "abordable",
  },
];
