import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
export const front_stories = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_stories.url(options),
    method: 'get',
})

front_stories.definition = {
    methods: ["get","head"],
    url: '/api/stories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
front_stories.url = (options?: RouteQueryOptions) => {
    return front_stories.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
front_stories.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_stories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
front_stories.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: front_stories.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
const front_storiesForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_stories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
front_storiesForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_stories.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\PostController::front_stories
* @see app/Http/Controllers/PostController.php:11
* @route '/api/stories'
*/
front_storiesForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_stories.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

front_stories.form = front_storiesForm

const PostController = { front_stories }

export default PostController