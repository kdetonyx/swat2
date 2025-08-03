import { AzureFunction, Context, HttpRequest } from "@azure/functions"

const httpTrigger: AzureFunction = async function (context: Context, req: HttpRequest): Promise<void> {
    const token = req.headers['authorization'];

    if (token === 'Bearer 123abc') {
        context.res = { status: 200, body: 'Token válido' };
    } else {
        context.res = { status: 401, body: 'Token inválido' };
    }
};

export default httpTrigger;

