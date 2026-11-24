import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/stories',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url(options),
    method: 'get',
})

/**
* @see \StoryController::index
* @see [unknown]:0
* @route '/stories'
*/
indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: index.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

index.form = indexForm

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/stories/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url(options),
    method: 'get',
})

/**
* @see \StoryController::create
* @see [unknown]:0
* @route '/stories/create'
*/
createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: create.url({
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

create.form = createForm

/**
* @see \StoryController::store
* @see [unknown]:0
* @route '/stories'
*/
export const store = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

store.definition = {
    methods: ["post"],
    url: '/stories',
} satisfies RouteDefinition<["post"]>

/**
* @see \StoryController::store
* @see [unknown]:0
* @route '/stories'
*/
store.url = (options?: RouteQueryOptions) => {
    return store.definition.url + queryParams(options)
}

/**
* @see \StoryController::store
* @see [unknown]:0
* @route '/stories'
*/
store.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: store.url(options),
    method: 'post',
})

/**
* @see \StoryController::store
* @see [unknown]:0
* @route '/stories'
*/
const storeForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

/**
* @see \StoryController::store
* @see [unknown]:0
* @route '/stories'
*/
storeForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: store.url(options),
    method: 'post',
})

store.form = storeForm

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
export const show = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

show.definition = {
    methods: ["get","head"],
    url: '/stories/{story}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
show.url = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { story: args }
    }

    if (Array.isArray(args)) {
        args = {
            story: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        story: args.story,
    }

    return show.definition.url
            .replace('{story}', parsedArgs.story.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
show.get = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: show.url(args, options),
    method: 'get',
})

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
show.head = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: show.url(args, options),
    method: 'head',
})

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
const showForm = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
showForm.get = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, options),
    method: 'get',
})

/**
* @see \StoryController::show
* @see [unknown]:0
* @route '/stories/{story}'
*/
showForm.head = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: show.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

show.form = showForm

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
export const edit = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

edit.definition = {
    methods: ["get","head"],
    url: '/stories/{story}/edit',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
edit.url = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { story: args }
    }

    if (Array.isArray(args)) {
        args = {
            story: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        story: args.story,
    }

    return edit.definition.url
            .replace('{story}', parsedArgs.story.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
edit.get = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: edit.url(args, options),
    method: 'get',
})

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
edit.head = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: edit.url(args, options),
    method: 'head',
})

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
const editForm = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
editForm.get = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, options),
    method: 'get',
})

/**
* @see \StoryController::edit
* @see [unknown]:0
* @route '/stories/{story}/edit'
*/
editForm.head = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
    action: edit.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'HEAD',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'get',
})

edit.form = editForm

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
export const update = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

update.definition = {
    methods: ["put","patch"],
    url: '/stories/{story}',
} satisfies RouteDefinition<["put","patch"]>

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
update.url = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { story: args }
    }

    if (Array.isArray(args)) {
        args = {
            story: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        story: args.story,
    }

    return update.definition.url
            .replace('{story}', parsedArgs.story.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
update.put = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'put'> => ({
    url: update.url(args, options),
    method: 'put',
})

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
update.patch = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'patch'> => ({
    url: update.url(args, options),
    method: 'patch',
})

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
const updateForm = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
updateForm.put = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PUT',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \StoryController::update
* @see [unknown]:0
* @route '/stories/{story}'
*/
updateForm.patch = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: update.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'PATCH',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

update.form = updateForm

/**
* @see \StoryController::destroy
* @see [unknown]:0
* @route '/stories/{story}'
*/
export const destroy = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

destroy.definition = {
    methods: ["delete"],
    url: '/stories/{story}',
} satisfies RouteDefinition<["delete"]>

/**
* @see \StoryController::destroy
* @see [unknown]:0
* @route '/stories/{story}'
*/
destroy.url = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { story: args }
    }

    if (Array.isArray(args)) {
        args = {
            story: args[0],
        }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
        story: args.story,
    }

    return destroy.definition.url
            .replace('{story}', parsedArgs.story.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \StoryController::destroy
* @see [unknown]:0
* @route '/stories/{story}'
*/
destroy.delete = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteDefinition<'delete'> => ({
    url: destroy.url(args, options),
    method: 'delete',
})

/**
* @see \StoryController::destroy
* @see [unknown]:0
* @route '/stories/{story}'
*/
const destroyForm = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

/**
* @see \StoryController::destroy
* @see [unknown]:0
* @route '/stories/{story}'
*/
destroyForm.delete = (args: { story: string | number } | [story: string | number ] | string | number, options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
    action: destroy.url(args, {
        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
            _method: 'DELETE',
            ...(options?.query ?? options?.mergeQuery ?? {}),
        }
    }),
    method: 'post',
})

destroy.form = destroyForm

const stories = {
    index: Object.assign(index, index),
    create: Object.assign(create, create),
    store: Object.assign(store, store),
    show: Object.assign(show, show),
    edit: Object.assign(edit, edit),
    update: Object.assign(update, update),
    destroy: Object.assign(destroy, destroy),
}

export default stories