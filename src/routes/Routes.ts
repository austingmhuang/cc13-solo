import {Request, Response} from "express";
import {Controller} from "../controller/Controller";
class Routes {
    private controller: Controller;
    constructor() {
        this.controller = new Controller();
    }
    public routes(app): void {
        app.route('/')
            .get((request: Request, response: Response) => {
                response.status(200)
                    .send({
                        message: "GET request successfully."
                    });
            });
        app.route('/guildmember')
            .post(this.controller.addMember)
            .get(this.controller.getAllMembers);
        app.route('/guildmember/:id')
            .get(this.controller.getById)
            .delete(this.controller.deleteMember)
            .patch(this.controller.updateMember);
    }
}
export {Routes};