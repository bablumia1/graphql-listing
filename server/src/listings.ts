import { ObjectId } from "mongodb";
import { Listing } from "./lib/types";

export interface IListing {
  id: string;
  title: string;
  image: string;
  address: string;
  price: number;
  numOfGuests: number;
  numOfBeds: number;
  numOfBaths: number;
  rating: number;
}

export const listings: Listing[] = [
  {
    _id: new ObjectId(),
    title: "Secluded mountain retreat with panoramic views",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560656326/mock/Aspen/aspen-listing-1_nal9os.jpg",
    address: "500 Mountain Road, Aspen, Colorado",
    price: 28000,
    numOfGuests: 8,
    numOfBeds: 4,
    numOfBaths: 3,
    rating: 4.8,
  },
  {
    _id: new ObjectId(),
    title: "Modern apartment in the heart of Paris",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560657067/mock/Paris/paris-listing-1_qopwke.jpg",
    address: "10 Rue de Rivoli, Paris, France",
    price: 18000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 4.2,
  },
  {
    _id: new ObjectId(),
    title: "Spacious beachfront condo with ocean views",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560657763/mock/Honolulu/honolulu-listing-1_cyngha.jpg",
    address: "123 Beachside Avenue, Honolulu, Hawaii",
    price: 25000,
    numOfGuests: 6,
    numOfBeds: 3,
    numOfBaths: 2,
    rating: 4.6,
  },
  {
    _id: new ObjectId(),
    title: "Riverside cabin with fishing access",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560658414/mock/Portland/portland-listing-1_vacdoj.jpg",
    address: "50 Riverbank Road, Portland, Oregon",
    price: 12000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 4.3,
  },
  {
    _id: new ObjectId(),
    title: "Cozy cottage with vineyard views",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560659063/mock/Napa/napa-listing-1_zg1vhn.jpg",
    address: "100 Vineyard Way, Napa Valley, California",
    price: 16000,
    numOfGuests: 3,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 4.7,
  },
  {
    _id: new ObjectId(),
    title: "Chic apartment in trendy Brooklyn neighborhood",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560659853/mock/Brooklyn/brooklyn-listing-1_ewkmsm.jpg",
    address: "200 Trendy Street, Brooklyn, New York",
    price: 22000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 4.4,
  },
  {
    _id: new ObjectId(),
    title: "Sleek condo with city views",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560660607/mock/Seattle/seattle-listing-1_jrypuu.jpg",
    address: "300 Downtown Avenue, Seattle, Washington",
    price: 19000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 2,
    rating: 4.2,
  },
  {
    _id: new ObjectId(),
    title: "Charming cottage near the beach",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560661343/mock/Sydney/sydney-listing-1_r2vhf0.jpg",
    address: "50 Beachside Road, Sydney, Australia",
    price: 21000,
    numOfGuests: 5,
    numOfBeds: 3,
    numOfBaths: 1,
    rating: 4.6,
  },
  {
    _id: new ObjectId(),
    title: "Tranquil lakefront cabin with boat dock",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560662157/mock/Seattle/seattle-listing-2_cyi8cg.jpg",
    address: "100 Lakeview Drive, Seattle, Washington",
    price: 14000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 4.5,
  },
  {
    _id: new ObjectId(),
    title: "Rustic farmhouse surrounded by nature",
    image:
      "https://res.cloudinary.com/tiny-house/image/upload/v1560662993/mock/Vermont/vermont-listing-1_j1hlk7.jpg",
    address: "123 Country Road, Vermont, USA",
    price: 11000,
    numOfGuests: 4,
    numOfBeds: 2,
    numOfBaths: 1,
    rating: 4.3,
  },
];
