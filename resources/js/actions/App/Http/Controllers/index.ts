import TagController from './TagController'
import PostController from './PostController'
import Settings from './Settings'

const Controllers = {
    TagController: Object.assign(TagController, TagController),
    PostController: Object.assign(PostController, PostController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers