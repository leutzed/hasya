import { FindCallsController } from "./findcalls";

describe("Find calls", () => {
    test("Should return 400 if no id is provided", () => {
        const sut = new FindCallsController();

        const httpRequest = {
            // deveria vir pela rota, /:id, mas não tenho ctz se é params
            params: {
                title: "Something",
            },
        };

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(400);
    });
});
