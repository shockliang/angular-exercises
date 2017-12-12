import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { OrderService } from './../order.service';
import { Subscription } from 'rxjs/Subscription';
import { ShoppingCart } from './../models/shopping-cart';
import { Component, OnInit } from '@angular/core';
import { ShoppingCartService } from '../shopping-cart.service';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';
import { Order } from '../models/order';

@Component({
  selector: 'app-check-out',
  templateUrl: './check-out.component.html',
  styleUrls: ['./check-out.component.css']
})
export class CheckOutComponent implements OnInit, OnDestroy {
  shipping = {};
  cart: ShoppingCart;
  userId: string;
  cartSubscription: Subscription;
  userSubscription: Subscription;

  constructor(
    private router: Router,
    private shoppingCartService: ShoppingCartService,
    private orderService: OrderService,
    private authService: AuthService) {
    }

  async ngOnInit() {
    let cart$ = await this.shoppingCartService.getCart();
    this.cartSubscription = cart$.subscribe(cart => this.cart = cart);
    this.userSubscription = this.authService.user$.subscribe(user => this.userId = user.uid);
  }

  ngOnDestroy() {
    this.cartSubscription.unsubscribe();
    this.userSubscription.unsubscribe();
  }

  async placeOrder() {
    let order = new Order(this.userId,this.shipping, this.cart);
    let result = await this.orderService.placeOrder(order);
    this.router.navigate(['/order-success', result.key]);
  }
}
