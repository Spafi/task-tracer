import { tasks } from "../../config/serverUrlConfig.js";
import {
    executeDeleteRequest,
    executeGetRequest,
    executePostRequest,
    executePutRequest
} from "../../functions/httpRequests.js";

const taskRoute = (task) => `${ tasks }/${ task.id }`


export const orders = {
    ASC : 'asc',
    DESC: 'desc'
}

export async function getSortedFilteredTasks(userId, sort = null, order = orders.ASC, filter = null) {
    const filterByUserId = `?userId=${ userId }&`
    let url = tasks + filterByUserId
    if ( sort ) {
        url += `&_sort=${ sort }&_order=${ order }`
    }
    if ( filter ) {
        sort && ( url += '&' )
        url += filter
    }
    return await executeGetRequest( url )
}

export async function saveTask(task) {
    if ( task.id ) {
        return await executePutRequest( taskRoute( task ), task )
    } else {
        return await executePostRequest( tasks, task )
    }
}

export async function deleteTask(task) {
    return await executeDeleteRequest( taskRoute( task ) )
}
