export type StoreItem = {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  bestCard: string;
  rewardMultiplier: string;
};

export const mockStoreItems: StoreItem[] = [
  {
    id: "item_1",
    name: "Matte Black Over-Ear Headphones",
    price: 348.00,
    imageUrl: "https://placehold.co/400x400/18181b/ffffff?text=Headphones",
    bestCard: "Apex Rewards",
    rewardMultiplier: "4x Electronics"
  },
  {
    id: "item_2",
    name: "Lego Architecture Skyline",
    price: 119.99,
    imageUrl: "https://placehold.co/400x400/18181b/ffffff?text=Lego+Set",
    bestCard: "Sapphire Cash Back",
    rewardMultiplier: "2% Everywhere"
  },
  {
    id: "item_3",
    name: "Oversized Black Knit Sweater",
    price: 85.00,
    imageUrl: "https://placehold.co/400x400/18181b/ffffff?text=Sweater",
    bestCard: "Aura Elite",
    rewardMultiplier: "3x Apparel"
  },
  {
    id: "item_4",
    name: "Dual Monitor Desk Mount",
    price: 65.50,
    imageUrl: "https://placehold.co/400x400/18181b/ffffff?text=Monitor+Mount",
    bestCard: "VelocityMiles Platinum",
    rewardMultiplier: "5x Office"
  },
  {
    id: "item_5",
    name: "Emerald Leather Desk Mat",
    price: 42.00,
    imageUrl: "https://placehold.co/400x400/18181b/ffffff?text=Desk+Mat",
    bestCard: "Sapphire Cash Back",
    rewardMultiplier: "2% Everywhere"
  },
  {
    id: "item_6",
    name: "Minimalist Leather Backpack",
    price: 145.00,
    imageUrl: "https://placehold.co/400x400/18181b/ffffff?text=Backpack",
    bestCard: "Apex Rewards",
    rewardMultiplier: "4x Travel"
  }
];