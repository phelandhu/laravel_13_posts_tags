import TagController from './TagController'
import Settings from './Settings'

const Controllers = {
    TagController: Object.assign(TagController, TagController),
    Settings: Object.assign(Settings, Settings),
}

export default Controllers