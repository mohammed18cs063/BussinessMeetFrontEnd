import { Injectable } from '@angular/core';
import { FoodMenuModel } from '../model/food-menu.model';

@Injectable({
  providedIn: 'root'
})
export class FoodMenuService {
  
  private foodMenus: FoodMenuModel[] = [
    {
        menuId: 1,
        menuName: "Burger",
        menuImageUrl:
        'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        menuPrice: 50,
        itemCategory:"non veg",
    },
    {
      menuId: 2,
      menuName: "Sandwich",
      menuImageUrl:
      'https://media.istockphoto.com/photos/grilled-sandwich-with-a-cappuccino-picture-id1150728025?s=612x612',
      menuPrice: 30,
      itemCategory:"veg",
    },
    {
    menuId: 3,
    menuName: "Chicken wings",
    menuImageUrl:
    'https://media.istockphoto.com/photos/spicy-homemade-buffalo-wings-picture-id485599156?s=612x612',
    menuPrice: 45,
    itemCategory:"non veg",
    },
    {
      menuId: 1,
      menuName: "pizza",
      menuImageUrl:
      'https://media.istockphoto.com/photos/vegetarian-pizza-with-fresh-basil-and-tomato-picture-id1135097232?k=20&m=1135097232&s=612x612&w=0&h=TDMJOFKFtz1nSEDxWTFQw0FMe04RJv-V72HSGmRlA5E=',
      menuPrice: 100,
      itemCategory:"veg",
  },
  {
    menuId: 1,
    menuName: "Dosa",
    menuImageUrl:
    'https://media.istockphoto.com/photos/protein-rich-moong-bean-crepe-locally-known-as-pesarattu-it-looks-picture-id1336521391?k=20&m=1336521391&s=612x612&w=0&h=AP7DKKZR3g3U2LP6cZInH795xm7GKnQRjFeoLn3rwoI=',
    menuPrice: 30,
    itemCategory:"veg",
},
  ];

  getFoodMenus(): FoodMenuModel[] {
    return this.foodMenus;
  }

  getFoodMenu(menuId: number) {
    return this.foodMenus.find((server) => server.menuId === menuId);
  }

  updateFoodMenu(
    menuId: number,
    menuInfo: {
        menuId: number;
        menuName: string;
        menuImageUrl: string;
        menuPrice: number;
        itemCategory: string;
    }
  ) {
    let index = this.foodMenus.findIndex((server) => server.menuId === menuId);
    let server = this.foodMenus[index];
    server.menuId = menuInfo.menuId;
    server.menuName = menuInfo.menuName;
    server.menuImageUrl = menuInfo.menuImageUrl;
    server.menuPrice = menuInfo.menuPrice;
    server.itemCategory = menuInfo.itemCategory;
    }
}
