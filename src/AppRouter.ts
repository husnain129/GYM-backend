import express from "express";
class AppRouter {
  private static instance: express.Router;
  static getInstance(): express.Router {
    if (!this.instance) {
      this.instance = express.Router();
    }
    return this.instance;
  }
}

export default AppRouter;
