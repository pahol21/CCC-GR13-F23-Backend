import { Body, Controller, Get, Post } from "@nestjs/common";
import { OrderService } from "./order.service";
import { Order } from "./order.entity";

@Controller()
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Get("menu")
  getMenu(): any {
    const menu = [
      { name: "Salad", price: 5 },
      { name: "Soup", price: 4 },
      { name: "Burger", price: 10 },
      { name: "Pizza", price: 12 },
      { name: "Pasta", price: 15 },
      { name: "Lasagna", price: 16 },
    ];
    return menu;
  }

  @Post("order")
  createOrder(@Body() orderData: Order): Promise<Order> {
    return this.orderService.addOrder(orderData);
  }

  @Get("orders")
  getAllOrders(): Promise<Order[]> {
    return this.orderService.findAll();
  }
}