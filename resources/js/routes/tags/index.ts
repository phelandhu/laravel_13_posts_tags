import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../wayfinder'
/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
export const front = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front.url(options),
    method: 'get',
})

front.definition = {
    methods: ["get","head"],
    url: '/api/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front.url = (options?: RouteQueryOptions) => {
    return front.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: front.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
const frontForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
frontForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
frontForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

front.form = frontForm

const tags = {
    front: Object.assign(front, front),
}

export default tags