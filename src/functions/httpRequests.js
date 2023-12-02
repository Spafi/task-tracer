const methods = {
    GET   : 'GET',
    POST  : 'POST',
    PUT   : 'PUT',
    PATCH : 'PATCH',
    DELETE: 'DELETE',
}

export async function executeGetRequest(url) {
    return await executeRequest( url, methods.GET )
}

export async function executePostRequest(url, data) {
    return await executeRequest( url, methods.POST, data )
}

export async function executePatchRequest(url, data) {
    return await executeRequest( url, methods.PATCH, data )
}

export async function executePutRequest(url, data) {
    return await executeRequest( url, methods.PUT, data )
}

export async function executeDeleteRequest(url, data) {
    return await executeRequest( url, methods.DELETE, data )
}

async function executeRequest(url, method, data = undefined) {

    const init = createRequestConfigByMethod( method, data )
    try {
        const res = await fetch( url, init );

        if ( !res.ok ) {
            throw new Error( `HTTP error! status: ${ res.status }` );
        }

        return method===methods.DELETE ? true:await res.json();

    } catch ( error ) {
        console.error( `There was a problem fetching the data: ${ error.message }` );
        return method===methods.DELETE ? false:null
    }
}

function createRequestConfigByMethod(method, data) {
    switch ( method ) {
        case methods.GET: {
            return {
                method: method
            }
        }
        default: {
            return {
                method : method,
                headers: {
                    'Content-Type': 'application/json',
                },
                body   : JSON.stringify( data ),
            }
        }

    }
}
