import AsyncStorage from '@react-native-community/async-storage';
import { generateId } from '../../tools/functions';

const ORDERS_KEY = 'orders';

class OrderStorage {
  async removeOrder(id) {
    if (id) {
      try {
        const orders = await this.getOrders();
        const newOrders = orders.filter(o => o.id !== id);
        AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(newOrders));
      } catch (error) {}
    }
  }

  async getOpenOrders() {
    try {
      const storageOrders = await AsyncStorage.getItem(ORDERS_KEY);

      if (storageOrders) {
        const orders = JSON.parse(storageOrders);
        return orders.filter(o => o.open);
      }
      return [];
    } catch (error) {
      return null;
    }
  }

  async getClosedOrders() {
    try {
      const storageOrders = await AsyncStorage.getItem(ORDERS_KEY);

      if (storageOrders) {
        const orders = JSON.parse(storageOrders);
        return orders.filter(o => !o.open);
      }
      return [];
    } catch (error) {
      return null;
    }
  }

  async getOrders() {
    try {
      const orders = await AsyncStorage.getItem(ORDERS_KEY);

      if (orders) {
        return JSON.parse(orders);
      }
      return [];
    } catch (error) {
      return null;
    }
  }

  async addOrder(order) {
    try {
      order.id = generateId(ORDERS_KEY);
      order.open = true;
      order.date = new Date();
      const orders = (await this.getOrders()) || [];
      orders.push(order);
      AsyncStorage.setItem(ORDERS_KEY, JSON.stringify(orders));
    } catch (error) {
      return false;
    }
  }
}
export default new OrderStorage();
