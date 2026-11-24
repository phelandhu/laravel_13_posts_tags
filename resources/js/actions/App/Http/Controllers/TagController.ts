import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
const front_tags185d28487d46d560548c277b2c1f59b8 = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_tags185d28487d46d560548c277b2c1f59b8.url(options),
    method: 'get',
})

front_tags185d28487d46d560548c277b2c1f59b8.definition = {
    methods: ["get","head"],
    url: '/api/tags',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
front_tags185d28487d46d560548c277b2c1f59b8.url = (options?: RouteQueryOptions) => {
    return front_tags185d28487d46d560548c277b2c1f59b8.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
front_tags185d28487d46d560548c277b2c1f59b8.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_tags185d28487d46d560548c277b2c1f59b8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
front_tags185d28487d46d560548c277b2c1f59b8.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: front_tags185d28487d46d560548c277b2c1f59b8.url(options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
const front_tags185d28487d46d560548c277b2c1f59b8Form = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tags185d28487d46d560548c277b2c1f59b8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
front_tags185d28487d46d560548c277b2c1f59b8Form.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tags185d28487d46d560548c277b2c1f59b8.url(options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags'
*/
front_tags185d28487d46d560548c277b2c1f59b8Form.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tags185d28487d46d560548c277b2c1f59b8.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

front_tags185d28487d46d560548c277b2c1f59b8.form = front_tags185d28487d46d560548c277b2c1f59b8Form
/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
const front_tagsaaed48733cbaabccdb0ef2611b71f3bb = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url(args, options),
    method: 'get',
})

front_tagsaaed48733cbaabccdb0ef2611b71f3bb.definition = {
    methods: ["get","head"],
    url: '/api/tags/{id}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { id: args }
    }

    if (Array.isArray(args)) {
        args = {
            id: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        id: args.id,
    }

    return front_tagsaaed48733cbaabccdb0ef2611b71f3bb.definition.url
            .replace('{id}', parsedArgs.id.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
front_tagsaaed48733cbaabccdb0ef2611b71f3bb.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
front_tagsaaed48733cbaabccdb0ef2611b71f3bb.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url(args, options),
    method: 'head',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
const front_tagsaaed48733cbaabccdb0ef2611b71f3bbForm = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
front_tagsaaed48733cbaabccdb0ef2611b71f3bbForm.get = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url(args, options),
    method: 'get',
})

/**
* @see \App\Http\Controllers\TagController::front_tags
* @see app/Http/Controllers/TagController.php:0
* @route '/api/tags/{id}'
*/
front_tagsaaed48733cbaabccdb0ef2611b71f3bbForm.head = (args: { id: string | number } | [id: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: front_tagsaaed48733cbaabccdb0ef2611b71f3bb.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

front_tagsaaed48733cbaabccdb0ef2611b71f3bb.form = front_tagsaaed48733cbaabccdb0ef2611b71f3bbForm

/**
* Multiple routes resolve to \App\Http\Controllers\TagController::front_tags, so this export is a
* dictionary keyed by URI rather than a callable, with the verbs prefixed where two routes share a URI.
* Call a specific route with `front_tags['<key>'](...)`, or import the route by name from your
* generated `routes/` directory.
*/
export const front_tags = {
    '/api/tags': front_tags185d28487d46d560548c277b2c1f59b8,
    '/api/tags/{id}': front_tagsaaed48733cbaabccdb0ef2611b71f3bb,
}

const TagController = { front_tags }

export default TagController