/**
* ©2019-2020 Midori Book Store
*/
import { Request, Response } from 'express';

export class Routes {
    public routes(app): void {
        app.route('/publisher')
        // Get all publishers
        .get()
    }
}