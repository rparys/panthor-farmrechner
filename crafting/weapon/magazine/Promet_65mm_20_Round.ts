import {CraftItem, CraftMaterial} from "~/types/crafting"
import {MediumBullet} from "~/crafting/weapon/bullets/MediumBullet";
import {ironBarProduction} from "~/farmroutes/iron_bar";

export const Promet_65mm_20_Round = new CraftItem(
    'promet_65mm_20_round',
    '6.5mm 30Rnd Promet Mag',
    10,
    [
        new CraftMaterial(2, MediumBullet),
        new CraftMaterial(1, ironBarProduction),
    ]
)