export class FindCallsController {
    handle(httpRequest: any): any {
        CallsRepository.find();
        let statusCode = 404;
        let data: any;

        if (!httpRequest.params.id) {
            statusCode = 400;
        }

        if (httpRequest.params.id === 1) {
            statusCode = 200;
            data = {
                id: 1,
            };
        }

        return {
            statusCode,
            data,
        };
    }
}
