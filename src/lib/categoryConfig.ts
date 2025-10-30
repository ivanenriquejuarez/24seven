import { foods } from "@/data/foods"
import { hotels } from "@/data/hotels"
import { golf } from "@/data/golf"
import { localGems } from "@/data/localgems"
import { museums } from "@/data/museums"
import { nightlife } from "@/data/nightlife"
import { recreation } from "@/data/recreation"
import { shopping } from "@/data/shopping"
import { shows } from "@/data/shows"
import { spas } from "@/data/spas"
import { tours } from "@/data/tours"

import FoodCard from "@/components/cards/FoodCard"
import HotelCard from "@/components/cards/HotelCard"
import GolfCard from "@/components/cards/GolfCard"
import LocalGemCard from "@/components/cards/LocalGemCard"
import MuseumCard from "@/components/cards/MuseumCard"
import NightlifeCard from "@/components/cards/NightlifeCard"
import RecreationCard from "@/components/cards/RecreationCard"
import ShoppingCard from "@/components/cards/ShoppingCard"
import ShowCard from "@/components/cards/ShowCard"
import SpaCard from "@/components/cards/SpaCard"
import TourCard from "@/components/cards/TourCard"

export const categoryConfig = {
  foods: {
    data: foods,
    CardComponent: FoodCard,
    path: "foodsanddrinks",
    propName: "food"
  },
  hotels: {
    data: hotels,
    CardComponent: HotelCard,
    path: "hotels",
    propName: "hotel"
  },
  shows: {
    data: shows,
    CardComponent: ShowCard,
    path: "shows",
    propName: "show"
  },
  nightlife: {
    data: nightlife,
    CardComponent: NightlifeCard,
    path: "nightlife",
    propName: "venue"
  },
  localgems: {
    data: localGems,
    CardComponent: LocalGemCard,
    path: "localgems",
    propName: "gem"
  },
  golf: {
    data: golf,
    CardComponent: GolfCard,
    path: "golf",
    propName: "course"
  },
  museums: {
    data: museums,
    CardComponent: MuseumCard,
    path: "museums",
    propName: "museum"
  },
  shopping: {
    data: shopping,
    CardComponent: ShoppingCard,
    path: "shopping",
    propName: "shop"
  },
  spas: {
    data: spas,
    CardComponent: SpaCard,
    path: "spas",
    propName: "spa"
  },
  tours: {
    data: tours,
    CardComponent: TourCard,
    path: "tours",
    propName: "tour"
  },
  recreation: {
    data: recreation,
    CardComponent: RecreationCard,
    path: "recreation",
    propName: "activity"
  }
}