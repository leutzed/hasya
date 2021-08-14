import { FindCallsController } from "./find";

describe("Find calls", () => {
    const makeSut = (params: any) => {
        const sut = new FindCallsController();
        const httpRequest = { params };

        return [sut, httpRequest] as const;
    };

    test("Should return 400 if no id is provided", () => {
        const [sut, httpRequest] = makeSut({ title: "Something" });

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(400);
    });

    test("Should return 404 if nothing was found with specified id", () => {
        const [sut, httpRequest] = makeSut({ id: 5 });
        console.log(httpRequest);
        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(404);
    });

    test("Should return 200 if record was found", () => {
        const [sut, httpRequest] = makeSut({ id: 1 });

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.statusCode).toBe(200);
    });

    test("Should return one record if found", () => {
        const [sut, httpRequest] = makeSut({ id: 1 });

        const httpResponse = sut.handle(httpRequest);

        expect(httpResponse.data).toHaveProperty("id");
    });
});
