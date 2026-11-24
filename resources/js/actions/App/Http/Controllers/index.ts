import TagController from './TagController'
import PostController from './PostController'
import Settings from './Settings'
import Api from './Api'

const Controllers = {
    TagController: Object.assign(TagController, TagController),
    PostController: Object.assign(PostController, PostController),
    Settings: Object.assign(Settings, Settings),
    Api: Object.assign(Api, Api),
}

export default Controllers