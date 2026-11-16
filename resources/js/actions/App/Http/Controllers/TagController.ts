import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
export const front_tags = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_tags.url(options),
    method: 'get',
})

front_tags.definition = {
    methods: ["get","head"],
    url: '/api/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front_tags.url = (options?: RouteQueryOptions) => {
    return front_tags.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front_tags.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front_tags.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: front_tags.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
const front_tagsForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front_tagsForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tags.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:11
* @route '/api/tags'
*/
front_tagsForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tags.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

front_tags.form = front_tagsForm

const TagController = { front_tags }

export default TagController