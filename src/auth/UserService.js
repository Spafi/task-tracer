import {
    executeDeleteRequest,
    executeGetRequest,
    executePostRequest,
    executePutRequest
} from "../functions/httpRequests.js";
import { users } from "../config/serverUrlConfig.js";

const userRoute = (id) => `${ users }/${ id }`

export async function saveUser(user) {
    const userData = {
        id       : user.id,
        firstName: user.firstName ?? '',
        lastName : user.lastName ?? '',
        fullName : user.fullName ?? '',
        imageUrl : user.imageUrl,
        email    : user.primaryEmailAddress.emailAddress
    }

    const userExists = await getUserById( user.id )

    userExists ? await executePutRequest( userRoute( user.id ), userData )
               :await executePostRequest( users, userData )

}

export async function logout(user) {
    await executeDeleteRequest( userRoute( user.id ) )

}

export async function getUserById(id) {
    return await executeGetRequest( userRoute( id ) )
}
