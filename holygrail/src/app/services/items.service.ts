import { Injectable } from '@angular/core';

export interface Item {
  id: number;
  found: boolean;
  name: string;
  group: number;
}

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  setGroups = Array.from({ length: 32 }, (_, i) => i + 10);
  uniqueGroups = [50];
  items = [{
    "id": 1,
    "found": false,
    "name": "El",
    "group": 1
  }, {
    "id": 2,
    "found": false,
    "name": "Eld",
    "group": 1
  }, {
    "id": 3,
    "found": false,
    "name": "Tir",
    "group": 1
  }, {
    "id": 4,
    "found": false,
    "name": "Nef",
    "group": 1
  }, {
    "id": 5,
    "found": false,
    "name": "Eth",
    "group": 1
  }, {
    "id": 6,
    "found": false,
    "name": "Ith",
    "group": 1
  }, {
    "id": 7,
    "found": false,
    "name": "Tal",
    "group": 1
  }, {
    "id": 8,
    "found": false,
    "name": "Ral",
    "group": 1
  }, {
    "id": 9,
    "found": false,
    "name": "Ort",
    "group": 1
  }, {
    "id": 10,
    "found": false,
    "name": "Thul",
    "group": 1
  }, {
    "id": 11,
    "found": false,
    "name": "Amn",
    "group": 1
  }, {
    "id": 12,
    "found": false,
    "name": "Sol",
    "group": 1
  }, {
    "id": 13,
    "found": false,
    "name": "Shael",
    "group": 1
  }, {
    "id": 14,
    "found": false,
    "name": "Dol",
    "group": 1
  }, {
    "id": 15,
    "found": false,
    "name": "Hel",
    "group": 1
  }, {
    "id": 16,
    "found": false,
    "name": "Io",
    "group": 1
  }, {
    "id": 17,
    "found": false,
    "name": "Lum",
    "group": 1
  }, {
    "id": 18,
    "found": false,
    "name": "Ko",
    "group": 1
  }, {
    "id": 19,
    "found": false,
    "name": "Fal",
    "group": 1
  }, {
    "id": 20,
    "found": false,
    "name": "Lem",
    "group": 1
  }, {
    "id": 21,
    "found": false,
    "name": "Pul",
    "group": 1
  }, {
    "id": 22,
    "found": false,
    "name": "Um",
    "group": 1
  }, {
    "id": 23,
    "found": false,
    "name": "Mal",
    "group": 1
  }, {
    "id": 24,
    "found": false,
    "name": "Ist",
    "group": 1
  }, {
    "id": 25,
    "found": false,
    "name": "Gul",
    "group": 1
  }, {
    "id": 26,
    "found": false,
    "name": "Vex",
    "group": 1
  }, {
    "id": 27,
    "found": false,
    "name": "Ohm",
    "group": 1
  }, {
    "id": 28,
    "found": false,
    "name": "Lo",
    "group": 1
  }, {
    "id": 29,
    "found": false,
    "name": "Sur",
    "group": 1
  }, {
    "id": 30,
    "found": false,
    "name": "Ber",
    "group": 1
  }, {
    "id": 31,
    "found": false,
    "name": "Jah",
    "group": 1
  }, {
    "id": 32,
    "found": false,
    "name": "Cham",
    "group": 1
  }, {
    "id": 33,
    "found": false,
    "name": "Zod",
    "group": 1
  }, {
    "id": 34,
    "found": false,
    "name": "Nadir",
    "group": 2
  }, {
    "id": 35,
    "found": false,
    "name": "Radiance",
    "group": 2
  }, {
    "id": 36,
    "found": false,
    "name": "Lore",
    "group": 2
  }, {
    "id": 37,
    "found": false,
    "name": "Wisdom",
    "group": 2
  }, {
    "id": 38,
    "found": false,
    "name": "Delirium",
    "group": 2
  }, {
    "id": 39,
    "found": false,
    "name": "Flickering Flame",
    "group": 2
  }, {
    "id": 40,
    "found": false,
    "name": "Dream",
    "group": 2
  }, {
    "id": 41,
    "found": false,
    "name": "Ferocity",
    "group": 2
  }, {
    "id": 42,
    "found": false,
    "name": "Stealth",
    "group": 2
  }, {
    "id": 43,
    "found": false,
    "name": "Peace",
    "group": 2
  }, {
    "id": 44,
    "found": false,
    "name": "Myth",
    "group": 2
  }, {
    "id": 45,
    "found": false,
    "name": "Smoke",
    "group": 2
  }, {
    "id": 46,
    "found": false,
    "name": "Hustle",
    "group": 2
  }, {
    "id": 47,
    "found": false,
    "name": "Lionheart",
    "group": 2
  }, {
    "id": 48,
    "found": false,
    "name": "Treachery",
    "group": 2
  }, {
    "id": 49,
    "found": false,
    "name": "Wealth",
    "group": 2
  }, {
    "id": 50,
    "found": false,
    "name": "Enlightenment",
    "group": 2
  }, {
    "id": 51,
    "found": false,
    "name": "Duress",
    "group": 2
  }, {
    "id": 52,
    "found": false,
    "name": "Stone",
    "group": 2
  }, {
    "id": 53,
    "found": false,
    "name": "Gloom",
    "group": 2
  }, {
    "id": 54,
    "found": false,
    "name": "Bone",
    "group": 2
  }, {
    "id": 55,
    "found": false,
    "name": "Prudence",
    "group": 2
  }, {
    "id": 56,
    "found": false,
    "name": "Rain",
    "group": 2
  }, {
    "id": 57,
    "found": false,
    "name": "Principle",
    "group": 2
  }, {
    "id": 58,
    "found": false,
    "name": "Fortitude",
    "group": 2
  }, {
    "id": 59,
    "found": false,
    "name": "Bramble",
    "group": 2
  }, {
    "id": 60,
    "found": false,
    "name": "Dragon",
    "group": 2
  }, {
    "id": 61,
    "found": false,
    "name": "Chains of Honor",
    "group": 2
  }, {
    "id": 62,
    "found": false,
    "name": "Enigma",
    "group": 2
  }, {
    "id": 63,
    "found": false,
    "name": "Innocence",
    "group": 2
  }, {
    "id": 64,
    "found": false,
    "name": "Ancient's Pledge",
    "group": 2
  }, {
    "id": 65,
    "found": false,
    "name": "Spirit",
    "group": 2
  }, {
    "id": 66,
    "found": false,
    "name": "Rhyme",
    "group": 2
  }, {
    "id": 67,
    "found": false,
    "name": "Splendor",
    "group": 2
  }, {
    "id": 68,
    "found": false,
    "name": "Sanctuary",
    "group": 2
  }, {
    "id": 69,
    "found": false,
    "name": "Exile",
    "group": 2
  }, {
    "id": 70,
    "found": false,
    "name": "Epiphany",
    "group": 2
  }, {
    "id": 71,
    "found": false,
    "name": "Phoenix",
    "group": 2
  }, {
    "id": 72,
    "found": false,
    "name": "Shattered Wall",
    "group": 2
  }, {
    "id": 73,
    "found": false,
    "name": "Steel",
    "group": 2
  }, {
    "id": 74,
    "found": false,
    "name": "Malice",
    "group": 2
  }, {
    "id": 75,
    "found": false,
    "name": "Leaf",
    "group": 2
  }, {
    "id": 76,
    "found": false,
    "name": "Pattern",
    "group": 2
  }, {
    "id": 77,
    "found": false,
    "name": "Zephyr",
    "group": 2
  }, {
    "id": 78,
    "found": false,
    "name": "Holy Thunder",
    "group": 2
  }, {
    "id": 79,
    "found": false,
    "name": "Neophyte",
    "group": 2
  }, {
    "id": 80,
    "found": false,
    "name": "Strength",
    "group": 2
  }, {
    "id": 81,
    "found": false,
    "name": "Edge",
    "group": 2
  }, {
    "id": 82,
    "found": false,
    "name": "King's Grace",
    "group": 2
  }, {
    "id": 83,
    "found": false,
    "name": "Purity",
    "group": 2
  }, {
    "id": 84,
    "found": false,
    "name": "Insight",
    "group": 2
  }, {
    "id": 85,
    "found": false,
    "name": "Honor",
    "group": 2
  }, {
    "id": 86,
    "found": false,
    "name": "Rampage",
    "group": 2
  }, {
    "id": 87,
    "found": false,
    "name": "Black",
    "group": 2
  }, {
    "id": 88,
    "found": false,
    "name": "White",
    "group": 2
  }, {
    "id": 89,
    "found": false,
    "name": "Memory",
    "group": 2
  }, {
    "id": 90,
    "found": false,
    "name": "Harmony",
    "group": 2
  }, {
    "id": 91,
    "found": false,
    "name": "Melody",
    "group": 2
  }, {
    "id": 92,
    "found": false,
    "name": "Unbending Will",
    "group": 2
  }, {
    "id": 93,
    "found": false,
    "name": "Obedience",
    "group": 2
  }, {
    "id": 94,
    "found": false,
    "name": "Passion",
    "group": 2
  }, {
    "id": 95,
    "found": false,
    "name": "Voice of Reason",
    "group": 2
  }, {
    "id": 96,
    "found": false,
    "name": "Lawbringer",
    "group": 2
  }, {
    "id": 97,
    "found": false,
    "name": "Loyalty",
    "group": 2
  }, {
    "id": 98,
    "found": false,
    "name": "Crescent Moon",
    "group": 2
  }, {
    "id": 99,
    "found": false,
    "name": "Venom",
    "group": 2
  }, {
    "id": 100,
    "found": false,
    "name": "Oath",
    "group": 2
  }, {
    "id": 101,
    "found": false,
    "name": "Rift",
    "group": 2
  }, {
    "id": 102,
    "found": false,
    "name": "Kingslayer",
    "group": 2
  }, {
    "id": 103,
    "found": false,
    "name": "Heart of the Oak",
    "group": 2
  }, {
    "id": 104,
    "found": false,
    "name": "Silence",
    "group": 2
  }, {
    "id": 105,
    "found": false,
    "name": "Death",
    "group": 2
  }, {
    "id": 106,
    "found": false,
    "name": "Chaos",
    "group": 2
  }, {
    "id": 107,
    "found": false,
    "name": "Call to Arms",
    "group": 2
  }, {
    "id": 108,
    "found": false,
    "name": "Grief",
    "group": 2
  }, {
    "id": 109,
    "found": false,
    "name": "Wind",
    "group": 2
  }, {
    "id": 110,
    "found": false,
    "name": "Wrath",
    "group": 2
  }, {
    "id": 111,
    "found": false,
    "name": "Beast",
    "group": 2
  }, {
    "id": 112,
    "found": false,
    "name": "Eternity",
    "group": 2
  }, {
    "id": 113,
    "found": false,
    "name": "Infinity",
    "group": 2
  }, {
    "id": 114,
    "found": false,
    "name": "Fury",
    "group": 2
  }, {
    "id": 115,
    "found": false,
    "name": "Famine",
    "group": 2
  }, {
    "id": 116,
    "found": false,
    "name": "Faith",
    "group": 2
  }, {
    "id": 117,
    "found": false,
    "name": "Ice",
    "group": 2
  }, {
    "id": 118,
    "found": false,
    "name": "Brand",
    "group": 2
  }, {
    "id": 119,
    "found": false,
    "name": "Destruction",
    "group": 2
  }, {
    "id": 120,
    "found": false,
    "name": "Last Wish",
    "group": 2
  }, {
    "id": 121,
    "found": false,
    "name": "Rapture",
    "group": 2
  }, {
    "id": 122,
    "found": false,
    "name": "Plague",
    "group": 2
  }, {
    "id": 123,
    "found": false,
    "name": "Mist",
    "group": 2
  }, {
    "id": 124,
    "found": false,
    "name": "Dominion",
    "group": 2
  }, {
    "id": 125,
    "found": false,
    "name": "Doom",
    "group": 2
  }, {
    "id": 126,
    "found": false,
    "name": "Hand of Justice",
    "group": 2
  }, {
    "id": 127,
    "found": false,
    "name": "Pride",
    "group": 2
  }, {
    "id": 128,
    "found": false,
    "name": "Asylum",
    "group": 2
  }, {
    "id": 129,
    "found": false,
    "name": "Obsession",
    "group": 2
  }, {
    "id": 130,
    "found": false,
    "name": "Breath of the Dying",
    "group": 2
  }, {
    "id": 131,
    "found": false,
    "name": "Zenith",
    "group": 2
  }, {
    "id": 132,
    "found": false,
    "name": "Arctic Furs",
    "group": 10
  }, {
    "id": 133,
    "found": false,
    "name": "Arctic Binding",
    "group": 10
  }, {
    "id": 134,
    "found": false,
    "name": "Arctic Mitts",
    "group": 10
  }, {
    "id": 135,
    "found": false,
    "name": "Arctic Horn",
    "group": 10
  }, {
    "id": 136,
    "found": false,
    "name": "Hsarus' Iron Heel",
    "group": 11
  }, {
    "id": 137,
    "found": false,
    "name": "Hsarus' Iron Stay",
    "group": 11
  }, {
    "id": 138,
    "found": false,
    "name": "Hsarus' Iron Fist",
    "group": 11
  }, {
    "id": 139,
    "found": false,
    "name": "Berserker's Headgear",
    "group": 12
  }, {
    "id": 140,
    "found": false,
    "name": "Berserker's Hauberk",
    "group": 12
  }, {
    "id": 141,
    "found": false,
    "name": "Berserker's Hatchet",
    "group": 12
  }, {
    "id": 142,
    "found": false,
    "name": "Cleglaw's Pincers",
    "group": 13
  }, {
    "id": 143,
    "found": false,
    "name": "Cleglaw's Claw",
    "group": 13
  }, {
    "id": 144,
    "found": false,
    "name": "Cleglaw's Tooth",
    "group": 13
  }, {
    "id": 145,
    "found": false,
    "name": "Infernal Cranium",
    "group": 14
  }, {
    "id": 146,
    "found": false,
    "name": "Infernal Sign",
    "group": 14
  }, {
    "id": 147,
    "found": false,
    "name": "Infernal Spire",
    "group": 14
  }, {
    "id": 148,
    "found": false,
    "name": "Death's Guard",
    "group": 15
  }, {
    "id": 149,
    "found": false,
    "name": "Death's Hand",
    "group": 15
  }, {
    "id": 150,
    "found": false,
    "name": "Death's Touch",
    "group": 15
  }, {
    "id": 151,
    "found": false,
    "name": "Sigon's Visor",
    "group": 16
  }, {
    "id": 152,
    "found": false,
    "name": "Sigon's Shelter",
    "group": 16
  }, {
    "id": 153,
    "found": false,
    "name": "Sigon's Sabot",
    "group": 16
  }, {
    "id": 154,
    "found": false,
    "name": "Sigon's Wrap",
    "group": 16
  }, {
    "id": 155,
    "found": false,
    "name": "Sigon's Gage",
    "group": 16
  }, {
    "id": 156,
    "found": false,
    "name": "Sigon's Guard",
    "group": 16
  }, {
    "id": 157,
    "found": false,
    "name": "Isenhart's Horns",
    "group": 17
  }, {
    "id": 158,
    "found": false,
    "name": "Isenhart's Case",
    "group": 17
  }, {
    "id": 159,
    "found": false,
    "name": "Isenhart's Parry",
    "group": 17
  }, {
    "id": 160,
    "found": false,
    "name": "Isenhart's Lightbrand",
    "group": 17
  }, {
    "id": 161,
    "found": false,
    "name": "Civerb's Ward",
    "group": 18
  }, {
    "id": 162,
    "found": false,
    "name": "Civerb's Cudgel",
    "group": 18
  }, {
    "id": 163,
    "found": false,
    "name": "Civerb's Icon",
    "group": 18
  }, {
    "id": 164,
    "found": false,
    "name": "Cathan's Visage",
    "group": 19
  }, {
    "id": 165,
    "found": false,
    "name": "Cathan's Mesh",
    "group": 19
  }, {
    "id": 166,
    "found": false,
    "name": "Cathan's Rule",
    "group": 19
  }, {
    "id": 167,
    "found": false,
    "name": "Cathan's Sigil",
    "group": 19
  }, {
    "id": 168,
    "found": false,
    "name": "Cathan's Seal",
    "group": 19
  }, {
    "id": 169,
    "found": false,
    "name": "Angelic Mantle",
    "group": 20
  }, {
    "id": 170,
    "found": false,
    "name": "Angelic Sickle",
    "group": 20
  }, {
    "id": 171,
    "found": false,
    "name": "Angelic Wings",
    "group": 20
  }, {
    "id": 172,
    "found": false,
    "name": "Angelic Halo",
    "group": 20
  }, {
    "id": 173,
    "found": false,
    "name": "Vidala's Ambush",
    "group": 21
  }, {
    "id": 174,
    "found": false,
    "name": "Vidala's Fetlock",
    "group": 21
  }, {
    "id": 175,
    "found": false,
    "name": "Vidala's Barb",
    "group": 21
  }, {
    "id": 176,
    "found": false,
    "name": "Vidala's Snare",
    "group": 21
  }, {
    "id": 177,
    "found": false,
    "name": "Arcanna's Head",
    "group": 22
  }, {
    "id": 178,
    "found": false,
    "name": "Arcanna's Flesh",
    "group": 22
  }, {
    "id": 179,
    "found": false,
    "name": "Arcanna's Deathwand",
    "group": 22
  }, {
    "id": 180,
    "found": false,
    "name": "Arcanna's Sign",
    "group": 22
  }, {
    "id": 181,
    "found": false,
    "name": "Iratha's Coil",
    "group": 23
  }, {
    "id": 182,
    "found": false,
    "name": "Iratha's Cord",
    "group": 23
  }, {
    "id": 183,
    "found": false,
    "name": "Iratha's Cuff",
    "group": 23
  }, {
    "id": 184,
    "found": false,
    "name": "Iratha's Collar",
    "group": 23
  }, {
    "id": 185,
    "found": false,
    "name": "Milabrega's Diadem",
    "group": 24
  }, {
    "id": 186,
    "found": false,
    "name": "Milabrega's Robe",
    "group": 24
  }, {
    "id": 187,
    "found": false,
    "name": "Milabrega's Orb",
    "group": 24
  }, {
    "id": 188,
    "found": false,
    "name": "Milabrega's Rod",
    "group": 24
  }, {
    "id": 189,
    "found": false,
    "name": "Tancred's Skull",
    "group": 25
  }, {
    "id": 190,
    "found": false,
    "name": "Tancred's Spine",
    "group": 25
  }, {
    "id": 191,
    "found": false,
    "name": "Tancred's Hobnails",
    "group": 25
  }, {
    "id": 192,
    "found": false,
    "name": "Tancred's Crowbill",
    "group": 25
  }, {
    "id": 193,
    "found": false,
    "name": "Tancred's Weird",
    "group": 25
  }, {
    "id": 194,
    "found": false,
    "name": "Cow King's Horns",
    "group": 26
  }, {
    "id": 195,
    "found": false,
    "name": "Cow King's Hide",
    "group": 26
  }, {
    "id": 196,
    "found": false,
    "name": "Cow King's Hooves",
    "group": 26
  }, {
    "id": 197,
    "found": false,
    "name": "Sander's Paragon",
    "group": 27
  }, {
    "id": 198,
    "found": false,
    "name": "Sander's Riprap",
    "group": 27
  }, {
    "id": 199,
    "found": false,
    "name": "Sander's Taboo",
    "group": 27
  }, {
    "id": 200,
    "found": false,
    "name": "Sander's Superstition",
    "group": 27
  }, {
    "id": 201,
    "found": false,
    "name": "Hwanin's Splendor",
    "group": 28
  }, {
    "id": 202,
    "found": false,
    "name": "Hwanin's Refuge",
    "group": 28
  }, {
    "id": 203,
    "found": false,
    "name": "Hwanin's Blessing",
    "group": 28
  }, {
    "id": 204,
    "found": false,
    "name": "Hwanin's Justice",
    "group": 28
  }, {
    "id": 205,
    "found": false,
    "name": "Guillaume's Face",
    "group": 29
  }, {
    "id": 206,
    "found": false,
    "name": "Wilhelm's Pride",
    "group": 29
  }, {
    "id": 207,
    "found": false,
    "name": "Magnus' Skin",
    "group": 29
  }, {
    "id": 208,
    "found": false,
    "name": "Whitstan's Guard",
    "group": 29
  }, {
    "id": 209,
    "found": false,
    "name": "Dark Adherent",
    "group": 30
  }, {
    "id": 210,
    "found": false,
    "name": "Rite of Passage",
    "group": 30
  }, {
    "id": 211,
    "found": false,
    "name": "Credendum",
    "group": 30
  }, {
    "id": 212,
    "found": false,
    "name": "Laying of Hands",
    "group": 30
  }, {
    "id": 213,
    "found": false,
    "name": "Telling of Beads",
    "group": 30
  }, {
    "id": 214,
    "found": false,
    "name": "Naj's Circlet",
    "group": 31
  }, {
    "id": 215,
    "found": false,
    "name": "Naj's Light Plate",
    "group": 31
  }, {
    "id": 216,
    "found": false,
    "name": "Naj's Puzzler",
    "group": 31
  }, {
    "id": 217,
    "found": false,
    "name": "Sazabi's Mental Sheath",
    "group": 32
  }, {
    "id": 218,
    "found": false,
    "name": "Sazabi's Ghost Liberator",
    "group": 32
  }, {
    "id": 219,
    "found": false,
    "name": "Sazabi's Cobalt Redeemer",
    "group": 32
  }, {
    "id": 220,
    "found": false,
    "name": "Ondal's Almighty",
    "group": 33
  }, {
    "id": 221,
    "found": false,
    "name": "Haemosu's Adamant",
    "group": 33
  }, {
    "id": 222,
    "found": false,
    "name": "Taebaek's Glory",
    "group": 33
  }, {
    "id": 223,
    "found": false,
    "name": "Dangoon's Teaching",
    "group": 33
  }, {
    "id": 224,
    "found": false,
    "name": "Bul-Kathos' Death Band",
    "group": 34
  }, {
    "id": 225,
    "found": false,
    "name": "Bul-Kathos' Tribal Guardian",
    "group": 34
  }, {
    "id": 226,
    "found": false,
    "name": "Bul-Kathos' Sacred Charge",
    "group": 34
  }, {
    "id": 227,
    "found": false,
    "name": "Aldur's Stony Gaze",
    "group": 35
  }, {
    "id": 228,
    "found": false,
    "name": "Aldur's Deception",
    "group": 35
  }, {
    "id": 229,
    "found": false,
    "name": "Aldur's Advance",
    "group": 35
  }, {
    "id": 230,
    "found": false,
    "name": "Aldur's Rhythm",
    "group": 35
  }, {
    "id": 231,
    "found": false,
    "name": "Griswold's Valor",
    "group": 36
  }, {
    "id": 232,
    "found": false,
    "name": "Griswold's Heart",
    "group": 36
  }, {
    "id": 233,
    "found": false,
    "name": "Griswold's Honor",
    "group": 36
  }, {
    "id": 234,
    "found": false,
    "name": "Griswold's Redemption",
    "group": 36
  }, {
    "id": 235,
    "found": false,
    "name": "Immortal King's Will",
    "group": 37
  }, {
    "id": 236,
    "found": false,
    "name": "Immortal King's Soul Cage",
    "group": 37
  }, {
    "id": 237,
    "found": false,
    "name": "Immortal King's Pillar",
    "group": 37
  }, {
    "id": 238,
    "found": false,
    "name": "Immortal King's Detail",
    "group": 37
  }, {
    "id": 239,
    "found": false,
    "name": "Immortal King's Forge",
    "group": 37
  }, {
    "id": 240,
    "found": false,
    "name": "Immortal King's Stone Crusher",
    "group": 37
  }, {
    "id": 241,
    "found": false,
    "name": "M'avina's True Sight",
    "group": 38
  }, {
    "id": 242,
    "found": false,
    "name": "M'avina's Embrace",
    "group": 38
  }, {
    "id": 243,
    "found": false,
    "name": "M'avina's Tenet",
    "group": 38
  }, {
    "id": 244,
    "found": false,
    "name": "M'avina's Icy Clutch",
    "group": 38
  }, {
    "id": 245,
    "found": false,
    "name": "M'avina's Caster",
    "group": 38
  }, {
    "id": 246,
    "found": false,
    "name": "Natalya's Totem",
    "group": 39
  }, {
    "id": 247,
    "found": false,
    "name": "Natalya's Shadow",
    "group": 39
  }, {
    "id": 248,
    "found": false,
    "name": "Natalya's Soul",
    "group": 39
  }, {
    "id": 249,
    "found": false,
    "name": "Natalya's Mark",
    "group": 39
  }, {
    "id": 250,
    "found": false,
    "name": "Tal Rasha's Horadric Crest",
    "group": 40
  }, {
    "id": 251,
    "found": false,
    "name": "Tal Rasha's Guardianship",
    "group": 40
  }, {
    "id": 252,
    "found": false,
    "name": "Tal Rasha's Fine-Spun Cloth",
    "group": 40
  }, {
    "id": 253,
    "found": false,
    "name": "Tal Rasha's Lidless Eye",
    "group": 40
  }, {
    "id": 254,
    "found": false,
    "name": "Tal Rasha's Adjudication",
    "group": 40
  }, {
    "id": 255,
    "found": false,
    "name": "Trang-Oul's Guise",
    "group": 41
  }, {
    "id": 256,
    "found": false,
    "name": "Trang-Oul's Scales",
    "group": 41
  }, {
    "id": 257,
    "found": false,
    "name": "Trang-Oul's Girth",
    "group": 41
  }, {
    "id": 258,
    "found": false,
    "name": "Trang-Oul's Claws",
    "group": 41
  }, {
    "id": 259,
    "found": false,
    "name": "Trang-Oul's Wing",
    "group": 41
  }, {
    "id": 260,
    "found": false,
    "name": "The Gnasher",
    "group": 50
  }, {
    "id": 261,
    "found": false,
    "name": "Deathspade",
    "group": 50
  }, {
    "id": 262,
    "found": false,
    "name": "Bladebone",
    "group": 50
  }, {
    "id": 263,
    "found": false,
    "name": "Skull Splitter",
    "group": 50
  }, {
    "id": 264,
    "found": false,
    "name": "Rakescar",
    "group": 50
  }, {
    "id": 265,
    "found": false,
    "name": "Axe of Fechmar",
    "group": 50
  }, {
    "id": 266,
    "found": false,
    "name": "Goreshovel",
    "group": 50
  }, {
    "id": 267,
    "found": false,
    "name": "The Chieftain",
    "group": 50
  }, {
    "id": 268,
    "found": false,
    "name": "Brainhew",
    "group": 50
  }, {
    "id": 269,
    "found": false,
    "name": "Humongous",
    "group": 50
  }, {
    "id": 270,
    "found": false,
    "name": "Coldkill",
    "group": 50
  }, {
    "id": 271,
    "found": false,
    "name": "Butcher's Pupil",
    "group": 50
  }, {
    "id": 272,
    "found": false,
    "name": "Islestrike",
    "group": 50
  }, {
    "id": 273,
    "found": false,
    "name": "Pompeii's Wrath",
    "group": 50
  }, {
    "id": 274,
    "found": false,
    "name": "Guardian Naga",
    "group": 50
  }, {
    "id": 275,
    "found": false,
    "name": "Warlord's Trust",
    "group": 50
  }, {
    "id": 276,
    "found": false,
    "name": "Spellsteel",
    "group": 50
  }, {
    "id": 277,
    "found": false,
    "name": "Stormrider",
    "group": 50
  }, {
    "id": 278,
    "found": false,
    "name": "Boneslayer Blade",
    "group": 50
  }, {
    "id": 279,
    "found": false,
    "name": "The Minotaur",
    "group": 50
  }, {
    "id": 280,
    "found": false,
    "name": "Razor's Edge",
    "group": 50
  }, {
    "id": 281,
    "found": false,
    "name": "Rune Master",
    "group": 50
  }, {
    "id": 282,
    "found": false,
    "name": "Cranebeak",
    "group": 50
  }, {
    "id": 283,
    "found": false,
    "name": "Death Cleaver",
    "group": 50
  }, {
    "id": 284,
    "found": false,
    "name": "Ethereal Edge",
    "group": 50
  }, {
    "id": 285,
    "found": false,
    "name": "Hellslayer",
    "group": 50
  }, {
    "id": 286,
    "found": false,
    "name": "Messerschmidt's Reaver",
    "group": 50
  }, {
    "id": 287,
    "found": false,
    "name": "Executioner's Justice",
    "group": 50
  }, {
    "id": 288,
    "found": false,
    "name": "Felloak",
    "group": 50
  }, {
    "id": 289,
    "found": false,
    "name": "Stoutnail",
    "group": 50
  }, {
    "id": 290,
    "found": false,
    "name": "Crushflange",
    "group": 50
  }, {
    "id": 291,
    "found": false,
    "name": "Bloodrise",
    "group": 50
  }, {
    "id": 292,
    "found": false,
    "name": "The General's Tan Do Li Ga",
    "group": 50
  }, {
    "id": 293,
    "found": false,
    "name": "Ironstone",
    "group": 50
  }, {
    "id": 294,
    "found": false,
    "name": "Bonesnap",
    "group": 50
  }, {
    "id": 295,
    "found": false,
    "name": "Steeldriver",
    "group": 50
  }, {
    "id": 296,
    "found": false,
    "name": "Dark Clan Crusher",
    "group": 50
  }, {
    "id": 297,
    "found": false,
    "name": "Fleshrender",
    "group": 50
  }, {
    "id": 298,
    "found": false,
    "name": "Sureshrill Frost",
    "group": 50
  }, {
    "id": 299,
    "found": false,
    "name": "Moonfall",
    "group": 50
  }, {
    "id": 301,
    "found": false,
    "name": "Baezil's Vortex",
    "group": 50
  }, {
    "id": 302,
    "found": false,
    "name": "Earthshaker",
    "group": 50
  }, {
    "id": 303,
    "found": false,
    "name": "Bloodtree Stump",
    "group": 50
  }, {
    "id": 304,
    "found": false,
    "name": "The Gavel of Pain",
    "group": 50
  }, {
    "id": 305,
    "found": false,
    "name": "Nord's Tenderizer",
    "group": 50
  }, {
    "id": 306,
    "found": false,
    "name": "Demon Limb",
    "group": 50
  }, {
    "id": 307,
    "found": false,
    "name": "Baranar's Star",
    "group": 50
  }, {
    "id": 308,
    "found": false,
    "name": "Horizon's Tornado",
    "group": 50
  }, {
    "id": 309,
    "found": false,
    "name": "Stormlash",
    "group": 50
  }, {
    "id": 310,
    "found": false,
    "name": "Stone Crusher",
    "group": 50
  }, {
    "id": 311,
    "found": false,
    "name": "Schaefer's Hammer",
    "group": 50
  }, {
    "id": 312,
    "found": false,
    "name": "Windhammer",
    "group": 50
  }, {
    "id": 313,
    "found": false,
    "name": "Earth Shifter",
    "group": 50
  }, {
    "id": 314,
    "found": false,
    "name": "The Cranium Basher",
    "group": 50
  }, {
    "id": 315,
    "found": false,
    "name": "Horadric Malus",
    "group": 50
  }, {
    "id": 316,
    "found": false,
    "name": "Khalim's Flail",
    "group": 50
  }, {
    "id": 317,
    "found": false,
    "name": "Khalim's Will",
    "group": 50
  }, {
    "id": 318,
    "found": false,
    "name": "Hell Forge Hammer",
    "group": 50
  }, {
    "id": 319,
    "found": false,
    "name": "Rixot's Keen",
    "group": 50
  }, {
    "id": 320,
    "found": false,
    "name": "Blood Crescent",
    "group": 50
  }, {
    "id": 321,
    "found": false,
    "name": "Skewer of Krintiz",
    "group": 50
  }, {
    "id": 322,
    "found": false,
    "name": "Gleamscythe",
    "group": 50
  }, {
    "id": 323,
    "found": false,
    "name": "Griswold's Edge",
    "group": 50
  }, {
    "id": 324,
    "found": false,
    "name": "Hellplague",
    "group": 50
  }, {
    "id": 325,
    "found": false,
    "name": "Culwen's Point",
    "group": 50
  }, {
    "id": 326,
    "found": false,
    "name": "Shadowfang",
    "group": 50
  }, {
    "id": 327,
    "found": false,
    "name": "Soulflay",
    "group": 50
  }, {
    "id": 328,
    "found": false,
    "name": "Kinemil's Awl",
    "group": 50
  }, {
    "id": 329,
    "found": false,
    "name": "Blacktongue",
    "group": 50
  }, {
    "id": 330,
    "found": false,
    "name": "Ripsaw",
    "group": 50
  }, {
    "id": 331,
    "found": false,
    "name": "The Patriarch",
    "group": 50
  }, {
    "id": 332,
    "found": false,
    "name": "Bloodletter",
    "group": 50
  }, {
    "id": 333,
    "found": false,
    "name": "Coldsteel Eye",
    "group": 50
  }, {
    "id": 334,
    "found": false,
    "name": "Hexfire",
    "group": 50
  }, {
    "id": 335,
    "found": false,
    "name": "Blade of Ali Baba",
    "group": 50
  }, {
    "id": 336,
    "found": false,
    "name": "Ginther's Rift",
    "group": 50
  }, {
    "id": 337,
    "found": false,
    "name": "Headstriker",
    "group": 50
  }, {
    "id": 338,
    "found": false,
    "name": "Plague Bearer",
    "group": 50
  }, {
    "id": 339,
    "found": false,
    "name": "The Atlantean",
    "group": 50
  }, {
    "id": 340,
    "found": false,
    "name": "Crainte Vomir",
    "group": 50
  }, {
    "id": 341,
    "found": false,
    "name": "Bing Sz Wang",
    "group": 50
  }, {
    "id": 342,
    "found": false,
    "name": "The Vile Husk",
    "group": 50
  }, {
    "id": 343,
    "found": false,
    "name": "Cloudcrack",
    "group": 50
  }, {
    "id": 344,
    "found": false,
    "name": "Todesfaelle Flamme",
    "group": 50
  }, {
    "id": 345,
    "found": false,
    "name": "Swordguard",
    "group": 50
  }, {
    "id": 346,
    "found": false,
    "name": "Djinn Slayer",
    "group": 50
  }, {
    "id": 347,
    "found": false,
    "name": "Bloodmoon",
    "group": 50
  }, {
    "id": 348,
    "found": false,
    "name": "Lightsabre",
    "group": 50
  }, {
    "id": 349,
    "found": false,
    "name": "Azurewrath",
    "group": 50
  }, {
    "id": 350,
    "found": false,
    "name": "Frostwind",
    "group": 50
  }, {
    "id": 351,
    "found": false,
    "name": "Hadriel's Hand",
    "group": 50
  }, {
    "id": 352,
    "found": false,
    "name": "Leoric's Mithril Bane",
    "group": 50
  }, {
    "id": 353,
    "found": false,
    "name": "Flamebellow",
    "group": 50
  }, {
    "id": 354,
    "found": false,
    "name": "Doombringer",
    "group": 50
  }, {
    "id": 355,
    "found": false,
    "name": "Odium",
    "group": 50
  }, {
    "id": 356,
    "found": false,
    "name": "The Grandfather",
    "group": 50
  }, {
    "id": 357,
    "found": false,
    "name": "Gull",
    "group": 50
  }, {
    "id": 358,
    "found": false,
    "name": "The Diggler",
    "group": 50
  }, {
    "id": 359,
    "found": false,
    "name": "The Jade Tan Do",
    "group": 50
  }, {
    "id": 360,
    "found": false,
    "name": "Spectral Shard",
    "group": 50
  }, {
    "id": 361,
    "found": false,
    "name": "Spineripper",
    "group": 50
  }, {
    "id": 362,
    "found": false,
    "name": "Heart Carver",
    "group": 50
  }, {
    "id": 363,
    "found": false,
    "name": "Blackbog's Sharp",
    "group": 50
  }, {
    "id": 364,
    "found": false,
    "name": "Stormspike",
    "group": 50
  }, {
    "id": 365,
    "found": false,
    "name": "Wizardspike",
    "group": 50
  }, {
    "id": 366,
    "found": false,
    "name": "Shatterblade",
    "group": 50
  }, {
    "id": 367,
    "found": false,
    "name": "Fleshripper",
    "group": 50
  }, {
    "id": 368,
    "found": false,
    "name": "Ghostflame",
    "group": 50
  }, {
    "id": 369,
    "found": false,
    "name": "The Gidbinn",
    "group": 50
  }, {
    "id": 370,
    "found": false,
    "name": "Deathbit",
    "group": 50
  }, {
    "id": 371,
    "found": false,
    "name": "The Scalper",
    "group": 50
  }, {
    "id": 372,
    "found": false,
    "name": "Achilles Strike",
    "group": 50
  }, {
    "id": 373,
    "found": false,
    "name": "Gimmershred",
    "group": 50
  }, {
    "id": 374,
    "found": false,
    "name": "Warshrike",
    "group": 50
  }, {
    "id": 375,
    "found": false,
    "name": "Lacerator",
    "group": 50
  }, {
    "id": 376,
    "found": false,
    "name": "Demon's Arch",
    "group": 50
  }, {
    "id": 377,
    "found": false,
    "name": "Wraith Flight",
    "group": 50
  }, {
    "id": 378,
    "found": false,
    "name": "Gargoyle's Bite",
    "group": 50
  }, {
    "id": 379,
    "found": false,
    "name": "The Dragon Chang",
    "group": 50
  }, {
    "id": 380,
    "found": false,
    "name": "Razortine",
    "group": 50
  }, {
    "id": 381,
    "found": false,
    "name": "Bloodthief",
    "group": 50
  }, {
    "id": 382,
    "found": false,
    "name": "Lance of Yaggai",
    "group": 50
  }, {
    "id": 383,
    "found": false,
    "name": "The Tannr Gorerod",
    "group": 50
  }, {
    "id": 384,
    "found": false,
    "name": "The Impaler",
    "group": 50
  }, {
    "id": 385,
    "found": false,
    "name": "Kelpie Snare",
    "group": 50
  }, {
    "id": 386,
    "found": false,
    "name": "Soulfeast Tine",
    "group": 50
  }, {
    "id": 387,
    "found": false,
    "name": "Hone Sundan",
    "group": 50
  }, {
    "id": 388,
    "found": false,
    "name": "Spire of Honor",
    "group": 50
  }, {
    "id": 389,
    "found": false,
    "name": "Arioc's Needle",
    "group": 50
  }, {
    "id": 390,
    "found": false,
    "name": "Viperfork",
    "group": 50
  }, {
    "id": 391,
    "found": false,
    "name": "Uldyssian's Awakening",
    "group": 50
  }, {
    "id": 392,
    "found": false,
    "name": "Steel Pillar",
    "group": 50
  }, {
    "id": 393,
    "found": false,
    "name": "Dimoak's Hew",
    "group": 50
  }, {
    "id": 394,
    "found": false,
    "name": "Steelgoad",
    "group": 50
  }, {
    "id": 395,
    "found": false,
    "name": "Soul Harvest",
    "group": 50
  }, {
    "id": 396,
    "found": false,
    "name": "The Battlebranch",
    "group": 50
  }, {
    "id": 397,
    "found": false,
    "name": "Woestave",
    "group": 50
  }, {
    "id": 398,
    "found": false,
    "name": "The Grim Reaper",
    "group": 50
  }, {
    "id": 399,
    "found": false,
    "name": "The Meat Scraper",
    "group": 50
  }, {
    "id": 400,
    "found": false,
    "name": "Blackleach Blade",
    "group": 50
  }, {
    "id": 401,
    "found": false,
    "name": "Athena's Wrath",
    "group": 50
  }, {
    "id": 402,
    "found": false,
    "name": "Pierre Tombale Couant",
    "group": 50
  }, {
    "id": 403,
    "found": false,
    "name": "Husoldal Evo",
    "group": 50
  }, {
    "id": 404,
    "found": false,
    "name": "Grim's Burning Dead",
    "group": 50
  }, {
    "id": 405,
    "found": false,
    "name": "Bonehew",
    "group": 50
  }, {
    "id": 406,
    "found": false,
    "name": "The Reaper's Toll",
    "group": 50
  }, {
    "id": 407,
    "found": false,
    "name": "Tomb Reaver",
    "group": 50
  }, {
    "id": 408,
    "found": false,
    "name": "Stormspire",
    "group": 50
  }, {
    "id": 409,
    "found": false,
    "name": "Pluckeye",
    "group": 50
  }, {
    "id": 410,
    "found": false,
    "name": "Witherstring",
    "group": 50
  }, {
    "id": 411,
    "found": false,
    "name": "Raven Claw",
    "group": 50
  }, {
    "id": 412,
    "found": false,
    "name": "Rogue's Bow",
    "group": 50
  }, {
    "id": 413,
    "found": false,
    "name": "Stormstrike",
    "group": 50
  }, {
    "id": 414,
    "found": false,
    "name": "Wizendraw",
    "group": 50
  }, {
    "id": 415,
    "found": false,
    "name": "Hellclap",
    "group": 50
  }, {
    "id": 416,
    "found": false,
    "name": "Blastbark",
    "group": 50
  }, {
    "id": 417,
    "found": false,
    "name": "Skystrike",
    "group": 50
  }, {
    "id": 418,
    "found": false,
    "name": "Riphook",
    "group": 50
  }, {
    "id": 419,
    "found": false,
    "name": "Kuko Shakaku",
    "group": 50
  }, {
    "id": 420,
    "found": false,
    "name": "Endlesshail",
    "group": 50
  }, {
    "id": 421,
    "found": false,
    "name": "Witchwild String",
    "group": 50
  }, {
    "id": 422,
    "found": false,
    "name": "Cliffkiller",
    "group": 50
  }, {
    "id": 423,
    "found": false,
    "name": "Magewrath",
    "group": 50
  }, {
    "id": 424,
    "found": false,
    "name": "Goldstrike Arch",
    "group": 50
  }, {
    "id": 425,
    "found": false,
    "name": "Eaglehorn",
    "group": 50
  }, {
    "id": 426,
    "found": false,
    "name": "Widowmaker",
    "group": 50
  }, {
    "id": 427,
    "found": false,
    "name": "Windforce",
    "group": 50
  }, {
    "id": 428,
    "found": false,
    "name": "Leadcrow",
    "group": 50
  }, {
    "id": 429,
    "found": false,
    "name": "Ichorsting",
    "group": 50
  }, {
    "id": 430,
    "found": false,
    "name": "Hellcast",
    "group": 50
  }, {
    "id": 431,
    "found": false,
    "name": "Doomslinger",
    "group": 50
  }, {
    "id": 432,
    "found": false,
    "name": "Langer Briser",
    "group": 50
  }, {
    "id": 433,
    "found": false,
    "name": "Pus Spitter",
    "group": 50
  }, {
    "id": 434,
    "found": false,
    "name": "Buriza-Do Kyanon",
    "group": 50
  }, {
    "id": 435,
    "found": false,
    "name": "Demon Machine",
    "group": 50
  }, {
    "id": 436,
    "found": false,
    "name": "Gut Siphon",
    "group": 50
  }, {
    "id": 437,
    "found": false,
    "name": "Hellrack",
    "group": 50
  }, {
    "id": 438,
    "found": false,
    "name": "Knell Striker",
    "group": 50
  }, {
    "id": 439,
    "found": false,
    "name": "Rusthandle",
    "group": 50
  }, {
    "id": 440,
    "found": false,
    "name": "Stormeye",
    "group": 50
  }, {
    "id": 441,
    "found": false,
    "name": "Zakarum's Hand",
    "group": 50
  }, {
    "id": 442,
    "found": false,
    "name": "The Fetid Sprinkler",
    "group": 50
  }, {
    "id": 443,
    "found": false,
    "name": "Hand of Blessed Light",
    "group": 50
  }, {
    "id": 444,
    "found": false,
    "name": "Heaven's Light",
    "group": 50
  }, {
    "id": 445,
    "found": false,
    "name": "The Redeemer",
    "group": 50
  }, {
    "id": 446,
    "found": false,
    "name": "Akarat's Devotion",
    "group": 50
  }, {
    "id": 447,
    "found": false,
    "name": "Astreon's Iron Ward",
    "group": 50
  }, {
    "id": 448,
    "found": false,
    "name": "Bane Ash",
    "group": 50
  }, {
    "id": 449,
    "found": false,
    "name": "Serpent Lord",
    "group": 50
  }, {
    "id": 450,
    "found": false,
    "name": "Spire of Lazarus",
    "group": 50
  }, {
    "id": 451,
    "found": false,
    "name": "The Salamander",
    "group": 50
  }, {
    "id": 452,
    "found": false,
    "name": "The Iron Jang Bong",
    "group": 50
  }, {
    "id": 453,
    "found": false,
    "name": "Razorswitch",
    "group": 50
  }, {
    "id": 454,
    "found": false,
    "name": "Ribcracker",
    "group": 50
  }, {
    "id": 455,
    "found": false,
    "name": "Chromatic Ire",
    "group": 50
  }, {
    "id": 456,
    "found": false,
    "name": "Warpspear",
    "group": 50
  }, {
    "id": 457,
    "found": false,
    "name": "Skull Collector",
    "group": 50
  }, {
    "id": 458,
    "found": false,
    "name": "Brimstone Rain",
    "group": 50
  }, {
    "id": 459,
    "found": false,
    "name": "Ondal's Wisdom",
    "group": 50
  }, {
    "id": 460,
    "found": false,
    "name": "Mang Song's Lesson",
    "group": 50
  }, {
    "id": 461,
    "found": false,
    "name": "Staff of Kings",
    "group": 50
  }, {
    "id": 462,
    "found": false,
    "name": "Horadric Staff",
    "group": 50
  }, {
    "id": 463,
    "found": false,
    "name": "Torch of Iro",
    "group": 50
  }, {
    "id": 464,
    "found": false,
    "name": "Maelstrom",
    "group": 50
  }, {
    "id": 465,
    "found": false,
    "name": "Gravenspine",
    "group": 50
  }, {
    "id": 466,
    "found": false,
    "name": "Ume's Lament",
    "group": 50
  }, {
    "id": 467,
    "found": false,
    "name": "Suicide Branch",
    "group": 50
  }, {
    "id": 468,
    "found": false,
    "name": "Carin Shard",
    "group": 50
  }, {
    "id": 469,
    "found": false,
    "name": "Arm of King Leoric",
    "group": 50
  }, {
    "id": 470,
    "found": false,
    "name": "Blackhand Key",
    "group": 50
  }, {
    "id": 471,
    "found": false,
    "name": "Boneshade",
    "group": 50
  }, {
    "id": 472,
    "found": false,
    "name": "Death's Web",
    "group": 50
  }, {
    "id": 473,
    "found": false,
    "name": "Mage Slayer",
    "group": 50
  }, {
    "id": 474,
    "found": false,
    "name": "Bartuc's Cut-Throat",
    "group": 50
  }, {
    "id": 475,
    "found": false,
    "name": "Stalker's Cull",
    "group": 50
  }, {
    "id": 476,
    "found": false,
    "name": "Jade Talon",
    "group": 50
  }, {
    "id": 477,
    "found": false,
    "name": "Firelizard's Talons",
    "group": 50
  }, {
    "id": 478,
    "found": false,
    "name": "Shadow Killer",
    "group": 50
  }, {
    "id": 479,
    "found": false,
    "name": "Whispering Mirage",
    "group": 50
  }, {
    "id": 480,
    "found": false,
    "name": "Aidan's Scar",
    "group": 50
  }, {
    "id": 481,
    "found": false,
    "name": "Tempest",
    "group": 50
  }, {
    "id": 482,
    "found": false,
    "name": "Skorn",
    "group": 50
  }, {
    "id": 483,
    "found": false,
    "name": "The Oculus",
    "group": 50
  }, {
    "id": 484,
    "found": false,
    "name": "Eschuta's Temper",
    "group": 50
  }, {
    "id": 485,
    "found": false,
    "name": "Death's Fathom",
    "group": 50
  }, {
    "id": 486,
    "found": false,
    "name": "Armageddon's Blade",
    "group": 50
  }, {
    "id": 487,
    "found": false,
    "name": "Biggin's Bonnet",
    "group": 50
  }, {
    "id": 488,
    "found": false,
    "name": "Tarnhelm",
    "group": 50
  }, {
    "id": 489,
    "found": false,
    "name": "Coif of Glory",
    "group": 50
  }, {
    "id": 490,
    "found": false,
    "name": "Duskdeep",
    "group": 50
  }, {
    "id": 491,
    "found": false,
    "name": "The Face of Horror",
    "group": 50
  }, {
    "id": 492,
    "found": false,
    "name": "Wormskull",
    "group": 50
  }, {
    "id": 493,
    "found": false,
    "name": "Howltusk",
    "group": 50
  }, {
    "id": 494,
    "found": false,
    "name": "Undead Crown",
    "group": 50
  }, {
    "id": 495,
    "found": false,
    "name": "Peasant Crown",
    "group": 50
  }, {
    "id": 496,
    "found": false,
    "name": "Rockstopper",
    "group": 50
  }, {
    "id": 497,
    "found": false,
    "name": "Stealskull",
    "group": 50
  }, {
    "id": 498,
    "found": false,
    "name": "Darksight Helm",
    "group": 50
  }, {
    "id": 499,
    "found": false,
    "name": "Blackhorn's Face",
    "group": 50
  }, {
    "id": 500,
    "found": false,
    "name": "Vampire Gaze",
    "group": 50
  }, {
    "id": 501,
    "found": false,
    "name": "Valkyrie Wing",
    "group": 50
  }, {
    "id": 502,
    "found": false,
    "name": "Crown of Thieves",
    "group": 50
  }, {
    "id": 503,
    "found": false,
    "name": "Harlequin Crest",
    "group": 50
  }, {
    "id": 504,
    "found": false,
    "name": "Steel Shade",
    "group": 50
  }, {
    "id": 505,
    "found": false,
    "name": "Andariel's Visage",
    "group": 50
  }, {
    "id": 506,
    "found": false,
    "name": "Giant Skull",
    "group": 50
  }, {
    "id": 507,
    "found": false,
    "name": "Veil of Steel",
    "group": 50
  }, {
    "id": 508,
    "found": false,
    "name": "Nightwing's Veil",
    "group": 50
  }, {
    "id": 509,
    "found": false,
    "name": "Crown of Ages",
    "group": 50
  }, {
    "id": 510,
    "found": false,
    "name": "Overlord's Helm",
    "group": 50
  }, {
    "id": 511,
    "found": false,
    "name": "Kira's Guardian",
    "group": 50
  }, {
    "id": 512,
    "found": false,
    "name": "Griffon's Eye",
    "group": 50
  }, {
    "id": 513,
    "found": false,
    "name": "Cyclopean Roar",
    "group": 50
  }, {
    "id": 514,
    "found": false,
    "name": "Wildspeaker",
    "group": 50
  }, {
    "id": 515,
    "found": false,
    "name": "Arreat's Face",
    "group": 50
  }, {
    "id": 516,
    "found": false,
    "name": "Wolfhowl",
    "group": 50
  }, {
    "id": 517,
    "found": false,
    "name": "Demonhorn's Edge",
    "group": 50
  }, {
    "id": 518,
    "found": false,
    "name": "Halaberd's Reign",
    "group": 50
  }, {
    "id": 519,
    "found": false,
    "name": "Raekor's Virtue",
    "group": 50
  }, {
    "id": 520,
    "found": false,
    "name": "Quetzalcoatl",
    "group": 50
  }, {
    "id": 521,
    "found": false,
    "name": "Fenris",
    "group": 50
  }, {
    "id": 522,
    "found": false,
    "name": "Jalal's Mane",
    "group": 50
  }, {
    "id": 523,
    "found": false,
    "name": "Cerebus' Bite",
    "group": 50
  }, {
    "id": 524,
    "found": false,
    "name": "Denmother",
    "group": 50
  }, {
    "id": 525,
    "found": false,
    "name": "Ravenlore",
    "group": 50
  }, {
    "id": 526,
    "found": false,
    "name": "Spirit Keeper",
    "group": 50
  }, {
    "id": 527,
    "found": false,
    "name": "Ursa's Nightmare",
    "group": 50
  }, {
    "id": 528,
    "found": false,
    "name": "Greyform",
    "group": 50
  }, {
    "id": 529,
    "found": false,
    "name": "Blinkbat's Form",
    "group": 50
  }, {
    "id": 530,
    "found": false,
    "name": "The Centurion",
    "group": 50
  }, {
    "id": 531,
    "found": false,
    "name": "Twitchthroe",
    "group": 50
  }, {
    "id": 532,
    "found": false,
    "name": "Darkglow",
    "group": 50
  }, {
    "id": 533,
    "found": false,
    "name": "Hawkmail",
    "group": 50
  }, {
    "id": 534,
    "found": false,
    "name": "Sparking Mail",
    "group": 50
  }, {
    "id": 535,
    "found": false,
    "name": "Venom Ward",
    "group": 50
  }, {
    "id": 536,
    "found": false,
    "name": "Iceblink",
    "group": 50
  }, {
    "id": 537,
    "found": false,
    "name": "Boneflesh",
    "group": 50
  }, {
    "id": 538,
    "found": false,
    "name": "Rockfleece",
    "group": 50
  }, {
    "id": 539,
    "found": false,
    "name": "Rattlecage",
    "group": 50
  }, {
    "id": 540,
    "found": false,
    "name": "Heavenly Garb",
    "group": 50
  }, {
    "id": 541,
    "found": false,
    "name": "Goldskin",
    "group": 50
  }, {
    "id": 542,
    "found": false,
    "name": "Silks of the Victor",
    "group": 50
  }, {
    "id": 543,
    "found": false,
    "name": "Spirit Shroud",
    "group": 50
  }, {
    "id": 544,
    "found": false,
    "name": "Skin of the Vipermagi",
    "group": 50
  }, {
    "id": 545,
    "found": false,
    "name": "Skin of the Flayed One",
    "group": 50
  }, {
    "id": 546,
    "found": false,
    "name": "Iron Pelt",
    "group": 50
  }, {
    "id": 547,
    "found": false,
    "name": "Spirit Forge",
    "group": 50
  }, {
    "id": 548,
    "found": false,
    "name": "Crow Caw",
    "group": 50
  }, {
    "id": 549,
    "found": false,
    "name": "Shaftstop",
    "group": 50
  }, {
    "id": 550,
    "found": false,
    "name": "Duriel's Shell",
    "group": 50
  }, {
    "id": 551,
    "found": false,
    "name": "Skullder's Ire",
    "group": 50
  }, {
    "id": 552,
    "found": false,
    "name": "Guardian Angel",
    "group": 50
  }, {
    "id": 553,
    "found": false,
    "name": "Toothrow",
    "group": 50
  }, {
    "id": 554,
    "found": false,
    "name": "Atma's Wail",
    "group": 50
  }, {
    "id": 555,
    "found": false,
    "name": "Que-Hegan's Wisdom",
    "group": 50
  }, {
    "id": 556,
    "found": false,
    "name": "Black Hades",
    "group": 50
  }, {
    "id": 557,
    "found": false,
    "name": "Corpsemourn",
    "group": 50
  }, {
    "id": 558,
    "found": false,
    "name": "Ormus' Robes",
    "group": 50
  }, {
    "id": 559,
    "found": false,
    "name": "The Gladiator's Bane",
    "group": 50
  }, {
    "id": 560,
    "found": false,
    "name": "Wraithskin",
    "group": 50
  }, {
    "id": 561,
    "found": false,
    "name": "Arkaine's Valor",
    "group": 50
  }, {
    "id": 562,
    "found": false,
    "name": "Leviathan",
    "group": 50
  }, {
    "id": 563,
    "found": false,
    "name": "Purgatory",
    "group": 50
  }, {
    "id": 564,
    "found": false,
    "name": "Steel Carapace",
    "group": 50
  }, {
    "id": 565,
    "found": false,
    "name": "Templar's Might",
    "group": 50
  }, {
    "id": 566,
    "found": false,
    "name": "Tyrael's Might",
    "group": 50
  }, {
    "id": 567,
    "found": false,
    "name": "Dark Abyss",
    "group": 50
  }, {
    "id": 568,
    "found": false,
    "name": "Cage of the Unsullied",
    "group": 50
  }, {
    "id": 569,
    "found": false,
    "name": "Pelta Lunata",
    "group": 50
  }, {
    "id": 570,
    "found": false,
    "name": "Umbral Disk",
    "group": 50
  }, {
    "id": 571,
    "found": false,
    "name": "Stormguild",
    "group": 50
  }, {
    "id": 572,
    "found": false,
    "name": "Swordback Hold",
    "group": 50
  }, {
    "id": 573,
    "found": false,
    "name": "Steelclash",
    "group": 50
  }, {
    "id": 574,
    "found": false,
    "name": "Wall of the Eyeless",
    "group": 50
  }, {
    "id": 575,
    "found": false,
    "name": "Bverrit Keep",
    "group": 50
  }, {
    "id": 576,
    "found": false,
    "name": "The Ward",
    "group": 50
  }, {
    "id": 577,
    "found": false,
    "name": "Visceratuant",
    "group": 50
  }, {
    "id": 578,
    "found": false,
    "name": "Moser's Blessed Circle",
    "group": 50
  }, {
    "id": 579,
    "found": false,
    "name": "Stormchaser",
    "group": 50
  }, {
    "id": 580,
    "found": false,
    "name": "Lance Guard",
    "group": 50
  }, {
    "id": 581,
    "found": false,
    "name": "Tiamat's Rebuke",
    "group": 50
  }, {
    "id": 582,
    "found": false,
    "name": "Lidless Wall",
    "group": 50
  }, {
    "id": 583,
    "found": false,
    "name": "Gerke's Sanctuary",
    "group": 50
  }, {
    "id": 584,
    "found": false,
    "name": "Radament's Sphere",
    "group": 50
  }, {
    "id": 585,
    "found": false,
    "name": "Blackoak Shield",
    "group": 50
  }, {
    "id": 586,
    "found": false,
    "name": "Twilight's Reflection",
    "group": 50
  }, {
    "id": 587,
    "found": false,
    "name": "Spike Thorn",
    "group": 50
  }, {
    "id": 588,
    "found": false,
    "name": "Stormshield",
    "group": 50
  }, {
    "id": 589,
    "found": false,
    "name": "Head Hunter's Glory",
    "group": 50
  }, {
    "id": 590,
    "found": false,
    "name": "Medusa's Gaze",
    "group": 50
  }, {
    "id": 591,
    "found": false,
    "name": "Spirit Ward",
    "group": 50
  }, {
    "id": 592,
    "found": false,
    "name": "Kalan's Legacy",
    "group": 50
  }, {
    "id": 593,
    "found": false,
    "name": "Homunculus",
    "group": 50
  }, {
    "id": 594,
    "found": false,
    "name": "Boneflame",
    "group": 50
  }, {
    "id": 595,
    "found": false,
    "name": "Darkforce Spawn",
    "group": 50
  }, {
    "id": 596,
    "found": false,
    "name": "Sacred Totem",
    "group": 50
  }, {
    "id": 597,
    "found": false,
    "name": "Martyrdom",
    "group": 50
  }, {
    "id": 598,
    "found": false,
    "name": "Sankekur's Fall",
    "group": 50
  }, {
    "id": 599,
    "found": false,
    "name": "Herald of Zakarum",
    "group": 50
  }, {
    "id": 600,
    "found": false,
    "name": "Alma Negra",
    "group": 50
  }, {
    "id": 601,
    "found": false,
    "name": "Dragonscale",
    "group": 50
  }, {
    "id": 602,
    "found": false,
    "name": "Skywarden",
    "group": 50
  }, {
    "id": 603,
    "found": false,
    "name": "The Hand of Broc",
    "group": 50
  }, {
    "id": 604,
    "found": false,
    "name": "Bloodfist",
    "group": 50
  }, {
    "id": 605,
    "found": false,
    "name": "Chance Guards",
    "group": 50
  }, {
    "id": 606,
    "found": false,
    "name": "Magefist",
    "group": 50
  }, {
    "id": 607,
    "found": false,
    "name": "Frostburn",
    "group": 50
  }, {
    "id": 608,
    "found": false,
    "name": "Venom Grip",
    "group": 50
  }, {
    "id": 609,
    "found": false,
    "name": "Gravepalm",
    "group": 50
  }, {
    "id": 610,
    "found": false,
    "name": "Ghoulhide",
    "group": 50
  }, {
    "id": 611,
    "found": false,
    "name": "Lava Gout",
    "group": 50
  }, {
    "id": 612,
    "found": false,
    "name": "Hellmouth",
    "group": 50
  }, {
    "id": 613,
    "found": false,
    "name": "Titan's Grip",
    "group": 50
  }, {
    "id": 614,
    "found": false,
    "name": "Dracul's Grasp",
    "group": 50
  }, {
    "id": 615,
    "found": false,
    "name": "Soul Drainer",
    "group": 50
  }, {
    "id": 616,
    "found": false,
    "name": "Occultist",
    "group": 50
  }, {
    "id": 617,
    "found": false,
    "name": "Steelrend",
    "group": 50
  }, {
    "id": 618,
    "found": false,
    "name": "Hotspur",
    "group": 50
  }, {
    "id": 619,
    "found": false,
    "name": "Gorefoot",
    "group": 50
  }, {
    "id": 620,
    "found": false,
    "name": "Treads of Cthon",
    "group": 50
  }, {
    "id": 621,
    "found": false,
    "name": "Goblin Toe",
    "group": 50
  }, {
    "id": 622,
    "found": false,
    "name": "Tearhaunch",
    "group": 50
  }, {
    "id": 623,
    "found": false,
    "name": "Infernostride",
    "group": 50
  }, {
    "id": 624,
    "found": false,
    "name": "Waterwalk",
    "group": 50
  }, {
    "id": 625,
    "found": false,
    "name": "Silkweave",
    "group": 50
  }, {
    "id": 626,
    "found": false,
    "name": "War Traveler",
    "group": 50
  }, {
    "id": 627,
    "found": false,
    "name": "Gore Rider",
    "group": 50
  }, {
    "id": 628,
    "found": false,
    "name": "Merman's Sprocket",
    "group": 50
  }, {
    "id": 629,
    "found": false,
    "name": "Sandstorm Trek",
    "group": 50
  }, {
    "id": 630,
    "found": false,
    "name": "Marrowwalk",
    "group": 50
  }, {
    "id": 631,
    "found": false,
    "name": "Shadow Dancer",
    "group": 50
  }, {
    "id": 632,
    "found": false,
    "name": "Itherael's Path",
    "group": 50
  }, {
    "id": 633,
    "found": false,
    "name": "Lenymo",
    "group": 50
  }, {
    "id": 634,
    "found": false,
    "name": "Snakecord",
    "group": 50
  }, {
    "id": 635,
    "found": false,
    "name": "Nightsmoke",
    "group": 50
  }, {
    "id": 636,
    "found": false,
    "name": "Goldwrap",
    "group": 50
  }, {
    "id": 637,
    "found": false,
    "name": "Bladebuckle",
    "group": 50
  }, {
    "id": 638,
    "found": false,
    "name": "String of Ears",
    "group": 50
  }, {
    "id": 639,
    "found": false,
    "name": "Razortail",
    "group": 50
  }, {
    "id": 640,
    "found": false,
    "name": "Gloom's Trap",
    "group": 50
  }, {
    "id": 641,
    "found": false,
    "name": "Snowclash",
    "group": 50
  }, {
    "id": 642,
    "found": false,
    "name": "Thundergod's Vigor",
    "group": 50
  }, {
    "id": 643,
    "found": false,
    "name": "Arachnid Mesh",
    "group": 50
  }, {
    "id": 644,
    "found": false,
    "name": "Nosferatu's Coil",
    "group": 50
  }, {
    "id": 645,
    "found": false,
    "name": "Verdungo's Hearty Cord",
    "group": 50
  }, {
    "id": 646,
    "found": false,
    "name": "Siggard's Staunch",
    "group": 50
  }, {
    "id": 647,
    "found": false,
    "name": "Band of Skulls",
    "group": 50
  }, {
    "id": 648,
    "found": false,
    "name": "Nokozan Relic",
    "group": 50
  }, {
    "id": 649,
    "found": false,
    "name": "The Eye of Etlich",
    "group": 50
  }, {
    "id": 650,
    "found": false,
    "name": "The Mahim-Oak Curio",
    "group": 50
  }, {
    "id": 651,
    "found": false,
    "name": "Saracen's Chance",
    "group": 50
  }, {
    "id": 652,
    "found": false,
    "name": "Crescent Moon",
    "group": 50
  }, {
    "id": 653,
    "found": false,
    "name": "The Cat's Eye",
    "group": 50
  }, {
    "id": 654,
    "found": false,
    "name": "Atma's Scarab",
    "group": 50
  }, {
    "id": 655,
    "found": false,
    "name": "Highlord's Wrath",
    "group": 50
  }, {
    "id": 656,
    "found": false,
    "name": "The Rising Sun",
    "group": 50
  }, {
    "id": 657,
    "found": false,
    "name": "Seraph's Hymn",
    "group": 50
  }, {
    "id": 658,
    "found": false,
    "name": "Mara's Kaleidoscope",
    "group": 50
  }, {
    "id": 659,
    "found": false,
    "name": "Metalgrid",
    "group": 50
  }, {
    "id": 660,
    "found": false,
    "name": "The Third Eye",
    "group": 50
  }, {
    "id": 661,
    "found": false,
    "name": "Nagelring",
    "group": 50
  }, {
    "id": 662,
    "found": false,
    "name": "Manald Heal",
    "group": 50
  }, {
    "id": 663,
    "found": false,
    "name": "The Stone of Jordan",
    "group": 50
  }, {
    "id": 664,
    "found": false,
    "name": "Dwarf Star",
    "group": 50
  }, {
    "id": 665,
    "found": false,
    "name": "Skulls",
    "group": 50
  }, {
    "id": 666,
    "found": false,
    "name": "Raven Frost",
    "group": 50
  }, {
    "id": 667,
    "found": false,
    "name": "Bul-Kathos' Wedding Band",
    "group": 50
  }, {
    "id": 668,
    "found": false,
    "name": "Carrion Wind",
    "group": 50
  }, {
    "id": 669,
    "found": false,
    "name": "Nature's Peace",
    "group": 50
  }, {
    "id": 670,
    "found": false,
    "name": "Wisp Projector",
    "group": 50
  }, {
    "id": 671,
    "found": false,
    "name": "Constricting Loop",
    "group": 50
  }, {
    "id": 672,
    "found": false,
    "name": "Kadala's Heirloom",
    "group": 50
  }, {
    "id": 673,
    "found": false,
    "name": "Gheed's Fortune",
    "group": 50
  }, {
    "id": 674,
    "found": false,
    "name": "Annihilus",
    "group": 50
  }, {
    "id": 675,
    "found": false,
    "name": "Hellfire Torch (Amazon)",
    "group": 50
  }, {
    "id": 676,
    "found": false,
    "name": "Hellfire Torch (Assasin)",
    "group": 50
  }, {
    "id": 677,
    "found": false,
    "name": "Hellfire Torch (Barbarian)",
    "group": 50
  }, {
    "id": 678,
    "found": false,
    "name": "Hellfire Torch (Druid)",
    "group": 50
  }, {
    "id": 679,
    "found": false,
    "name": "Hellfire Torch (Paladin)",
    "group": 50
  }, {
    "id": 680,
    "found": false,
    "name": "Hellfire Torch (Necromancer)",
    "group": 50
  }, {
    "id": 681,
    "found": false,
    "name": "Hellfire Torch (Sorceress)",
    "group": 50
  }, {
    "id": 682,
    "found": false,
    "name": "Rainbow Facet (Fire Level-Up)",
    "group": 50
  }, {
    "id": 683,
    "found": false,
    "name": "Rainbow Facet (Cold Level-Up)",
    "group": 50
  }, {
    "id": 684,
    "found": false,
    "name": "Rainbow Facet (Lightning Level-Up)",
    "group": 50
  }, {
    "id": 685,
    "found": false,
    "name": "Rainbow Facet (Poison Level-Up)",
    "group": 50
  }, {
    "id": 686,
    "found": false,
    "name": "Rainbow Facet (Fire Die)",
    "group": 50
  }, {
    "id": 687,
    "found": false,
    "name": "Rainbow Facet (Cold Die)",
    "group": 50
  }, {
    "id": 688,
    "found": false,
    "name": "Rainbow Facet (Lightning Die)",
    "group": 50
  }, {
    "id": 689,
    "found": false,
    "name": "Rainbow Facet (Poison Die)",
    "group": 50
  }];


  setItems(items: any) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  getTotalItems() {
    return this.items.length;
  }

  getFoundItems() {
    return this.items.filter(item => item.found);
  }

  getTotalFoundItems() {
    return this.getFoundItems().length;
  }

  getRunes() {
    return this.items.filter(item => item.group == 1);
  }

  getFoundRunes() {
    return this.getRunes().filter(item => item.found);
  }

  getTotalRunes() {
    return this.getRunes().length;
  }

  getTotalFoundRunes() {
    return this.getFoundRunes().length;
  }

  getRunewords() {
    let items = this.items.filter(item => item.group == 2).sort((a, b) => {
      let nameA = a.name.toLowerCase();
      let nameB = b.name.toLowerCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0
    });
    return items;
  }

  getTotalRunewords() {
    return this.getRunewords().length;
  }

  getFoundRunewords() {
    return this.getRunewords().filter(item => item.found);
  }

  getTotalFoundRunewords() {
    return this.getFoundRunewords().length;
  }

  getSets() {
    return this.items.filter(item => this.setGroups.includes(item.group));
  }

  getFoundSets() {
    return this.getSets().filter(item => item.found);
  }

  getTotalFoundSets() {
    return this.getFoundSets().length;
  }

  getTotalSets() {
    return this.getSets().length;
  }

  getUniques() {
    return this.items.filter(item => this.uniqueGroups.includes(item.group));
  }

  getTotalUniques() {
    return this.getUniques().length;
  }

  getFoundUniques() {
    return this.getUniques().filter(item => item.found);
  }

  getTotalFoundUniques() {
    return this.getFoundUniques().length;
  }

  isFound(id: number) {
    let item = this.items.find(item => item.id == id);
    return item?.found;
  }

  toggleFoundItem(id: number) {
    let item = this.items.find(item => item.id == id);
    if (item != null) {
      item.found = !item.found
    }
  }

  loadStorage() {
    let stored_items = localStorage.getItem("items");
    if (stored_items == null) {
      localStorage.setItem("items", JSON.stringify(this.items));
    } else {
      this.setItems(JSON.parse(stored_items));
    }
  }

  saveStorage(items: Array<Item>) {
    localStorage.setItem("items", JSON.stringify(this.items));
  }

  resetStorage() {
    localStorage.removeItem("items")
  }
}
