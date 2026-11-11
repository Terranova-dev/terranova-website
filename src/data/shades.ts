export type Shade = {
  id: string;
  name: string;
  code: string;
  family: string;
  finish: string;
  hex: string;
  texture: keyof typeof textures;
  blurb: string;
};

export const textures = {
  terrazzo: "/assets/shade-terrazzo.jpg",
  fine: "/assets/shade-microcement-fine.jpg",
  coarse: "/assets/shade-microcement-coarse.jpg",
  aggregate: "/assets/shade-aggregate.jpg",
};

export const shades: Shade[] = [
  {
    id: "sabbia",
    name: "Sabbia",
    code: "TN-01",
    family: "Terrazzo",
    finish: "Honed · Italian marble chip",
    hex: "#c9b393",
    texture: "terrazzo",
    blurb: "Honed terrazzo with Italian marble chip.",
  },
  {
    id: "avorio",
    name: "Avorio",
    code: "TN-02",
    family: "Microconcrete",
    finish: "Glassy · hand-trowelled",
    hex: "#e4dccb",
    texture: "fine",
    blurb: "Glassy microconcrete, finished by hand trowel.",
  },
  {
    id: "calcina",
    name: "Calcina",
    code: "TN-03",
    family: "Microconcrete",
    finish: "Natural · limewash tone",
    hex: "#d3c6ae",
    texture: "fine",
    blurb: "Natural microconcrete in a limewash tone.",
  },
  {
    id: "argilla",
    name: "Argilla",
    code: "TN-04",
    family: "Microconcrete",
    finish: "Textured · open grain",
    hex: "#b07e5f",
    texture: "coarse",
    blurb: "Textured microconcrete with an open grain.",
  },
  {
    id: "pietra",
    name: "Pietra",
    code: "TN-05",
    family: "Hydroblock",
    finish: "Site finished · breathable",
    hex: "#a29c90",
    texture: "coarse",
    blurb: "Breathable Hydroblock with a site-finished surface.",
  },
  {
    id: "cenere",
    name: "Cenere",
    code: "TN-06",
    family: "Microconcrete",
    finish: "Satin · fine trowel",
    hex: "#8e887c",
    texture: "fine",
    blurb: "Satin microconcrete with a fine-trowel finish.",
  },
  {
    id: "salvia",
    name: "Salvia",
    code: "TN-07",
    family: "Microconcrete",
    finish: "Natural · muted green",
    hex: "#97a188",
    texture: "coarse",
    blurb: "Natural microconcrete in a muted green tone.",
  },
  {
    id: "tortora",
    name: "Tortora",
    code: "TN-08",
    family: "Terrazzo",
    finish: "Honed · brown marble chip",
    hex: "#857057",
    texture: "terrazzo",
    blurb: "Honed terrazzo with brown marble chip.",
  },
  {
    id: "perla",
    name: "Perla",
    code: "TN-09",
    family: "Hydroblock",
    finish: "Pebble aggregate · breathable",
    hex: "#dad3c2",
    texture: "aggregate",
    blurb: "Breathable Hydroblock with pebble aggregate.",
  },
  {
    id: "noce",
    name: "Noce",
    code: "TN-10",
    family: "Rock",
    finish: "Mineral · waterproof plaster",
    hex: "#6d5a47",
    texture: "aggregate",
    blurb: "Mineral Rock with waterproof plaster finish.",
  },
  {
    id: "basalto",
    name: "Basalto",
    code: "TN-11",
    family: "Rock",
    finish: "Mineral · waterproof plaster",
    hex: "#4c4844",
    texture: "coarse",
    blurb: "Mineral Rock with waterproof plaster finish.",
  },
  {
    id: "antracite",
    name: "Antracite",
    code: "TN-12",
    family: "Microconcrete",
    finish: "Textured · matte",
    hex: "#2f2d2a",
    texture: "coarse",
    blurb: "Textured microconcrete with a matte finish.",
  },
];
